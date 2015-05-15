binfen={
	name:'印花',
	count:0,//计数器
	time:59,
	btn:false //防止过早点击
};
function qiangdao(a,b){
	$('.geshu').html(binfen.count);
};
function restartGame(){
	window.location.reload();
};
function fenpei(){
	$('.bianhua').each(function(i, v) {
		$(this).addClass('bianhua'+parseInt(Math.random()*3+1));
		if( $(this).hasClass('bianhua1') ){
			$(this).closest('li').addClass('zhongbiao');
		}
	});
};
function fenpei2(a){
	$(a).find('.bianhua').removeClass('bianhua1 bianhua2 bianhua3').addClass('bianhua'+parseInt(Math.random()*3+1));
	if( $(a).find('.bianhua').hasClass('bianhua1') ){
			$(a).addClass('zhongbiao');
		}
};
function jishi(){
			var $shijian=$('.shijian2').find('span');
			liu = setInterval(function() {
				shijian = $shijian.html() - 1;
				$shijian.html(shijian);
				$('.shijian').width( shijian*242/59 );
				if (shijian == 0) {
					clearInterval(liu);
					MCUI.gameFoot.show();
					MCAPP.submitScoreAndGetLuck(binfen.count, function(data) {
					if (data.code == '200') {
						$('.win-cover').show();
						$('.lose-cover').hide();
						$('.award_name').html(data.data.awardName);
					} else {
						$('.win-cover').hide();
						$('.lose-cover').show();
					}
                    $('.oppo-game-score').html(binfen.count);
					$('.awardd').show().addClass('animated bounceInDown');
				});
				}
			}, 1000);
};
function diao(){
	return $('.diao').length;
};
$(function(){
	//fenpei();
	qiangdao();
	$('.wupin').html(binfen.name);
	$('.shijian2').find('span').html( binfen.time );
	var $li = $('.ninewrap').find('li');
	$li.each(function(i,v){
		$(this).css({'left':$(this).position().left,'top':$(this).position().top});
	});
	$li.each(function(i,v){
		this.btn=true;
		$(this).css('positon','absolute');
	});
	$li.each(function(i,v){
		$(this).on('touchstart',function(){
			if(!binfen.btn){return}
			if(!this.btn){return}
			this.btn=false;
			var that=this;
			fenpei2(this);
			$(this).addClass('rotate').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$(that).removeClass('rotate');this.btn=true;});
			if($(this).hasClass('zhongbiao')){binfen.count++;qiangdao();$(this).removeClass('zhongbiao');}
			return false;
		});
	});
	$(document).on('touchstart','.start',function(){
		if(!MCAPP.checkRemainTimes()){return}
		$('.wrap1').velocity({'translateX':'-200%'},500,function(){
			$('.wrap2').velocity({'translateY':'-77.5%'},300,function(){
				$('.soujiwrap').addClass('animated bounceInDown');
			});
		})
	});
	$(document).on('touchstart','.laiba',function(){
		$('.soujiwrap').removeClass('bounceInDown').addClass('bounceOutUp').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){binfen.btn=true;jishi();});
		MCUI.gameFoot.hide();
		return false;
	});
	$(document).on('touchstart','.btn-show-off',function(){
		$('.sharep').show();
		return false;
	});
	$(document).on('touchstart','.btn-invite',function(){
		$('.sharep').show();
		return false;
	});
	$(document).on('touchstart','.sharep',function(){
		$(this).hide();
		return false;
	});
	$(document).on('touchstart','.btn-again',function(){
		restartGame();
	});
});