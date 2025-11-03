#Requires -Version 5.1

$ErrorActionPreference = "Stop"

# Prevent window from closing on error when run directly
$Host.UI.RawUI.WindowTitle = "PxPlus Template Installer"

# Color output functions
function Write-Section { param([string]$Text) Write-Host "`n$Text" -ForegroundColor White }
function Write-Info { param([string]$Text) Write-Host "  $Text" -ForegroundColor DarkGray }
function Write-Note { param([string]$Text) Write-Host "  $Text" -ForegroundColor Blue }
function Write-Success { param([string]$Text) Write-Host "  $Text" -ForegroundColor Green }
function Write-Warn { param([string]$Text) Write-Host "  $Text" -ForegroundColor Yellow }
function Write-Fail { param([string]$Text) Write-Host "$Text" -ForegroundColor Red }

$PreservedEnvFile = $null
$HadPreservedEnv = $false
$TempDir = $null

function Cleanup {
    if ($TempDir -and (Test-Path $TempDir)) {
        Remove-Item -Path $TempDir -Recurse -Force -ErrorAction SilentlyContinue
    }
    if ($PreservedEnvFile -and (Test-Path $PreservedEnvFile)) {
        Remove-Item -Path $PreservedEnvFile -Force -ErrorAction SilentlyContinue
    }
}

