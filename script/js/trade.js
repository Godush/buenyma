$(document).ready(function() {
	$("div#buyer").click(function(event) {
		$("div#vendor").children().fadeOut();
		$(this).children().stop(true,true).fadeIn();
		$("div#buyerOutput").fadeIn();
	});
	$("div#vendor").click(function(event) {
		$("div#buyer").children().fadeOut();
		$(this).children().stop(true,true).fadeIn();
		$("div#buyerOutput").css("display","none");
	});
	getVendor();
});
function enableSetVendor() {
	if($("#vAmount").val().length>0
	 && $("#vQuote").val().length>0
	 && $("#vResGiven").val() != $("#vResWanted").val()) {
		$("#vSubmit").removeAttr("disabled");
	}
	else $("#vSubmit").attr("disabled","disabled");
}
function setVendor() {

}
function getVendor() {
	$.ajax({
		type:'POST',
		url:'inc/trade/getOffer.php',
		dataType:'json',
		data: {
			id : 0
		},
		success : function(data) {
			$("#buyerOutput").find(".tEntry").remove();
			for(var i=0;i<data.length;i++) {
				$("#buyerOutput").find("tbody").append('\
					<tr class="tEntry">\
						<td style="width:34%">'+data[i].amount+'</td>\
						<td style="width:33%">'+data[i].amount+'(M):'+data[i].price+'(A)</td>\
						<td style="width:33%">'+data[i].duration+' Sekunden</td>\
					</tr>\
				');
			}
		}
	});
}
function getOffer() {
	if($("#bAmount").val().length>0
	 && $("#bDist").val().length>0
	 && $("#bResGiven").val() != $("#bResWanted").val()) {
		$.ajax({
			type:'POST',
			url:'inc/trade/getOffer.php',
			dataType:'json',
			data: {
				id : 0
			},
			success : function(data) {
				$("#buyerOutput").find(".tEntry").remove();
				for(var i=0;i<data.length;i++) {
					$("#buyerOutput").find("tbody").append('\
						<tr class="tEntry">\
							<td style="width:34%">'+data[i].amount+'</td>\
							<td style="width:33%">'+data[i].amount+'(M):'+data[i].price+'(A)</td>\
							<td style="width:33%">'+data[i].duration+' Sekunden</td>\
						</tr>\
					');
				}
			}
		});
	}
	else $("#buyerOutput").find("tbody").children().remove();
}