$(".header__menu-burger, .menu__link, .menu__btn").click(function() {
	$(".menu").toggleClass("menu--active");
	$(".header__menu-burger").toggleClass("header__menu-burger--active");
	$("body").toggleClass("fixed");
});

$(document).ready(function(){
  $('.slider').slick({
		mobileFirst: true,
		arrows: false,
		slidesToShow: 1.2,
		infinite: false,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 740,
				settings: "unslick",
			},
		],
  });
});