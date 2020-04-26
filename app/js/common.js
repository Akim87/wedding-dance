/*============ HEADER MOBILE MENU ============*/

$(".header__menu-burger, .menu__link, .menu__btn").click(function () {
  $(".menu").toggleClass("menu--active");
  $(".header__menu-burger").toggleClass("header__menu-burger--active");
  $("body").toggleClass("fixed");
});

/*============ HEADER SCROLL SHADOW ============*/

$(window).scroll(function () {
  var winTop = $(window).scrollTop();
  winTop >= 10
    ? $("header").addClass("header--shadowed")
    : $("header").removeClass("header--shadowed");
});

/*============ SECTION SERVICE SLIDER ============*/

$(window).on("load resize", function () {
  var slider = $(".services__inner");
  //срабатывает при загрузке и изменении ширина окна
  if (document.documentElement.clientWidth <= 760) {
    //проверяем ширину (760 у меня уже мобильная версия)
    if (slider.hasClass("slick-initialized")) {
      //проверяем запущенл ли слайдер уже
      return; //если запущен - выходим
    } else {
      //если не запущен - запускаем
      slider.slick({
        arrows: false,
        slidesToShow: 1.2,
        infinite: false,
        adaptiveHeight: true,
        dots: true,
      });
    }
  } else {
    if (slider.hasClass("slick-initialized"))
      //если ширина больше мобильной версии и слайдер включен - выключаем слайдер
      slider.slick("unslick");
  }
});

/*============ SECTION COACHES SLIDER ============*/

$(document).ready(function () {
  $(".coaches__inner")
    .on("init afterChange", function (event, slick) {
      $(".coaches__counter").text(
        slick.currentSlide + 2 + " из " + slick.slideCount
      );
    })
    .slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      adaptiveHeight: true,
      infinite: false,
      arrows: true,
      appendArrows: $(".coaches__navigation"),
      prevArrow: '<button type="button" class="icon icon-back"></button>',
      nextArrow: '<button type="button" class="icon icon-forward"></button>',
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToScroll: 1,
            arrows: false,
            slidesToShow: 1.2,
            dots: true,
          },
        },
      ],
    });
});
