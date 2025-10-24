#!/usr/bin/env bash

set -euo pipefail

if [ -t 1 ]; then
    BOLD=$'\033[1m'
    DIM=$'\033[2m'
    GREEN=$'\033[32m'
    YELLOW=$'\033[33m'
    BLUE=$'\033[34m'
    RED=$'\033[31m'
    RESET=$'\033[0m'
else
    BOLD=''
    DIM=''
    GREEN=''
    YELLOW=''
    BLUE=''
    RED=''
    RESET=''
fi

PRESERVED_ENV_FILE=""
HAD_PRESERVED_ENV=false

section() {
    printf '\n%s%s%s\n' "$BOLD" "$1" "$RESET"
}

info() {
    printf '  %s%s%s\n' "$DIM" "$1" "$RESET"
}

note() {
    printf '  %s%s%s\n' "$BLUE" "$1" "$RESET"
}

ok() {
    printf '  %s%s%s\n' "$GREEN" "$1" "$RESET"
}

warn() {
    printf '  %s%s%s\n' "$YELLOW" "$1" "$RESET"
}

fail() {
    printf '%s%s%s\n' "$RED" "$1" "$RESET" >&2
}

die() {
    fail "$1"
    exit 1
}

cleanup() {
    if [ -n "${TEMP_DIR:-}" ] && [ -d "$TEMP_DIR" ]; then
        rm -rf "$TEMP_DIR"
    fi
    if [ -n "$PRESERVED_ENV_FILE" ] && [ -f "$PRESERVED_ENV_FILE" ]; then
        rm -f "$PRESERVED_ENV_FILE"
    fi
}

trap cleanup EXIT

