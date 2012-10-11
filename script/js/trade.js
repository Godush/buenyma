$(document).ready(function() {
	$("div#seller").click(function(event) {
		$("div#vendor").children().fadeOut();
		$(this).children().stop(true,true).fadeIn();
		$("div#vendorOutput").css("display","none");
		$("div#sellerOutput").fadeIn();
	});
	$("div#vendor").click(function(event) {
		$("div#seller").children().fadeOut();
		$(this).children().stop(true,true).fadeIn();
		$("div#sellerOutput").css("display","none");
		$("div#vendorOutput").fadeIn();
	});
});
function setOffer() {
	//$("#test").text($("#vAmount").val());
	if($("#test").val().integer()>0) $("#test").text("läuft");
	else $("#test").text("Werte eingeben!!!");
}