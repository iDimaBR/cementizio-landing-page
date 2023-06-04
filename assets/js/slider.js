let slidesPerView = [1.5, 2.5, 3.5];

const swiper1 = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: slidesPerView[0],
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
    768: {
      slidesPerView: slidesPerView[1]
    },
    1200: {
      slidesPerView: slidesPerView[2]
    }
  }
});