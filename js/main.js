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


let elementsCC = document.querySelectorAll('.origin-center');
 
elementsCC.forEach(element => {
  let bbox = element.getBBox(),
    x = bbox.x,
    y = bbox.y,
    w = bbox.width,
    h = bbox.height;
                 
  //center center
  let resultCC = (x + (w / 2)) + 'px ' + (y + (h / 2)) + 'px';
  
  element.style.setProperty("transform-origin", resultCC)
}); // forEach


let elementsTL = document.querySelectorAll('.origin-left');
 
elementsTL.forEach(element => {
  let bbox = element.getBBox(),
    x = bbox.x,
    y = bbox.y,
    w = bbox.width,
    h = bbox.height;
                 
  //top left
  let resultTL = x + 'px ' + y + 'px';
  
  element.style.setProperty("transform-origin", resultTL)
}); // forEach

$(document).ready(function() {
 
  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3700);
 
});
/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 70,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);