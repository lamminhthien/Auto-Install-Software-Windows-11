# Try to open youtube play search
try {
    yt-play 4j9LpYQQmUE
    yt-play ecJEECYUhYk
}
# If module or nodejs not installed
catch {
    winget install OpenJS.NodeJS.LTS
    npm install -g yt-play-cli
}