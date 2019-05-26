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

const jsHistory = [
   {
      "name" : "Relevant Javascript History on Pre-Work Project: Landing Page - Initab | Trello",
      "time" : "12:53 AM"
   },
   {
      "name" : "Relevant Javascript History on Pre-Work Project: Landing Page - Initab | Trello",
      "time" : "12:53 AM"
   },
   {
      "name" : "AlisonYoon/initab-clone: Chingu pre-work individual project. Chrome extension Initab clone",
      "time" : "12:47 AM"
   },
   {
      "name" : "AlisonYoon/initab-clone: Chingu pre-work individual project. Chrome extension Initab clone",
      "time" : "12:46 AM"
   },
   {
      "name" : "Home / Twitter",
      "time" : "12:43 AM"
   },
   {
      "name" : "Home / Twitter",
      "time" : "12:43 AM"
   },
   {
      "name" : "Document",
      "time" : "12:41 AM"
   },
   {
      "name" : "Hide scroll bar, but while still being able to scroll using CSS - GeeksforGeeks",
      "time" : "12:37 AM"
   },
   {
      "name" : "hide scroll css - Google Search",
      "time" : "12:37 AM"
   },
   {
      "name" : "Document",
      "time" : "a day ago"
   },
   {
      "name" : "AlisonYoon/initab-clone: Chingu pre-work individual project. Chrome extension Initab clone",
      "time" : "a day ago"
   },
   {
      "name" : "Tryit Editor v3.6",
      "time" : "a day ago"
   },
   {
      "name" : "JSON Arrays",
      "time" : "a day ago"
   }
]

const redditNewsItems = document.getElementById('redditNewsItems');
var i, text = "";

for (i in redditNews) {
   text += `<div class="news-item-block">` + redditNews[i].text + `<p class="posted-by">` + "Posted By:" + "</p>" + `<p class="author">` + redditNews[i].author + "</p>" + `<p class="score">` + "Reddit Score:" + redditNews[i].score + "</p>" + `<a href="" class="link">` + redditNews[i].link + "</a>" + "<br>" + "</div>";
   redditNewsItems.innerHTML = text;
 }
//reddit news feed end


const jsHistoryItems = document.getElementById('jsHistoryItems');
var j, news = "";

for (j in jsHistory) {
   news += `<div class="history-text">` + jsHistory[j].name + "</div>" + `<div class="history-time">` + jsHistory[j].time + "</div>";
   jsHistoryItems.innerHTML = news;
}
//JS history feed end

const jsDate = document.getElementById('jsDate');

// function clock(){
//    const date = new Date();
//    const hours = date.getHours();
//    const minutes = date.getMinutes();
//    jsDate.innerText = hours + ":" + minutes + ;
// }
function formatAMPM() {
   const date = new Date();
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var d = date.getDate();
   var year = date.getFullYear();
   var month = new Array();
   month[0] = "January";
   month[1] = "February";
   month[2] = "March";
   month[3] = "April";
   month[4] = "May";
   month[5] = "June";
   month[6] = "July";
   month[7] = "August";
   month[8] = "September";
   month[9] = "October";
   month[10] = "November";
   month[11] = "December";
   var m = month[date.getMonth()];
   var ampm = hours >= 12 ? 'PM' : 'AM';
   hours = hours % 12;
   hours = hours ? hours : 12; // the hour '0' should be '12'
   minutes = minutes < 10 ? '0'+minutes : minutes;
   var strTime = `<div class="dateandtime"><h2>` + hours + ':' + minutes + `<span class="ampm">` + ampm + `</span> </h2><br>` + `<div class="dateyear">` + m + d + "," + year + `</div></div>` ;

   jsDate.innerHTML = strTime;
   setInterval(formatAMPM,1000);
 }
formatAMPM();
//date and time section end

const forgetMe = document.getElementById('forgetMe');
const dontShow = document.getElementById('dontShow');

function dontShowAgain(){

   if(localStorage.getItem("dontShow")){
      forgetMe.style.display = 'none';
   }
   forgetMe.style.display = 'none';
   localStorage.setItem(forgetMe.style.display, 'none');
   console.log("hi");
}
dontShow.addEventListener('click', dontShowAgain, true);

//do not show message section end

function openTab(evt, name){
   var i, tabcontent, tablinks, selectedtab;
   tabcontent = document.getElementsByClassName('tabcontent');
   for(i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName('tablinks');
   selectedtab = document.getElementsByClassName('selectedtab');
   for(i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
   }
   document.getElementById(name).style.display = "block";
   evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
