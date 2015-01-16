;$(function(){
	(function() {
	var html = [
		'<div class="gm-page-nav" id="game-foot">',
		'<a class="btn-bottom btn-rule"><span style="margin-left: -15px;">活动详情</span></a>',
		'<a class="btn-bottom btn-rank"><span style="margin-left: -15px;">排&nbsp;行&nbsp;榜</span></a>',
		'<a class="btn-bottom btn-start" style="background-image: none;"></a>',
		'<a class="btn-bottom btn-prize"><span style="margin-left: -15px;">奖品抢兑</span></a>',
		'<a class="btn-bottom btn-share"><span style="margin-left: -15px;">立即分享</span></a>',
		'</div>',
		'<div id="foot_mask"></div>',
		'<div id="foot_limit_share_mask"></div>'
	].join('');
	//document.getElementsByTagName("body")[0].innerHTML += html;
 $('body').append( html );
})();
(function($, window, document, undefined) {
	$('#foot_mask').height($(window).height());
	$('#foot_limit_share_mask').height($(window).height());
	window.MCUI = window.MCUI || {};
	MCUI.gameFoot = {};
	MCUI.gameMask = {};
	MCUI.gameFoot.toUrl = function(baseurl, id) {
		if (mc.refUrl.award) {
			baseurl = baseurl.replace(/%id%/g, id);

			window.location.href = baseurl;
		} else {
			window.location.href = baseurl;
		}
	};
	MCUI.gameFoot.show = function() {
		$("#game-foot").show();
	};
	MCUI.gameFoot.hide = function() {
		$("#game-foot").hide();
	};
	MCUI.gameFoot.changeFoot = function() {
		if (mc.userInfo.headingImage && mc.userInfo.headingImage != "") {
			$('.btn-start').css('background-image', 'url("' + jQuery.trim(mc.userInfo.headingImage) + '")');
		} else {
			$('.btn-start').css('background-image', 'url(http://img2.t305.com/mcupload/m1/201412052005130989.jpg)');
		}
	
	}
	MCUI.gameMask.showShare = function() {
		$("#foot_mask").show();
	}
	MCUI.gameMask.hideShare = function() {
		$('#foot_mask').hide();
	}
	
	MCUI.gameMask.showLimitShare = function() {
		$("#foot_limit_share_mask").show();
	}
	
	MCUI.gameMask.hideLimitShare = function() {
		$('#foot_limit_share_mask').hide();
	}
	
	$(".btn-bottom").on("click", function() {
		$(".btn-bottom").removeClass("btn-rule-select btn-rank-select btn-prize-select btn-share-select");
		$(".btn-bottom").find("span").css("color", "#818181");
		$(this).find("span").css("color", "#C60D00");
		if ($(this).hasClass("btn-rule")) {
			$(this).addClass("btn-rule-select");
			window.location.href = mc.refUrl.rule;
		} else if ($(this).hasClass("btn-rank")) {
			$(this).addClass("btn-rank-select");
			window.location.href = mc.refUrl.rank;

		} else if ($(this).hasClass("btn-prize")) {
			$(this).addClass("btn-prize-select");
			window.location.href = mc.refUrl.ucenter;
		} else if ($(this).hasClass("btn-share")) {
			$(this).addClass("btn-share-select");
			MCUI.gameMask.showShare()
		}
	});
	$('#foot_mask').click(function() {
		window.MCUI.gameMask.hideShare()
	});
	$('#foot_limit_share_mask').click(function() {
		MCUI.gameMask.hideLimitShare()
	});
	MCUI.gameFoot.changeFoot && MCUI.gameFoot.changeFoot()
})(jQuery, window, document);
});
