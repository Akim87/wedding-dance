/*============ HEADER MOBILE MENU ============*/

$(".header__menu-burger, .menu__link, .menu__btn").click(function () {
  $(".menu").toggleClass("menu--active");
  $(".header__menu-burger").toggleClass("header__menu-burger--active");
  $("body").toggleClass("fixed");
});

/*============ HEADER SCROLL SHADOW ============*/

$(function () {
  $(window).scroll(function () {
    var winTop = $(window).scrollTop();
    if (winTop >= 50) {
      $("header").addClass("header--shadowed");
    } else {
      $("header").removeClass("header--shadowed");
    }
  });
});

/*============ SECTION SERVICE SLIDER ============*/

// $(document).ready(function() {
// 	$('.services__slider').slick({
// 		mobileFirst: true,
// 		arrows: false,
// 		slidesToShow: 1.2,
// 		infinite: false,
// 		adaptiveHeight: true,
// 		dots: true,
// 		responsive: [
// 			{
// 				breakpoint: 740,
// 				settings: 'unslick'
// 			}
// 		]
// 	});
// });

/*============ SECTION COACHES SLIDER ============*/

$(document).ready(function () {
  $(".coaches__inner")
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
    })
    .on("afterChange", function (event, slick, currentSlide) {
      $(".coaches__counter").text(currentSlide + 2 + " из " + slick.slideCount);
    });
  var slick = $(".coaches__inner").slick("getSlick");
  $(".coaches__counter").text(
    slick.currentSlide + 2 + " из " + slick.slideCount
  );
});

// $(window).resize(function() {
// 	console.log(document.documentElement.clientWidth)
// 	if(document.documentElement.clientWidth < 760) {
// 		$('.services__inner').toggleClass('services__slider')
// 	}
// })

$(window).on("load resize orientationchange", function () {
  $(".services__inner").each(function () {
    var $slider = $(this);
    if (document.documentElement.clientWidth > 760) {
      if ($slider.hasClass("slick-initialized")) {
        $slider.slick("unslick");
      }
    } else {
      if (!$slider.hasClass("slick-initialized")) {
        $slider.slick({
					mobileFirst: true,
					arrows: false,
					slidesToShow: 1.2,
					infinite: false,
					adaptiveHeight: true,
					dots: true,
					responsive: [
						{
							breakpoint: 740,
							settings: 'unslick'
						}
					]
				});
      }
    }
  });
});
