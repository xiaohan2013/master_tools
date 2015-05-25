var time=1500;
var count=0;
var time2=8000;
var fenzhong=1;
if(fenzhong>10){
	fenzhong=10;
}
fenzhong=fenzhong*60;
var width=$(window).width();
var height=$(window).height();
var balls=[];
var widths=[92,66];
var img=source['xin'];
var fonts=['恭喜','继续努力','加油','我会支持','<img src='+img+'>'];
var daoji=10;
$(function(){
	$('.t2').html(count);
	$('.index').css('background-image','url('+'http://style.cdn.juhaomai.net/static/game/10000103/images/index.jpg'+')');
	$('.wutai').css({'width':'100%','height':'100%','background-image':'url('+'http://style.cdn.juhaomai.net/static/game/10000103/images/bg.png'+')'});
	$(document).on('touchstart','.start',function(){
		$('.index').velocity({'translateY':'-100%'},500,function(){
			updatetime(fenzhong);
			window.dj=setInterval(function(){
			fenzhong-=1;
			updatetime(fenzhong);
			if(fenzhong<=0){clearInterval(dj);alert('dj')}
			},1000)
		ball();
		})
	});
});
	function restartGame(){
		window.location.reload();
	};
	function fillZero(num, digit)
	{
		var str=''+num;
		
		while(str.length<digit)
		{
			str='0'+str;
		}
		
		return str;
	}
	function updatetime(daoji){
		var iMin=parseInt(daoji/60);
		var iSec=daoji%60;
		$('.t11').html(fillZero(iMin,2));
		$('.t12').html(fillZero(iSec,2));
	}
	function getRandomColor() { 
			var c = '#'; 
			var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']; 
			for(var i = 0; i < 6;i++) 
			{ 
			var cIndex = Math.round(Math.random()*15); 
			c += cArray[cIndex]; 
			} 
			return c; 
		} 
	function creatBall(x,y){
		this.x=x;
		this.y=y;
		this.width=widths[Math.floor(Math.random()*widths.length)];
		this.className='yuan';
		this.color=getRandomColor();
		this.font=fonts[Math.floor(Math.random()*fonts.length)];
	}
	creatBall.prototype.append=function(){
		var s = document.createElement('div');
		s.className=this.className;
		s.style.left=this.x+'px';
		s.style.top=this.y+'px';
		s.style.width=s.style.height=this.width+'px';
		s.style['line-height']=this.width+'px';
		s.style.color=this.color;
		s.innerHTML=this.font;
		return s;
	}
	function ballspush(a){
		balls.push(a);
	}
	function ball(){
			window.ga=setInterval(function(){
				balls=[];
				ballspush(new creatBall(Math.random()*width/1.6,Math.random()*height/1.6).append());
				ballspush(new creatBall(Math.random()*width/1.6,Math.random()*height/1.6).append());
				ballspush(new creatBall(Math.random()*width/1.6,Math.random()*height/1.6).append());
				ballspush(new creatBall(Math.random()*width/1.6,Math.random()*height/1.6).append());
				ballspush(new creatBall(Math.random()*width/1.6,Math.random()*height/1.6).append());
				$.each(balls,function(i,v){
					$('.wutai').append(balls[i]);
					$(this).velocity({'scale':'0.01'},time2,function(){$(this).remove();})
				})
				if(time2<=1000){
					time2=1000;
				}else{
					time2=time2-100;
				}

			},time)
	}

	$(document).on('touchstart','.yuan',function(){
		count++;
		$('.guai'+Math.floor(Math.random()*5)).addClass('active').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$(this).removeClass('active')});
		$(this).remove();
		$('.t2').html(count);
	});