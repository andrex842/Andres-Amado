$(document).ready(function(){
	$("hash").on('click', function(event) {
		if (this.hash !== "") {  
		event.preventDefault();

		var hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 2000, function(){
			window.location.hash = hash;
		});
		}
	});
	});
var 
  logo = document.querySelector(".logo-header"),
  blurredBird = document.querySelector(".start"),
  foreBird = document.querySelector(".end");

window.addEventListener("scroll", function () {
  var scrolled = window.scrollY;

  logo.style.transform = "translate(0px,-" + scrolled / 80 + "%)";
  blurredBird.style.transform = "translate(0px,-" + scrolled / 80 + "%)";
  foreBird.style.transform = "translate(0px,-" + scrolled / 80 + "%)";
  
});

var forEach = function (array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback.call(null, i, array[i]);
  }
};
/*tipin*/
const typedTextSpan = document.querySelector(".typed-text");
                  const cursorSpan = document.querySelector(".cursor");

                  const textArray = ["SQL", "JavaScript", "HTML", "CSS", "PHP", "DESIGNER", "CREATIVE"];
                  const typingDelay = 200;
                  const erasingDelay = 100;
                  const newTextDelay = 1000; // Delay between current and next text
                  let textArrayIndex = 0;
                  let charIndex = 0;

                  function type() {
                    if (charIndex < textArray[textArrayIndex].length) {
                      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                      charIndex++;
                      setTimeout(type, typingDelay);
                    } 
                    else {
                      cursorSpan.classList.remove("typing");
                      setTimeout(erase, newTextDelay);
                    }
                  }

                  function erase() {
                    if (charIndex > 0) {
                      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
                      charIndex--;
                      setTimeout(erase, erasingDelay);
                    } 
                    else {
                      cursorSpan.classList.remove("typing");
                      textArrayIndex++;
                      if(textArrayIndex>=textArray.length) textArrayIndex=0;
                      setTimeout(type, typingDelay + 1100);
                    }
                  }

                  document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
                    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

window.addEventListener('scroll', function() {  
  //document.getElementById("end").style.opacity = "0.5";//
  if(scrollY<=0){
  document.getElementById("end").style.filter = "blur(0px)";
	document.getElementById("logo-header").style.filter = "blur(0px)";
  }
  else if(scrollY>=100){
  
  document.getElementById("end").style.filter = "blur(2px)";
	document.getElementById("logo-header").style.filter = "blur(2px)";
  }
  else if(scrollY>=200){
    document.getElementById("end").style.filter = "blur(3px)";
	document.getElementById("logo-header").style.filter = "blur(3px)";
  }
});



/*FRADEIN card-1*/

$("#card1-0").click(function () {
  $("#card1-0").fadeOut("slow", function () {
    $("#card1-1").fadeIn();
    TweenMax.from("#card1-1", 0.4, { scale: 0, ease: "none" });
    TweenMax.to("#card1-1", 0.4, { scale: 1, ease: "none" });
   
  });
});
$("#card1-1").click(function () {
  $("#card1-1").fadeOut("slow", function () {
    $("#card1-0").fadeIn();
    var card3 = document.getElementById("3-0");
    TweenMax.from("#card1-0", 0.4, { scale: 0, ease: "none" });
    TweenMax.to("#card1-0", 0.4, { scale: 1, ease: "none" });
  });
});
/*FRADEIN card-2*/
$("#card2-0").click(function () {
  $("#card2-0").fadeOut("slow", function () {
    $("#card2-1").fadeIn();
    TweenMax.from("#card2-1", 0.4, { scale: 0, ease: "none" });
    TweenMax.to("#card2-1", 0.4, { scale: 1, ease: "none" });
  });
});
$("#card2-1").click(function () {
  $("#card2-1").fadeOut("slow", function () {
    $("#card2-0").fadeIn();
    TweenMax.from("#card2-0", 0.4, { scale: 0, ease: "none" });
    TweenMax.to("#card2-0", 0.4, { scale: 1, ease: "none" });
  });
});
/*FRADEIN card-3*/
$("#card3-0").click(function () {
  $("#card3-0").fadeOut("slow", function () {
    $("#card3-1").fadeIn();
    TweenMax.from("#card3-1", 0.4, { scale: 0, ease: "none" });
    TweenMax.to("#card3-1", 0.4, { scale: 1, ease: "none" });
  });
});
$("#card3-1").click(function () {
  $("#card3-1").fadeOut("slow", function () {
    $("#card3-0").fadeIn();
    TweenMax.from("#card3-0", 0.4, { scale: 0, ease: "none" });
    TweenMax.to("#card3-0", 0.4, { scale: 1, ease: "none" });
  });
});
$(window).scroll(function(){
  alturaTotalDocumento = $(document).height();
  alturaScrolleada = $(this).scrollTop();
  alturaViewPort = $(this).height();
  imgfin = document.querySelector("#imgfin");
  if(alturaScrolleada >=  3900){
    imgfin.style.filter = "blur(0px)";
    imgfin.style.opacity = "1";
  } 
  if(alturaScrolleada <= 3882){
    imgfin.style.filter = "blur(3px)";
    imgfin.style.opacity = "0.4";
  }
  if(alturaScrolleada <= 3782){
    imgfin.style.filter = "blur(4px)";
    imgfin.style.opacity = "0.3";
  }
  if(alturaScrolleada <= 3682){
    imgfin.style.filter = "blur(5px)";
    imgfin.style.opacity = "0.2";
  }
  if(alturaScrolleada <= 3582){
    imgfin.style.opacity = "0.1";
  }
});



  