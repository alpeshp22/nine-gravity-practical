$(document).ready(function () {
  // WINDOW LOAD EVENTS
  $(window).on("load", function () {
    $(".zoom-in").addClass("zoomIn");
    $(".slide-up").addClass("slideUp");
  });

  // MENU BUTTON ACTIONS
  $(".menu-btn").on("click", function () {
    $("body").toggleClass("fiexd");
    $(".sidebar-overlay").toggleClass("show");
  });

  // MINISTRY SLIDER
  $(".ministry-slider").owlCarousel({
    items: 1,
    margin: 15,
    loop: false,
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

  // LILY HORIZONTAL SCROLL SECTION
  gsap.utils.toArray(".scrollSec").forEach((section) => {
    if (section.dataset.type === "horizontal") {
      const cards = section.querySelector(".lily-seeker");
      const card = section.querySelector(".lily-card");

      gsap.to(cards, {
        x: () => {
          return -cards.scrollWidth + card.offsetWidth;
        },
        ease: "none",
        scrollTrigger: {
          trigger: ".scrollSec",
          start: () => "center center",
          end: () => `+=${cards.scrollWidth - card.offsetWidth}`,
          scrub: true,
          pin: true,
          markers: false,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    } else null;
  });
});
