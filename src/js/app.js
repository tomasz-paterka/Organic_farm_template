$(function () {
  'use stricte';

  $('a[href^="#"], .btn-outline-success, .btn-jumbtron').click(function (e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 90
      }, 1500);
    };
  });

  $('#owl-products').owlCarousel({
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
  });

  $('#owl-testimonials').owlCarousel({
    lazyLoad: true,
    loop: true,
    margin: 30,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      720: {
        items: 2
      },
      1140: {
        items: 3
      }
    }
  });

  let a = 0;
  $(window).scroll(function () {
    let offTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > offTop) {
      $('.count').each(function () {
        let $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
      a = 1;
    }
  });

  $('.map-overlay').on('click', function() {
    window.open('https://www.google.com/maps/place/62-100+W%C4%85growiec/@52.8127139,16.6374545,9z/data=!4m5!3m4!1s0x47047814d97e9191:0x674b434f830e9037!8m2!3d52.80848!4d17.19966', '_blank');
  });

  $('.needs-validation').submit(function (e) {
    if (!this.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    $(this).addClass('was-validated');
  });
});