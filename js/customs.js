$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 50,
  responsiveClass: true,
  nav: true,
  lazyLoad: true,
  autoplay: true,
  navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>" ],
  autoplayTimeout: 20000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
      loop: true
    }
  }
})