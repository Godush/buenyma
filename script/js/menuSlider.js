$(document).ready(function() {
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
});