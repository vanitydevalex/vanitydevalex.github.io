$(document).ready(function(){

	$(".phone-inp").mask("+38 (999) 999-99-99");

	$('input.phone').click(function(){
		$(this).css({"background": "none"});
	});

	$('input, textarea').click(function(){
		$(this).css({"box-shadow": "none"});
	});
	$("a.smooth").click(function (){
		var id = $(this).attr("href");
		var pos = ($(id).position().top);
		$("html, body").animate({scrollTop: pos }, 1000);
		return false;
	});


	$('.practice .roof-slider').bxSlider({
	    mode: 'vertical',
		speed: 800,
		// auto:true,
		slideWidth: 1920,
		touchEnabled:true
	});
	$('.reviews .reviews-slider').bxSlider({
	    mode: 'horizontal',
		speed: 800,
		// auto:true,
		slideWidth: 830,
		touchEnabled:true
	});

	 var roofPrice = "30";
	 var totalPrice = 0;
	 var roomSquare = 0;
	 var lamps = 0; 
	 $("#slider-range").slider({
	  range: "min",
      min: 0,
      max: 300,
      value: 150,
      step: 1,
      slide: function( event, ui ) {   
        roomSquare = ui.value;
        $('#slider-range .ui-slider-handle').html('<span>' + ui.value + ' м<sup class="square">2</sup></span>');
        $('#slider-range .ui-slider-handle').append("<p class=room>Площадь комнаты</p>");
        calculatePtice();
      }
    });

	 //Определем какой таб активный
	// и соответсвенно отображаем нужный блок с цветами
	var colorsWrapClass = "c1";

	$('.catalog .tabs-wrp .tab').removeClass('active');
    $('.catalog .colors-wrp').hide();
    $('.catalog .tabs-wrp .' + colorsWrapClass).addClass('active');
    $('.catalog .colors-wrp.' + colorsWrapClass).show();

    $('.catalog .tabs-wrp .tab').click(function(){
        var colorsWrapSort = $(this).attr('class').split(' ')[1];
        $('.catalog .tabs-wrp .tab').removeClass('active');
        $('.catalog .colors-wrp').hide();
        $('.catalog .tabs-wrp .' + colorsWrapSort).addClass('active');
        $('.catalog .colors-wrp.' + colorsWrapSort).show();
        if ($(this).hasClass("c1")){
        	$(".selectBox-dropdown-menu li").removeClass("selectBox-selected");
        	$(".selectBox-dropdown-menu :nth-child(1)").attr("class","selectBox-selected");
        	$(".selectBox-label").html("Глянцевый");
        }
        if ($(this).hasClass("c2")){
        	$(".selectBox-dropdown-menu li").removeClass("selectBox-selected");
        	$(".selectBox-dropdown-menu :nth-child(2)").attr("class","selectBox-selected");
        	$(".selectBox-label").html("Сатиновый");
        }
        if ($(this).hasClass("c3")){
        	$(".selectBox-dropdown-menu li").removeClass("selectBox-selected");
        	$(".selectBox-dropdown-menu :nth-child(3)").attr("class","selectBox-selected");
        	$(".selectBox-label").html("Матовый");
        }
        if ($(this).hasClass("c4")){
        	$(".selectBox-dropdown-menu li").removeClass("selectBox-selected");
        	$(".selectBox-dropdown-menu :nth-child(4)").attr("class","selectBox-selected");
        	$(".selectBox-label").html("Эксклюзив");
        }
  
    });

    // Галлерея 3D
    $(".colors-wrp .colors").click(function(){
    	var colorsSort = $(this).attr("class").split(" ")[1];
    	$(".colors-wrp .colors").removeClass("active");
    	$(".colors-wrp .colors." + colorsSort).addClass("active");
    	$(".catalog-wrp .img img").attr("src","img/catalog-"+colorsSort+".jpg");

    });

	 $('select.roofType').on('change',function() {
	 	$('.catalog .tabs-wrp .tab').removeClass('active');
        roofPrice = $(this).val();
        if (roofPrice === "30"){
        	$('.catalog .tabs-wrp .c1').addClass('active');
        	$('.catalog .colors-wrp').hide();
        	$('.catalog .colors-wrp.c1').show();
        }
        if (roofPrice === "40"){
        	$('.catalog .tabs-wrp .c2').addClass('active');
        	$('.catalog .colors-wrp').hide();
        	$('.catalog .colors-wrp.c2').show();
        }
        if (roofPrice === "50"){
        	$('.catalog .tabs-wrp .c3').addClass('active');
        	$('.catalog .colors-wrp').hide();
        	$('.catalog .colors-wrp.c3').show();
        }
        if (roofPrice === "60"){
        	$('.catalog .tabs-wrp .c4').addClass('active');
        	$('.catalog .colors-wrp').hide();
        	$('.catalog .colors-wrp.c4').show();
        }
        calculatePtice();
    });

	 //Расчет общей стоимости
	 function calculatePtice(){
	 	
	 	totalPrice = roomSquare*roofPrice + (lamps*50);

	 	$('.totalcalc').text((totalPrice.toFixed()).replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1"));
	 }
	 // При вводе данных в input фомула считается с учетом ламп
	  $("input.lamp-input").change(function(){
             lamps =$("input.lamp-input").val();
            calculatePtice();
       });
	 
     // При отмеченом чекбоксе появляется блок и input     
	 $( ".lamp-check" ).on( "click", function() {
            if($(this).is(":checked")) {
            	$(".lamps").css({"display":"block"});
            }
   		else {
   			$(".lamps").css({"display":"none"});
   		}
	});

	 if (($(window).width()) > 1199) {
		$('.certificate .certificate-slider').bxSlider({
			speed: 800,
			slideWidth: 241,
			touchEnabled:false,
			slideMargin: 55,
			minSlides: 3,
			maxSlides: 3,
			moveSlides: 1
		});
	}

	if ((($(window).width()) < 1200) && (($(window).width()) > 880))  {
		$('.certificate .certificate-slider').bxSlider({
			speed: 800,
			slideWidth: 241,
			touchEnabled:false,
			slideMargin: 55,
			minSlides: 2,
			maxSlides: 2,
			moveSlides: 1
		});
	}
	if ((($(window).width()) < 880) && (($(window).width()) > 640)) {
		$('.certificate .certificate-slider').bxSlider({
			speed: 800,
			slideWidth: 241,
			touchEnabled:false,
			slideMargin: 55,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1
		});
	}
	if ((($(window).width()) < 640)) {
		$('.certificate .certificate-slider').bxSlider({
			speed: 800,
			slideWidth: 241,
			touchEnabled:false,
			slideMargin: 55,
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
	
	$('.open-request-form').click(function(){
        $(".opacity").show();
        $(".opacity").animate({"opacity":1}, 200);
        $(".request-form").show();
        $(".request-form").animate({"opacity":1}, 400);
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
        $(".politics-popup,.order-popup,.request-form").animate({"opacity":0}, 400);
        $(".opacity").animate({"opacity":0}, 200);
        $(".opacity, #parent_popup, .politics-popup,.request-form").hide();
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