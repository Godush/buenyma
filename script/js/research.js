$(document).ready(function() {
	//if(!$res1Build) $("div#res1").children().find("div.resBuild").css("display:visible;");
	$("div.resBuild").css("display","block");
	$("div.resBuild").click(function() {
		$(this).css("display","none");
		$(this).parent().find("div.resAbort").css("display","block");
	});
	$("div.resAbort").click(function() {
		$(this).css("display","none");
		$(this).parent().find("div.resBuild").css("display","block");
	});
});