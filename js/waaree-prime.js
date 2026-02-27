(function ($) {
var swiper = new Swiper(".benefit_waaree_sec_slider", {
    effect: "cards",
  grabCursor: true,
  direction: 'vertical',
  navigation: {
    nextEl: ".next-btn-waaree_benefit",
    prevEl: ".prev-btn-waaree_benefit"
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  cardsEffect: {
    rotate: false,
    perSlideRotate: 0,
    perSlideOffset: -8, // negative value = stack upwards
    slideShadows: false
  }
});


var swiper = new Swiper(".how-it-work-slider", {
        slidesPerView: 1,
        spaceBetween: 40,
        slidesPerGroup: 1,
        loop: true,
         pagination: {
        el: ".how-work-swipper-pagination",
        clickable: true, // dots clickable honge
    },
        breakpoints: {
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 }
        }
    });

})(jQuery);