prompt_pxplus_path() {
    local prompt="$1"
    local entered=""
    while true; do
        read -rp "$prompt" entered
        if [ -z "$entered" ]; then
            return 1
        fi
        if [ ! -f "$entered" ]; then
            warn "File not found. Try again."
            continue
        fi
        if [ ! -x "$entered" ]; then
            warn "File is not executable. Try again."
            continue
        fi
        local escaped=${entered//\\/\\\\}
        escaped=${escaped//\"/\\\"}
        printf 'PXPLUS_EXECUTABLE_PATH="%s"\n' "$escaped" >"$ENV_PATH"
        PXPLUS_PATH="$entered"
        ok "PxPlus path saved to $ENV_LABEL"
        return 0
    done
}

cat << 'EOF'

  █████╗ ███████╗████████╗███████╗ ██████╗ ██████╗ ███╗   ███╗
 ██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔════╝██╔═══██╗████╗ ████║
 ███████║███████╗   ██║   █████╗  ██║     ██║   ██║██╔████╔██║
 ██╔══██║╚════██║   ██║   ██╔══╝  ██║     ██║   ██║██║╚██╔╝██║
 ██║  ██║███████║   ██║   ███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║
 ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝

EOF
printf '%s%s%s\n' "$BLUE" "                      https://astecom.nl" "$RESET"
printf '\n%s%s%s\n' "$BOLD" "PxPlus Claude Template Installer" "$RESET"
echo

PROJECT_DIR=$(pwd)
info "Directory: $PROJECT_DIR"

HOME_PXPLUS_DIR="$HOME/.pxplus-claude"
HOME_PXPLUS_LABEL="${HOME_PXPLUS_DIR/#$HOME/~}"

section "Prerequisite Check"

PREREQ_FAILED=false

if ! command -v node >/dev/null 2>&1; then
    fail "Node.js (18+) not found."
    PREREQ_FAILED=true
else
    NODE_MAJOR=$(node -p 'parseInt(process.versions.node.split(".")[0], 10)')
    if [ "$NODE_MAJOR" -lt 18 ]; then
        fail "Node.js $(node -v) is too old (18+ required)."
        PREREQ_FAILED=true
    else
        ok "Node.js $(node -v)"
    fi
fi

if ! command -v npm >/dev/null 2>&1; then
    fail "npm not found (bundled with Node.js)."
    PREREQ_FAILED=true
else
    ok "npm $(npm -v)"
fi

if ! command -v claude >/dev/null 2>&1; then
    fail "Claude CLI not found."
    PREREQ_FAILED=true
else
    ok "Claude CLI detected"
fi

if ! command -v curl >/dev/null 2>&1; then
    fail "curl not found."
    PREREQ_FAILED=true
else
    ok "curl $(curl --version | head -n1)"
fi

if [ "$PREREQ_FAILED" = true ]; then
    die "Install the missing prerequisites and re-run this installer."
fi

section "Ready"
note "This will download the latest release and configure PxPlus support."
note "Target: $(pwd)"

read -rp "Proceed? [y/N]: " CONFIRM
if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
    info "Installation cancelled."
    exit 0
fi

section "Download"

GITHUB_REPO="Astecom/claude-pxplus-template"
RELEASE_URL="https://github.com/${GITHUB_REPO}/releases/latest/download/pxplus-template.tar.gz"
TEMP_DIR="$(mktemp -d 2>/dev/null || mktemp -d -t pxplus)"
ARCHIVE_PATH="$TEMP_DIR/pxplus-template.tar.gz"

note "Fetching latest release..."
if ! curl --fail --location --silent --show-error "$RELEASE_URL" -o "$ARCHIVE_PATH"; then
    die "Download failed. Check the repository releases."
fi
ok "Download complete"

EXTRACT_DIR="$TEMP_DIR/extracted"
mkdir -p "$EXTRACT_DIR"

note "Unpacking..."
if ! tar -xzf "$ARCHIVE_PATH" -C "$EXTRACT_DIR"; then
    die "Could not extract the release archive."
fi
ok "Files unpacked"

CLAUDE_SOURCE=$(find "$EXTRACT_DIR" -maxdepth 3 -type d -name 'claude' | head -n1)
MCP_SOURCE=$(find "$EXTRACT_DIR" -maxdepth 3 -type d -name 'mcp-server' | head -n1)

[ -n "$CLAUDE_SOURCE" ] || die "claude directory missing from release."
[ -n "$MCP_SOURCE" ] || die "mcp-server directory missing from release."

CLAUDE_CONFIG_SOURCE="$CLAUDE_SOURCE/.pxplus-claude"
CLAUDE_TEMPLATE_FILE="$CLAUDE_SOURCE/CLAUDE.md"

[ -d "$CLAUDE_CONFIG_SOURCE" ] || die ".pxplus-claude directory missing from release."
[ -f "$CLAUDE_TEMPLATE_FILE" ] || die "CLAUDE.md missing from release."

section "Template Files"

PROJECT_PXPLUS_DIR="$PROJECT_DIR/.pxplus-claude"

note "Deploying template to $HOME_PXPLUS_LABEL..."
if [ -f "$HOME_PXPLUS_DIR/mcp-server/.env" ]; then
    HAD_PRESERVED_ENV=true
    PRESERVED_ENV_FILE=$(mktemp)
    cp "$HOME_PXPLUS_DIR/mcp-server/.env" "$PRESERVED_ENV_FILE"
fi
rm -rf "$HOME_PXPLUS_DIR"
cp -R "$CLAUDE_CONFIG_SOURCE" "$HOME"
ok "$HOME_PXPLUS_LABEL ready"

INSTRUCTIONS_FILE="$(find "$CLAUDE_CONFIG_SOURCE" -maxdepth 1 -name 'instructions-and-rules.md' -print -quit)"
if [ -f "$INSTRUCTIONS_FILE" ]; then
    mkdir -p "$PROJECT_PXPLUS_DIR"
    cp "$INSTRUCTIONS_FILE" "$PROJECT_PXPLUS_DIR/instructions-and-rules.md"
    rm -f "$HOME_PXPLUS_DIR/instructions-and-rules.md"
    ok "instructions-and-rules.md refreshed in $PROJECT_PXPLUS_DIR"
fi

CLAUDE_MARKER_START="<!-- pxplus-claude:start -->"
CLAUDE_MARKER_END="<!-- pxplus-claude:end -->"

remove_marked_block() {
    local file="$1"
    local tmp
    tmp=$(mktemp)
    awk -v start="$CLAUDE_MARKER_START" -v end="$CLAUDE_MARKER_END" '
        index($0, start) { skip=1; next }
        index($0, end) && skip { skip=0; next }
        skip { next }
        { print }
    ' "$file" >"$tmp"
    mv "$tmp" "$file"
}

update_claude_md() {
    local target="CLAUDE.md"
    if [ -s "$target" ]; then
        printf '\n' >>"$target"
    fi
    {
        printf '%s\n' "$CLAUDE_MARKER_START"
        cat "$CLAUDE_TEMPLATE_FILE"
        printf '%s\n' "$CLAUDE_MARKER_END"
    } >>"$target"
}

if [ -f "CLAUDE.md" ]; then
    read -rp "Update CLAUDE.md with PxPlus guidance? [y/N]: " UPDATE_CLAUDE
    if [[ "$UPDATE_CLAUDE" =~ ^[Yy]$ ]]; then
        if grep -q "$CLAUDE_MARKER_START" "CLAUDE.md"; then
            note "Refreshing previous PxPlus block in CLAUDE.md..."
            remove_marked_block "CLAUDE.md"
        else
            note "Appending PxPlus guidance to CLAUDE.md..."
        fi
        update_claude_md
        ok "CLAUDE.md updated"
    else
        info "Skipped CLAUDE.md update."
    fi
else
    note "Installing CLAUDE.md..."
    {
        printf '%s\n' "$CLAUDE_MARKER_START"
        cat "$CLAUDE_TEMPLATE_FILE"
        printf '%s\n' "$CLAUDE_MARKER_END"
    } >"CLAUDE.md"
    ok "CLAUDE.md installed"
fi

section "MCP Server"

MCP_INSTALL_DIR="$HOME_PXPLUS_DIR/mcp-server"
mcp_tmp="$(mktemp -d)"
cp -R "$MCP_SOURCE/." "$mcp_tmp/"
rm -rf "$MCP_INSTALL_DIR"
mkdir -p "$MCP_INSTALL_DIR"
cp -R "$mcp_tmp/." "$MCP_INSTALL_DIR/"
rm -rf "$mcp_tmp"
ok "MCP server files in place"

ENV_EXAMPLE="$MCP_INSTALL_DIR/.env.example"
[ -f "$ENV_EXAMPLE" ] || die ".env.example missing in MCP server directory."
ENV_PATH="$MCP_INSTALL_DIR/.env"
ENV_LABEL="${ENV_PATH/#$HOME/~}"

if [ "$HAD_PRESERVED_ENV" = true ] && [ -f "$PRESERVED_ENV_FILE" ]; then
    cp "$PRESERVED_ENV_FILE" "$ENV_PATH"
    rm -f "$PRESERVED_ENV_FILE"
    PRESERVED_ENV_FILE=""
    ok "Existing MCP configuration preserved"
    PXPLUS_PATH=$(grep '^PXPLUS_EXECUTABLE_PATH=' "$ENV_PATH" 2>/dev/null | head -n1 | cut -d'=' -f2-)
    PXPLUS_PATH=${PXPLUS_PATH#\"}
    PXPLUS_PATH=${PXPLUS_PATH%\"}
else
    PXPLUS_PATH=""
fi

note "Installing npm dependencies..."
NPM_LOG="$TEMP_DIR/npm-install.log"
if (cd "$MCP_INSTALL_DIR" && npm install --production --silent >"$NPM_LOG" 2>&1); then
    ok "Dependencies installed"
else
    cat "$NPM_LOG" >&2 || true
    die "npm install failed (see log above)."
fi

section "PxPlus Path"
info "Optional: enter PxPlus executable for syntax checks."

if [ -f "$ENV_PATH" ]; then
    EXISTING_PXPLUS_PATH=$(grep '^PXPLUS_EXECUTABLE_PATH=' "$ENV_PATH" 2>/dev/null | head -n1 | cut -d'=' -f2-)
    EXISTING_PXPLUS_PATH=${EXISTING_PXPLUS_PATH#\"}
    EXISTING_PXPLUS_PATH=${EXISTING_PXPLUS_PATH%\"}
    if [ -n "$EXISTING_PXPLUS_PATH" ]; then
        note "Existing PxPlus path detected in $ENV_LABEL."
        info "Current path: $EXISTING_PXPLUS_PATH"
    else
        note "Existing MCP configuration detected in $ENV_LABEL."
    fi
    read -rp "Update PxPlus executable path? [y/N]: " UPDATE_PATH
    if [[ "$UPDATE_PATH" =~ ^[Yy]$ ]]; then
        if prompt_pxplus_path "New PxPlus executable path (leave blank to keep current): "; then
            :
        else
            info "Keeping existing PxPlus path."
            PXPLUS_PATH="$EXISTING_PXPLUS_PATH"
        fi
    else
        info "Keeping existing PxPlus path."
        PXPLUS_PATH="$EXISTING_PXPLUS_PATH"
    fi
else
    if prompt_pxplus_path "PxPlus executable path (leave blank to skip): "; then
        :
    else
        note "Skipped PxPlus path (configure later in $ENV_LABEL)."
        cp "$ENV_EXAMPLE" "$ENV_PATH"
    fi
fi

section "Claude Registration"

MCP_SERVER_ENTRY="$(cd "$MCP_INSTALL_DIR" && pwd)/dist/index.js"
note "Registering pxplus MCP server..."
claude mcp remove pxplus >/dev/null 2>&1 || true
if claude mcp add --transport stdio pxplus -- node "$MCP_SERVER_ENTRY" >/dev/null; then
    ok "Claude CLI now points to the PxPlus MCP server"
else
    warn "Automatic registration failed."
    info "Register manually with: claude mcp add --transport stdio pxplus -- node \"$MCP_SERVER_ENTRY\""
fi

section "Complete"
ok "PxPlus template refreshed successfully."
if [ -z "$PXPLUS_PATH" ]; then
    note "Set your PxPlus path later in $ENV_LABEL."
fi
