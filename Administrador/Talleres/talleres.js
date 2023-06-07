$(document).ready(main);
$(document).ready(fixed);
$(document).ready(miMenu);

var contador = 1;

function main() {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else{
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
			
		}
	});
};

function fixed(){
	var alt = $('.menu_bar').offset().top;

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > alt) {
			$('.menu_bar').addClass('menu_fixed');
		} else{
			$('.menu_bar').removeClass('menu_fixed');
		}
	});
}

/*function miMenu(){
	var alt = $('.miMenu').offset().top;
	alert(alt);

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > alt) {
			$('.miMenu').addClass('miMenu');
		} else{
			$('.miMenu').removeClass('miMenu');
		}
	});
}*/