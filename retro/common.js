$(document).ready(function() {
    
    $(window).scroll( function(){
            $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 		
    });
	/*
	$(window).scroll(function(){
	navbar_bg();			
		});
		navbar_bg();
		function navbar_bg(){
			const window_t = $(window).scrollTop();
				const window_w = $(window).width();
				if(window_w > 767){
					$('label .menu').css('transition','all .4s ease');
					if(window_t == 0){
						$('label .menu').css({
							'background' : 'rgba(0, 13, 0, 1)',
							'border-bottom' : 'none',
							'color' : '#fff'
						});
						$('label input:checked + .menu ').css({
							'background' : '#333',
							'box-shadow' : 'rgb(0, 13, 0) 0px 0px 0px 100vw, rgb(0, 13, 0) 0px 0px 0px 100vh'
						});

					}else if(window_t > 0){
						$('label .menu').css({
							'background' : 'rgba(255,255,255,1)',
							'border-bottom' : '1px solid #ddd',
							'box-shadow' : ' -18px 10px 20px 4px rgba(227,65,52,0.75)'
						});
						
					}
				}
		}*/
});
