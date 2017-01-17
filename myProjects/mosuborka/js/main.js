$(document).ready(function(){

  //Compare Slider
  var compareSlider = $('.compare .compare-slider');
	compareSlider .bxSlider({
	    mode: 'fade',
		speed: 500,
		slideWidth: 1170,
		touchEnabled:false
	});

	$("#slider").slider({
	  range: "min",
      min: 0,
      max: 500,
      value: 294,
      step: 1,
      slide: function( event, ui ) {
        $( "form input.razmer" ).val( ui.value );
        $('#slider .ui-slider-handle').html('<span>' + ui.value + '</span>');
      }
    });
    $('#slider .ui-slider-handle').html('<span>294</span>');

	$(".phone-inp").mask("+7 (999) 999-99-99");

	$('input, textarea').click(function(){
		$(this).css({"box-shadow": "none"});
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
        $(".politics-popup").animate({"opacity":0}, 400);
        $(".opacity").animate({"opacity":0}, 200);
        $(".opacity, #parent_popup, .politics-popup").hide();
        $('body').css({'overflow-y':'auto'});
    });

    var date = moment().add(1,'days').format('D MMMM');
	$('.date').html(date);

 	//Reviews carousel
    if (($(window).width()) > 1199) {

		$("#carousel").featureCarousel({
	        largeFeatureWidth: 160,
			largeFeatureHeight: 160,
			smallFeatureWidth: 0.80,
			smallFeatureHeight: 0.79,
			smallFeatureOffset: 16,
			sidePadding: -380
	    });
	}

    if ((($(window).width()) < 1200) && (($(window).width()) > 620))  {

			$("#carousel").featureCarousel({
	        largeFeatureWidth: 160,
			largeFeatureHeight: 160,
			smallFeatureWidth: 0.80,
			smallFeatureHeight: 0.79,
			smallFeatureOffset: 16,
			sidePadding: -180
	    });

	}
		

	
});	
$(window).load(function(){
	$('select').each(function(){
		$('select').selectBox({
    		mobile: true,
		});
	});
});