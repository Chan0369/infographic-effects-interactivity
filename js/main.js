$('.nav').localScroll();

var $cupids = $('.cupid-right, .cupid-left');

$cupids.waypoint(function (direction) {
  if (direction == 'down') {
  $cupids.addClass('js-wrapper-animate');
  } else {
  $cupids.removeClass('js-wrapper-animate');
  }
}, { offset:'50%' });
