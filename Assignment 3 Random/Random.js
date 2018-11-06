var balance=50;

document.getElementById("balance").innerHTML = balance;

var betamount = 1;

$("#bet1").click(function() {
	betamount = 1;
	document.getElementById("betamount").innerHTML = betamount;
})

$("#bet2").click(function() {
	betamount = 2;
	document.getElementById("betamount").innerHTML = betamount;
})

$("#bet3").click(function() {
	betamount = 3;
	document.getElementById("betamount").innerHTML = betamount;
})

$("#bet5").click(function() {
	betamount = 5;
	document.getElementById("betamount").innerHTML = betamount;
})

$("#bet10").click(function() {
	betamount = 10;
	document.getElementById("betamount").innerHTML = betamount;
})

$("#bet").click(function() {
	balance = balance - betamount;

document.getElementById('mixing1').style.zIndex = 2; 
document.getElementById('mixing2').style.zIndex = 2;
document.getElementById('mixing3').style.zIndex = 2; 



setTimeout(function(){ 
document.getElementById('mixing1').style.zIndex = 0; 
	random1=Math.floor(Math.random() * 7); 
	random1 = "slot"+random1+".jpg"
	$("#randomslot1").attr("src",random1); 
}, 1000); 

setTimeout(function(){ 
document.getElementById('mixing2').style.zIndex = 0; 
	random2=Math.floor(Math.random() * 7); 
	random2 = "slot"+random2+".jpg"     
	$("#randomslot2").attr("src",random2);
}, 2500); 

setTimeout(function(){ 
document.getElementById('mixing3').style.zIndex = 0; 
	random3=Math.floor(Math.random() * 7); 
	random3 = "slot"+random3+".jpg" 
	$("#randomslot3").attr("src",random3);
}, 4000); 

	$("#betamount").html(betamount);  
	$("#random1").html(random1);
	$("#random2").html(random2);    
	$("#random3").html(random3);            
	$("#mixing1").html(mixing1);

	
	if (random1 = random2 = random3) { // this doesn't work
		balance = balance + (betamount * 55); // this doesn't work
	}

	if (random1 = random2 = random3 = slot4.jpg) { // this doesn't work
		balance = balance + (betamount * 555); // this doesn't work
		alert("JACKPOT!"); // this doesn't work
	}

	if (random1 = random2 = random3 = slot1.jpg) { // this doesn't work
		balance = balance + (betamount * 996); // this doesn't work
		alert("BATPOT!"); // this doesn't work
	}



	/*if (random1 || random2 || random3 = slot1.jpg) {
	balance = balance + (betamount * 1);
	}

	if (random1 && random2 || random2 && random3 || random1 && random3 = slot1.jpg) {
	balance = balance + (betamount * 1);
	}*/ //I don't get why these are not working
})
