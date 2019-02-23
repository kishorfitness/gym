$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 50,
  responsiveClass: true,
  dots: true,
  lazyLoad: true,
  autoplay: true,
  autoplayTimeout: 20000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
      loop: true
    }
  }
})