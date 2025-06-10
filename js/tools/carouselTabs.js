document.addEventListener("DOMContentLoaded", function () {
  const $carousel = $(".owl-carousel.owl-1");

  // 初始化 Owl Carousel
  $carousel.owlCarousel({
    items: 1,
    loop: false,
    margin: 10,
    nav: true,
    dots: false
  });

  // 點擊 tab 切換到對應 slide
  $(".carousel-nav a").click(function (e) {
    e.preventDefault();
    const index = $(this).index();

    $(".carousel-nav a").removeClass("active");
    $(this).addClass("active");

    $carousel.trigger("to.owl.carousel", [index, 300]);
  });
});
