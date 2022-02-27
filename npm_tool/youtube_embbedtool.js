const prompt = require("prompt");
  // Add module yt-search
  const yts = require("yt-search");

// Get text from keyboard input
prompt.start();

// Give text to yt-search
prompt.get(["keyword"], function (err, result) {
  //if err return onErr function
  if (err) {
    return onErr(err);
  }
  console.log("Now searching for " + result.keyword);


  // Search and print list of video for user to choose
  const runSearch = async () =>{
    const listVideo =  await yts(result.keyword);
    console.log(`Prepare to print list ${result.count} videos `);
    const videos = listVideo.videos.slice(0, result.count);
    console.log("Show list videos");

    // videos.forEach( function ( v ) {
    //   const views = String( v.views ).padStart( 10, ' ' )
    //   console.log( `${ views } | ${ v.title } (${ v.timestamp }) | ${ v.author.name }` )
    // } )

    prompt.get(["count"],function(err,result) {
            console.log("Default or wrong count format, I show 3 video")
            const videos = r.videos.slice(0, 3);
        })
  } 
  // Run Search
  runSearch();
}
//   prompt.get(['username', 'email'], function (err, result) {
//     if (err) {
//       return onErr(err);
//     }
//     console.log('Command-line input received:');
//     console.log('  Username: ' + result.username);
//     console.log('  Email: ' + result.email);
//   });
// })
  

  // How many video you want to see ?


     
    
//   })

  
//   videos.forEach(function (v) {
//     const views = String(v.views).padStart(10, " ");
//     console.log(`${views} | ${v.title} (${v.timestamp}) | ${v.author.name}`);
//   });
// });

// function onErr(err) {
//   console.log(err);
//   return 1;
// }
// const youtubeEmbed = require("youtube-embed")
// const open = require("open")

// const embed = youtubeEmbed('https://www.youtube.com/watch?v=98_ZSZVTbgo')

// console.log(`https:${embed}`);
// open(`https:${embed}`);
