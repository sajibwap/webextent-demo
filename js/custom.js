
        
(function($){
    $( document ).ready(function() {

    /* RESPONSIVE MENU */
    
        $(function() {
            $('.mobile-menu-icon .mm-text').click(function() {
               $(".header-menu").toggleClass('header-menu-fixed');
            });
        });

        /* TESTIMONIAL SECTION */

        $('.owl-carousel').owlCarousel({
		    rtl:false,
		    loop:true,
		    dots:true,
		    margin:10,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        }
		    }
		})

    });
})(jQuery);