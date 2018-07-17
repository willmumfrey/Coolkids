$(document).ready(function(){

takeclass();
avoidclass();
teacherTest();
classTest();
myFunction()

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
//subject to change for AJAX usage
	$("#photo").attr("src","https://www.eduinreviewblog.com/wp-content/uploads/2017/08/Key-Differences-Between-Good-And-Great-Teachers.jpg")
 	$("#profName").html("Prof. Teacher")
 	$("#profRating").html("4/10")
 	$("#profMajor").html("Accounting")
 	$("#profSchool").html("School of Business")
 	$("#profClasses").html("Intro to School, Class 101, Advanced Nuclear Fission Physics")
 	$("#profDescrip").html("Joining Loyno in 1988, this teacher did cool stuff over their lot of years here. ")
 }

//Class page
function classTest(){
//subject to change for AJAX usage
	$("#className").html("Intro to Education")
	$("#majorCredits").html("3 Cr")
	$("#classSchool").html ("School of Business")
	$("#classDescrip").html("This class teaches you things. A lot of things. educational things")
}



