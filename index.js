const redditNews = [
   {
      "text" : "Post a link to a GitHub repo that you would like to have reviewed, and brace yourself for the comments! Whether you're a junior wanting your code sharpened or a senior interested in giving some feedback and have some time to spare, this is the place.",
      "author" : "u/AutoModerator",
      "score" : "68",
      "link" : "Named after this comic"
   },
   {
      "text" : "Did you find or create something cool this week in javascript?",
      "author" : "u/AutoModerator",
      "score" : "18",
      "link" : "Show us here!"
   },
   {
      "text" : "JavaScript's for loop is surprisingly fast",
      "author" : "u/TurnaroundGames",
      "score" : "16",
      "link" : "Link to Comments"
   },
   {
      "text" : "great article to know about async programming in node js",
      "author" : "u/h_sa1994",
      "score" : "151",
      "link" : "Link to Comments"
   },
   {
      "text" : "Web hosting designed around web professionals - we started reseller hosting in back in 1997! Migrate automatically to the modern, reliable 20i hosting platforms. It's white-label unlimited hosting that you can make your own. #1 on Trustpilot - test us out for £1.",
      "author" : "u/HostedBy20i",
      "score" : "0",
      "link" : "Start Free Trial"
   },
   {
      "text" : "pixi.js - The HTML5 Creation Engine: Create beautiful digital content with the fastest, most flexible 2D WebGL renderer",
      "author" : "u/magenta_placenta",
      "score" : "60",
      "link" : "Link to Comments"
   },
   {
      "text" : "Post a link to a GitHub repo that you would like to have reviewed, and brace yourself for the comments! Whether you're a junior wanting your code sharpened or a senior interested in giving some feedback and have some time to spare, this is the place.",
      "author" : "u/AutoModerator",
      "score" : "68",
      "link" : "Named after this comic"
   },
   {
      "text" : "Did you find or create something cool this week in javascript?",
      "author" : "u/AutoModerator",
      "score" : "18",
      "link" : "Show us here!"
   },
   {
      "text" : "JavaScript's for loop is surprisingly fast",
      "author" : "u/TurnaroundGames",
      "score" : "16",
      "link" : "Link to Comments"
   },
   {
      "text" : "great article to know about async programming in node js",
      "author" : "u/h_sa1994",
      "score" : "151",
      "link" : "Link to Comments"
   },
   {
      "text" : "Web hosting designed around web professionals - we started reseller hosting in back in 1997! Migrate automatically to the modern, reliable 20i hosting platforms. It's white-label unlimited hosting that you can make your own. #1 on Trustpilot - test us out for £1.",
      "author" : "u/HostedBy20i",
      "score" : "0",
      "link" : "Start Free Trial"
   },
   {
      "text" : "pixi.js - The HTML5 Creation Engine: Create beautiful digital content with the fastest, most flexible 2D WebGL renderer",
      "author" : "u/magenta_placenta",
      "score" : "60",
      "link" : "Link to Comments"
   }
]


// for(var i = 0; i < redditNews.length; i++) {
//    let obj = redditNews[i];
//    console.log(obj.text);
//    document.getElementById('redditNewsItems').innerHTML = `
//    <p class="reddit-news-text"> ${obj.text}</p>
//    <p class="author">Posted by: <span class="reddit-news-author"> ${obj.author}</span></p>
//    <p class="score">Reddit Score: <span class="reddit-news-score">${obj.score}</span></p>
//    <a href="" class="link"><span class="reddit-news-link">${obj.link}</span></a>
//    `
// }

const redditNewsItems = document.getElementById('redditNewsItems');
const redditNewsText = document.getElementById('text-js');
const redditNewsAuthor = document.getElementById('author-js');
const redditNewsScore = document.getElementById('score-js');
const redditNewsLink = document.getElementById('link-js');

// create total array
var redditItemArray=[];

for(let i = 0; i < redditNews.length; i++) {
   // create new object to hold stuff
   var redditItem = new Object();
   // populate object with each item
   redditItem.text = redditNews[i].text + "<br>";
   redditItem.author = redditNews[i].author;
   redditItem.score = redditNews[i].score;
   redditItem.link = redditNews[i].link;
   // push objects to total array
   redditItemArray.push(redditItem);
}


// for(let j = 0; j < redditItemArray.length; j++) {
//    // do stuff
//    document.write("<p>"+ redditItemArray[j].text + "</p>")
//    document.write("<p>"+ redditItemArray[j].author + "</p>")
//    document.write("<p>"+ redditItemArray[j].score + "</p>")
//    document.write("<p>"+ redditItemArray[j].link + "</p>")
//    redditNewsText.innterHTML = "<p>"+ redditItemArray[j].text + "</p>";
// }

var i, text, author, score, link = "";

for (i in redditItemArray) {
   text += redditItemArray[i].text + `<p class="posted-by">` + "Posted By:" + "</p>" + `<p class="author">` + redditItemArray[i].author + "</p>" + `<p class="score">` + "Reddit Score:" + redditItemArray[i].score + "</p>"  + `<a href="" class="link">` +redditItemArray[i].link + "</a>" + "<br>";
   // author += redditItemArray[i].author;
   // link += redditItemArray[i].link;

   // for (j in redditNews[i].author) {
   //   x += redditNews[i].author[j] + "<br>";
   // }
   redditNewsItems.innerHTML = text;
   // redditNewsAuthor.innterHTML = author;
   // redditNewsLink.innerHTML = link;

 }

