$(document).ready(function(){

takeclass();
avoidclass();
teacherTest()
classTest()
});

// (raw_rating)/(votes)=(rating)

// return rating 


//Home Page
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
//Professor webpage
 function teacherTest(){

 	$("#profName").html("Prof. Teacher")
 	$("#profMajor").html("Accounting")
 	$("#profSchool").html("School of Business")
 	$("#profDescrip").html("Joining Loyno in 1988, this teacher did cool stuff over their lot of years here. ")
 }

//Class page
function classTest(){
	$("#className").html("Intro to Education")
	$("#majorCredits").html("3 Cr")
	$("#classDescrip").html("This class teaches you things. A lot of things. educational things")
}

