var resData = new Array();
$(document).ready(function() {
	displayRes();
});
function setRes(id,img,buildTxt,abortTxt,info,timeOnBuild,timeOnFinish) {
	var curArr;
	var checkExist = false;
	for(var i=0;i<resData.length;i++) {
		if(resData[i].id==id) {
			checkExist=true;
			curArr = resData[i];
			break;
		}
	}
	if(!checkExist) curArr = resData[resData.length] = new Array();
	curArr.id = id;
	curArr.img = img;
	curArr.buildTxt = buildTxt;
	curArr.abortTxt = abortTxt;
	curArr.info = info;
	curArr.timeOnBuild = timeOnBuild;
	curArr.timeOnFinish = timeOnFinish;
}
function displayRes() {
	for(var i=0;i<resData.length;i++) {
		if($("#"+resData[i].id+"").length==0) initRes(i);
		else refreshRes(i);
	}
}
function initRes(i) {
	$("#contentRoot").append('\
		<div class="resOuterCon" id="'+resData[i].id+'">\
			<div class="resInnerCon">\
				<div class="resImg">'+resData[i].img+'</div>\
				<div class="resBuild">'+resData[i].buildTxt+'</div>\
				<div class="resAbort">'+resData[i].abortTxt+'\
					<div class="pBG"></div>\
					<div class="pBar"></div>\
				</div>\
			</div>\
		</div>\
	');
	$("#"+resData[i].id+"").find(".resBuild").click(function() {
		resUpgrade(i);
	});
	$("#"+resData[i].id+"").find(".resAbort").click(function() {
		resAbort(i);
	});
	refreshRes(i);
	var timer = setInterval(function() {
		if(resData[i].timeOnBuild&&resData[i].timeOnFinish) {
			var elapsedTime = -(resData[i].timeOnBuild*1000-(new Date().getTime()))/1000;
			var totalTime = resData[i].timeOnFinish-resData[i].timeOnBuild;
			var percent = elapsedTime/totalTime * 100;
			if(percent>=100) {
				$("#"+resData[i].id+"").find(".pBar").css("width","0%");
				refreshRes(i);
			}
			$("#"+resData[i].id+"").find(".pBar").css("width",""+percent+"%");
		}
	},50);
}
function refreshRes(i) {
	$.ajax({
		type:'POST',
		url:'inc/research/refreshRes.php',
		dataType:'json',
		data: {
			id : resData[i].id
		},
		success : function(data) {
			setRes(data.id,data.img,data.buildTxt,data.abortTxt,data.info,data.timeOnBuild,data.timeOnFinish);
			$("#"+resData[i].id+"").find(".resImg").text(resData[i].img);
			bindInfo($("#"+resData[i].id+"").find(".resImg"),data.info);
			if(resData[i].timeOnBuild&&resData[i].timeOnFinish) {
				$("#"+resData[i].id+"").find(".resBuild").css("display","none");
				$("#"+resData[i].id+"").find(".resAbort").css("display","block");
			}
		}
	});
}
function resUpgrade(i) {
	$.ajax({
		type:'POST',
		url:'inc/research/upgradeRes.php',
		dataType:'json',
		data: {
			id : resData[i].id
		},
		success : function(data) {
			resData[i].timeOnBuild=data.timeOnBuild;
			resData[i].timeOnFinish=data.timeOnFinish;
			refreshRes(i);
		}
	});
}
function resAbort(i) {
	$.ajax({
		type:'POST',
		url:'inc/research/abortRes.php',
		dataType:'json',
		data: {
			id : resData[i].id
		},
		success : function(data) {
			if(data.check) {
				resData[i].timeOnBuild=null;
				resData[i].timeOnFinish=null;
				refreshRes(i);
			}
		}
	});
}
function levelUpRes(i) {
	resData[i].timeOnBuild=null;
	resData[i].timeOnFinish=null;
	$("#"+resData[i].id+"").find(".resAbort").css("display","none");
	$("#"+resData[i].id+"").find(".resBuild").css("display","block");
}