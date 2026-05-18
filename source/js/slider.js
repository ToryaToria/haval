import { Swiper } from "swiper/bundle";
// import 'swiper/css/bundle';
import { Pagination } from "swiper/modules";

const slidesCountM6 = document.querySelectorAll('#m6 .swiper-slide').length;

const slidesCountDrago = document.querySelectorAll('#drago .swiper-slide').length;

// console.log('ky');

const initSwiperM6 = () => {
  new Swiper('#m6', {
    modules: [Pagination],
    loop: true, //  зациклен
    allowTouchMove: true, // свайп и мышка
    direction: 'horizontal', // по умолчанию
    grabCursor: true,
    spaceBetween: 13,
    initialSlide: slidesCountM6 - 1,

    speed: 800,

    pagination: {
      el: '.slider-pagination--m6',
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="slider__pagination-btn ${className} color-${index}" data-index="${index}" type="button"> </button>`;
      }
    }
  });
}


const initSwiperDrago = () => {
  new Swiper('#drago', {
    modules: [Pagination],
    loop: true, // зациклен
    allowTouchMove: true, // свайп и мышка
    direction: 'horizontal', // по умолчанию
    grabCursor: true,
    spaceBetween: 16,
    speed: 800,
    initialSlide: slidesCountDrago - 1,

    pagination: {
      el: '.slider-pagination--drago',
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="slider__pagination-btn ${className} color-${index}" data-index="${index}" type="button">                  </button>`;
      }
    }
  });
}


export {
  initSwiperM6,
  initSwiperDrago
}
