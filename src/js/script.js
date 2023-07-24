/*======================= blog > banner slider ========================*/
var blogBannerSwiper = new Swiper(".blog-banner-slider", {
  effect: 'fade',
  loop: false,
  navigation: {
    nextEl: ".blog-banner-next",
    prevEl: ".blog-banner-prev",
  },
});

/*======================= blog > featured blog slider ========================*/
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

/*======================= blog > latest blog tab filtering ========================*/
$('.latest-post-btns button').on('click', function(){
  $(this).parent().parent().find('button').removeClass('bg-primary text-white').addClass('text-primary');
  $(this).addClass('bg-primary text-white').removeClass('text-primary');
});

var latestPostContainer = document.querySelector('#latest-post-container');
if(latestPostContainer){
  var mixer = mixitup(latestPostContainer);
}

/*======================= mobile-menu ========================*/
$('.mobile-sub-list').slideUp();
$('.mobile-menu-list button').on('click', function(){
  $(this).parent().find('.mobile-sub-list').slideToggle();
  $(this).toggleClass('!text-secondary');
});

$('.mobile-menu-toggle').on('click', function(){
  $('.mobile-menu-wrapper').removeClass('opacity-0 invisible')
  $('.mobile-menu').removeClass('translate-x-full').addClass('translate-x-0')
});

$('.mobile-menu-close, .mobile-menu-overlay').on('click', function(){
  $('.mobile-menu').removeClass('translate-x-0').addClass('translate-x-full');
  $('.mobile-menu-wrapper').addClass('opacity-0 invisible');
  $('.mobile-sub-list').slideUp();
  $('.mobile-menu-list button').removeClass('!text-secondary');
});

/*======================= video modal play ========================*/
$('.video-play').on('click', function(){
  $('.video-modal').removeClass('hidden').addClass('flex')
})

$('.modal-overlay, .modal-close').on('click', function(){
  $('.video-modal').addClass('hidden').removeClass('flex')
})

