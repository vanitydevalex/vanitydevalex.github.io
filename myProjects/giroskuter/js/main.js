$(document).ready(function(){

	var date = moment().add(3,'days').format('D MMMM');
    $('.date').text(date);

	var names = ['Роман <br>только что купил', 'Сергей Логинов <br>только что купил', 'Татьна Данченко <br>только что купила', 'Никита Барковский <br>только что купил', 'Виктор <br>только что купил', 'Станислав Яковлев <br>только что купил', 'Дмитрий Полозов <br>только что купил', 'Карина <br>только что купила', 'Дамир Соколов <br>только что купил', 'Владимир Гринько <br>только что купил'];
	var models = $('.product-wrp .item .name').map(function(){
        	return $.trim($(this).text());
    	}).get();
	var i = 0;
	var time = 60000;

	var timerId = setTimeout(function tick() {
	  	var number = Math.floor(Math.random() * models.length) + 1;
		$('.top-line .info-box-wrp .name').html(names[i]);
		$('.top-line .info-box-wrp .model').text(models[number]);
	  	$('.top-line .info-box-wrp').slideDown();
	  	setTimeout(function() { 
	  		$('.top-line .info-box-wrp').slideUp();
	  	}, 5000);
	  	if (i % 2 == 0 && i !=0 ) {
	  		time=time*2;
	  	}
	  	timerId = setTimeout(tick, time);
	  	i++;
	  	if (i>names.length) {i=0;}
	}, 30000);

	// setInterval(function() {
	// 	var number = Math.floor(Math.random() * models.length) + 1;
	// 	$('.top-line .info-box-wrp .name').html(names[i]);
	// 	$('.top-line .info-box-wrp .model').text(models[number]);
	//   	$('.top-line .info-box-wrp').slideDown();
	//   	setTimeout(function() { 
	//   		$('.top-line .info-box-wrp').slideUp();
	//   	}, 5000);
	//   	i++;
	//   	if (i>names.length) {i=0;}
	// }, 30000);

  	$('.sandwich').click(function(){
	    $('.top-line').find('ul').slideToggle();
	    $('section, footer, nav ul li a').click(function(){
	        $('nav ul').slideUp();
	    });
    });

	$("a.smooth, nav ul li a").click(function (){
		var id = $(this).attr("href");
		var pos = ($(id).position().top)-60;
		$("html, body").animate({scrollTop: pos }, 1000);
		return false;
	});

	$(".phone-inp").mask("+7 (999) 999-99-99");

	var autoWidth = $('.help .item').width();
	$('.help .item').css({'height':autoWidth});

		$('.order-popup .pager-custom a').click(function(){
		$('.order-popup .pager-custom a').removeClass('active');
		$(this).addClass('active');
		var value = $(this).html();
		$('.order-popup form').val(value);
	});


	$('.product .tabs-wrp .tab').click(function(){
        var capsulessort = $(this).attr('class').split(' ')[1];
        $('.product .tabs-wrp .tab').removeClass('active');
        $('.product .product-wrp .item').hide();
        $('.product .tabs-wrp .' + capsulessort).addClass('active');
        $('.product .product-wrp .item.' + capsulessort).show();
    });

	$(".youtube-videos").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		padding		: 0
	});

	if (($(window).width()) > 1199){
		// reviews slider
	  	$('.reviews .reviews-slider').bxSlider({
		    mode: 'vertical',
			speed: 500,
			slideWidth: 1030,
			touchEnabled:false,
			slideMargin: 50
		});
	}

	if ((($(window).width()) < 1200) && (($(window).width()) > 880)) {
		// reviews slider
	  	$('.reviews .reviews-slider').bxSlider({
		    mode: 'vertical',
			speed: 500,
			slideWidth: 1030,
			touchEnabled:false,
			slideMargin: 50
		});
	}

	if ((($(window).width()) < 880) && (($(window).width()) > 300)){

		$('.reviews .reviews-slider').bxSlider({
		    mode: 'horizontal',
			speed: 500,
			slideWidth: 1030,
			touchEnabled:false,
			slideMargin: 50
		});
	}

	// answer
	$('.answer-wrp .text').slideUp();
	$('.answer-wrp h4, .answer-wrp .arrow-ico').click(function(){
		$(this).closest('.item').toggleClass('active');
		$(this).parent().find('.text').slideToggle();
	});

	//pop-up

	$('.product-wrp .item .button, .product-wrp .item .img, .product-wrp .item .name').click(function(){
		var model = $(this).closest('.item').attr('class').split(' ')[1];
		var pager = '.order-popup.' + model + ' .pager-custom';

        $(".opacity").show();
        $(".opacity").animate({"opacity":1}, 200);
        $(".order-popup." + model).show();
        $(".order-popup." + model).animate({"opacity":1}, 400);
        $('body').css({'overflow-y':'hidden'});

        var slider = $('.order-popup.' + model + ' .popup-slider');
        slider.bxSlider({
		    mode: 'horizontal',
			speed: 500,
			slideWidth: 430,
			touchEnabled:false,
			pagerCustom: pager,
			infiniteLoop: false
		}); 

		$(".opacity, .close").click(function() {
			slider.goToSlide(0);
		});

        return false;
    });

    $('.politics').click(function(){
        $(".opacity").show();
        $(".opacity").animate({"opacity":1}, 200);
        $(".politics-popup").show();
        $(".politics-popup").animate({"opacity":1}, 400);
        $('body').css({'overflow-y':'hidden'});
        return false;
    });

    $(".opacity, .close").click(function() {
        $(".order-popup, .politics-popup").animate({"opacity":0}, 400);
        $(".opacity").animate({"opacity":0}, 200);
        $(".opacity, #parent_popup, .order-popup, .politics-popup").hide();
        $('body').css({'overflow-y':'auto'});
    });

    $('.dialogs .pager-custom a').click(function(){
    	var color = $(this).text();
    	$(this).closest('.order-popup').find('form .color').val(color);
    });

    $('input, textarea').click(function(){
		$(this).css({"box-shadow": "none"});
	});

    $(window).scroll(function() {
        var top = $('.pluses').offset().top;
        var scroll_top = $(this).scrollTop();
        if (scroll_top > top) {
        	$('.top-line').addClass('active');           
        } else {
            $('.top-line').removeClass('active');       
        }
    });	
});	