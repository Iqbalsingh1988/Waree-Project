(function(){

    if ($('.initiate__slider').length) {
        var initiateSlider = new Swiper('.initiate__slider', {
            effect: "coverflow",
            centeredSlides: true,
            watchSlidesProgress: true,
            clickable:'true',
            loop: true,
            infinite: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 10,
                depth: 200,
                modifier: 2.5,
                slideShadows: false
            },
            navigation: {
                nextEl: ".next-btn-initiative",
                prevEl: ".prev-btn-initiative"
            },
        });
    //     const contentSwiper = new Swiper('.solution__content_slider', {
    //         loop: true,
    //     });
        
    //     solutionSlider.controller.control = contentSwiper;
    // contentSwiper.controller.control = solutionSlider;
    }

    if ($('.people__slider').length) {
        const peopleSlider = new Swiper('.people__slider', {
            clickable:'true',
            loop: true,
            infinite: true,
            centeredSlides: true,
            slidesPerView: "auto",
            navigation: {
                prevEl: ".prev-btn-people",
                nextEl: ".next-btn-people"
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
                    slidesPerView: 7,
                    spaceBetween: 50,
                },
            },
        });
    }

    if($(".emp_slider").length) {
        const empSlider = new Swiper('.emp_slider', {
            clickable:'true',
            slidesPerView: "1",
            navigation: {
                prevEl: ".prev-btn-emp",
                nextEl: ".next-btn-emp"
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
                    slidesPerView: 5,
                },
            }
        });
    }

})(jQuery);