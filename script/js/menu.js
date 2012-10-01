$(document).ready(function() {
	$maxHeight=$("div.menuPointCon").height();
	$("div.menuPointCon").css("height","0");
	$("div.menuPointCon").css("opacity","0");
	$("div.menuCon").mouseover(function () {
		$(this).children("div.menuPointCon").stop().animate({"opacity":"1","height":""+$maxHeight+"px"},{duration:"medium"});
	})
	$("div.menuCon").mouseleave(function () {
		$(this).children("div.menuPointCon").stop().animate({"opacity":"0","height":"0px"},{duration:"slow"});
	});
});