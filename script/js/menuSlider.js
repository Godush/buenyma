/*$(document).ready(function() {
	$("div#kontrolle").mouseover(function () {
		$(this).find(".menuPoint").stop(true,true).slideDown();
	});
	$("div#kontrolle").mouseleave(function () {
		$(this).find(".menuPoint").stop(true,true).fadeOut();
	});
});
$(document).ready(function() {
	$("div#krieg").mouseover(function () {
		$(this).find(".menuPoint").stop(true,true).slideDown();
	});
	$("div#krieg").mouseleave(function () {
		$(this).find(".menuPoint").stop(true,true).fadeOut();
	});
});
$(document).ready(function() {
	$("div#diplomatie").mouseover(function () {
		$(this).find(".menuPoint").stop(true,true).slideDown();
	});
	$("div#diplomatie").mouseleave(function () {
		$(this).find(".menuPoint").stop(true,true).fadeOut();
	});
});*/
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