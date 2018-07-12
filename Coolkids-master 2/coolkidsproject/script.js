$(document).ready(function(){

takeclass(),
avoidclass()

});

// (raw_rating)/(votes)=(rating)

// return rating 

function takeclass(){
	$(".take1class").html("Intro to Business");
	$(".take2class").html("Intro to Marketing");
	$(".take3class").html("Intro to Finance");
}
 function avoidclass(){
 	$(".avoid1class").html("Physics");
 	$(".avoid2class").html("Calculus");
 	$(".avoid3class").html("Chemistry");
 }