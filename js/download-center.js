(function ($) {

    if ($('.item__tab').length) {
          $(' .item__tab').on("click",function(e){ 
              e.preventDefault(); 
              $(".item__tab_data").removeClass('tab-active');
              $(".item__tab_data[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
              $(".item__tab").removeClass('active');
              $(this).addClass('active');
          });
        }

        if ($('.dtab__slider').length) {
        var downloadTabSlider = new Swiper('.dtab__slider', {
            clickable:'true',
            loop: true,
            centeredSlides: true,
            slidesPerView: "4",
            //  pagination: {
            //     el: ".dtab-pagination",
            //     clickable: true,
            // },
             navigation: {
                prevEl: ".prev-btn-dtab",
                nextEl: ".next-btn-dtab"
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