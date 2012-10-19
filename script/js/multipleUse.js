function bindInfo(handle,content) {
	handle.mouseenter(function() {
		$("#infoText").text(content);
		$("#info").find("#left").css("height",$("#info").find("#infoCon").height()-20);
		$("#info").find("#right").css("height",$("#info").find("#infoCon").height()-20);
		$("#info").fadeIn();
	}).mousemove(function(event) {
		$("#info").find("#left").css("height",$("#info").find("#infoCon").height()-20);
		$("#info").find("#right").css("height",$("#info").find("#infoCon").height()-20);
		$("#info").css("left",(event.pageX-$(document).scrollLeft()));
		$("#info").css("top",(event.pageY-$(document).scrollTop()+20));
	}).mouseleave(function() {
		$("#info").css("display","none");
	});
}