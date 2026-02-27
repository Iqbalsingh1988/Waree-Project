
(function ($) {


    if ($('.policies_csr_slider').length) {
        var downloadTabSlider = new Swiper('.policies_csr_slider', {
            clickable:'true',
            loop: true,
            centeredSlides: true,
            slidesPerView: "4",
            //  pagination: {
            //     el: ".dtab-pagination",
            //     clickable: true,
            // },
             navigation: {
                prevEl: ".prev-btn-csr-slider",
                nextEl: ".next-btn-csr-slider"
            },
            breakpoints: {
                260: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                    centeredSlides: true,
                },
                600: {
                    slidesPerView: 3.2,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },

                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    centeredSlides: false,
                },

                1025: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    centeredSlides: false,
                },
            },
        });
    }


        $('.our_reach_list_col').click(function(){
            $('.our_reach_list_col').removeClass('active');
            $(this).addClass('active');
            var tagid = $(this).data('tag');
            $('.ourlist').removeClass('active').addClass('hide');
            $('#'+tagid).addClass('active').removeClass('hide');
        });



        if ($('.our_vision_slider').length) {
        var categorySlider = new Swiper('.our_vision_slider', {
            // loop: true,
            slidesPerView: "3",
            allowTouchMove: false,
            centeredSlides: false,
            breakpoints: {
                320: {
                    // infinite: true,
                    slideToClickedSlide: true,
                    allowTouchMove: true,
                    slidesPerView: "auto",
                    navigation: {
                        prevEl: ".prev-btn-category",
                        nextEl: ".next-btn-category"
                    },
                },
                768: {
                    slidesPerView: 2,
                    navigation: {
                        prevEl: ".prev-btn-category",
                        nextEl: ".next-btn-category"
                    },
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    infinite: false,
                    slideToClickedSlide: false,
                    slidesPerView: 5,
                },
            },
        });
    }

})(jQuery);