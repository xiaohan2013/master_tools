var viewHeight=$(window).height();
var fenzhong=15;
var count=0;
var fudai=$('.fudai');
var oC=document.getElementById('canvas');
oC.width=640;
oC.height=$('.body').height();
var gd=oC.getContext('2d');
var aLiuxing=[];
var bLiuxing=[];
var cLiuxing=[];
var dLiuxing=[];
var ta;
var iw=0;
var st=true;
function donghua(){
	clearInterval(ta);
	ta=setInterval(function(){
		if(iw>=6){clearInterval(ta);iw=0}
		fudai.css('background-position-y',-(iw*150));iw++},120)
	//console.log(ta)
}
function tianjia(){
		aLiuxing.push({
			x: Math.random()*640,
			y: Math.random()*viewHeight>300?300:Math.random()*viewHeight
		});
		bLiuxing.push({
			x: Math.random()*640,
			y: Math.random()*viewHeight>300?300:Math.random()*viewHeight
		});
		cLiuxing.push({
			x: Math.random()*640,
			y: Math.random()*viewHeight>300?300:Math.random()*viewHeight
		});
		dLiuxing.push({
			x: Math.random()*640,
			y: Math.random()*viewHeight>300?300:Math.random()*viewHeight
		})
	};
tw=setInterval(tianjia, 2000);	
!function setHeight(){
	$('.body').height(viewHeight);
	$('.mask1').find('img').height(viewHeight);
}();
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
function updatecount(){
		if(count>5){clearInterval(tw);tw=setInterval(tianjia,600)}
		if(count>20){clearInterval(tw);tw=setInterval(tianjia,500)}
		if(count>110){clearInterval(tw);tw=setInterval(tianjia,300)}
	
		$('.t2').html(count);
}
function testColl(x1, y1, w1, h1,x2, y2, w2, h2)
{
		var l1=x1;
		var r1=x1+w1;
		var t1=y1;
		var b1=y1+h1;
		
		var l2=x2;
		var r2=x2+w2;
		var t2=y2;
		var b2=y2+h2;
		
		//if(r1<l2 || b1<t2 || t1>b2)
		if(r1-l2>50  && b2-b1<50 && t1-b2<-50)
		{
			return true;
		}
		else
		{
			return false;
		}
}
function loadImgs(arr, fnSucc)
{
	var json={};
	var loaded=0;

	for(var i=0;i<arr.length;i++)
	{
		var oImg=new Image();
		oImg.onload=function ()
		{	
			loaded++;
			if(loaded==arr.length)
			{
				fnSucc(json);
			}
		};


		oImg.src=arr[i];
		var name=arr[i].split('9')[1];
		json[name]=oImg;
	}
	return json;
}

