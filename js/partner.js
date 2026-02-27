(function () {

    // media slider
    if ($('.content__slider').length) {
        const contentSlider = new Swiper('.content__slider', {
            clickable:'true',
            loop: true,
            infinite: true,
            slidesPerView: "3",
            navigation: {
                prevEl: ".prev-btn-content",
                nextEl: ".next-btn-contenr"
            },
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
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            },
        });
    }


      if($(".partnership_testimonial_slider").length) {
        const awardSlider = new Swiper('.partnership_testimonial_slider', {
            clickable:'true',
            slidesPerView: "1",
            spaceBetween: 16,
            loop: true,
            navigation: {
                prevEl: ".prev-btn-partner-testimonial",
                nextEl: ".next-btn-partner-testimonial"
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
                },
                1200: {
                    slidesPerView: 1,
                },
            }
        });
    }
    
})(jQuery);