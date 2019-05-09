//Click the hamburger menu to see the animation
//You can click the X to close or click anywhere outside the menu

$(document).ready(function(){
	$('.hamburger-shell').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
        $('.middle').toggleClass('rotate-back');
        $('.bottom').toggleClass('disap');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});
	$('.bg-cover').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	})
});





$('.arrow-next').click(function() {
  var currentSlide = $('.active-slide'),
    nextSlide = currentSlide.next(),
    currentDot = $('.active-dot'),
    nextDot = currentDot.next();

  if (nextSlide.length === 0) {
    nextSlide = $('.slide').first();
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



























