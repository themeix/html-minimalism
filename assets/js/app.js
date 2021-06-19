(function ($) {
  "use strict";

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



    $('.togglebar').on('click', function(e) {
    e.preventDefault();
    $("#site-wrapper").toggleClass("menuDisplayed");   
 
    $(".togglebar").toggleClass('active');
  });

  
   
    $('.menu-close').on('click', function(e) {
    e.preventDefault();
    $("#site-wrapper").toggleClass("menuDisplayed"); 
    $(".togglebar").toggleClass('active');
   


  });

  $('.nav-link-collapse').on('click', function() {
    $('.nav-link-collapse').not(this).removeClass('nav-link-show');
    $(this).toggleClass('nav-link-show');
  });



  /  light dark mode  /
if (window.CSS && CSS.supports("color", "var(--primary)")) {
  var toggleColorMode = function toggleColorMode(e) {
    if (e.currentTarget.classList.contains("light--hidden")) {
      document.documentElement.setAttribute("data-color", "light"); 

      localStorage.setItem("data-color", "light");
      return;
    }
    document.documentElement.setAttribute("data-color", "dark"); 
    localStorage.setItem("data-color", "dark");
  };
  var toggleColorButtons = document.querySelectorAll(".data-color__btn");
  toggleColorButtons.forEach(function(btn) {
    btn.addEventListener("click", toggleColorMode);
  });
} else {
  var btnContainer = document.querySelector(".data-color__header");
  btnContainer.style.display = "none";
}
/  Match color to Dark  /

if (
  localStorage.getItem("data-color") === "dark" ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localStorage.getItem("data-color"))
) {
  document.documentElement.setAttribute("data-color", "dark");
}

}(jQuery));
  








  
