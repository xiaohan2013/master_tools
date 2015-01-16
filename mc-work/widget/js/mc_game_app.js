;(function($, window, document, undefined) {
	  window.MCAPP = window.MCAPP || {};
	   MCAPP.playCount = 0;
	   MCAPP.checkRemainTimes = function() {
			if(mc.info.remainTimes - MCAPP.playCount <= 0){
				MCUI.gameMask.showLimitShare();
				return false;
			}
			return true;
	   }
	   MCAPP.submitScore = function(score) {
			MCAPP.playCount++;
			MCUI.TOPBAR.refreshTipTitle(mc.info.remainTimes - MCAPP.playCount);
			
			MCUI.API.acceptScore(score);
			if(mc.conf.shareSpeTitle) {
				var title = mc.conf.shareSpeTitle.replace("%score%",score).replace("%nickName%",mc.userInfo.nickName);
				var desc = title;
				if(mc.conf.shareSpeDesc) {
					desc = mc.conf.shareSpeDesc.replace("%score%",score).replace("%nickName%",mc.userInfo.nickName);
				}
				MCUI.SHARE.setShareData(title,desc);
			}
	   }
})(jQuery, window, document);