"use strict";

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
var elem = document.querySelector('.grid');
var msnry = new Masonry(elem, {
  // options
  itemSelector: '.grid-item',
  gutter: 24,
  horizontalOrder: true,
  fitWidth: true
});
var $grid = $('.grid').masonry({// options...
}); // layout Masonry after each image loads

$grid.imagesLoaded().progress(function () {
  $grid.masonry('layout');
});
//# sourceMappingURL=all.js.map
