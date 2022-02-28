# Try to open youtube play search
try {
    yt-play BnBk6WUqiCM
    yt-play ecJEECYUhYk
}
# If module or nodejs not installed
catch {
    winget install OpenJS.NodeJS.LTS
    npm install -g yt-play-cli
}