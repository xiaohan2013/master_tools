;(function($, window, document, undefined) {
	window.MCUI = window.MCUI || {};
	MCUI.SHARE = MCUI.SHARE || {};
	 // 微信分享的数据
    window.shareData = {
        "appId": "wxef0a31e6474cb4c7", // 服务号可以填写appId
        "imgUrl": mc.conf.shareIcon,
        "link":  mc.refUrl.share,
        "desc": mc.conf.shareDesc,
        "title": mc.conf.shareTitle
    };
    
    MCUI.SHARE.setShareData = function(shareTitle,shareDesc){
    	window.shareData.desc = shareDesc;
    	window.shareData.title = shareTitle;
    };
    //for 微信api
    MCUI.SHARE.weixinApi = WeixinApi;
    
    // 开发阶段，开启WeixinApi的调试模式
    //WeixinApi.enableDebugMode();
    // 初始化WeixinApi，等待分享
    WeixinApi.ready(function (Api) {
        // 分享的回调
        var wxCallbacks = {
            favorite: false,
            
            async : true,
            
            ready: function () {
            	var self = this;
                self.dataLoaded(window.shareData);
            },
            // 分享被用户自动取消
            cancel: function (resp) {
                _paq && _paq.push(['trackEvent', 'click', 'share-cancel']);
            },
            fail: function (resp) {
                _paq && _paq.push(['trackEvent', 'click', 'share-fail']);
            },
            confirm: function (resp) {
                _paq && _paq.push(['trackEvent', 'Share', 'share-friends']);
            },
            all: function (resp, shareTo) {
            }
        };
        // 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
        Api.shareToFriend(window.shareData, wxCallbacks);
        // 点击分享到朋友圈，会执行下面这个代码
        Api.shareToTimeline(window.shareData, wxCallbacks);
        // 点击分享到腾讯微博，会执行下面这个代码
        Api.shareToWeibo(window.shareData, wxCallbacks);
        // iOS上，可以直接调用这个API进行分享，一句话搞定
        Api.generalShare(window.shareData, wxCallbacks);
    });
    if (WeixinApi && WeixinApi.openInWeixin()) {
        setTimeout(function () {
            WeixinApi.showOptionMenu();
        }, 4000);
    }
})(jQuery, window, document);