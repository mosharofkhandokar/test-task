(function ($) {
  "use strict";

  function thmSwiperInit() {
    // swiper slider
    const swiperElm = document.querySelectorAll(".main-slider__option");
    swiperElm.forEach(function (swiperelm) {
      const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
      let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
    });
  }
  $(window).on("load", function () {
    thmSwiperInit();

    if ($(".curved-circle--item").length) {
        $(".curved-circle--item").circleType({
            radius: 80
        });
    }
  });

})(jQuery);
