$(function(){
// mc.refUrl={}
// mc.refUrl.api='http://test.mc2113.cn/plugin/ushare/social_api.htm';
mc.user = {
        'isLogin': false,
        'luckId': 0,
        'pcode': ''
};

(function(){
	var html = [
    	'<div class="gm-page-lottery" style="">',
        '<div class="lw-box animated bounceInDown">',
            '<img data="iwz" class="clii"  style="left: 60px;" src="http://style.mc2113.com/dist/lib/mc_ui/images/iwz.png">',
            '<img data="ixz" class="clii" style="left: 235px;" src="http://style.mc2113.com/dist/lib/mc_ui/images/ixz.png">',
            '<img data="ibf" class="clii" style="left: 417px;" src="http://style.mc2113.com/dist/lib/mc_ui/images/ibf.png">',
            '<a data="wz">试试手气</a>',
            '<a data="xz" style="left: 236px;">试试手气</a>',
            '<a data="bf" style="left: 420px;">试试手气</a>',
			'<img id="shuts" width="38" height="31" src="http://style.mc2113.com/dist/lib/mc_ui/images/shuts.png" />',
            '<h1 style="top:48px;display:none;" class="d-l-w">您还有<span class="remain-times">13</span>颗大力丸</h1>',

            '<h1 class="lw-title" style="font-size: 43px;">快点选个礼盒打开吧！</h1>',

            '<h2 class="lw-content" style="top:300px;display:none;">content</h2>',
        '</div>',
    '</div>',
    '<div class="gm-page-get">',
        '<div class="get-box">',
           '<img />',
			'<div class="lottery-loading">',
                '<div class="movingBallLineG">',
                '</div>',
                '<div id="movingBallG_1" class="movingBallG">',
                '</div>',
           '</div>',
			'<div class="lottery-luck" style="display: none;">',

	            '<h1 style="font-size: 46px;">恭喜您</h1>',
	
	            '<h2 style="top:540px;">获得<span class="avatarName">一等奖</span></h2>',
	            '<a class="btn-go">马上领奖</a>',
	            '<a style="left: 333px;" class="btn-again">再来一次</a>',
	         '</div>',
	         '<div class="lottery-unluck" style="display: none;">',
                '<h1 style="font-size: 46px;">oh，真遗憾</h1>',
                '<h2 style="top:540px;">谢谢参与</h2>',
                '<a class="btn-close">关闭</a>',
                '<a style="left: 333px;" class="btn-again">再来一次</a>',
             '</div>',
        '</div>',
   '</div>',
    '<div class="gm-page-share">',
        '<img src="http://style.mc2113.com/dist/lib/mc_ui/images/share.png"/>',

        '<h1 style="font-size: 48px;color: #FFC425" class="share-title">炫耀一下吧！</h1>',

        '<h2 style="line-height: 45px; top:305px;" class="share-desc">马上发到朋友圈，<br>还可获得更多大力丸哦。</h2>',
     '</div>'

  ].join('');
  //document.getElementsByTagName("body")[0].innerHTML+=html;
     $('body').append( html );
})()
    
    
function get_luck(index,attr) {
	MCUI.API.getLuck(index,attr,function(data){
		 MCUI.API.log(data);
         $(".lottery-loading").hide();
         //TODO 判断是否中奖没中奖
         if (data.code == '200') {
             var prize = data.data;
             $(".lottery-luck .avatarName").html(prize.awardName);
             $(".lottery-unluck").hide();
             $(".lottery-luck").show();
             mc.user.luckId = prize.id;
             mc.user.pcode = prize.pcode;
             $(".get-box img").attr("src", "http://style.mc2113.com/dist/lib/mc_ui/images/" +attr+".png");
         } else if (data.code == '404') {
         	 $(".lottery-luck").hide();
             $(".lottery-unluck").show();
         }
	},function(){
		 MCUI.API.log("MCUI.API.getLuck error!");
		 $(".lottery-loading").hide();
         $(".lottery-unluck").show();
	})
}

$(function () {
	$('.gm-page-lottery').height( $(window).height() );
    $('.lr').one('webkitAnimationEnd', function () {
        $(this).removeClass("bounceInUp");
        $(".logo").show().addClass("bounceIn");

    });
    $('.qp').one('webkitAnimationEnd', function () {
        $(this).removeClass("fadeIn");
    });
 
    $(".lw-box a,.lw-box .clii").on("click", function () {
        //TODO invoke
        console.log($(this).attr("data"));
        $(".gm-page-get").show();
        $(".gm-page-get").css('zIndex',9000);
        index=$(this).index()
        attr=$(this).attr("data")
        get_luck(index,attr);
    });
    $(".get-box .btn-again").on("click", function () {
        $(".gm-page-get,.gm-page-lottery").hide();
        	if( window.restartGame) restartGame();
        	
    });
	 $(".get-box .btn-go").on("click", function () {
        window.location.href = 'plugin/ushare/award_user_info_form.htm?gameId=' + mc.info.gameId + '&id=' + mc.user.luckId;
    });

     $(".get-box .btn-close").on("click", function () {
        $(".gm-page-get,.gm-page-lottery").hide();
        
	})
    $(".gm-page-share").on("click", function () {
        $(this).hide();
        $(".btn-share").removeClass("btn-share-select");
        $(".btn").find("span").css("color", "#818181");
    });
    $('#shuts').on("click",function(){
    	 $(".gm-page-get,.gm-page-lottery").hide();
    	 return false
    })
});
MCUI.AWARD=MCUI.AWARD || {};
MCUI.AWARD.showAward=function(score){
	$('.gm-page-lottery').show();
};
});