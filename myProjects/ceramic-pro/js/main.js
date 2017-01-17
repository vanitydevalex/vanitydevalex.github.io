$(document).ready(function(){

	$(".open-certificates").fancybox({
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

	$('.level-wrp .item .button').click(function(){
		var levels = $(this).parent().find('h2').text();
    	$('.dialogs .order-form input.levels').val(levels);
    });

	$(".phone-inp").mask("+7 (999) 999-99-99");

    $('input, textarea').click(function(){
        $(this).css({"box-shadow": "none"});
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

    $('.open-callback-form').click(function(){
        $(".opacity").show();
        $(".opacity").animate({"opacity":1}, 200);
        $(".callback-form").show();
        $(".callback-form").animate({"opacity":1}, 400);
        $('body').css({'overflow-y':'hidden'});
        return false;
    });
      
    $(".opacity, .close").click(function() {
        $(".politics-popup, .order-form, .callback-form").animate({"opacity":0}, 400);
        $(".opacity").animate({"opacity":0}, 200);
        $(".opacity, #parent_popup, .politics-popup, .order-form, .callback-form").hide();
        $('body').css({'overflow-y':'auto'});
    });

    $('select').each(function(){
        $('select').selectBox({
            mobile: true,
        });
    });
	
});	
$(window).load(function(){

	$('.jquery-comparison.comp1').comparison();
});
