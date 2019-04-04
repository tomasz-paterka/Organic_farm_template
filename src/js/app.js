$(function () {
  'use stricte';

  $('a[href^="#"], .btn-outline-success, .btn-jumbtron').click(function(e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 90
      }, 1500);
    };
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoHeight: true,
    responsive: {
      0: {
        items: 1
      },
      720: {
        items: 2
      },
      1024: {
        items: 3
      },
      1440: {
        items: 4
      }
    }
  })
});