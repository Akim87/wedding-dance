$(".header__menu-burger, .menu__item").click(function() {
	$(".menu").toggleClass("menu--active");
	$(this).toggleClass("header__menu-burger--active");
});