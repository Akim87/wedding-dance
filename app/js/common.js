$(".header__menu-burger").click(function() {
	$(".menu").toggleClass("menu--active");
	$(this).toggleClass("header__menu-burger--active");
});