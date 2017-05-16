$(document).ready(function(){
  //taking random quote to be current one.
  var currentQuote = quotes[Math.floor(Math.random()*10)];
  
  //on start showing currentQuote;
  $(".quote-text").html(currentQuote);
  
 //Changing currentQuote onClick.
  $("#message").on("click",function() {
    $(".quote-text").html(currentQuote = quotes[Math.floor(Math.random()*10)]);
  });

 //Tweeting onClick
  $("#tweet").on("click",function() {
  $("#tweetIt").attr("href",'https://twitter.com/intent/tweet?text='+currentQuote);
  });
});

//Hardcoded quotes
var quotes = [
  "“Don't cry because it's over, smile because it happened.”",
  "“Be yourself, everyone else is already taken.”",
  "“Two things are infinite, the universe and human stupidity, and I'm not sure about the universe.”",
  "“So many books, so little time.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“Be the change that you wish to see in the world.” ",
  "“In three words I can sum up everything I've learned about life, it goes on.” ",
  "“No one can make you feel inferior without your consent.”",
  "“A friend is someone who knows all about you and still loves you.” ",
  "“Always forgive your enemies; nothing annoys them so much.”"
]