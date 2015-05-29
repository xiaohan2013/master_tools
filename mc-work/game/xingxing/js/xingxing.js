var fenzhong=60;
var count=0;
var balls=[];
var time2=8000;
var d=1;
var mp=$('#yinyue')[0];
$('.wutai').height($(window).height());
$('.mask1').find('img').height($(window).height());
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
		$('.t1').html(fillZero(daoji,2));
}
function creatBall(x,y){
		this.x=x;
		this.y=y;
		this.width=200;
		this.height=200;
		this.className='yuan';
}
creatBall.prototype.append=function(){
		var s = document.createElement('div');
		s.className=this.className;
		s.style.left=this.x+'px';
		s.style.top=this.y+'px';
		s.style.width=this.width+'px';
		s.style.height=this.height+'px';
		s.btn1=true;
		//s.innerHTML='<img src="http://style.cdn.juhaomai.net/style/game/xingxing/images/xingxing.png">';
		return s;
}
function yinyue(){
	mp.play();
}
function ballspush(a){
		balls.push(a);
}
function getlength(){
		return $('.yuan').length;
	}
function chonghui(){
		if( getlength()<3 ){
			ball();
		}
}
function getleft(){
	return Math.max(Math.random()*500,30);
}
function gettop(){
	return Math.max(Math.random()*500,100);
}
function ball(){
					balls=[];
						for(var c=0;c<Math.max(d%5,1);c++){
							if(getlength()>=7){continue}
							ballspush(new creatBall(getleft(),gettop()).append());
							$('.wutai').append(balls[c]);
						}
				//console.log(balls)
				if(time2<=1000){
					time2=1000;
				}else{
					time2=time2-100;
				}
}
$(document).on('touchstart','.mask1',function(){
	$(this).velocity({
				'opacity': 0
			}, 500, function() {
				$(this).remove();
				updatetime(fenzhong);
				ball();
				window.dj=setInterval(function(){
				fenzhong-=1;
				updatetime(fenzhong);
				if(fenzhong<=0){console.log('end');clearInterval(dj);$('.award').show();}
				},1000)
			})
});
$(document).on('touchstart','.yuan',function(){if(!this.btn1){return}
		this.btn1=false;
		count++;
		$('.count').html(count);
		d++;
		ball();
		yinyue();
		var that=this;
		this.i=0;
		this.btn2=setInterval(function(){
		if(that.i>=9){clearInterval(that.btn2);$(that).remove();}
		//console.log(that.i+':'+that.btn1);
		$(that).css('background-position-y',-(that.i*200));that.i++},100)
		$('.t2').html(count);
		return false;
});
$(document).on('touchstart','.xinyuan',function(){
		alert('xinyuan');
		return false;
});
$(document).on('touchstart','.shut',function(){
		alert('shut');
		return false;
});
window.tt=setInterval(function(){
	if(getlength()==0){ball();}
},1000)