'use strict'

$(document).ready(function() {

  // play video even if whole file is not loaded //
  var backgroundVideo = document.getElementById('ship-desktop1');
    backgroundVideo.addEventListener('canplaythrough',function(){
      this.play();
    });
    var backgroundVideo = document.getElementById('water-desktop2');
      backgroundVideo.addEventListener('canplaythrough',function(){
        this.play();
      });
  // Script for horizontal scroll on mousewheel //
  $('.all-content').mousewheel(function(e, delta) {
    var x = $(window).width();
    this.scrollLeft -= (delta * x);
    e.preventDefault();
  });
  // Animate mobile menu up when clicking on compas icon//
  $('#navigate').click(function() {
    $('.mobile-nav').animate({
      bottom: '0px',
      width: '35%',
      left: '32.5%'
    }, 200);
    $('.mobile-nav').css('background-size', 'cover');
  });

  // Animate mobile menu down when clicking menu item //
  $('#mobile-menu li a').click(function() {
    $('.mobile-nav').animate({
      bottom: '-200px', width: '20%', left: '40%'

    });
    $('.mobile-nav').css('background-size', 'contain');
  });

  // Make mobile menu slide down when clicking anywhere on page //
  $(document).click(function() {
    $('.mobile-nav').animate({
      bottom: '-200px', width: '20%', left: '40%'
    });
    $('.mobile-nav').css('background-size', 'contain');
  });

  // Avoid mobile menu to slide down when clicking on icon //
  $('#navigate').click(function(e) {
    e.stopPropagation();

  });


  // Product pop-ups //

  // Isinfo pop-up + skjul"knap" //
  $('#is').click(function() {
    console.log('is');
    $('#is').css('visibility', 'hidden');
    $('#isinfo').fadeIn(300).show();
  });
// Kaffeinfo pop-up + skjul"knap" //
  $('#kaffe').click(function() {
    console.log('kaffe');
    $('#kaffe').css('visibility', 'hidden');
    $('#kaffeinfo').fadeIn(300).show();
  });
// Saftinfo pop-up + skjul"knap" //
  $('#saft').click(function() {
    console.log('saft');
    $('#saft').css('visibility', 'hidden');
    $('#saftinfo').fadeIn(300).show();

  });
  // Close product pop-up - og gør "knap" synlig igen//
  $('.close-btn').click(function() {
    $('#is, #kaffe, #saft').css('visibility', 'visible');
    console.log('hej');
    $('.vareinfo').hide();
  });


  $('.all-content').scroll(function() {
    var screenwidth = $(window).width();
    var minwidth = 480;
    var vid = $('.fade-element');
     var hT = $('#check1').offset().top,
         hH = $('#check1').outerHeight(),
         wH = $('.all-content').height(),
         wS = $('.all-content').scrollLeft();
     if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH) && (screenwidth > minwidth)){
       $(vid).hide();

     } else {

       $(vid).fadeIn(1000);
     }
});

        // Slideshow //
    var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}


// Video afspiller

  $('#story1').click(function(){
    $('.desktop-vplayer').show().fadeIn();
    $('.videoholder').show().html('<video  preload="auto" autoplay controls><source src="video/handball.mp4" type="video/mp4">Your browser does not support HTML5 video.</video>')
    console.log('video');
  });
  $('#story2').click(function(){
    $('.desktop-vplayer').show().fadeIn();
    $('.videoholder').show().html('<video  preload="auto" autoplay controls><source src="video/plads-compressed.mp4" type="video/mp4">Your browser does not support HTML5 video.</video>')
    console.log('video');
  });
  $('#story3').click(function(){
    $('.desktop-vplayer').show().fadeIn();
    $('.videoholder').show().html('<video  preload="auto" autoplay controls><source src="video/omsokrates-compressed.mp4" type="video/mp4">Your browser does not support HTML5 video.</video>')
    console.log('video');
  });

$('.video-close-btn').click(function(){
  $('.desktop-vplayer').fadeOut(500);
  $('.videoholder').html('').hide();
  console.log('closed');
});
// NOT working in viewport autoplay functionality //

/*


  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scroll();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $('.all-content').scroll(function() {
    var vid1 = document.getElementById('intro-video');
    var head = document.getElementById('head1');
      if ($(head).isInViewport()) {
        $(vid1).get(0).play();
        console.log('visible');
      } else {
        $(vid1).get(0).pause();
          console.log('not visible');
      }

  });
*/
});
