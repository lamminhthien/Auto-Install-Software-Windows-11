const youtubeEmbed = require("youtube-embed")
const open = require("open")

const embed = youtubeEmbed('https://www.youtube.com/watch?v=98_ZSZVTbgo')

console.log(`https:${embed}`);
open(`https:${embed}`);