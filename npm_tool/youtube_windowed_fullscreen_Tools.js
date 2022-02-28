const prompt = require("prompt");
const yts = require("yt-search");
const open = require("open");
const youtubeEmbed = require("youtube-embed");
const ytp = require("yt-play-cli");
const { exec } = require("child_process");

// Get text from keyboard input
prompt.start();

// Give text to yt-search
prompt.get(["keyword"], function (err, result) {
  // Search and print list of video for user to choose
  const runSearch = async () => {
    var listVideo;
    //Search hello when keyword is null
    listVideo = await yts(result.keyword);
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
        console.log("Select video you want to play");
        //Get position of video
        const number = result.number;
        console.log(
          `Are you want to play it as audio, press Y to play audio, press N to play as video on chrome`
        );
        prompt.get(["isAudio"], function (err, result) {
          console.log(result.isAudio);
          switch (result.isAudio) {
            case "y":
            case "Y":
              console.log(`Now play as audio`);
              exec(`yt-play ${videos[result.number - 1]}`);
              break;
            case "n":
            case "N": //Set embed link, if use don't type, auto select first video
              var embed = youtubeEmbed(videos[number - 0].url);
              //Open embed link by default web browser
              console.log(`Now openning ${videos[number - 0].title} `);
              open(`https:${embed}`);
              break;
          }
        });
      });
    });
  };

  // Run Search and slice result, and so on...
  runSearch();
});
