var lunchou={
	'viewHeight':$(window).height(),
	'btn':true,
	'btn2':false,
	'index':0,
	'change':0,
	'hua':5,
	'yuan':$('.wrap').find('.yuan'),
	'len':$('.wrap').find('.yuan').length,
	'circle':6,
	'lun':function(){
		lunchou.yuan.eq(lunchou.index).addClass('on').siblings().removeClass('on');
		lunchou.index++;//console.log(lunchou.index);
		if(lunchou.btn2){lunchou.change++;console.log(lunchou.change);}
		if(lunchou.index==lunchou.len){
			lunchou.index = 0;
		}
		if(lunchou.change>=(lunchou.len*lunchou.circle-6)){
						clearInterval(timer1);
						timer1 = setInterval(lunchou.lun, 400);
		}
		if(lunchou.change>=lunchou.len*lunchou.circle){
						if(lunchou.hua == (lunchou.index%lunchou.change)){
							clearInterval(timer1);
						}
		}
	}
};
var timer1;
!function setHeight(){
	$('.body').height(lunchou.viewHeight);
}();
$(document).on('touchstart','.yuann',function(){
	if(!lunchou.btn){return}
	console.log('start');
	lunchou.btn=false;
	lunchou.btn2=true;
	clearInterval(timer1);timer1=setInterval(lunchou.lun,80)
});
$(document).on('touchstart','.guize',function(){
	$('#guize').addClass('active');
});
$(document).on('touchstart','.jiangquan',function(){
	window.location.href='http://www.baidu.com';
});
$('.shut').eq(0).on('touchstart',function(){
	$('#guize').removeClass('active');
	return false;
});
$('.shut').eq(1).on('touchstart',function(){
	$('#yongwan').removeClass('active');
	return false;
});
$('.shut').eq(2).on('touchstart',function(){
	$('#award').removeClass('active');
	return false;
});
$('.shut').eq(3).on('touchstart',function(){
	$('#shibai').removeClass('active');
	return false;
});
$(document).on('touchstart','.lingjiang',function(){
	console.log('lingjiang');
});
$(document).on('touchstart','.xuanyao',function(){
	console.log('xuanyao');
});
function yongwan(){
	$('#yongwan').addClass('active');
}
function award(){
	$('#award').addClass('active');
}
function shibai(){
	$('#shibai').addClass('active');
}
$(function(){
	lunchou.lun();
	timer1=setInterval(lunchou.lun,800);
})