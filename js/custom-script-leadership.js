(function ($) {

    // media slider
    if ($('.media__slider').length) {
        var mediaSlider = new Swiper('.media__slider', {
            clickable:'true',
            loop: true,
            infinite: true,
            slidesPerView: "4",
            navigation: {
                prevEl: ".prev-btn-blog",
                nextEl: ".next-btn-blog"
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
                    slidesPerView: 4,
                },
            },
        });
    }

    // team slider
    if ($('.team__slider').length) {
        var teamSlider = new Swiper('.team__slider', {
            clickable:'true',
            loop: true,
            infinite: true,
            slidesPerView: "3",
            navigation: {
                prevEl: ".prev-btn-team",
                nextEl: ".next-btn-team"
            },
            breakpoints: {
                320: {
                    infinite: true,
                    slideToClickedSlide: true,
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });
    }

    // team slider
    if ($('.category__slider').length) {
        var categorySlider = new Swiper('.category__slider', {
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
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    infinite: false,
                    slideToClickedSlide: false,
                    slidesPerView: 3,
                },
            },
        });
    }

    $(".single__item").on("click", function() {
        $(".team__modal").addClass("active");
        $(".team-overlay").addClass("active");
    });
    $(".team-close-modal").on("click", function() {
        $(".team__modal").removeClass("active");
        $(".team-overlay").removeClass("active");
    });


     // Our Recognitions slider
    if ($('.client__slider').length) {
        const clientSlider = new Swiper('.client__slider', {
            clickable:'true',
            slidesPerView: "5",
            spaceBetween: 16,
            navigation: {
                prevEl: ".prev-btn-client",
                nextEl: ".next-btn-client"
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 5,
                },
                1200: {
                    slidesPerView: 5,
                },
            }
        });
    }

    if($(".award__slider").length) {
        const awardSlider = new Swiper('.award__slider', {
            clickable:'true',
            slidesPerView: "4",
            spaceBetween: 16,
            loop: true,
            navigation: {
                prevEl: ".prev-btn-award",
                nextEl: ".next-btn-award"
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
                    slidesPerView: 4,
                },
            }
        });
    }

    if($(".trusted__slider").length) {
        const trustedSlider = new Swiper('.trusted__slider', {
            // speed: 5000,
            freeMode: true,
            speed: 4000,
            // freeModeMomentum: false,
            direction: "horizontal",
            clickable:'false',
            slidesPerView: "1",
            loop: true,
            allowTouchMove: false,
            autoplay: {
                delay: 0,
                disableOnInteraction: false
            },
            navigation: {
                prevEl: ".prev-btn-trust",
                nextEl: ".next-btn-trust"
            },
            breakpoints: {
                240: {
                    slidesPerView: 1.1,
                },
                600: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 5,
                },
                1200: {
                    slidesPerView: 6,
                },
            }
        });
    }

    if($(".certificate__slider").length) {
        const certificateSlider = new Swiper('.certificate__slider', {
            clickable:'true',
            slidesPerView: "1",
            spaceBetween: 10,
            loop: true,
            navigation: {
                // prevEl: ".prev-btn-trust",
                // nextEl: ".next-btn-trust"
            },
        });
    }


    if($(".module__slider").length) {
        const moduleSlider = new Swiper('.module__slider', {
            clickable:'true',
            slidesPerView: "4",
            spaceBetween: 10,
            loop: true,
            navigation: {
                prevEl: ".prev-btn-module",
                nextEl: ".next-btn-module"
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
                    slidesPerView: 4,
                },
            }
        });
    }
    if($(".waree__info_slider").length) {
        const wareeInfoSlider = new Swiper('.waree__info_slider', {
            clickable:'true',
            slidesPerView: "1",
            // loop: true,
            navigation: {
                prevEl: ".prev-btn-info",
                nextEl: ".next-btn-info"
            },
            pagination: {
                el: ".waree__info-pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                     pagination: {
                        el: ".waree__info-pagination",
                        clickable: true,
                    },
                },
                992: {
                    slidesPerView: 3,
                },
            }
        });
    }
    if($(".focus__item_slider").length) {
        const focusItemSlider = new Swiper('.focus__item_slider', {
            clickable:'true',
            slidesPerView: "1",
            // loop: true,
            navigation: {
                prevEl: ".prev-btn-focus",
                nextEl: ".next-btn-focus"
            },
             pagination: {
                el: ".focus__item_pagination",
                clickable: true,
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
                    slidesPerView: 4,
                },
            }
        });
    }

     if($(".foundation__focus__item_slider").length) {
        const focusItemSlider = new Swiper('.foundation__focus__item_slider', {
            clickable:'true',
            slidesPerView: "1",
            // loop: true,
            navigation: {
                prevEl: ".prev-btn-focus",
                nextEl: ".next-btn-focus"
            },
             pagination: {
                el: ".focus__item_pagination",
                clickable: true,
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

    if($(".grp__company_slider").length) {
        const grpCompanySlider = new Swiper('.grp__company_slider', {
            clickable:'true',
            slidesPerView: "1",
            // loop: true,
            navigation: {
                prevEl: ".prev-btn-grp",
                nextEl: ".next-btn-grp"
            },
            //  pagination: {
            //     el: ".focus__item_pagination",
            //     clickable: true,
            // },
            breakpoints: {
                260: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
            }
        });
    }

    if($(".video__area").length) {
            const $corporateSection = $(".corporate__film_section");
            const videoIs = $corporateSection.find('video')[0];
            const videoOverlay = $(".video__overlay");
        $('.play__btn_wrap').on('click', function(e) {
        e.preventDefault();
        var video = $(this).siblings('video')[0];
        video.play();
        $(this).hide();
        videoOverlay.hide();
        });

        $("#video-about").on('click', function() {
        if (videoIs && !videoIs.paused) {
        videoIs.pause();
        videoOverlay.show();
        $('.play__btn_wrap').show();
        }
    });

        function isInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0
        );
    }

        $(window).on('scroll', function() {
        if (!isInViewport(videoIs)) {
        if (!videoIs.paused) {
            videoIs.pause();
            videoOverlay.show();
            $('.play__btn_wrap').show();
        }
        }
    });
    }

    if ($('.value__tab').length) {
          $(' .value__tab').on("click",function(e){ 
              e.preventDefault(); 
              $(".value__tab_data").removeClass('tab-active');
              $(".value__tab_data[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
              $(".value__tab").removeClass('active');
              $(this).addClass('active');
          });
        }

    //     if($(".legacy__item_slider").length) {
    //     const legacyItemSlider = new Swiper('.legacy__item_slider', {
    //         // clickable:'true',
    //         // slidesPerView: "1",
    //         effect: "fade",
    //         loop: true,
    //         // navigation: {
    //         //     prevEl: ".prev-btn-legacy",
    //         //     nextEl: ".next-btn-legacy"
    //         // },
    //     });
    // } 

    if($(".legacy_list_slider").length) {
        const legacyListSlider = new Swiper('.legacy_list_slider', {
            clickable:'true',
            slidesPerView: "1",
            loop: true,
            grabCursor: true,
            navigation: {
                prevEl: ".prev-btn-legacy",
                nextEl: ".next-btn-legacy"
            },
            //  pagination: {
            //     el: ".focus__item_pagination",
            //     clickable: true,
            // },
            breakpoints: {
                220: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 100,
                },
            }
        });
        const legacyItemSlider = new Swiper('.legacy__item_slider', {
                      loop: true,
                      grabCursor: true,
                    });
                legacyListSlider.controller.control = legacyItemSlider;
                legacyItemSlider.controller.control = legacyListSlider;
    }


    if($(".video__area").length) {
            const $corporateSection = $(".trusted__section");
            const videoIs = $corporateSection.find('video')[0];
            const videoOverlay = $(".video__overlay");
        $('.play__btn_wrap').on('click', function(e) {
        e.preventDefault();
        var video = $(this).siblings('video')[0];
        video.play();
        $(this).hide();
        videoOverlay.hide();
        });

        $("#video-trusted").on('click', function() {
        if (videoIs && !videoIs.paused) {
        videoIs.pause();
        videoOverlay.show();
        $('.play__btn_wrap').show();
        }
    });

        function isInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0
        );
    }

        $(window).on('scroll', function() {
        if (!isInViewport(videoIs)) {
        if (!videoIs.paused) {
            videoIs.pause();
            videoOverlay.show();
            $('.play__btn_wrap').show();
        }
        }
    });
    }

    // value tab slider
     if($(".value__tab_slider").length) {
        const valueTabSlider = new Swiper('.value__tab_slider', {
            clickable:'true',
            slidesPerView: "1",
            loop: true,
            navigation: {
                prevEl: ".prev-btn-valuetab",
                nextEl: ".next-btn-valuetab"
            },
             pagination: {
                el: ".value__item_pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 2,
                     spaceBetween: 16,
                },
            }
        });
    }

    if($(".brand__slider").length) {
        const recognizedSlider = new Swiper('.brand__slider', {
                slidesPerView: 6,
                spaceBetween: 25,
                loop: true,
                allowTouchMove: false,
                speed: 2000,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
                freeMode: {
                    enabled: true,
                    momentum: false,
                },
                breakpoints: {
                    1200: {
                    slidesPerView: 6
                    },
                    992: {
                    slidesPerView: 5,
                    spaceBetween: 25,
                    },
                    768: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                    },
                    0: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    }
                }
        });
    }


    if($(".brand__slider_rtl").length) {
        const recognizedDownSlider = new Swiper('.brand__slider_rtl', {
                slidesPerView: '6',
                spaceBetween: 25,
                loop: true,
                allowTouchMove: false,
                speed: 2000, 
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                    // reverseDirection: true,
                        clickable:'false',

                },
                freeMode: {
                enabled: true,
                momentum: false,
                },
                breakpoints: {
            1200: {
                slidesPerView: 6
                },
                992: {
                slidesPerView: 5,
                spaceBetween: 25,
                },
                768: {
                slidesPerView: 5,
                spaceBetween: 20,
                },
                0: {
                slidesPerView: 3,
                spaceBetween: 20,
                }
            }
        });
    }

     if ($('.item__tab__event').length) {
          $(' .item__tab__event').on("click",function(e){ 
              e.preventDefault(); 
              $(".event_list_wrapper").removeClass('tab-active');
              $(".event_list_wrapper[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
              $(".item__tab__event").removeClass('active');
              $(this).addClass('active');
          });
        }

     // upcoming webniar
     if($(".upcoming_webinars_slider").length) {
        const upcomingSlider = new Swiper('.upcoming_webinars_slider', {
            clickable:'true',
            slidesPerView: "1",
            // loop: true,
            navigation: {
                prevEl: ".prev-btn-webinar",
                nextEl: ".next-btn-webinar"
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
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 3,
                     spaceBetween: 40,
                },
            }
        });
    }

     // domestic location slider
     if($(".location_slider").length) {
        const locationSlider = new Swiper('.location_slider', {
            clickable:'true',
            slidesPerView: "1",
            // loop: true,
            navigation: {
                prevEl: ".prev-btn-location",
                nextEl: ".next-btn-location"
            },
            //  pagination: {
            //     el: ".focus__item_pagination",
            //     clickable: true,
            // },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 2,
                     spaceBetween: 16,
                },
            }
        });
    }

     // Internation location slider
     if($(".int_location_slider").length) {
        const intlocationSlider = new Swiper('.int_location_slider', {
            clickable:'true',
            slidesPerView: "1",
            // loop: true,
            navigation: {
                prevEl: ".prev-btn-ilocation",
                nextEl: ".next-btn-ilocation"
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
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 2,
                     spaceBetween: 16,
                },
            }
        });
    }

     // EPC slider
     if($(".epc__slider").length) {
        const epcSlider = new Swiper('.epc__slider', {
            clickable:'true',
            slidesPerView: "1",
            // loop: true,
            navigation: {
                prevEl: ".prev-btn-epc",
                nextEl: ".next-btn-epc"
            },
            //  pagination: {
            //     el: ".focus__item_pagination",
            //     clickable: true,
            // },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                600: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                992: {
                    slidesPerView: 1.12,
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 1.12,
                    spaceBetween: 16,
                },
            }
        });
    }


     // faq tab slider
     if($(".faqtab__slider").length) {
        const epcSlider = new Swiper('.faqtab__slider', {
            clickable:'true',
            slidesPerView: "1",
            // loop: true,
            navigation: {
                prevEl: ".prev-btn-faq",
                nextEl: ".next-btn-faq"
            },
             pagination: {
                el: ".faqtab_pagination",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
            }
        });
    }

    if ($('.faq__tab').length) {
          $(' .faq__tab').on("click",function(e){ 
              e.preventDefault(); 
              $(".faq__tab_data").removeClass('tab-active');
              $(".faq__tab_data[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
              $(".faq__tab").removeClass('active');
              $(this).addClass('active');
          });
        }

    // faq tab accordion
      if ($('.single_faq').length) {
            if ($('.single_faq.active').length === 0) {
                $('.single_faq:first-child').addClass('active').find('.faq_content__wrap').slideDown();
            }
            
            $('.single_faq .faq_title').on('click', function () {
                const $faqItem = $(this).closest('.single_faq');
                if (!$faqItem.hasClass('active')) {
                    $('.single_faq').removeClass('active');
                    $('.faq_content__wrap').slideUp();
                    $faqItem.addClass('active');
                    $faqItem.find('.faq_content__wrap').slideDown();
                }
            });
        }


})(jQuery);