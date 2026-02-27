(function ($) {

    if($(".our_key_item_slider").length) {
            const focusItemSlider = new Swiper('.our_key_item_slider', {
                clickable:'true',
                slidesPerView: "1",
                // loop: true,
                navigation: {
                    prevEl: ".prev-btn-key",
                    nextEl: ".next-btn-key"
                },
                // pagination: {
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
                        slidesPerView: 5,
                    },
                }
            });
        }






if ($('.ongoing__slider').length) {
    var ongoingSlider = new Swiper('.ongoing__slider', {
        effect: "coverflow",
        centeredSlides: true,
        watchSlidesProgress: true,
        loop: true,
        slidesPerView: "auto",
        grabCursor: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 85,
            depth: 200,
            modifier: 2.5,
            slideShadows: false
        },
        navigation: {
            nextEl: ".next-btn-ongoing",
            prevEl: ".prev-btn-ongoing"
        },
        breakpoints: {
            1199: {
                coverflowEffect: {
                    depth: 250,
                    stretch: 85,
                    modifier: 2.5,
                }
            },
            991: {
                slidesPerView: 1,
                coverflowEffect: {
                    depth: 250,
                    stretch: 0,
                    modifier: 1.5,
                }
            }
        }
    });
}




var swiper = new Swiper('.elevating_stadards_up', {
  slidesPerView: 6,
  spaceBetween: 25,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  freeMode: {
    enabled: true,
    momentum: false,
    sticky: false,
  },
  allowTouchMove: false,
  grabCursor: false,
  breakpoints: {
    1200: {
      slidesPerView: 6
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    0: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});





    if ($('.policies_mobile_slider').length) {
        var downloadTabSlider = new Swiper('.policies_mobile_slider', {
            clickable:'true',
            loop: true,
            centeredSlides: true,
            slidesPerView: "4",
            //  pagination: {
            //     el: ".dtab-pagination",
            //     clickable: true,
            // },
             navigation: {
                prevEl: ".prev-btn-policies",
                nextEl: ".next-btn-policies"
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



})(jQuery);