
(function ($) {


        $('.intesterclick a').click(function(){
            $('.intesterclick a').removeClass('activelink');
            $(this).addClass('activelink');
            var tagid = $(this).data('tag');
            $('.intesterlist').removeClass('active').addClass('hide');
            $('#'+tagid).addClass('active').removeClass('hide');
        });
        
        




         // team slider
    if ($('.governance_slider').length) {
        var categorySlider = new Swiper('.governance_slider', {
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
                    slideToClickedSlide: true,
                    allowTouchMove: true,
                    // slidesPerView: "auto",
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
                    slidesPerView: 6,
                },
            },
        });
    }


//     if (window.innerWidth <= 991 && $('.tab_invesret_mobile_slider').length) {
//     var downloadTabSlider = new Swiper('.tab_invesret_mobile_slider', {
//         clickable: 'true',
//         loop: true,
//         centeredSlides: true,
//         slidesPerView: "4",
//         pagination: {
//             el: ".dtab-pagination",
//             clickable: true,
//         },
//         navigation: {
//             prevEl: ".prev-btn-invester",
//             nextEl: ".next-btn-invester"
//         },
//         breakpoints: {
//             260: {
//                 slidesPerView: 1.2,
//                 spaceBetween: 20,
//             },
//             600: {
//                 slidesPerView: 3.2,
//                 spaceBetween: 20,
//             },
//             767: {
//                 slidesPerView: 3,
//                 spaceBetween: 20,
//             },
//         },
//     });
// }



    if ($('.tab_invesret_mobile_slider').length) {
        var downloadTabSlider = new Swiper('.tab_invesret_mobile_slider', {
            clickable:'true',
            loop: true,
            centeredSlides: true,
            slidesPerView: "4",
            //  pagination: {
            //     el: ".dtab-pagination",
            //     clickable: true,
            // },
             navigation: {
                prevEl: ".prev-btn-invester",
                nextEl: ".next-btn-invester"
            },
            breakpoints: {
                260: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                },
                600: {
                    slidesPerView: 3.2,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            },
        });
    }



    const buttons = document.querySelectorAll('.ipo_document_left');

           buttons.forEach(btn => {
              const arrow = btn.querySelector('.btn_icon');
              const text = btn.querySelector('.btn_text');

              btn.addEventListener('mouseenter', () => {
                const arrowWidth = arrow.offsetWidth;
                const textWidth = text.offsetWidth;
                const gap = 10;
                const arrowTranslateX = textWidth + gap;
                const textTranslateX = -(arrowWidth + gap);

                arrow.style.transform = `translateX(${arrowTranslateX}px)`;
                text.style.transform = `translateX(${textTranslateX}px)`;
              });

              btn.addEventListener('mouseleave', () => {
                arrow.style.transform = '';
                text.style.transform = '';
              });
          });




})(jQuery);