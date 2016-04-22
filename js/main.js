var $cupids = $('.cupid-right, .cupid-left');

$('.nav').localScroll();

$cupids.waypoint(function (direction) {
  if (direction == 'down') {
  $cupids.addClass('js-wrapper-animate');
  } else {
  $cupids.removeClass('js-wrapper-animate');
  }
}, { offset:'50%' });

$('.right-heart-info').on('click', function (e) {
  $(this).toggleClass('is-clicked');
});

$('.left-heart-info').on('click', function (e) {
  $(this).toggleClass('is-clicked');
});

$('.mint-heart-left').on('click', function (e) {
  $(this).addClass('is-clicked2');
});

$('mint-heart-left').on('animationend', function (e) {
  $(this).removeClass('is-clicked2');
});

$('.mint-heart-right').on('click', function (e) {
  $(this).addClass('is-clicked2');
});

$('mint-heart-right').on('animationend', function (e) {
  $(this).removeClass('is-clicked2');
});

$('family').hover( function (e) {
  $(this).addClass('scale');
});
