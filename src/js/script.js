// banner slider
var blogBannerSwiper = new Swiper(".blog-banner-slider", {
  effect: 'fade',
  loop: false,
  navigation: {
    nextEl: ".blog-banner-next",
    prevEl: ".blog-banner-prev",
  },
});

var featuredBlogSwiper = new Swiper(".featured-blog-slider", {
  spaceBetween: 24,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000
  },
  speed: 3000,
  allowTouchMove:true,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
    1540: {
      slidesPerView: 5,
    }
  },
});