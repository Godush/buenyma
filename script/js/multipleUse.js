function bindInfo(handle) {
	handle.mousemove(function(event) {
		$("#info").find("#left").css("height",$("#info").find("#infoCon").height()-20);
		$("#info").find("#right").css("height",$("#info").find("#infoCon").height()-20);
		$("#info").css("left",(event.pageX-$(document).scrollLeft()));
		$("#info").css("top",(event.pageY-$(document).scrollTop()+20));
	}).mouseenter(function() {
		$("#info").find("#left").css("height",$("#info").find("#infoCon").height()-20);
		$("#info").find("#right").css("height",$("#info").find("#infoCon").height()-20);
		$("#info").fadeIn();
	}).mouseleave(function() {
		$("#info").css("display","none");
	});
}