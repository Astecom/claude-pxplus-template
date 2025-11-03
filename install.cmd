@echo off
setlocal enabledelayedexpansion

REM Check if PowerShell is available
where powershell >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: PowerShell is not available on this system.
    echo Please install PowerShell or use Windows 10/11 which includes it by default.
    exit /b 1
)

REM Get the directory where this script is located
set "SCRIPT_DIR=%~dp0"

REM Run the PowerShell script with execution policy bypass
powershell -ExecutionPolicy Bypass -NoProfile -File "%SCRIPT_DIR%install.ps1"

exit /b %errorlevel%
