(function ($) {

     if ($('.featured_slider_new').length) {
        const featuredSlider = new Swiper('.featured_slider_new', {
                loop: true,
                centeredSlides: true,
                pagination: {
                el: ".featured_slide_pagination",
                clickable: true,
                //   dynamicBullets: true,
                },

        breakpoints: {

                640: {
                    slidesPerView: 2.5,
                },
                768: {
                    slidesPerView: 1.35,
                },
                1080: {
                    slidesPerView: 1.35,
                },
                1200: {
                    slidesPerView: 1.35,
                },

                1400: {
                    slidesPerView: 'auto',
                },
            },

        });
     }




})(jQuery);