# This script downloads and installs Visual Studio Code.

function Install-VisualStudioCode {
    Write-Host "Downloading Visual Studio Code..."
    $Path = $env:TEMP
    $Installer = "VSCodeUserSetup-x64.exe"
    $URL = "https://aka.ms/win32-x64-user-stable"
    Invoke-WebRequest $URL -OutFile $Path\$Installer

    Write-Host "Installing Visual Studio Code..."
    Start-Process -FilePath $Path\$Installer -Args "/silent /mergetasks=!runcode" -Verb RunAs -Wait
    Remove-Item $Path\$Installer
}

Install-VisualStudioCode