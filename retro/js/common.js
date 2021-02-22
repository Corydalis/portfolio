/*let circle = document.getElementById('circle');

const onMouseMove = (event) =>{

  circle.style.left = event.pageX + 'px';
  circle.style.top = event.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);*/

			// horizontal scroll evt
(function() {
    function scrollHorizontally(event) {
        event = window.event || e;
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        document.documentElement.scrollLeft -= (delta*100); 
        document.body.scrollLeft -= (delta*100); 
		
		
        event.preventDefault();
    }
    if (window.addEventListener) {
        // IE9, Chrome, Safari, Opera
        window.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        window.attachEvent("onmousewheel", scrollHorizontally);
    }
	
})();
	
$(document).bind('mousemove', function(event){
    $('.circle').css({
       left:  event.pageX,
       top:   event.pageY
    });
	
	
	
});

/*
window.addEventListener('DOMContentLoaded', function(){




$(window).scroll(function(){
    
        $('.hh').each( function(){
            
            var bottom_of_object = $(this).offset().left + $(this).outerWidth();
            var bottom_of_window = $(window).scrollLeft() + $(window).width();
            
            if( bottom_of_window < bottom_of_object ){
                //$('.hh').animate({color:'red'},1000);
				$('.hh').addClass('toLeft');
				console.log('ddddde');
            }
        }); 
	});
	
});
*/
$(document).ready(function(){
	const btn = $('.arrow');
	btn.click(function(){
		$('.nav').toggleClass('nav-slide');
	});
	
	
	
/**** slideShow ***/
	var slides = document.querySelectorAll('.first-wrap');

var currentSlide = 0;
var current = 0;
	
	function nextSlide(){
	goToSlide(currentSlide+1);
}

function prevSlide (){
	goToSlide(currentSlide-1);
}

function goToSlide(n){
	slides[currentSlide].className = 'first-wrap';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'first-wrap showing';
}

var next = document.querySelectorAll('.next');
var prev = document.querySelectorAll('.prev');
 for (var a = 0; a < next.length; a++) {
    next[a].addEventListener('click', function() {
        nextSlide();
    });
}

for (var b = 0; b < prev.length; b++) {
    prev[b].addEventListener('click', function() {
        prevSlide();
    });
}

	
	/*
    
    var getMax = function(){
        return $(document).width() - $(window).width();
    }
    
    var getValue = function(){
        return $(window).outerWidth();
    }
    
    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressBar = $('progress');
        
        // Set the Max attr for the first time
        progressBar.attr({ max: getMax() });

        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressBar.attr({ value: getValue() });
        });
      
        $(window).resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({ max: getMax(), value: getValue() });
        });   
    }
    else {
        var progressBar = $('.progress-bar'), 
            max = getMax(), 
            value, width;
        
        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }
        
        var setWidth = function(){
            progressBar.css({ width: getWidth() });
        }
        
        $(document).on('scroll', setWidth);
        $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }
 
  $(document).on('scroll', function(){

      maxAttr = $('#progressBar').attr('max');
      valueAttr = $('#progressBar').attr('value');
      percentage = (valueAttr/maxAttr) * 100;
      
      if(percentage<49){
        document.styleSheets[0].addRule('.semantic', 'color: red');
        document.styleSheets[0].addRule('.semantic::-webkit-progress-value', 'background-color: red');
        document.styleSheets[0].addRule('.semantic::-moz-progress-bar', 'background-color: red');
      }
      else if(percentage<98){
        document.styleSheets[0].addRule('.semantic', 'color: orange');
        document.styleSheets[0].addRule('.semantic::-webkit-progress-value', 'background-color: orange');
        document.styleSheets[0].addRule('.semantic::-moz-progress-bar', 'background-color: orange');
      }
      else {
        document.styleSheets[0].addRule('.semantic', 'color: green');
        document.styleSheets[0].addRule('.semantic::-webkit-progress-value', 'background-color: green');
        document.styleSheets[0].addRule('.semantic::-moz-progress-bar', 'background-color: green');
      }      
  });*/
  
});


	/*

var bar_bg = $(".bar .bar-bg");
bar_bg.css("min-width", $(document).width() + "px");


debulkedResize(function() {
	// Update the gradient width
	bar_bg.css("min-width", $(document).width() + "px");
})();


$(window).scroll(function(event) {
	// Change the width of the progress bar
	var bar = $(".bar"),
		dw  = $(document).width(),
		dh  = $(document).height(),
		wh  = $(window).height(),
		pos = $(document).scrollTop(),
		bw  = ((pos / (dh - wh)) * 100);

	bar.css("width", bw + "%");
});*/
	




/****** mouseover moving letters 

$(".scnd-letters").on('mousemove', '.box', function(e) {

      var left = parseFloat($(".box").css("left"));
      var right = parseFloat($(".box").css("top"));
      var width = parseFloat($(".box").css("widht"));
      var height = parseFloat($(".box").css("height"));


      var addX = 0;
      var addY = 0;

      if (e.clientX > width/2){
        addX = 20;
      }
      if(e.clientX < width/2){
        addX = -20;
      }
      if(e.clientY > height/2){
        addY = 20;
      }
      if(e.clientY < height/2){
        addY = -20;
      }
              $("#followC").css("top", e.clientY + addY)
        .css("left", e.clientX + addX);
      });




    $(".scnd-letters").on('mouseleave', '.box', function(e) {

      $("#followC").css("top", "50%").css("left", "50%");

    });***/