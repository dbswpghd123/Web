$(document).scroll(function(){
    	console.log($(window).scrollTop())
        if ($(window).scrollTop() > 0) {
        	document.getElementById("chutoro").style.position = "absolute";
        	document.getElementById("chutoro").style.top = "325px";
        	if ($(window).scrollTop() > 140) {
        		document.getElementById("chutoro").style.position = "fixed";
        		document.getElementById("chutoro").style.top = "185px";
        	}
        }
    });
;

$(document).scroll(function(){
        if ($(window).scrollTop() > 0) {
        	document.getElementById("nigiririce").style.position = "fixed";
        	document.getElementById("nigiririce").style.top = 383 + $(window).scrollTop()  + "px";
        	if ($(window).scrollTop() > 122) {
        	document.getElementById("nigiririce").style.position = "fixed";
        	document.getElementById("nigiririce").style.top = 510  + "px";}
        }
    });
;

$(document).scroll(function(){
        if ($(window).scrollTop() > 122) {
            document.getElementById("chutoro").style.left = 550 + 122 - $(window).scrollTop()  + "px";
            document.getElementById("nigiririce").style.left = 610 + 122 - $(window).scrollTop()  + "px";
        }
    });
;

$(document).scroll(function(){
        if ($(window).scrollTop() > 432) {
            document.getElementById("chutoroinfo").style.opacity = 1;
        }
        else {
            document.getElementById("chutoroinfo").style.opacity = 0;
        }
    });
; 


$(document).scroll(function(){
        if ($(window).scrollTop() > 130) {
            document.getElementById("chutoroname").style.opacity = 0;
        }
        else {
            document.getElementById("chutoroname").style.opacity = 1;
        }
    });
;       

 