trap {
    Cleanup
    Write-Host "`nPress any key to exit..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

function Prompt-PxPlusPath {
    param([string]$PromptText)

    while ($true) {
        $entered = Read-Host $PromptText
        if ([string]::IsNullOrWhiteSpace($entered)) {
            return $null
        }

        if (-not (Test-Path $entered -PathType Leaf)) {
            Write-Warn "File not found. Try again."
            continue
        }

        # On Windows, check if it's an executable (.exe)
        if ($entered -notmatch '\.(exe|bat|cmd)$') {
            Write-Warn "File does not appear to be executable. Try again."
            continue
        }

        # Escape quotes and backslashes for .env format
        $escaped = $entered -replace '\\', '\\' -replace '"', '\"'
        Set-Content -Path $script:EnvPath -Value "PXPLUS_EXECUTABLE_PATH=`"$escaped`""
        $script:PxPlusPath = $entered
        Write-Success "PxPlus path saved to $script:EnvLabel"
        return $entered
    }
}

# Display banner
Write-Host @"

  █████╗ ███████╗████████╗███████╗ ██████╗ ██████╗ ███╗   ███╗
 ██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔════╝██╔═══██╗████╗ ████║
 ███████║███████╗   ██║   █████╗  ██║     ██║   ██║██╔████╔██║
 ██╔══██║╚════██║   ██║   ██╔══╝  ██║     ██║   ██║██║╚██╔╝██║
 ██║  ██║███████║   ██║   ███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║
 ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝

"@ -ForegroundColor Cyan

Write-Host "                      https://astecom.nl" -ForegroundColor Blue
Write-Host "`nPxPlus Claude Template Installer`n" -ForegroundColor White

$ProjectDir = Get-Location
Write-Info "Directory: $ProjectDir"

$HomePxPlusDir = Join-Path $env:USERPROFILE ".pxplus-claude"
$HomePxPlusLabel = $HomePxPlusDir -replace [regex]::Escape($env:USERPROFILE), "~"

Write-Section "Prerequisite Check"

$PrereqFailed = $false

# Check Node.js
try {
    $nodeVersion = node --version
    $nodeMajor = [int]($nodeVersion -replace '^v(\d+)\..*', '$1')
    if ($nodeMajor -lt 18) {
        Write-Fail "Node.js $nodeVersion is too old (18+ required)."
        $PrereqFailed = $true
    } else {
        Write-Success "Node.js $nodeVersion"
    }
} catch {
    Write-Fail "Node.js (18+) not found."
    $PrereqFailed = $true
}

# Check npm
try {
    $npmVersion = npm --version
    Write-Success "npm $npmVersion"
} catch {
    Write-Fail "npm not found (bundled with Node.js)."
    $PrereqFailed = $true
}

# Check Claude CLI
try {
    $claudeCheck = claude --version 2>&1
    Write-Success "Claude CLI detected"
} catch {
    Write-Fail "Claude CLI not found."
    $PrereqFailed = $true
}

# Check curl (Windows 10+ has it built-in, but might be aliased to Invoke-WebRequest)
try {
    # Try to get the actual curl.exe path
    $curlPath = Get-Command curl.exe -ErrorAction SilentlyContinue
    if ($curlPath) {
        $curlVersion = & curl.exe --version 2>&1 | Select-Object -First 1
        Write-Success "curl $curlVersion"
    } else {
        # Fallback: check if curl alias exists (we can use Invoke-WebRequest as fallback)
        $curlAlias = Get-Command curl -ErrorAction SilentlyContinue
        if ($curlAlias) {
            Write-Success "curl (PowerShell alias available)"
        } else {
            Write-Fail "curl not found."
            $PrereqFailed = $true
        }
    }
} catch {
    Write-Fail "curl not found."
    $PrereqFailed = $true
}

if ($PrereqFailed) {
    Write-Fail "Install the missing prerequisites and re-run this installer."
    Cleanup
    Write-Host "`nPress any key to exit..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

Write-Section "Ready"
Write-Note "This will download the latest release and configure PxPlus support."
Write-Note "Target: $ProjectDir"

$confirm = Read-Host "Proceed? [y/N]"
if ($confirm -notmatch '^[Yy]$') {
    Write-Info "Installation cancelled."
    Cleanup
    exit 0
}

Write-Section "Download"

$GitHubRepo = "Astecom/claude-pxplus-template"
$ReleaseUrl = "https://github.com/$GitHubRepo/releases/latest/download/pxplus-template.tar.gz"
$TempDir = Join-Path ([System.IO.Path]::GetTempPath()) ([System.Guid]::NewGuid().ToString())
New-Item -ItemType Directory -Path $TempDir | Out-Null
$ArchivePath = Join-Path $TempDir "pxplus-template.tar.gz"

Write-Note "Fetching latest release..."
try {
    # Use curl.exe explicitly to avoid PowerShell alias issues
    $curlExe = Get-Command curl.exe -ErrorAction SilentlyContinue
    if ($curlExe) {
        & curl.exe -L -s -S $ReleaseUrl -o $ArchivePath
        if ($LASTEXITCODE -ne 0) { throw "Download failed" }
    } else {
        # Fallback to Invoke-WebRequest if curl.exe is not available
        Invoke-WebRequest -Uri $ReleaseUrl -OutFile $ArchivePath -UseBasicParsing
    }
} catch {
    Write-Fail "Download failed. Check the repository releases."
    Cleanup
    Write-Host "`nPress any key to exit..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}
Write-Success "Download complete"

$ExtractDir = Join-Path $TempDir "extracted"
New-Item -ItemType Directory -Path $ExtractDir | Out-Null

Write-Note "Unpacking..."
try {
    # Use tar.exe (available in Windows 10+)
    tar -xzf $ArchivePath -C $ExtractDir
    if ($LASTEXITCODE -ne 0) { throw "Extraction failed" }
} catch {
    Write-Fail "Could not extract the release archive."
    Cleanup
    Write-Host "`nPress any key to exit..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}
Write-Success "Files unpacked"

$ClaudeSource = Get-ChildItem -Path $ExtractDir -Directory -Recurse -Depth 3 | Where-Object { $_.Name -eq 'claude' } | Select-Object -First 1 -ExpandProperty FullName
$McpSource = Get-ChildItem -Path $ExtractDir -Directory -Recurse -Depth 3 | Where-Object { $_.Name -eq 'mcp-server' } | Select-Object -First 1 -ExpandProperty FullName

if (-not $ClaudeSource) {
    Write-Fail "claude directory missing from release."
    Cleanup
    Write-Host "`nPress any key to exit..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}
if (-not $McpSource) {
    Write-Fail "mcp-server directory missing from release."
    Cleanup
    Write-Host "`nPress any key to exit..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

$ClaudeConfigSource = Join-Path $ClaudeSource ".pxplus-claude"
$ClaudeTemplateFile = Join-Path $ClaudeSource "CLAUDE.md"

if (-not (Test-Path $ClaudeConfigSource)) {
    Write-Fail ".pxplus-claude directory missing from release."
    Cleanup
    Write-Host "`nPress any key to exit..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}
if (-not (Test-Path $ClaudeTemplateFile)) {
    Write-Fail "CLAUDE.md missing from release."
    Cleanup
    Write-Host "`nPress any key to exit..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

Write-Section "Template Files"

$ProjectPxPlusDir = Join-Path $ProjectDir ".pxplus-claude"

Write-Note "Deploying template to $HomePxPlusLabel..."
$PreservedEnvPath = Join-Path $HomePxPlusDir "mcp-server\.env"
if (Test-Path $PreservedEnvPath) {
    $HadPreservedEnv = $true
    $PreservedEnvFile = Join-Path ([System.IO.Path]::GetTempPath()) ([System.Guid]::NewGuid().ToString())
    Copy-Item -Path $PreservedEnvPath -Destination $PreservedEnvFile
}

if (Test-Path $HomePxPlusDir) {
    Remove-Item -Path $HomePxPlusDir -Recurse -Force
}
Copy-Item -Path $ClaudeConfigSource -Destination $HomePxPlusDir -Recurse
Write-Success "$HomePxPlusLabel ready"

$InstructionsFile = Get-ChildItem -Path $ClaudeConfigSource -File -Depth 0 | Where-Object { $_.Name -eq 'instructions-and-rules.md' } | Select-Object -First 1 -ExpandProperty FullName
if ($InstructionsFile -and (Test-Path $InstructionsFile)) {
    if (-not (Test-Path $ProjectPxPlusDir)) {
        New-Item -ItemType Directory -Path $ProjectPxPlusDir | Out-Null
    }
    Copy-Item -Path $InstructionsFile -Destination (Join-Path $ProjectPxPlusDir "instructions-and-rules.md")
    $HomeInstructionsFile = Join-Path $HomePxPlusDir "instructions-and-rules.md"
    if (Test-Path $HomeInstructionsFile) {
        Remove-Item -Path $HomeInstructionsFile -Force
    }
    Write-Success "instructions-and-rules.md refreshed in $ProjectPxPlusDir"
}

$ClaudeMarkerStart = "<!-- pxplus-claude:start -->"
$ClaudeMarkerEnd = "<!-- pxplus-claude:end -->"

function Remove-MarkedBlock {
    param([string]$FilePath)

    $content = Get-Content -Path $FilePath -Raw
    $pattern = "(?s)$([regex]::Escape($ClaudeMarkerStart)).*?$([regex]::Escape($ClaudeMarkerEnd))\r?\n?"
    $newContent = $content -replace $pattern, ''
    Set-Content -Path $FilePath -Value $newContent -NoNewline
}

function Update-ClaudeMd {
    $target = "CLAUDE.md"
    if ((Test-Path $target) -and ((Get-Item $target).Length -gt 0)) {
        Add-Content -Path $target -Value "`n"
    }
    Add-Content -Path $target -Value $ClaudeMarkerStart
    Get-Content -Path $ClaudeTemplateFile | Add-Content -Path $target
    Add-Content -Path $target -Value $ClaudeMarkerEnd
}

$claudeMdPath = Join-Path $ProjectDir "CLAUDE.md"
if (Test-Path $claudeMdPath) {
    $updateClaude = Read-Host "Update CLAUDE.md with PxPlus guidance? [y/N]"
    if ($updateClaude -match '^[Yy]$') {
        if ((Get-Content $claudeMdPath -Raw) -match [regex]::Escape($ClaudeMarkerStart)) {
            Write-Note "Refreshing previous PxPlus block in CLAUDE.md..."
            Remove-MarkedBlock -FilePath $claudeMdPath
        } else {
            Write-Note "Appending PxPlus guidance to CLAUDE.md..."
        }
        Update-ClaudeMd
        Write-Success "CLAUDE.md updated"
    } else {
        Write-Info "Skipped CLAUDE.md update."
    }
} else {
    Write-Note "Installing CLAUDE.md..."
    Set-Content -Path $claudeMdPath -Value $ClaudeMarkerStart
    Get-Content -Path $ClaudeTemplateFile | Add-Content -Path $claudeMdPath
    Add-Content -Path $claudeMdPath -Value $ClaudeMarkerEnd
    Write-Success "CLAUDE.md installed"
}

Write-Section "MCP Server"

$McpInstallDir = Join-Path $HomePxPlusDir "mcp-server"
$mcpTmp = Join-Path ([System.IO.Path]::GetTempPath()) ([System.Guid]::NewGuid().ToString())
Copy-Item -Path $McpSource -Destination $mcpTmp -Recurse
if (Test-Path $McpInstallDir) {
    Remove-Item -Path $McpInstallDir -Recurse -Force
}
New-Item -ItemType Directory -Path $McpInstallDir | Out-Null
Get-ChildItem -Path $mcpTmp | Copy-Item -Destination $McpInstallDir -Recurse -Force
Remove-Item -Path $mcpTmp -Recurse -Force
Write-Success "MCP server files in place"

$EnvExample = Join-Path $McpInstallDir ".env.example"
if (-not (Test-Path $EnvExample)) {
    Write-Fail ".env.example missing in MCP server directory."
    Cleanup
    Write-Host "`nPress any key to exit..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}
$EnvPath = Join-Path $McpInstallDir ".env"
$EnvLabel = $EnvPath -replace [regex]::Escape($env:USERPROFILE), "~"

$PxPlusPath = ""
if ($HadPreservedEnv -and $PreservedEnvFile -and (Test-Path $PreservedEnvFile)) {
    Copy-Item -Path $PreservedEnvFile -Destination $EnvPath
    Remove-Item -Path $PreservedEnvFile -Force
    $script:PreservedEnvFile = $null
    Write-Success "Existing MCP configuration preserved"

    $envContent = Get-Content -Path $EnvPath -Raw
    if ($envContent -match 'PXPLUS_EXECUTABLE_PATH="?([^"\r\n]+)"?') {
        $PxPlusPath = $matches[1]
    }
}

Write-Note "Installing npm dependencies..."
$npmLogPath = Join-Path $TempDir "npm-install.log"
Push-Location $McpInstallDir
try {
    # Remove --silent to show progress and errors
    npm install --production 2>&1 | Tee-Object -FilePath $npmLogPath | Out-Null
    if ($LASTEXITCODE -ne 0) { throw "npm install failed" }
    Write-Success "Dependencies installed"
} catch {
    Write-Host "`n--- NPM Install Log ---" -ForegroundColor Red
    if (Test-Path $npmLogPath) {
        Get-Content $npmLogPath | Write-Host
    }
    Write-Host "--- End of Log ---`n" -ForegroundColor Red
    Write-Fail "npm install failed. Check the log above for details."
    Pop-Location
    Cleanup
    Write-Host "`nPress any key to exit..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
} finally {
    Pop-Location
}

Write-Section "PxPlus Path"
Write-Info "Optional: enter PxPlus executable for syntax checks."

if (Test-Path $EnvPath) {
    $envContent = Get-Content -Path $EnvPath -Raw
    $existingPxPlusPath = ""
    if ($envContent -match 'PXPLUS_EXECUTABLE_PATH="?([^"\r\n]+)"?') {
        $existingPxPlusPath = $matches[1]
    }

    if ($existingPxPlusPath) {
        Write-Note "Existing PxPlus path detected in $EnvLabel."
        Write-Info "Current path: $existingPxPlusPath"
    } else {
        Write-Note "Existing MCP configuration detected in $EnvLabel."
    }

    $updatePath = Read-Host "Update PxPlus executable path? [y/N]"
    if ($updatePath -match '^[Yy]$') {
        $newPath = Prompt-PxPlusPath "New PxPlus executable path (leave blank to keep current)"
        if (-not $newPath) {
            Write-Info "Keeping existing PxPlus path."
            $PxPlusPath = $existingPxPlusPath
        }
    } else {
        Write-Info "Keeping existing PxPlus path."
        $PxPlusPath = $existingPxPlusPath
    }
} else {
    $newPath = Prompt-PxPlusPath "PxPlus executable path (leave blank to skip)"
    if (-not $newPath) {
        Write-Note "Skipped PxPlus path (configure later in $EnvLabel)."
        Copy-Item -Path $EnvExample -Destination $EnvPath
    }
}

Write-Section "Claude Registration"

$McpServerEntry = Join-Path $McpInstallDir "dist\index.js"
Write-Note "Registering pxplus MCP server..."
claude mcp remove pxplus *>$null
try {
    $registerOutput = claude mcp add --transport stdio pxplus -- node $McpServerEntry 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Success "Claude CLI now points to the PxPlus MCP server"
    } else {
        throw "Registration failed"
    }
} catch {
    Write-Warn "Automatic registration failed."
    Write-Info "Register manually with: claude mcp add --transport stdio pxplus -- node `"$McpServerEntry`""
}

Write-Section "Complete"
Write-Success "PxPlus template refreshed successfully."
if (-not $PxPlusPath) {
    Write-Note "Set your PxPlus path later in $EnvLabel."
}

Cleanup
