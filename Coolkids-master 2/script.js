$(document).ready(function(){

takeclass();
avoidclass();
teacherTest()

});

// (raw_rating)/(votes)=(rating)

// return rating 

function takeclass(){
	console.log("FUNCTION BEING RUN");
	console.log($(".take1class"));
	$(".take1class").html("Intro to Business");
	$(".take2class").html("Intro to Marketing");
	$(".take3class").html("Intro to Finance");
}

 function avoidclass(){
 	$(".avoid1class").html("Physics");
 	$(".avoid2class").html("Calculus");
 	$(".avoid3class").html("Chemistry");
 }

 function teacherTest(){

 	$("#photo").attr('src','loyola-hero.jpg')
 	console.log("will it work")
 }