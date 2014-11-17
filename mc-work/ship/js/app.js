/*
                   _ooOoo_
                  o8888888o
                  88" . "88
                  (| -_- |)
                  O\  =  /O
               ____/`---'\____
             .'  \\|     |//  `.
            /  \\|||  :  |||//  \
           /  _||||| -:- |||||-  \
           |   | \\\  -  /// |   |
           | \_|  ''\---/''  |   |
           \  .-\__  `-`  ___/-. /
         ___`. .'  /--.--\  `. . __
      ."" '<  `.___\_<|>_/___.'  >'"".
     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
     \  \ `-.   \_ __\ /__ _/   .-` /  /
======`-.____`-.___\_____/___.-`____.-'======
                   `=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
         佛祖保佑       永无BUG

//          佛曰:
//                  写字楼里写字间，写字间里程序员； 
//                  程序人员写程序，又拿程序换酒钱。
//                  酒醒只在网上坐，酒醉还来网下眠； 
//                  酒醉酒醒日复日，网上网下年复年。 
//                  但愿老死电脑间，不愿鞠躬老板前； 
//                  奔驰宝马贵者趣，公交自行程序员。 
//                  别人笑我忒疯癫，我笑自己命太贱； 
//                  不见满街漂亮妹，哪个归得程序员？
*/





