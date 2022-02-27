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
    var listVideo;
    //Search hello when keyword is null
      (listVideo = await yts(result.keyword));
    // How many result do you want to see
    prompt.get(["count"], function (err, result) {
      var videos = listVideo.videos.slice(0, result.count);

      // If input is wrong, show 3 videos
      videos.length == 0
        ? (videos = listVideo.videos.slice(0, 3))
        : (videos = listVideo.videos.slice(0, result.count));
      // Print list for you choose video to play as embbed mode
      videos.forEach((v, index) => {
        console.log(
          `((${index + 1}))<<< ${v.title} (${v.timestamp}) | ${
            v.author.name
          } |>>>>`
        );

        // console.log(videos)
      });

      // Select video you want to play
      prompt.get(["number"], function (err, result) {
        //Set embed link, if use don't type, auto select first video
        var embed;
        result.number == null
          ? (embed = youtubeEmbed(videos[0].url))
          : youtubeEmbed(videos[result.number - 1].url);
        //Open embed link by default web browser
        console.log(`Now openning ${videos[result.number - 1].title} `);
        open(`https:${embed}`);
      });
    });
  };

  // Run Search and slice result, and so on...
  runSearch();
});