$(document).on('touchstart','.mask1',function(){
	$(this).velocity({
				'opacity': 0
			}, 500, function() {
				$(this).remove();
				st=false;
				updatetime(fenzhong);
				//ball();
				window.dj=setInterval(function(){
				fenzhong-=1;
				updatetime(fenzhong);
				if(fenzhong<=0){console.log('end');clearInterval(dj);clearInterval(tw);$('.count').html(count);$('.award').show();}
				},1000)
			})
});
$(document).on('touchstart','.xinyuan',function(){
		alert('xinyuan');
		return false;
});
$(document).on('touchstart','.shut',function(){
		alert('shut');
		return false;
});
fudai.on('touchstart.move',function(ev){
		var touch = ev.originalEvent.changedTouches[0];
		var x;
		var y;
		fudai.on('touchmove.move',function(ev){	
					var touch = ev.originalEvent.changedTouches[0];
					var x = (touch.pageX)>610?610:(touch.pageX);
					var y = (touch.pageY)>(viewHeight-110)?(viewHeight-110):(touch.pageY);
					if(x<30){x=30}
					if(y<65){y=65}
					//console.log(x+'.'+y)
					fudai.css({"left":x,"top":y-75});
				});
		fudai.on('touchend',function(ev){	
					
				});
		return false;
});

	loadImgs([
		'http://style.cdn.juhaomai.net/style/game/liuxing/images/9liuxing1.png', 'http://style.cdn.juhaomai.net/style/game/liuxing/images/9liuxing2.png', 'http://style.cdn.juhaomai.net/style/game/liuxing/images/9liuxing3.png', 'http://style.cdn.juhaomai.net/style/game/liuxing/images/9liuxing4.png'
	], function (imgs){console.log(imgs)
		//绘制
		setInterval(function (){
			//清除
			gd.clearRect(0,0,oC.width,oC.height);
			if(st){return}
			for(var i=0;i<aLiuxing.length;i++)
			{	 //var coo='liuxing'+Math.ceil(Math.random()*4)+'.png';
				gd.drawImage(
					imgs['liuxing1.png'],aLiuxing[i].x, aLiuxing[i].y, 268, 165
				);
			}
			for(var i=0;i<bLiuxing.length;i++)
			{	
				gd.drawImage(
					imgs['liuxing2.png'],bLiuxing[i].x, bLiuxing[i].y, 268, 165
				);
			}
			for(var i=0;i<cLiuxing.length;i++)
			{	
				gd.drawImage(
					imgs['liuxing3.png'],cLiuxing[i].x, cLiuxing[i].y, 268, 165
				);
			}
			for(var i=0;i<dLiuxing.length;i++)
			{	
				gd.drawImage(
					imgs['liuxing4.png'],dLiuxing[i].x, dLiuxing[i].y, 268, 165
				);
			}
		}, 1000/30);
		setInterval(function (){
			for(var i=0;i<aLiuxing.length;i++)
			{
				aLiuxing[i].x-=3;
				aLiuxing[i].y+=3;
			}
			for(var i=0;i<bLiuxing.length;i++)
			{
				bLiuxing[i].x-=3;
				bLiuxing[i].y+=3;
			}
			for(var i=0;i<cLiuxing.length;i++)
			{
				cLiuxing[i].x-=3;
				cLiuxing[i].y+=3;
			}
			for(var i=0;i<dLiuxing.length;i++)
			{
				dLiuxing[i].x-=3.3;
				dLiuxing[i].y+=3.3;
			}
		}, 1000/60);
		setInterval(function (){	
			//碰撞
			if(st){return}
			for(var i=0;i<aLiuxing.length;i++)
			{
					if(testColl(
						aLiuxing[i].x, aLiuxing[i].y, 268, 165,
						fudai.offset().left, fudai.offset().top, 150, 150
					))
					{
						//alert('a');
						aLiuxing.splice(i, 1);
						i--;
						count++;
						updatecount();
						donghua();
					}
			}
			for(var i=0;i<bLiuxing.length;i++)
			{
					if(testColl(
						bLiuxing[i].x, bLiuxing[i].y, 268, 165,
						fudai.offset().left, fudai.offset().top, 150, 150
					))
					{
						//alert('a');
						bLiuxing.splice(i, 1);
						i--;
						count++;
						updatecount();
						donghua();
					}
			}
			for(var i=0;i<cLiuxing.length;i++)
			{
					if(testColl(
						cLiuxing[i].x, cLiuxing[i].y, 268, 165,
						fudai.offset().left, fudai.offset().top, 150, 150
					))
					{
						//alert('a');
						cLiuxing.splice(i, 1);
						i--;
						count++;
						updatecount();
						donghua();
					}
			}
			for(var i=0;i<dLiuxing.length;i++)
			{
					if(testColl(
						dLiuxing[i].x, dLiuxing[i].y, 268, 165,
						fudai.offset().left, fudai.offset().top, 150, 150
					))
					{
						//alert('a');
						dLiuxing.splice(i, 1);
						i--;
						count++;
						updatecount();
						donghua();
					}
			}
		}, 1000/60);
		
	});
	
