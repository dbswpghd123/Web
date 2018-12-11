$(document).scroll(function(){
    	console.log($(window).scrollTop())
        if ($(window).scrollTop() > 0) {
        	document.getElementById("amaebi1").style.position = "absolute";
        	document.getElementById("amaebi1").style.top = "325px";
        	if ($(window).scrollTop() > 170) {
        		document.getElementById("amaebi1").style.position = "fixed";
        		document.getElementById("amaebi1").style.top = "155px";
        	}
        }
    });
;

$(document).scroll(function(){
    	console.log($(window).scrollTop())
        if ($(window).scrollTop() > 0) {
        	document.getElementById("amaebi2").style.position = "absolute";
        	document.getElementById("amaebi2").style.top = "365px";
        	if ($(window).scrollTop() > 40) {
        		document.getElementById("amaebi2").style.position = "fixed";
        		document.getElementById("amaebi2").style.top = "325px";
        	}
        }
    });
;

$(document).scroll(function(){
        if ($(window).scrollTop() > 0) {
        	document.getElementById("nigiririce").style.position = "fixed";
        	document.getElementById("nigiririce").style.top = 383 + $(window).scrollTop()  + "px";
        	if ($(window).scrollTop() > 172) {
        	document.getElementById("nigiririce").style.position = "fixed";
        	document.getElementById("nigiririce").style.top = 555  + "px";}
        }
    });
;


$(document).scroll(function(){
        if ($(window).scrollTop() > 450-278) {
            document.getElementById("amaebi1").style.left = 635 + 172 - $(window).scrollTop()  + "px";
            document.getElementById("amaebi2").style.left = 590 + 172 - $(window).scrollTop()  + "px";
            document.getElementById("nigiririce").style.left = 610 + 172 - $(window).scrollTop()  + "px";
        }
    });
;

$(document).scroll(function(){
        if ($(window).scrollTop() > 582 ) {
            document.getElementById("amaebiinfo").style.opacity = 1;
        }
        else {
            document.getElementById("amaebiinfo").style.opacity = 0;
        }
    });
;            


$(document).scroll(function(){
        if ($(window).scrollTop() > 130) {
            document.getElementById("amaebiname").style.opacity = 0;
        }
        else {
            document.getElementById("amaebiname").style.opacity = 1;
        }
    });
;       
