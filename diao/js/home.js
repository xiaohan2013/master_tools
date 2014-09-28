// JavaScript Document
function setCss3 (obj,attrObj) {
	for (var i in attrObj) {
		var newi=i;
		if(newi.indexOf("-")>0){
			var num=newi.indexOf("-");
			newi=newi.replace(newi.substr(num,2),newi.substr(num+1,1).toUpperCase());
		}
		obj.style[newi]=attrObj[i];
		newi=newi.replace(newi.charAt(0),newi.charAt(0).toUpperCase());
		obj.style["webkit"+newi]=attrObj[i];
		obj.style["moz"+newi]=attrObj[i];
		obj.style["o"+newi]=attrObj[i];
		obj.style["ms"+newi]=attrObj[i];
	}
}
	
function onexuanzhuan(){
	//var homepage=document.getElementById("homepage");
	
	var div=document.getElementById("micon");
	var angle=0;
	
	window.onload=function(){
		clearInterval(t);	t = null;
		i=5;
		setTimeout(function(){$("#SwipeTargetIndex").animate({opacity:1},1000);$("#SwipeTargetIndex").fadeIn(2000);},2000)
		var t;
		setTimeout(function(){t=setInterval(function(){
			angle-=0.5;
			setCss3(div,{transform:"rotate("+angle+"deg)","transform-origin":"50% 50%"});
		},10);},2000);
		var h;
		setTimeout(function(){h=setInterval(function(){
			i-=0.4;
			angle-=i;
			setCss3(div,{transform:"rotate("+angle+"deg)","transform-origin":"50% 50%"})
		},10);},2000);
		
		setTimeout(function(){$(".micon").fadeOut(1000)},5000);
		setTimeout(function(){
			clearInterval(h);	h = null;
			$(".mdameil").animate({left:'-50%'},1500);
			$(".mdameir").animate({left:'100%'},1500);
		},6000);
		
		setTimeout(function(){$(".mainContent").animate({opacity:1},2500);},6500);
		setTimeout(function(){$(".m_icon").fadeIn(2500);},7000);
		setTimeout(function(){$(".m_foot").fadeIn(2500);},7000);
	}	 	 
}