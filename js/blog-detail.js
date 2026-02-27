(function ($) {

// upcoming webniar
     if($(".related_blog_slider").length) {
        const upcomingSlider = new Swiper('.related_blog_slider', {
            clickable:'true',
            slidesPerView: "1",
            // loop: true,
            navigation: {
                prevEl: ".prev-btn-related",
                nextEl: ".next-btn-related"
            },
            //  pagination: {
            //     el: ".focus__item_pagination",
            //     clickable: true,
            // },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                     spaceBetween: 40,
                },
            }
        });
    }


})(jQuery);