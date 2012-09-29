/*$(document).hover(function(){
	$("div#one").mouseenter(function() {
		$("div#oneX").stop(true,true);
		$("div#oneX").slideDown("normal");
	}).mouseleave(function() {
		$("div#oneX").stop(true,true);
		$("div#oneX").slideUp("normal");
	});
});*/
var checkOne=false;
var checkTwo=false;
var checkThree=false;
$(document).ready(function() {
	$("div#one").mouseenter(function() {
		if(!checkOne) $("div#oneX").slideDown("normal");
		else $("div#oneX").stop(true,true).slideDown("normal");
	}).mouseleave(function() {
		checkOne = true;
		$("div#oneX").fadeOut(300,function() { checkOne=false; });
	});
	
	$("div#two").mouseenter(function() {
		if(!checkTwo) $("div#twoX").slideDown("normal");
		else $("div#twoX").stop(true,true).slideDown("normal");
	}).mouseleave(function() {
		checkTwo = true;
		$("div#twoX").fadeOut(300,function() { checkTwo=false; });
	});
	
	$("div#three").mouseenter(function() {
		if(!checkThree) $("div#threeX").slideDown("normal");
		else $("div#threeX").stop(true,true).slideDown("normal");
	}).mouseleave(function() {
		checkThree = true;
		$("div#threeX").fadeOut(300,function() { checkThree=false; });
	});
});