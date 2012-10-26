var fleetData = new Array();
var shipData = new Array();

$(document).ready(function() {
	$("div.incFleetInnerCon").mouseover(function () {
		$(this).find(".fleetInfo").stop(false,true).slideDown();
	})
	$("div.incFleetInnerCon").find(".fleetInfo").mouseleave(function () {
		$(this).stop(false,true).slideUp();
	});
	$("div.sentFleetInnerCon").mouseover(function () {
		$(this).find(".fleetInfo").stop(false,true).slideDown();
	})
	$("div.sentFleetInnerCon").find(".fleetInfo").mouseleave(function () {
		$(this).stop(false,true).slideUp();
	});
	getFleets();
	getShips();
	setInterval(function(){fleetUpdate()},100);
	$(".fSelect").click(function () {
		alert("muss auf map verbinden");
	});
});
function fleetUpdate() {
	for(var i=0;i<fleetData.length;i++) {
		//	alert($("#"+i+"").find("#fCp").text());
		var now = new Date().getTime();
		var percent = (now-fleetData[i].timeOnStart*1000) / (fleetData[i].timeOnFinish*1000-fleetData[i].timeOnStart*1000)*100;
		percent = Math.round(percent*10)/10;
		if(percent<=100 && now<fleetData[i].timeOnFinish*1000) {
			$("#"+i+"").find("#fCp").text(percent);
			$("#"+i+"").find("#fCt").text(Math.round(fleetData[i].timeOnFinish*1000-now)/1000);
			$("#"+i+"").find(".fP").css("width",""+percent+"%");
		}
		else $("#"+i+"").remove();
	}
	$(".incFleetOuterCon").find(".anzahl").text($(".incFleetOuterCon").find(".fleetInfo").children().length);
	$(".sentFleetOuterCon").find(".anzahl").text($(".sentFleetOuterCon").find(".fleetInfo").children().length);
}
function getFleets() {
	$.ajax({
		type:'POST',
		url:'inc/fleet/getFleets.php',
		dataType:'json',
		data: {
			id : 0
		},
		success : function(data) {
			fleetData = data;
			$(".incFleetOuterCon").find(".fR").remove();
			$(".sentFleetOuterCon").find(".fR").remove();
			for(var i=0;i<data.length;i++) {
				if(data[i].type=="inc") {
					$(".incFleetOuterCon").find(".fleetInfo").append('\
						<div class="fR" id="'+i+'">\
							<div class="fP">&nbsp;</div>\
							<div class="fC">'+data[i].from+'</div>\
							<div class="fC" id="fCp">'+(data[i].timeOnStart/data[i].timeOnFinish*100)+'</div>\
							<div class="fC" id="fCt">'+(data[i].timeOnFinish-data[i].timeOnStart)+'s</div>\
							<div class="fC">'+data[i].status+'</div>\
						</div>\
					');
				}
				else if(data[i].type=="sent") {
					$(".sentFleetOuterCon").find(".fleetInfo").append('\
						<div class="fR" id="'+i+'">\
							<div class="fP">&nbsp;</div>\
							<div class="fC">'+data[i].from+'</div>\
							<div class="fC" id="fCp">'+(data[i].timeOnStart/data[i].timeOnFinish*100)+'</div>\
							<div class="fC" id="fCt">'+(data[i].timeOnFinish-data[i].timeOnStart)+'s</div>\
							<div class="fC">'+data[i].status+'</div>\
						</div>\
					');
				}
			}
		}
	});
}
function getShips() {
	$.ajax({
		type:'POST',
		url:'inc/fleet/getShips.php',
		dataType:'json',
		data: {
			id : 0
		},
		success : function(data) {
			shipData = data;
			for(var i=0;i<data.length;i++) {
				$(".fShipCon").append('\
					<div class="fShipOuterCon" id="s'+i+'">\
						<div class="fShipInnerCon">\
							<div class="fShipImg">\
								<div class="fShipSlider"></div>\
							</div>\
							<div class="fShipBottom">Submit</div>\
						</div>\
					</div>\
				');
				//testing
				$("#s"+i+"").find(".fShipSlider").slider({
					value: 50,
					min: 0,
					max: 20,
					step: 5,
					start: function(event, ui) {
						//alert("lae"+ui.value);
					},
					slide: function(event, ui) {
					},
					stop: function(event, ui) {
					}
				 });
			}
		}
	});
}