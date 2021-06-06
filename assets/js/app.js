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

function check() {
  var checkBox = document.getElementById("checbox");
  var text1 = document.getElementsByClassName("text1");
  var text2 = document.getElementsByClassName("text2");

  for (var i = 0; i < text1.length; i++) {
    if (checkBox.checked == true) {
      text1[i].style.display = "block";
      text2[i].style.display = "none";
    } else if (checkBox.checked == false) {
      text1[i].style.display = "none";
      text2[i].style.display = "block";
    }
  }
}



