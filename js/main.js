jQuery(document).ready(function($) {
	
   'use strict';
   
       
	//FULLSCREEN SLIDER
	$('#slides').superslides({
      animation: 'fade'
   });

	
	//MAGNIFIC POPUP LIGHTBOX
	 $('.image-link').magnificPopup({type:'image'});
    
	
  
	//ANIMATIONS
  	new WOW().init();
  
 
}); 

$(window).load(function(){
	
	//PARALLAX BACKGROUND
	$(window).stellar({
		horizontalScrolling: false,
	});
    
	
    //PRELOADER
    $('.preload').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow-y':'visible'});

	});

	//HEADER ANIMATION
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

