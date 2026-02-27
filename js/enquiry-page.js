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

        if ($('.etab__slider').length) {
        var enquiryTabSlider = new Swiper('.etab__slider', {
            slidesPerView: "4",
             pagination: {
                el: ".etab-pagination",
                clickable: true,
            },
             navigation: {
                prevEl: ".prev-btn-etab",
                nextEl: ".next-btn-etab"
            },
            breakpoints: {
                260: {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                },
                600: {
                    slidesPerView: 2,
                    // spaceBetween: 20,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    // spaceBetween: 20,
                },
            },
        });
    }

})(jQuery);