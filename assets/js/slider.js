let slidesPerView = [1.5, 2.5, 3.5];

const swiper1 = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  direction: 'horizontal',
  spaceBetween: -400,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicMainBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    520: {
      slidesPerView: 2
    },
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    950: {
      slidesPerView: 3
    }
  }
});