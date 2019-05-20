//nav
$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});


$('.arrow-next').click(function() {
  var currentSlide = $('.active-slide'),
    nextSlide = currentSlide.next(),
    currentDot = $('.active-dot'),
    nextDot = currentDot.next();

  if (nextSlide.length === 0) {
    nextSlide = $('.slide').second();
    nextDot = $('.dot').first();
  }

  currentSlide.fadeOut(600).removeClass('active-slide');
  nextSlide.fadeIn(600).addClass('active-slide');

  currentDot.removeClass('active-dot');
  nextDot.addClass('active-dot');
});

$('.arrow-prev').click(function() {
  var currentSlide = $('.active-slide'),
    prevSlide = currentSlide.prev(),
    currentDot = $('.active-dot'),
    prevDot = currentDot.prev();

  if (prevSlide.length === 0) {
    prevSlide = $('.slide').last();
    prevDot = $('.dot').last();
  }

  currentSlide.fadeOut(600).removeClass('active-slide');
  prevSlide.fadeIn(600).addClass('active-slide');

  currentDot.removeClass('active-dot');
  prevDot.addClass('active-dot');
});

$('.slider div:first').addClass('active-slide');

$('.toggle-legacy-view').on('click', function (event) {
  $('html')
    .toggleClass('csstransforms generatedcontent no-csstransforms no-generatedcontent');
});




/*global $, document, setTimeout, i*/
$(document).ready(function () {

  'use strict';

  var slide  = $('.slide'),
      slideAelements = $('.slide-a-child'),
      slideBelements = $('.slide-b-child'),
      slideCelements = $('.slide-c-child'),
      slideDelements = $('.slide-d-child'),
      slideEelements = $('.slide-e-child'),
      replay = $('button.replay');


/*Stopping it figure here out */
  slide.each(function (i) {
      if (i < 4) {
          setTimeout(function () {
              slide.eq(i).fadeOut();
          }, 5000 * (i + 1));
      }
  });


  function animateSlideA() {
    slideAelements.each(function (i) {
        setTimeout(function () {
            slideAelements.eq(i).addClass('is-visible');
        }, 300 * (i + 1));
    });
  }

  function animateSlideB() {
    slideBelements.each(function (i) {
        setTimeout(function () {
            slideBelements.eq(i).addClass('is-visible');
        }, 300 * (i + 1));
    });
 }

 function animateSlideC() {
  slideCelements.each(function (i) {
      setTimeout(function () {
          slideCelements.eq(i).addClass('is-visible');
      }, 300 * (i + 1));
  });
}

  function animateSlideD() {
    slideDelements.each(function (i) {
        setTimeout(function () {
            slideDelements.eq(i).addClass('is-visible');
        }, 300 * (i + 1));
    });
  }

  function animateSlideE() {
    slideEelements.each(function (i) {
        setTimeout(function () {
            slideEelements.eq(i).addClass('is-visible');
        }, 300 * (i + 1));
    });
  }

  animateSlideA();

  setTimeout(function () {
     animateSlideB();
  }, 5000);

  setTimeout(function () {
     animateSlideC();
  }, 10000);

  setTimeout(function () {
    animateSlideD();
 }, 15000);

 setTimeout(function () {
  animateSlideD();
}, 20000);



 replay.on('click', function () {
   location.reload(true);
 });

});


