$(document).ready(function() {
					 
	var compareSlider = $('.compare .compare-slider');
	compareSlider .bxSlider({
	    mode: 'fade',
		speed: 500,
		slideWidth: 970,
		touchEnabled:false,
	    nextSelector: '.compare .next',
	    prevSelector: '.compare .prev',
	});

	$("nav ul li a").click(function (){
		var id = $(this).attr("href");
		var pos = ($(id).position().top);
		$("html, body").animate({scrollTop: pos }, 1000);
		return false;
	});

	$(".phone-inp").mask("+7 (999) 999-99-99");

	$('input, textarea').click(function(){
		$(this).css({"box-shadow": "none"});
	});

	$('.services .item .button').click(function(){
		var ordername = $(this).parent().find('h4').text();
		$('.dialogs .order-form h2').text(ordername);
		$('.dialogs .order-form input.order-type').val(ordername);
	});

	$('.open-order-form').click(function(){
        $(".opacity").show();
        $(".opacity").animate({"opacity":1}, 200);
        $(".order-form").show();
        $(".order-form").animate({"opacity":1}, 400);
        $('body').css({'overflow-y':'hidden'});
        return false;
    });

    $('.open-politics').click(function(){
        $(".opacity").show();
        $(".opacity").animate({"opacity":1}, 200);
        $(".politics-popup").show();
        $(".politics-popup").animate({"opacity":1}, 400);
        $('body').css({'overflow-y':'hidden'});
        return false;
    });
      
    $(".opacity, .close").click(function() {
        $(".politics-popup, .order-form").animate({"opacity":0}, 400);
        $(".opacity").animate({"opacity":0}, 200);
        $(".opacity, #parent_popup, .politics-popup, .order-form").hide();
        $('body').css({'overflow-y':'auto'});
    });

	if (($(window).width()) < 1200) {
        $('nav').click(function(){
            $(this).find('ul').slideToggle();
            $('section, footer, nav ul li a, header .main-wrp').click(function(){
              $('nav ul').slideUp();
            });
        });
    }

	if (($(window).width()) > 1199) {
		$('.certificate .certificate-slider').bxSlider({
			speed: 800,
			slideWidth: 195,
			touchEnabled:false,
			slideMargin: 35,
			minSlides: 4,
			maxSlides: 4,
			moveSlides: 1
		});
	}

	if ((($(window).width()) < 1200) && (($(window).width()) > 880))  {
		$('.certificate .certificate-slider').bxSlider({
			speed: 800,
			slideWidth: 195,
			touchEnabled:false,
			slideMargin: 35,
			minSlides: 3,
			maxSlides: 3,
			moveSlides: 1
		});
	}
	if ((($(window).width()) < 880) && (($(window).width()) > 640)) {
		$('.certificate .certificate-slider').bxSlider({
			speed: 800,
			slideWidth: 195,
			touchEnabled:false,
			slideMargin: 35,
			minSlides: 2,
			maxSlides: 2,
			moveSlides: 1
		});
	}
	if (($(window).width()) < 640) {
		$('.certificate .certificate-slider').bxSlider({
			speed: 800,
			slideWidth: 195,
			touchEnabled:false,
			slideMargin: 35,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1
		});
	}

	$(".fancybox-c").fancybox({
		padding: 0,
		openEffect : 'elastic',
		openSpeed  : 600,
		closeEffect : 'elastic',
		closeSpeed  : 600,
		closeClick : true,
		helpers : {
			overlay : {
				speedOut : 0
			}
		}
	});
});	