$(function(){

	$.each( $('section'),function(i,item){
		$(this).width( $(window).width() );
		$(this).height( $(window).height() );
	} )



	
var  x=$(window).width()/2;var y = $(window).height()/2;var r=120;
window.arr=['每天一点一滴，是你的坚持，坚信梦想也能参天。','对自己细心，更对亲人用心，健康生活倾心营造。','执着品质，专注质量，美好生活华润一诺千钧。','衣食住行面面俱到，吃喝玩乐更能转瞬即达。','一二好友，三五近邻，谁让你在岁月中念念不忘。']
function circle(num,i){
	timer=['a','b','c','d','e'];
	var s2=document.getElementById('contain_second');
	 window.aspan=s2.getElementsByTagName('span');
		
		aspan[i].timer=setInterval(function(){

		var a = Math.sin( num*Math.PI/180 ) * r;
		var b = Math.cos( num*Math.PI/180 ) * r;
		num+=0.8;
		aspan[i].style.left =  x - b-$('#contain_second').find('span').width()/2 + 'px';
		aspan[i].style.top =  y - a -$('#contain_second').find('span').height()/2+ 'px';
		},30)

}



	
$.each($('#contain_second span'),function(index,item){
	$(this).tap(function(){
		
		clearInterval(aspan[0].timer);
		clearInterval(aspan[1].timer);
		clearInterval(aspan[2].timer);
		clearInterval(aspan[3].timer);
		clearInterval(aspan[4].timer);
		
		$(this).attr('data-status',index).siblings().attr('data-status','');

		$('#zhuanpan').find('p').show();
		var obp=$('#zhuanpan').find('p').eq(0)[0];
		startMove(obp,{'width':116},function(){

			startMove(obp,{'height':80},function(){
				
				$('#zhuanpan').find('p').html( arr[ index ] )
			})
		})
		//$('#zhuanpan').find('p').width('116px');
		//setTimeout(function(){},500);
		
		
	})
})


$('#butp').tap(function(){
	
			if( $('#contain_second span').eq(0).attr('data-status') ){

				$('#maskk').width( $(window).width() );
		
				$('#maskk').show().animate( {'height':$(window).height(),'line-height':$(window).height()+'px'} );
				window._index=$('#contain_second span').eq(0).attr('data-status');
				$('#m1').show().css('background-image','url(images/chengzhang.png)')
				setTimeout(function(){$('#mask1 p').show().animate({'height':'230px'})},380)
				setTimeout(function(){$('#mask1 p').html('请在这里写下您想说的话。不超过100字哦亲~')},1000)
			}else if($('#contain_second span').eq(1).attr('data-status')){
				$('#maskk').width( $(window).width() );
			
				$('#maskk').show().animate( {'height':$(window).height(),'line-height':$(window).height()+'px'} );
				window._index=$('#contain_second span').eq(1).attr('data-status');
				$('#m1').show().css('background-image','url(images/jiankang.png)')
				setTimeout(function(){$('#mask1 p').show().animate({'height':'230px'})},380)
				setTimeout(function(){$('#mask1 p').html('请在这里写下您想说的话。不超过100字哦亲~')},1000)
			}else if($('#contain_second span').eq(2).attr('data-status')){
				$('#maskk').width( $(window).width() );
 			
				$('#maskk').show().animate( {'height':$(window).height(),'line-height':$(window).height()+'px'} );
				window._index=$('#contain_second span').eq(2).attr('data-status');
				$('#m1').show().css('background-image','url(images/youwo.png)')
				setTimeout(function(){$('#mask1 p').show().animate({'height':'230px'})},380)
				setTimeout(function(){$('#mask1 p').html('请在这里写下您想说的话。不超过100字哦亲~')},1000)
			}else if($('#contain_second span').eq(3).attr('data-status')){
				$('#maskk').width( $(window).width() );
				$('#maskk').show().animate( {'height':$(window).height(),'line-height':$(window).height()+'px'} );
				window._index=$('#contain_second span').eq(3).attr('data-status');
				$('#m1').show().css('background-image','url(images/chunshu.png)')
				setTimeout(function(){$('#mask1 p').show().animate({'height':'230px'})},380)
				setTimeout(function(){$('#mask1 p').html('请在这里写下您想说的话。不超过100字哦亲~')},1000)
			}else if($('#contain_second span').eq(4).attr('data-status')){
				$('#maskk').width( $(window).width() );
				$('#maskk').show().animate( {'height':$(window).height(),'line-height':$(window).height()+'px'} );
				window._index=$('#contain_second span').eq(4).attr('data-status');
				$('#m1').show().css('background-image','url(images/youlin.png)')
				setTimeout(function(){$('#mask1 p').show().animate({'height':'230px'})},380)

				setTimeout(function(){$('#mask1 p').html('请在这里写下您想说的话。不超过100字哦亲~')},1000)
			}
			else{
				alert('请选择一个关键词哦！') 
			}
	
	 	
		
})

$('#span2').tap(function(){
	$('#contain_second span').each(function(){
		$(this).attr('data-status','');
	})
	$('#mask1 p').animate( {'height':0}).hide();
	//setTimeout(function(){$('#maskk').html('')},200)
	setTimeout(function(){$('#maskk').animate( {'height':0})},500)
	$('#m1').hide();
	$('#zhuanpan p').html('').hide();
	circle(0,0)
	circle(72,1)
	circle(144,2)
	circle(216,3)
	circle(288,4)
})
$('#span4').tap(function(){
	window.location.href='./rankLike.html';
})
//$('#boat').swipeUp(function(){
	
//===============================================================

	touch.on('#boat', 'touchstart', function(ev){
	ev.preventDefault();
});

var boat = document.getElementById("boat");
var dx, dy;

touch.on('#boat', 'drag', function(ev){
	dx = dx || 0;
	dy = dy || 0;
	//console.log("当前x值为:" + dx + ", 当前y值为:" + dy +".");
	var offx = (dx + ev.x)/3 + "px";
	var offy = (dy + ev.y)/3 + "px";
	this.style.webkitTransform = "translate3d(" + offx + "," + offy + ",0)";
	//console.log("当前x值为:" + offx + ", 当前y值为:" + offy +".");
	if( Math.abs(parseInt(offx)) >8 || Math.abs(parseInt(offy))>5){
	var obsec=$('#contain_first')[0];
	//console.log( $('this').parent() )
	//$('#contain_first').css('background-position-y','15px');
	startMove(obsec,{'opacity':0,'width':0},function(){
		obsec.style.display='none';
		$('#contain_second').show()
		setTimeout(function(){circle(0,0)
circle(72,1)
circle(144,2)
circle(216,3)
circle(288,4)},300)
	})
	}
});

touch.on('#boat', 'dragend', function(ev){
	dx += ev.x;
	dy += ev.y;
});



var boat1 = document.getElementById("span3");
var dx, dy;

touch.on('#span3', 'drag', function(ev){
	dx = dx || 0;
	dy = dy || 0;
	//console.log("当前x值为:" + dx + ", 当前y值为:" + dy +".");
	var offx = (dx + ev.x)/5 + "px";
	var offy = (dy + ev.y)/5 + "px";
	this.style.webkitTransform = "translate3d(" + offx + "," + offy + ",0)";
	//console.log("当前x值为:" + offx + ", 当前y值为:" + offy +".");
	var strs=$('#mask1 p').eq(0).html();
	if( strs.length>100 ){
		$('#mask1 p').eq(0).html( strs.substring(0,strs.length-2) )
	}
	if( Math.abs(parseInt(offx)) >25 || Math.abs(parseInt(offy))>65){
			$.post('a.php',{ "type":window._index,"content":$('#mask1 p').eq(0).html()},	        function(response){
				responsee=JSON.parse( JSON.parse(response) );
				console.log(responsee)
			
	       		if( responsee.data.code==200 ){
	       			window.location.href="./dreamOwn.html";
	       		}
	        })
		
	}
	
});

touch.on('#span3', 'dragend', function(ev){
	dx += ev.x;
	dy += ev.y;
});



})



	



