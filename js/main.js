$(function () {
	$('.slider').slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: 3000
	});
	// Для поиска классов пиши $
	$('.header-btn').on('click', function () {
		// Добавление класса при клике
		$('.menu').addClass('active');
	});

	$('.close__btn').on('click', function () {
		// Удаление класса при клике

		$('.menu').removeClass('active');
	})


});


