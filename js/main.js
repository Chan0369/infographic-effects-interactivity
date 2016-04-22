var $info = $('.info1');

$.info1.waypoint(function (direction) {
  if (direction == 'down') {
  $info1.addClass('js-wrapper-animate');
  } else {
  $info1.removeClass('js-wrapper-animate');
  }
}, { offset:'10%' });
