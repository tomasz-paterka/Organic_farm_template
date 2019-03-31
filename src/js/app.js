$(function () {
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