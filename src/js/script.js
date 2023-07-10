/*======================= blog banner slider ========================*/
var blogBannerSwiper = new Swiper(".blog-banner-slider", {
  effect: 'fade',
  loop: false,
  navigation: {
    nextEl: ".blog-banner-next",
    prevEl: ".blog-banner-prev",
  },
});

/*======================= featured blog slider ========================*/
var featuredBlogSwiper = new Swiper(".featured-blog-slider", {
  spaceBetween: 24,
  grabCursor: true,
  centeredSlides: false,
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

/*======================= latest blog tab filtering ========================*/
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

/*======================= blog service slider ========================*/
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

/*======================= saas-1 how-it-works tab ========================*/
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