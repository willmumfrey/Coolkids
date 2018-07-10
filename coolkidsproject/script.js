$(document).ready(function(){

takeclass(),
avoidclass()

});

// (raw_rating)/(votes)=(rating)

// return rating 

function takeclass(){
	$(".take1").append("Intro to Business-Dr.");
	$(".take2").append("Intro to Marketing-Dr.");
	$(".take3").append("Intro to Finance");
}
 function avoidclass(){
 	$(".avoid1").append("Physics");
 	$(".avoid2").append("Calculus");
 	$(".avoid3").append("Chemistry");
 }