// Collapse Navber
var navbarCollapse = () => {
  if ($('#mainNav').offset().top > 100) {
    $('#mainNav').addClass("navbar-scrolled");
  } else {
    $('#mainNav').removeClass("navbar-scrolled");
  }
};

// Collapse now is page is not at top
navbarCollapse();
// Collapse navber when page is scrolled
$(window).scroll(navbarCollapse);

$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 72)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function () {
  $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
  target: '#mainNav',
  offset: 75
});

// Portfolio dropdown
$('.js-dropdown-item').dropdownLayer({
  'elemSelector': "js-dropdown-item",
  'containerClass': "js-dropdown-items",
  'descriptionClass': "js-description",
  'dropdownClass': "js-dropdown",
  'arrowClass': "js-dropdown-arrow",
  'dropdownContentClass': "js-dropdown-content",
  'disableDropdownClass': "js-dropdown-disable",
  'slideUpSpeed': 300,
  'slideDownSpeed': 300,
  'useSlideDown': false,
  'useSlideUp': false,
  'transitionEffect': 'swing',
});