/*======================= financial-consulting >  service slider ========================*/
 var blogServiceSwiper = new Swiper(".blog-service-slider", {
  spaceBetween: 0,
  centeredSlides: false,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000
  },
  speed: 3000,
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
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

/*======================= saas-1 > how-it-works tab ========================*/
$('#how-works-tabs-nav li:first-child').addClass('active');
$('.how-works-tab-content').hide();
$('.how-works-tab-content:first').show();

// Click function
$('#how-works-tabs-nav li').click(function(){
  $('#how-works-tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.how-works-tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

/*======================= saas-2 > dark-light mode ========================*/
$('#dark-light-mode').anyImageComparisonSlider({
  // cursor: "url('../src/images/saas/handle.cur') 0 0, auto",
  cursor: 'ew-resize',
  dividingLine: 'none',
});

/*======================= saas-3 > client slider ========================*/
var saasClientSwiper = new Swiper(".saas-client-slider", {
  spaceBetween: 48,
  centeredSlides: false,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000
  },
  speed: 3000,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    1199: {
      slidesPerView: 1.5,
    }
  }
});

/*======================= saas-3 > dark-light mode ========================*/
$('#switch-check').on('click', function(){
  if( $('#switch-check').is(':checked') ){
    $('.dark-light-mode').removeClass('bg-gray-900').addClass('bg-[#F4F7FF]')
    $('.dark-light-mode h2, .dark-light-mode h4').removeClass('text-white').addClass('text-gray-800')
    $('.light-img').removeClass('hidden')
    $('.dark-img').addClass('hidden')
  }
  else{
    $('.dark-light-mode').addClass('bg-gray-900').removeClass('bg-[#F4F7FF]')
    $('.dark-light-mode h2, .dark-light-mode h4').addClass('text-white').removeClass('text-gray-800')
    $('.light-img').addClass('hidden')
    $('.dark-img').removeClass('hidden')
  }
})

/*======================= mobile-app-1 > client slider ========================*/
var blogServiceSwiper = new Swiper(".mobile-client-slider", {
  spaceBetween: 24,
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000
  },
  speed: 3000,
  breakpoints: {
    576: {
      slidesPerView: 1.5,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

/*======================= mobile-app-1 > faq tab ========================*/
$('#faq-tabs-nav li:first-child a').addClass('font-bold text-primary-900').removeClass('text-gray-600');
$('.faq-tab-content').hide();
$('.faq-tab-content:first').show();

// Click function
$('#faq-tabs-nav li').click(function(){
  $('#faq-tabs-nav li a').removeClass('font-bold text-primary-900').addClass('text-gray-600');
  $(this).find('a').addClass('font-bold text-primary-900').removeClass('text-gray-600');
  $('.faq-tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

/*======================= mobile-app-1 > faq accordion ========================*/
$('.accordion-body').slideUp()
$('.accordion-head').on('click', function(){
  if($(this).parent().hasClass('active')){
    $(this).parent().removeClass('active')
    $(this).parent().find('.accordion-body').slideUp()
    $(this).find('i').removeClass('rotate-180')
  }
  else{
    $(this).parent().parent().find('.accordion').removeClass('active')
    $(this).parent().parent().find('.accordion-body').slideUp()
    $(this).parent().parent().find('i').removeClass('rotate-180')
    $(this).parent().addClass('active')
    $(this).parent().find('.accordion-body').slideDown()
    $(this).find('i').addClass('rotate-180')
  }
});

/*======================= mobile-app-2 > brands ========================*/
var comSwiper1 = new Swiper(".company-slider-1", {
  freeMode: false,
  spaceBetween: 24,
  grabCursor: false,
  slidesPerView: 2,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
  speed: 5000,
  allowTouchMove:false,
  freeModeMomentum: false,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1024:{
      slidesPerView: 5,
    }
  }
});

var comSwiper2 = new Swiper(".company-slider-2", {
  freeMode: false,
  spaceBetween: 24,
  grabCursor: false,
  slidesPerView: 2,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    reverseDirection: true,
  },
  speed: 5000,
  allowTouchMove:false,
  freeModeMomentum: false,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1024:{
      slidesPerView: 5,
    }
  }
});

/*======================= mobile-app-2 > join ========================*/
$('.masonry-grid').isotope({
  itemSelector: '.grid-item',
});

/*======================= digital-agency > banner-scroller ========================*/
$('.scroller').on('click', function(){
  var nextSection = $(this).parent().parent().parent().parent().next();

  $('html, body').animate({
    scrollTop: nextSection.offset().top + 1
  }, 1000);
});


/*======================= digital-agency > Counter up ========================*/
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

/*======================= digital-agency > successful-products slider ========================*/
var successProductsSwiper = new Swiper(".success-products-slider", {
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

/*======================= digital-agency > successful-products slider ========================*/
var medicalClientSwiper = new Swiper(".medical-client-slider", {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 1,
  loopedSlides: 3,
  centeredSlides: true,
  breakpoints: {
    576: {
      loopedSlides: 4,
    },
    640: {
      loopedSlides: 5,
    },
  },
  speed: 1000,
  autoplay: {
    delay: 3000
  },
  // allowTouchMove: false,
  // effect: "fade",
  // thumbs: {
  //   swiper: medicalClientSwiper,
  // },
});

var medicalClientSwiper2 = new Swiper(".medical-client-slider-thumb", {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 3,
  slideToClickedSlide: true,
  // freeMode: true,
  centeredSlides: true,
  // watchSlidesProgress: true,
  speed: 1000,
  autoplay: {
    delay: 3000
  },
  // allowTouchMove: false,
  breakpoints: {
    576: {
      slidesPerView: 4,
    },
    640: {
      slidesPerView: 5,
    },
  }
});

medicalClientSwiper.controller.control = medicalClientSwiper2;
medicalClientSwiper2.controller.control = medicalClientSwiper;

/*======================= travel-agency > banner slider ========================*/
var travelBannerSwiper = new Swiper(".travel-banner-slider", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 1,
  loopedSlides: 4,
  allowTouchMove: false,
  centeredSlides: false,
  effect: 'fade',
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".trending-banner-next",
    prevEl: ".trending-banner-prev",
  },
});

var travelBannerThumb = new Swiper(".travel-banner-thumb", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 2.5,
  allowTouchMove: false,
  slideToClickedSlide: true,
  centeredSlides: false,
  breakpoints: {
    640: {
      slidesPerView: 3.5,
    },
  }
});

travelBannerSwiper.controller.control = travelBannerThumb;
travelBannerThumb.controller.control = travelBannerSwiper;

// let slidersCount = travelBannerSwiper.params.loop ? travelBannerSwiper.slides.length - 2 : travelBannerSwiper.slides.length;
let slidersCount = travelBannerSwiper.slides.length;
	
$('.swiper-counter .total').html(slidersCount);

travelBannerSwiper.on('slideChange', function () {
  $('.swiper-counter .current').html(this.activeIndex + 1);
  console.log(this.activeIndex);
});

/*======================= travel-agency > trending-slider ========================*/
var travelTrendingSwiper = new Swiper(".travel-trending-slider", {
  spaceBetween: 24,
  grabCursor: true,
  slidesPerView: 1,
  disableOnInteraction: false,
  loop: true,
  navigation: {
    nextEl: ".trending-button-next",
    prevEl: ".trending-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  },
});