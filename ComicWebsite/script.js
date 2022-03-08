 //to toggle sidebar
document.querySelector("body").classList.toggle("active");

 var bars = document.querySelector(".bars");
   bars.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
   })

//aos scroll animations
window.addEventListener('load', function() { AOS.init(); });


var ballSound = new Howl({
  src:['sounds/ballSound.mp3']
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



// Sounds

// declare Sounds

var barkBarking = new Howl({
  src:['sounds/barkBarking.mp3']
});


var doorClosing = new Howl({
  src:['sounds/doorClosing.mp3']
});

var sadBark = new Howl({
  src:['sounds/sadBark.mp3']
});

var foodSound = new Howl({
  src:['sounds/foodSound.mp3']
});

var foodPour = new Howl({
  src:['sounds/foodPour.mp3']
});

var knocking = new Howl({
  src:['sounds/knocking.mp3']
});

var mailFalling = new Howl({
  src:['sounds/mailFalling.mp3']
});



//Scroll to top button
var scrollUp = document.querySelector('.scrollup');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
}
scrollUp.addEventListener('click', function(){
  document.documentElement.scrollTop = 0;
});
