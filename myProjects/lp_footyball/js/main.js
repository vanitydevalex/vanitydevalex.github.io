$(document).ready(function(){

    var percentcapital = parseInt($('.percent-capital').text());
    var percenteverymonth = parseInt($('.percent-everymonth').text());
    $('.percent-rate').html(percentcapital);

	$(".phone-inp").mask("+7 (999) 999-99-99");

	$('input, textarea').click(function(){
		$(this).css({"box-shadow": "none"});
	});

	$('input.phone').click(function(){
		$(this).css({"background": "none"});
	});
	
    $(".mark .tabs-wrp .tab").click(function(){
        $(this).addClass("active").siblings().removeClass('active');
        // Выделяет все классы с помощью attr
        //и с помощью split вырезает указанный класс по индексу
        tab = $(".mark .tabs-wrp .tab.active").attr('class').split(' ')[1];
        if (tab === 'capitalization') {
            $('.percent-rate').html(percentcapital);
        }
        if (tab === 'everymonth') {
            $('.percent-rate').html(percenteverymonth);
        }
        calculate();
    });

    var vklad = 0;
    var month = '6';
    var percent = 22;
    var monthpercent = percent/12;
    var amount = 0;
    var amount2 = 0;
    var tab = '';


	$("#slider").slider({
	  range: "min",
      min: 300000,
      max: 5000000,
      value: 1500000,
      step: 10000,
      slide: function( event, ui ) {   
        $( "input.vklad" ).val(ui.value);
        vklad = ui.value;
        // $('#slider .ui-slider-handle').html('<span>' + ui.value + '</span>');
        calculate();
      }
    });

    // Изменение местоположения ползунка при вводе данных в input
          $("input.vklad").change(function(){
            var value1=$("input.vklad").val();
                value1 = parseInt(value1);
                $("input.vklad").val(value1);
            $("#slider").slider("value",value1);
            vklad = value1;
            calculate();
          });

    $('select.month').on('change',function() { 
        month = $(this).val();
        calculate();
    });


    function calculate() {
        tab = $(".mark .tabs-wrp .tab.active").attr('class').split(' ')[1];
        if (tab === 'capitalization') {
            percent = percentcapital;
            monthpercent = percent/12;
            for (var i = 0; i < month; ++i) {
                if (i===0) {amount2=vklad;}
                amount2 = amount2 + (amount2/100*monthpercent);
                amount = amount2 - vklad;
            }
        }
        if (tab === 'everymonth') {
            percent = percenteverymonth;
            monthpercent = percent/12;
            amount = vklad/100*monthpercent*month;
        }
        $('.totalcalc').text((amount.toFixed()).replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1"));
        $('.monthcalc').text(((amount/month).toFixed()).replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1"));
    }
    
	var opinionSlider = $('.opinion .opinion-slider');
	opinionSlider.bxSlider({
	    mode: 'fade',
		speed: 800,
		slideWidth: 1170,
		touchEnabled:false
	});

	var reviewsSlider = $('.reviews .reviews-slider');
	reviewsSlider.bxSlider({
	    mode: 'fade',
		speed: 800,
		slideWidth: 1170,
		touchEnabled:false
	});

	$('.open-callback').click(function(){
        $(".opacity").show();
        $(".opacity").animate({"opacity":1}, 200);
        $(".callback-form").show();
        $(".callback-form").animate({"opacity":1}, 400);
        $('body').css({'overflow-y':'hidden'});
        return false;
    });

	$('.open-meeting').click(function(){
        $(".opacity").show();
        $(".opacity").animate({"opacity":1}, 200);
        $(".meeting-form").show();
        $(".meeting-form").animate({"opacity":1}, 400);
        $('body').css({'overflow-y':'hidden'});
        return false;
    });

    $('.open-team').click(function(){
        $(".opacity").show();
        $(".opacity").animate({"opacity":1}, 200);
        $(".invest-form").show();
        $(".invest-form").animate({"opacity":1}, 400);
        $('body').css({'overflow-y':'hidden'});
        return false;
    });

    $('.open-excursion').click(function(){
        $(".opacity").show();
        $(".opacity").animate({"opacity":1}, 200);
        $(".excursion-form").show();
        $(".excursion-form").animate({"opacity":1}, 400);
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
        $(".politics-popup, .meeting-form,.callback-form, .invest-form,.excursion-form").animate({"opacity":0}, 400);
        $(".opacity").animate({"opacity":0}, 200);
        $(".opacity, #parent_popup, .politics-popup,.callback-form,.meeting-form, .invest-form,.excursion-form").hide();
        $('body').css({'overflow-y':'auto'});
    });

	
});	

$(window).load(function(){
	$('select').each(function(){
		$('select').selectBox({
    		mobile: true,
		});
	});
    // $('#slider .ui-slider-handle').html('<span>1500000</span>');
});