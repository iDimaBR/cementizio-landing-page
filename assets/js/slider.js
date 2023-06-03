
const swiper1 = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 2,
    slidesPerGroup: 3,
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
    }
});
