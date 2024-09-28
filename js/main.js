$(document).ready(function () {
  // WINDOW LOAD EVENTS
  $(window).on("load", function () {
    $(".zoom-in").addClass("zoomIn");
    $(".slide-up").addClass("slideUp");
  });

  // MENU BUTTON ACTIONS
  $(".menu-btn").on("click", function () {
    $("body").toggleClass("fiexd");
  });

  // LILY SLIDER
  $(".lilySeekerSlider").owlCarousel({
    items: 1.3,
    margin: 40,
    loop: true,
    autoplay: true,
    nav: false,
    dots: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    responsive: {
      1199: {
        margin: 80,
        items: 4,
      },
      799: {
        margin: 50,
        items: 3,
      },
      575: {
        margin: 50,
        items: 2.1,
      },
    },
  });

  // LILY SLIDER
  $(".ministry-slider").owlCarousel({
    items: 1.1,
    margin: 15,
    loop: true,
    autoplay: false,
    nav: true,
    dots: true,
    responsive: {
      1199: {
        margin: 30,
        items: 2,
        loop: false,
      },
      767: {
        margin: 20,
        items: 2.1,
        loop: false,
      },
      575: {
        margin: 30,
        items: 1.1,
        loop: false,
      },
    },
  });
});
