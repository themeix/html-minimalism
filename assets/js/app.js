(function ($) {
  "use strict";




  /*  Preloader */
  $(window).on('load', function () {
    var preLoder = $(".preloader");
    preLoder.fadeOut(1500);
  });



  // Scroll to the desired section on click
  // Make sure to add the `data-scroll` attribute to your `<a>` tag.
  // Example: 
  // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 500);
  }
  $('[data-scroll]').on('click', scrollToSection);




  /*  Toggle Class */
  $('.search-toggler').on('click', function (e) {
    $('.search-form').toggleClass('open');
    e.preventDefault();
  });
  /*  Mean Menu */
  $('.navbar-meanmenu').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.header-navbar',
    meanMenuOpen: "<span></span><span></span><span></span>",
    meanMenuClose: "<span></span><span></span><span></span>",
    siteLogo: "<a class='navbar-mobile' href='index.html'><img src='assets/images/header-logo-mobile.png' alt='images'></a>",
  });
  /* Banner Slider */
  function bannerslider() {
    var BasicSlider = $('.banner-slider');
    BasicSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $('.banner-item:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.banner-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: true,
      autoplayspeed: 2000,
      infinite: false,
      dots: true,
      fade: true,
      arrows: true,
      speed: 0,
      prevArrow: $('.banner-prev'),
      nextArrow: $('.banner-next'),
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }


  /*  Aos  */
  AOS.init({
    offset: 120,
    delay: 10,
    duration: 1000,
    easing: 'ease',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });

  /*  Footer full year */
  $('#spanYear').html(new Date().getFullYear());


  /**-----------------------------
   *  Navbar fix
   * ---------------------------*/
  $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
    e.preventDefault();
  })


  $(".togglebar").on('click', function () {
    $(".togglebar").toggleClass('active');
    $(".navbar-collapse").toggleClass('active');
  })

  // loading
  $(window).on("load", function () {
    $("#loading").fadeOut(600);
    $('html').css('overflow-y', 'visible');
  });

  // sticky menu
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 30) {
      $(".cf-header-wrapper").addClass("cf-sticky");
    } else {
      $(".cf-header-wrapper").removeClass("cf-sticky");
    }
  });

}(jQuery));