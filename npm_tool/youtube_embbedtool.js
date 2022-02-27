const prompt = require("prompt");
// Add module yt-search
const yts = require("yt-search");

// Get text from keyboard input
prompt.start();

// Give text to yt-search
prompt.get(["keyword"], function (err, result) {
  // Search and print list of video for user to choose
  const runSearch = async () => {
    const listVideo = await yts(result.keyword);

    prompt.get(["count"], function (err, result) {
      var videos = listVideo.videos.slice(0, result.count);
      videos.length == 0
        ? (videos = listVideo.videos.slice(0, 3))
        : (videos = listVideo.videos.slice(0, result.count));
      videos.forEach(function (v) {
          console.log("Your count is invalid, I will show you 3 videos ")
        console.log(`<<<${v.title} (${v.timestamp}) | ${v.author.name}>>>>`);
      });
    });
  };
  // Run Search
  runSearch();
});
