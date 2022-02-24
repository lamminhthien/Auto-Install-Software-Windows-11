# This script downloads and installs Google Chrome.

function Install-GoogleChrome()
{
    Write-Host "Downloading Google Chrome..."
    $Path = $env:TEMP
    $Installer = "chrome_installer.exe"
    $URL = "http://dl.google.com/chrome/install/375.126/chrome_installer.exe"
    Invoke-WebRequest $URL -OutFile $Path\$Installer

    Write-Host "Installing Google Chrome..."
    Start-Process -FilePath $Path\$Installer -Args "/silent /install" -Verb RunAs -Wait
    Remove-Item $Path\$Installer
}

Install-GoogleChrome