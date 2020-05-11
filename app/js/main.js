$(function () {


  $('.slider__inner').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: false,
    nextArrow: false,
    draggable: true,
    easing: true,
    cssEase: 'linear',
  });



  new WOW().init();
 







});