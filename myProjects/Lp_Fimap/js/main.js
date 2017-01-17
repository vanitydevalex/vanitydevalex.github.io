$(document).ready(function(){

	$(".phone-inp").mask("+7 (999) 999-99-99");

	$('input, textarea').click(function(){
		$(this).css({"box-shadow": "none"});
	});
	var  descriptionSlider = $('.description .description-slider');
	descriptionSlider.bxSlider({
	    mode: 'horizontal',
		speed: 800,
		// auto:true,
		slideWidth: 1920,
		slideMargin:0,
		touchEnabled:true,
		onSliderLoad: function() {
            var slidercount = descriptionSlider.getSlideCount();
            var slidercurrent = descriptionSlider.getCurrentSlide();
            $('.description .slider-count').html((slidercurrent + 1) + ' / ' + slidercount);
        },
        onSlideAfter: function() {
            var slidercount = descriptionSlider.getSlideCount();
            var slidercurrent = descriptionSlider.getCurrentSlide();
            $('.description .slider-count').html((slidercurrent + 1) + ' / ' + slidercount);
        }
	});

	var pager;
	var productslider;

    $('.ruler .more').click(function(){
        var model = $(this).attr('class').split(' ')[1];
        pager = '.machine-popup.' + model + ' .pager-custom-img';

        $('.dialogs .popup').removeClass('active').hide();
        $('.machine-popup.'+ model).show();
        $(".dialogs").show();
        $(".dialogs").animate({"opacity":1}, 200, function() {
            $('.machine-popup.'+ model).addClass('active');
        });
        $('body').css({'overflow-y':'hidden'});

        productslider = $('.machine-popup.' + model + ' .product-slider');
        productslider.bxSlider({
            mode: 'horizontal',
            speed: 500,
            slideWidth: 390,
            touchEnabled:false,
            pagerCustom: pager,
            infiniteLoop: true
        });

        $(".dialogs .close, .dialogs .close-bg").click(function() {
            var keeppager = $(pager);
             //productslider.goToSlide(0);
            productslider.destroySlider();
            productslider.after(keeppager);
        });

        return false;
    });

     //Определем какой таб активный
	// и соответсвенно отображаем нужный блок с цветами
	var tabSort = "t2";

	$('.machine-popup .tabs-wrp .tab').removeClass('active');
    $('.machine-popup .text-block').hide();
    $('.machine-popup .tabs-wrp .' + tabSort).addClass('active');
    $('.machine-popup .text-block.' + tabSort).show();

    $('.machine-popup .tabs-wrp .tab').click(function(){
        var tabSort = $(this).attr('class').split(' ')[1];
        $('.machine-popup .tabs-wrp .tab').removeClass('active');
        $('.machine-popup .text-block').hide();
        $('.machine-popup .tabs-wrp .' + tabSort).addClass('active');
        $('.machine-popup .text-block.' + tabSort).show();
  
    });

    $(".fancy-videos").fancybox({
		maxWidth	: 1280,
		maxHeight	: 720,
		fitToView	: false,
		width		: '100%',
		height		: '100%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		padding		: 0,
		//autoPlay	: true,
        helpers: {
            media: true
        },
        youtube: {
            autoplay: 1, // enable autoplay
        }
	});

    $('.open-info-popup').click(function(){
        var category = $(this).attr('class').split(' ')[2];
        $('.dialogs .popup').removeClass('active').hide();
        $('.popup.info-popup.' + category).show();
        $(".dialogs").show();
        $(".dialogs").animate({"opacity":1}, 200, function() {
            $('.popup.info-popup.'+ category).addClass('active');
        });
        $('body').css({'overflow-y':'hidden'});
        return false;
    });

    $('.open-polytic').click(function(){
        $('.dialogs .popup').removeClass('active').hide();
        $('.polytic-popup').show();
        $(".dialogs").show();
        $(".dialogs").animate({"opacity":1}, 200, function() {
            $('.polytic-popup').addClass('active');
        });
        $('body').css({'overflow-y':'hidden'});
        return false;
    });

    $('.example .open-info-popup').click(function(){
         var value = $(this).parent().find('h4').text();
         $('.info-popup.discount').find('.value1').val(value);
    });

    $(".dialogs .close, .dialogs .close-bg").click(function() {
        $('.dialogs .popup').removeClass('active');
        $(".dialogs").animate({"opacity":0}, 200, function() {
            $(".dialogs").hide();
            $('.dialogs .popup').hide();
            $('.dialogs .thanks-popup').hide();
        });
        $('body').css({'overflow-y':'auto'});
    });
      	
});	