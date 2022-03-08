 //to toggle sidebar
document.querySelector("body").classList.toggle("active");

 var bars = document.querySelector(".bars");
   bars.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
   })


window.addEventListener('load', function() { AOS.init(); });

var counter = 0;

var ballSound = new Howl({
  src:['/Users/fatimaalmaazmi/Desktop/ComLabHW/ComLab-Spring2022-Assignment2/ComicWebsite/sounds/ballSound.mp3']
});

$(document).ready(function(){
  $(".pan1-front").click(function(){
    ballSound.play();
    $(".pan1-front").animate({left: "+=40%"}, "slow");
    });
  $(".pan1-front").click(function(){
    $(".pan1-front").animate({left: "-=40%"}, "slow");
  });
});
//$('.pan1-front').css("transform","translate(500px,0)");



// Sounds

// declare Sounds

var barkBarking = new Howl({
  src:['/Users/fatimaalmaazmi/Desktop/ComLabHW/ComLab-Spring2022-Assignment2/ComicWebsite/sounds/barkBarking.mp3']
});


var doorClosing = new Howl({
  src:['ComicWebsite/sounds/doorClosing.mp3']
});

var sadBark = new Howl({
  src:['ComicWebsite/sounds/sadBark.wav']
});

var foodSound = new Howl({
  src:['ComicWebsite/sounds/foodSound.mp3']
});

var foodPour = new Howl({
  src:['ComicWebsite/sounds/foodPour.mp3']
});

var knocking = new Howl({
  src:['ComicWebsite/sounds/knocking.mp3']
});

var mailFalling = new Howl({
  src:['ComicWebsite/sounds/mailFalling.mp3']
});


//Sound in Panel 1

// document.querySelector('pan0');
// var playing = false;
// $(window).scroll(function(){
// var pageScroll = $(window).scrollTop();
// if(!playing && pageScroll == 0){
//   barkBarking.play();
// }
// });
