# Clear powershell text stuff2
clear
# Carefully check and re-install module oh-my-posh
try {
    Import-Module oh-my-posh
    echo "oh-my-posh already installed"
} 
catch {
    Install-Module oh-my-posh -Scope CurrentUser
    echo "oh-my-posh install first-time"
    Import-Module oh-my-posh
}

# Carefully check and re-install module Terminal-Icons
try {
    Import-Module -Name Terminal-Icons
    echo "Terminal-Icons already installed"
}
catch {
    Install-Module -Name Terminal-Icons -Repository PSGallery
    echo "Terminal-Icons install first-time"
    Import-Module -Name Terminal-Icons
}


Set-PoshPrompt -Theme M365Princess
set-location d:\
$Host.UI.RawUI.WindowTitle="LamMinhThien"
cd .\Code\Powershell_Helpful_script\other_tool\ 
Import-Module .\google_search.ps1
Import-Module .\youtube_search.ps1
echo "Imported Google Search and Youtube Seach, use with gg 'keywords' and yt 'keywords'"
