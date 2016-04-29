var $cupids = $('.cupid-right, .cupid-left');
var $man = $('.man');
var $manSvg = $('#valentines-day-info2');

$('.nav').localScroll();

$cupids.waypoint(function (direction) {
  if (direction == 'down') {
    $cupids.addClass('js-wrapper-animate');
  } else {
    $cupids.removeClass('js-wrapper-animate');
  }
}, {offset: '50%'});

$('.right-heart-info').on('click', function (e) {
  $(this).toggleClass('is-clicked');
});

$('.left-heart-info').on('click', function (e) {
  $(this).toggleClass('is-clicked');
});

$('.mint-heart-left').on('click', function (e) {
  $(this).addClass('is-clicked2');
});

$('.mint-heart-left').on('animationend', function (e) {
  $(this).removeClass('is-clicked2');
});

$('.mint-heart-right').on('click', function (e) {
  $(this).addClass('is-clicked2');
});

$('.mint-heart-right').on('animationend', function (e) {
  $(this).removeClass('is-clicked2');
});
//
// $('.family').hover( function (e) {
//   $(this).addClass('scale');
// });

$('.chocolate-bar').hover(function (e) {
  $(this).addClass('scale');
});

$('.chocolate-bar').on('animationend', function (e) {
  $(this).removeClass('scale');
});

$('.football-team').hover(function (e) {
  $(this).addClass('scale');
});

$('.football-team').on('animationend', function (e) {
  $(this).removeClass('scale');
});

$('.flim').hover(function (e) {
  $(this).addClass('scale');
});

$('.flim').on('animationend', function (e) {
  $(this).removeClass('scale');
});

$('.buffet-voucher').hover(function (e) {
  $(this).addClass('scale');
});

$('.buffet-voucher').on('animationend', function (e) {
  $(this).removeClass('scale');
});

$('.perfume').hover(function (e) {
  $(this).addClass('scale');
});

$('.perfume').on('animationend', function (e) {
  $(this).removeClass('scale');
});

$('.underwear').hover(function (e) {
  $(this).addClass('scale');
});

$('.underwear').on('animationend', function (e) {
  $(this).removeClass('scale');
});

$('.cd').hover(function (e) {
  $(this).addClass('scale');
});

$('.cd').on('animationend', function (e) {
  $(this).removeClass('scale');
});

$('.toy').hover(function (e) {
  $(this).addClass('scale');
});

$('.toy').on('animationend', function (e) {
  $(this).removeClass('scale');
});

$('.jewellery').hover(function (e) {
  $(this).addClass('scale');
});

$('.jewellery').on('animationend', function (e) {
  $(this).removeClass('scale');
});

$('.flower').hover(function (e) {
  $(this).addClass('scale');
});

$('.flower').on('animationend', function (e) {
  $(this).removeClass('scale');
});

$('.title1').on('click', function () {
  $('.info1').toggleClass('show');
});

$('.title2').on('click', function () {
  $('.info2').toggleClass('show');
});

$('.title3').on('click', function () {
  $('.info3').toggleClass('show');
});

$('.title4').on('click', function () {
  $('.info4').toggleClass('show');
});

//$('.green-background').on('click', function () {
//  $('.man').toggleClass('slide');
//});

$manSvg.waypoint(function (direction) {
  if (direction == 'down') {
  $man.addClass('slide');
  } else {
  $man.removeClass('slide');
  }
}, { offset:'50%' });
