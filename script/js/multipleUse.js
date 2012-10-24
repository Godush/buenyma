function bindInfo(handle,content) {
	unbindInfo(handle);
	handle.mouseenter(function() {
		$("#infoText").text(content);
		$("#info").find("#left").css("height",$("#info").find("#infoCon").height()-20);
		$("#info").find("#right").css("height",$("#info").find("#infoCon").height()-20);
		$("#info").fadeIn();
	}).mousemove(function(event) {
		$("#info").find("#left").css("height",$("#info").find("#infoCon").height()-20);
		$("#info").find("#right").css("height",$("#info").find("#infoCon").height()-20);
		//$("#info").css("left",(event.pageX-$(document).scrollLeft()));
		//$("#info").css("top",(event.pageY-$(document).scrollTop()+20));
		$("#info").css("left",event.pageX-$("#info").width()/2);
		$("#info").css("top",event.pageY+30);
	}).mouseleave(function() {
		$("#info").css("display","none");
	});
}
function unbindInfo(handle) {
	handle.unbind("mouseenter").unbind("mousemove").unbind("mouseleave");
}