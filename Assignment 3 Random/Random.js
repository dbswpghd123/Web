var balance=50;

document.getElementById("balance").innerHTML = balance;

var betamount = 0;

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
	random1=Math.floor(Math.random() * 7);
	random2=Math.floor(Math.random() * 7);
	random3=Math.floor(Math.random() * 7);
	document.getElementById("betamount").innerHTML = betamount;
	document.getElementById("random1").innerHTML = random1;
	document.getElementById("random2").innerHTML = random2;
	document.getElementById("random3").innerHTML = random3;
})

var $random1 = "slot"+random1+".jpg"
 $("#randomslot1").attr("src",$random1)

/*
	if (random1 = 0) {
 $("#randomslot1").attr("src","slot0.jpg")
}
if (random1 = 1) {
 $("#randomslot1").attr("src","slot1.jpg")
}
if (random1 = 2) {
 $("#randomslot1").attr("src","slot2.jpg")
}
if (random1 = 3) {
 $("#randomslot1").attr("src","slot3.jpg")
}
if (random1 = 4) {
 $("#randomslot1").attr("src","slot4.jpg")
}
if (random1 = 5) {
 $("#randomslot1").attr("src","slot5.jpg")
}
*/