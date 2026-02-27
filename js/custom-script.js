(function ($) {


        // nav bg on scroll
        if ($(".navbar").length){
           $(window).on('scroll', function() {
            let scroll = $(window).scrollTop();
            if(scroll < 50) {
              $('.navbar').removeClass('fixed-top');
            }
            else {
              $('.navbar').addClass('fixed-top');
            }
           });
           if ($(window).width() >= "1024") {
              $(".nav_toggler").on('click', function(e) {
                e.preventDefault();
                  $('.aside__menu').addClass('active');
                   $('.nav_close').addClass('active');
              });
              $(".nav_close").on('click', function(e) {
                e.preventDefault();
                  $('.aside__menu').removeClass('active');
                   $(this).removeClass('active');
              });
            }
            $('.aside__list .has-dropdown > a').after('<span class="arrow-btn"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>');

        }
        // nav toggle menu
        if ($(window).width() < "1024") {
          $(".nav_toggler").on('click', function(e) {
            e.preventDefault();
            $('.menu').addClass('active');
            $('.nav_close').addClass('active');
            // if ($('.menu').hasClass('active')) {
            //   $('.menu').slideUp().removeClass('active');
            // } else {
            //   $('.menu').slideDown().addClass('active');
            // }
          });
          $(".nav_close").on('click', function(e) {
            e.preventDefault();
               $('.menu').removeClass('active');
               $(this).removeClass('active');
          });


          $('.menu .has-dropdown > a').after('<span class="arrow-btn"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>');
          
           // Handle mega menu visibility
            $('.menu .has-dropdown > .arrow-btn').on("click",function (e) {
                e.preventDefault();
                const $megaMenuWrapper = $(this).siblings('.dropdown');
                if ($megaMenuWrapper.length) {
                $(this).toggleClass('active');
                $megaMenuWrapper.slideToggle(300, function() {
                    if ($megaMenuWrapper.is(':visible')) {
                        $megaMenuWrapper.addClass('show');
                    } else {
                        $megaMenuWrapper.removeClass('show');
                    }
                });
                $(this).parent().siblings().find('.dropdown').slideUp(300).removeClass('show');
                $(this).parent().siblings().find('.arrow-btn').removeClass('active');
                }
            });
          
          $(document).on('click', function(e) {
            var container = $('.menu, .nav_toggle');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
              // $('.menu').slideUp().removeClass('active');
              // $('.has-dropdown > .arrow-btn').removeClass('active');
              // $('.nav_wrapper .dropdown').slideUp(300).removeClass('show');
            }
          });
        }
        // mega menu hover
        if ($(window).width() > "992") {
            $(".menu .has-dropdown").on("mouseenter", function (e) {
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
                $(".mega_menu > li:first-child").addClass("active");
            });
            $(".mega_menu > li").mouseenter(function (e) {
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
            });
            $(".mega_menu > li").mouseleave(function (e) {
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
                $(this).removeClass("active");
                $(".mega_menu > li:first-child").addClass("active");
            });
        }

        // btn hover or mouse enter effect
      
        

        
          const buttons = document.querySelectorAll('.primary_btn');

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


        // img add in background
        if ($('.bg_img').length) {
            $('.bg_img').each(function(){
                const el = $(this),
                src = el.attr('src'),
                parent = el.parent();
                parent.css({
                    'background-image': `url(${src})`,
                    'background-size': 'cover',
                    'background-position': '50% 50%',
                    'background-repeat': 'no-repeat',
                });
                el.hide();
            });
        }





// solar type slider
if ($('.solar__type_slider').length) {
  $('.solar__type_slider').slick({
       dots: false,
       arrows: true,
       infinite: false,
       speed: 400,
       slidesToShow: 4,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 2000,
       pauseOnHover: true,
       pauseOnFocus: true,
       prevArrow: $('.prev-btn-solar'),
       nextArrow: $('.next-btn-solar'),
       responsive: [
        {
          breakpoint: 1200,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
            
       ]
  });
}

        // solar area slider
        if ($('.solar__area_slider').length) {
          $('.solar__area_slider').slick({
              dots: true,
              arrows: true,
              infinite: true,
              speed: 500,
              slidesToShow: 5,
              slidesToScroll: 1,
              centerMode: true,
              autoplay: true,
              autoplaySpeed: 2000,
              pauseOnHover: true,
              pauseOnFocus: true,
              focusOnSelect: true,
              prevArrow: $('.prev-btn'),
              nextArrow: $('.next-btn'),
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1
                  }
              },
              {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
                    
              ]
          });
        }



        if ($('.item__tab').length) {
          $(' .item__tab').on("click",function(e){ 
              e.preventDefault(); 
              $(".item__tab_data").removeClass('tab-active');
              $(".item__tab_data[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
              $(".item__tab").removeClass('active');
              $(this).addClass('active');
              // if($(this).hasClass('active')) {
              //     $('.item__tab .heading').addClass('text-gradient')
              // }
              // else {
              //   $('.item__tab .heading').removeClass('text-gradient')
              // }
              $('.product__slider_for').slick('refresh');
              $('.product__slider_for').slick('setPosition');
              $('.product__slider_nav').slick('refresh');
              $('.product__slider_nav').slick('setPosition');
          });
        }

        // product slider        
        if ($('.product__slider_for_1').length) {
          $('.product__slider_for_1').slick({
              dots: false,
              arrows: false,
              infinite: false,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: true,
              autoplay: false,
              autoplaySpeed: 2000,
              pauseOnHover: true,
              pauseOnFocus: true,
              asNavFor: '.product__slider_nav_1',
              
                responsive: [
                  // {
                  //     breakpoint: 992,
                  //     settings: {
                  //         slidesToShow: 2,
                  //         slidesToScroll: 1
                  //     }
                  // },
                  {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
          });
        }
        if ($('.product__slider_nav_1').length) {
          $('.product__slider_nav_1').slick({
              dots: false,
              arrows: true,
              infinite: false,
              speed: 300,
              slidesToShow: 2,
              slidesToScroll: 1,
              adaptiveHeight: true,
              autoplay: false,
              autoplaySpeed: 2000,
              pauseOnHover: true,
              pauseOnFocus: true,
              asNavFor: '.product__slider_for_1',
              initialSlide: 1,
              prevArrow: $('.prev-btn-product-1'),
              nextArrow: $('.next-btn-product-1'),
              responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 992,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
            ]
          });
        }

        if ($('.product__slider_for_2').length) {
          $('.product__slider_for_2').slick({
              dots: false,
              arrows: true,
              infinite: false,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: true,
              autoplay: false,
              autoplaySpeed: 2000,
              pauseOnHover: true,
              pauseOnFocus: true,
              asNavFor: '.product__slider_nav_2',
              prevArrow: $('.prev-btn-product-2'),
                nextArrow: $('.next-btn-product-2'),
                responsive: [
                  {
                      breakpoint: 992,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
          });
        }
        if ($('.product__slider_nav_2').length) {
          $('.product__slider_nav_2').slick({
              dots: false,
              arrows: false,
              infinite: false,
              speed: 300,
              slidesToShow: 2,
              slidesToScroll: 1,
              adaptiveHeight: true,
              autoplay: false,
              autoplaySpeed: 2000,
              pauseOnHover: true,
              pauseOnFocus: true,
              asNavFor: '.product__slider_for_2',
              initialSlide: 1,
              responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },
                  {
                      breakpoint: 992,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
            ]
          });
        }

        if ($('.product__img_slider_1').length) {
          $('.product__img_slider_1').slick({
              dots: false,
              arrows: false,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              fade: true,
              cssEase: 'linear',
              autoplaySpeed: 1000,
              autoplay: true,
              pauseOnHover: false,
              pauseOnFocus: false,
          });
        }

        if ($('.product__img_slider_2').length) {
          $('.product__img_slider_2').slick({
              dots: false,
              arrows: false,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              fade: true,
              cssEase: 'linear',
              autoplaySpeed: 1000,
              autoplay: true,
              pauseOnHover: false,
              pauseOnFocus: false,
          });
        }



        if($(".video__area").length) {
              const $innovativeSection = $(".innovative__section");
              const videoIs = $innovativeSection.find('video')[0];
              const videoOverlay = $(".video__overlay");
          $('.play__btn_wrap').on('click', function(e) {
            e.preventDefault();
            var video = $(this).siblings('video')[0];
            video.play();
            $(this).hide();
            videoOverlay.hide();
          });

          $("#video-main").on('click', function() {
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

    // category slider
    if ($('.blog__slider').length) {
      $('.blog__slider').slick({
           dots: false,
           arrows: true,
           infinite: false,
           speed: 500,
           slidesToShow: 4,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 2000,
           pauseOnHover: true,
           pauseOnFocus: true,
           prevArrow: $('.prev-btn-blog'),
           nextArrow: $('.next-btn-blog'),
           responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                      slidesToShow: 1.2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
                }
           ]
      });
    }

if ($('.all__sliders').length) {
      $('.all__sliders').slick({
           dots: false,
           arrows: true,
           infinite: false,
           speed: 500,
           slidesToShow: 4,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 2000,
           pauseOnHover: true,
           pauseOnFocus: true,
           prevArrow: $('.prev-btn-alls'),
           nextArrow: $('.next-btn-alls'),
           responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                      slidesToShow: 1.2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
                }
           ]
      });
    }

     if ($('.blog__sliders').length) {
      $('.blog__sliders').slick({
           dots: false,
           arrows: true,
           infinite: false,
           speed: 500,
           slidesToShow: 4,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 2000,
           pauseOnHover: true,
           pauseOnFocus: true,
           prevArrow: $('.prev-btn-blogs'),
           nextArrow: $('.next-btn-blogs'),
           responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                      slidesToShow: 1.2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
                }
           ]
      });
    }

      if ($('.media__sliders').length) {
      $('.media__sliders').slick({
           dots: false,
           arrows: true,
           infinite: false,
           speed: 500,
           slidesToShow: 4,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 2000,
           pauseOnHover: true,
           pauseOnFocus: true,
           prevArrow: $('.prev-btn-medias'),
           nextArrow: $('.next-btn-medias'),
           responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                      slidesToShow: 1.2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
                }
           ]
      });
    }

    
     if ($('.whitepaper__sliders').length) {
      $('.whitepaper__sliders').slick({
           dots: false,
           arrows: true,
           infinite: false,
           speed: 500,
           slidesToShow: 4,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 2000,
           pauseOnHover: true,
           pauseOnFocus: true,
           prevArrow: $('.prev-btn-whitepapers'),
           nextArrow: $('.next-btn-whitepapers'),
           responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                      slidesToShow: 1.2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
                }
           ]
      });
    }

    
     if ($('.case-study__sliders').length) {
      $('.case-study__sliders').slick({
           dots: false,
           arrows: true,
           infinite: false,
           speed: 500,
           slidesToShow: 4,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 2000,
           pauseOnHover: true,
           pauseOnFocus: true,
           prevArrow: $('.prev-btn-case-studys'),
           nextArrow: $('.next-btn-case-studys'),
           responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                  breakpoint: 992,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                      slidesToShow: 1.2,
                      slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
                }
           ]
      });
    }
    

    /*===========================================
	  =   Text color change on scroll animation   =
    =============================================*/

    document.addEventListener("DOMContentLoaded", () => {
      gsap.registerPlugin(ScrollTrigger);
  
        const textElements = document.querySelectorAll(".scroll-color-change");
  
        textElements.forEach(textElement => {
          const text = textElement.textContent;
          textElement.innerHTML = text.split("").map(char => `<span>${char}</span>`).join("");
  
          const chars = textElement.querySelectorAll("span");
  
          gsap.from(chars, {
            scrollTrigger: {
              trigger: textElement,
              start: "top 85%",
              end: "bottom 20%",
              scrub: true,
            },
            color: "rgba(0, 0, 0, 0.25)",
            stagger: 1,
            duration: 1,
          });
        });
      })


      // if ($('.solution__slider').length) {
      //       var solutionSlider = new Swiper('.solution__slider', {
      //           effect: "coverflow",
      //           centeredSlides: true,
      //           slideToClickedSlide: false,
      //           autoplay: {
      //               delay: 50000,
      //               disableOnInteraction: false
      //           },
      //           clickable:'false',
      //           loop: true,
      //           infinite: true,
      //           slidesPerView: "auto",
      //           coverflowEffect: {
      //               rotate: 0,
      //               stretch: 200,
      //               depth: 350,
      //               modifier: 1,
      //               slideShadows: false
      //           },
      //           navigation: {
      //               nextEl: ".prev-btn-solution",
      //               prevEl: ".next-btn-solution"
      //           },
                
                
      //           breakpoints: {
      //           },
      //       });
      //   }

    // if ($('.solution__slider').length) {
    //         var solutionSlider = new Swiper('.solution__slider', {
    //             effect: "coverflow",
    //             centeredSlides: true,
    //             // slideToClickedSlide: false,
    //             // autoplay: {
    //             //     delay: 50000,
    //             //     disableOnInteraction: false
    //             // },
    //             watchSlidesProgress: true,
    //             clickable:'true',
    //             loop: true,
    //             infinite: true,
    //             slidesPerView: "auto",
    //             coverflowEffect: {
    //                 // rotate: 0,
    //                 // stretch: 70,
    //                 // depth: 310,
    //                 // modifier: 1,
    //                 rotate: 0,
    //                 stretch: 10,
    //                 depth: 200,
    //                 modifier: 2.5,
    //                 slideShadows: false
    //             },
    //             navigation: {
    //                 nextEl: ".next-btn-solution",
    //                 prevEl: ".prev-btn-solution"
    //             },
                
                
    //             breakpoints: {
    //                                   '768': {
    //                     coverflowEffect: {
    //                         // rotate: 0,
    //                         // stretch: 200,
    //                         // depth: 200,
    //                         // modifier: 3.5,
    //                         // slideShadows: false
    //                     },
    //                 },

    //             },
    //         });
    //          const contentSwiper = new Swiper('.solution__content_slider', {
    //           loop: true,
    //         });
             
    //         solutionSlider.controller.control = contentSwiper;
    //     contentSwiper.controller.control = solutionSlider;
    //     }
                if ($('.solution__slider').length) {
                    var solutionSlider = new Swiper('.solution__slider', {
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
                            nextEl: ".next-btn-solution",
                            prevEl: ".prev-btn-solution"
                        },
                    });
                    const contentSwiper = new Swiper('.solution__content_slider', {
                      loop: true,
                    });
                    
                    solutionSlider.controller.control = contentSwiper;
                contentSwiper.controller.control = solutionSlider;
                }
     
                 intializeImageSlider();
                  function intializeImageSlider() {
                    $('.product__img_slider').each(function(){
                      let data_key = $(this).attr('data-key');

                        $('.product__img_slider_'+data_key).each(function () {
                          const $slider = $(this);
                          const $images = $slider.find('img');
                          let current = 0;

                          // Show first image and add class
                          $images.eq(current).fadeIn().addClass('active');

                          setInterval(function () {
                            $images.eq(current).fadeOut(1000).removeClass('active');
                            current = (current + 1) % $images.length;
                            $images.eq(current).fadeIn(1000).addClass('active');
                          }, 3000);
                        });
                    });
                  }

})(jQuery);
