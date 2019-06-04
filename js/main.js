//arrow
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

//nav
$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
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
      slideFelements = $('.slide-f-child'),
      slideGelements = $('.slide-g-child'),

      replay = $('button.replay');


/*Stopping it figure here out */
  slide.each(function (i) {
    if (i==0){
      setTimeout(function(){
        slide.eq(i).fadeOut();
      }, 5500*(i+1));
    }
      else if (i < 6) {
          setTimeout(function () {
              slide.eq(i).fadeOut();
          }, 3500 * (i + 1));
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
  
  function animateSlideF() {
    slideFelements.each(function (i) {
        setTimeout(function () {
            slideFelements.eq(i).addClass('is-visible');
        }, 300 * (i + 1));
    });
  }
  function animateSlideG() {
    slideGelements.each(function (i) {
        setTimeout(function () {
            slideGelements.eq(i).addClass('is-visible');
        }, 300 * (i + 1));
    });
  }

  animateSlideA();

  setTimeout(function () {
     animateSlideB();
  }, 3500);

  setTimeout(function () {
     animateSlideC();
  }, 7000);

  setTimeout(function () {
    animateSlideD();
 }, 10500);

 setTimeout(function () {
  animateSlideE();
}, 14000);

 setTimeout(function () {
  animateSlideF();
}, 17500);

setTimeout(function () {
  animateSlideG();
}, 21000);

 replay.on('click', function () {
   location.reload(true);
 });

});


$(document).ready(function() {
 
  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3700);
 
});
