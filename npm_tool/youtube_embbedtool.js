const prompt = require("prompt");
const yts = require("yt-search");
const open = require("open");
const youtubeEmbed = require("youtube-embed");

// Get text from keyboard input
prompt.start();

// Give text to yt-search
prompt.get(["keyword"], function (err, result) {

  // Search and print list of video for user to choose
  const runSearch = async () => {
    const listVideo = await yts(result.keyword);

    // How many result do you want to see
    prompt.get(["count"], function (err, result) {
      var videos = listVideo.videos.slice(0, result.count);

      // If input is wrong,show 3 videos
      videos.length == 0
        ? (videos = listVideo.videos.slice(0, 3))
        : (videos = listVideo.videos.slice(0, result.count));
        // Print list for you choose video to play as embbed mode
      videos.forEach(function (v) {
        console.log(`<<<${v.title} (${v.timestamp}) | ${v.author.name} |>>>>`);
        console.log(videos)
      });

    //   // Select video you want to play
    //   prompt.get(["number"],function(err,result){
    //     const embed = youtubeEmbed(videos[result.number].)
    //   });
    });
  };

  // Run Search and slice result, and so on...
  runSearch();
});
