var current = 0;
var imagenes = new Array();


 
$(document).ready(function() {
    var alt = screen.width;
    var numImages = 5;
        
        if (alt <= 650) {
            numImages = 6;
        } else if (alt <= 450){
            numImages = 7;
        }

    if (numImages <= 2) {
        $('.adelante').css('display', 'none');
        $('.atras').css('display', 'none');
    }
 
    $('.atras').on('click',function() {
        if (current > 0) {
            current = current - 1;
        } else {
            current = numImages - 2;
        }
 
        $(".carrusel").animate({"left": -($('#slider_'+current).position().left)}, 600);
 
        return false;
    });
 
    $('.atras').on('hover', function() {
        $(this).css('opacity','0.5');
    }, function() {
        $(this).css('opacity','1');
    });
 
    $('.adelante').on('hover', function() {
        $(this).css('opacity','0.5');
    }, function() {
        $(this).css('opacity','1');
    });
 
    $('.adelante').on('click', function() {
        if (numImages > current + 2) {
            current = current+1;
        } else {
            current = 0;
        }
 
        $(".carrusel").animate({"left": -($('#slider_'+current).position().left)}, 600);
 
        return false;
    }); 
 });