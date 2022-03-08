 //to toggle sidebar
document.querySelector("body").classList.toggle("active");

 var bars = document.querySelector(".bars");
   bars.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
   })


window.addEventListener('load', function() { AOS.init(); });

var counter = 0;

$(document).ready(function(){
  $(".pan1-front").click(function(){
    $(".pan1-front").animate({left: "+=40%"}, "slow");
  });
  $(".pan1-front").click(function(){
    $(".pan1-front").animate({left: "-=40%"}, "slow");
  });
});
//$('.pan1-front').css("transform","translate(500px,0)");
