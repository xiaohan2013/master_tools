;$(function() {
	(function() {
		if (mc.info && mc.info.title) {
			document.title = mc.info.title;
		}
		var html = [
				'<div class="gm-page-ad">',
				'<div class="mask"></div>',
				'<div class="ad-content">',
				'<img id="ad-img" />',
				'<div class="ad-top-text">',
				'<img src="http://style.mc2113.com/dist/game/christmas/static/img/ad_top_bg.png"/>',
				'<h4 id="ad-top-text"></h4>',
				'</div>',
				'<div class="ad-bottom-btn"  data-action="ads" data-label="点击关注" data-id="">',
				'<img src="http://style.mc2113.com/dist/game/christmas/static/img/ad_btn.png"/>',
				'<h4 id="ad-bottom-btn-text"></h4>',
				'</div>',
				'</div>',
				'<div class="border-shadow"></div>',
				'<img src="http://style.mc2113.com/dist/game/christmas/static/img/btn_ad_arrow_down.png" id="btn-ad-arrow" class="ad-arrow" width="130"/>',
				'</div>' ].join('');
		cust_option = window.mc_ads_config || {}, script_path = '', option = {
			'cssPath' : './',
			'imgPath' : './img/',
			'html' : html
		};
		$('body').append(option.html);

	})();
	if (mc && mc.ads) {
		$('body')
				.on(
						'click touchstart',
						'#btn-ad-arrow',
						function(e) {
							e.preventDefault();
							var obj = this;
							$('.gm-page-ad .mask').toggle();
							$('.ad-content')
									.slideToggle(
											function() {
												$('.ad-top-text').toggle();
												$('.border-shadow').toggle();
												if ($(this).css("display") == 'block') {
													$(obj)
															.attr('src',
																	'http://style.mc2113.com/dist/game/christmas/static/img/btn_ad_arrow_up_v3.png').attr('width',100);
												} else {
													$(obj)
															.attr('src',
																	'http://style.mc2113.com/dist/game/christmas/static/img/btn_ad_arrow_down.png').attr('width',120);
												}
											});
						});

		$('body').on(
				'click touchstart',
				'.gm-page-ad .ad-bottom-btn',
				function(e) {
					e.preventDefault();
					if ($(this).data("action") && $(this).data("label")) {
						try {
							_paq.push([
									'trackEvent',
									$(this).data("action"),
									$(this).data("label") + "_"
											+ mc.info.gameId ]);
						} catch (e) {
						}
					}
					window.location.href = mc.ads.link;
				});

		$('#ad-img').attr('src', mc.ads.pic + "!300.260");
		$('#ad-bottom-btn-text').html(mc.ads.btnText);
		$('#ad-top-text').html(mc.ads.tipTitle);
		
	}

	window.MCUI = window.MCUI || {};
	MCUI.TOPBAR = MCUI.TOPBAR || {};

	MCUI.TOPBAR.refreshTipTitle = function(playCnt) {
		var tip = "您还有" + playCnt + "次游戏机会";
		if(mc.awards.totalPrize && mc.awards.totalPrize > 0) {
			tip = tip + "," + mc.ads.tipTitle;
		}
		$('#ad-top-text').html(tip);
	};
	
	MCUI.TOPBAR.show = function() {
		$('.gm-page-ad').show();
	};

	MCUI.TOPBAR.hide = function() {
		$('.gm-page-ad').hide();
	};
	
	setTimeout(function() {
		MCUI.TOPBAR.refreshTipTitle(mc.info.remainTimes);
		$('#btn-ad-arrow').trigger('click');
	},500);
});
