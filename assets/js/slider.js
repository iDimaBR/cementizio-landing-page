var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

var swiper2 = new Swiper(".slide-content-product", {
  slidesPerView: 3,
  spaceBetween: 25,
  mousewheel: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on:{
      activeIndexChange: function(index){
        console.log(index);
        if(index.activeIndex == 6){
          this.slideTo(0, false);
        }
      },
  },

  breakpoints:{
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    520: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});