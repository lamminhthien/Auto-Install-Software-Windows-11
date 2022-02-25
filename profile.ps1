clear
# Carefully check and re-install module oh-my-posh
try {
    Import-Module oh-my-posh
    echo "oh-my-posh already"
} 
catch {
    Install-Module oh-my-posh -Scope CurrentUser
    Import-Module oh-my-posh
}
Set-PoshPrompt -Theme M365Princess
set-location d:\
$Host.UI.RawUI.WindowTitle="LamMinhThien"
cd .\Code\Powershell_Helpful_script\other_tool\ 
Import-Module .\google_search.ps1
Import-Module .\youtube_search.ps1
echo "Imported Google Search and Youtube Seach, use with gg 'keywords' and yt 'keywords'"
