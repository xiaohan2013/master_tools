;
$(function() {
	function getCookieByName(c_name) {
		try {
			if (document.cookie.length > 0) {
				c_start = document.cookie.indexOf(c_name + "=");
				if (c_start != -1) {
					c_start = c_start + c_name.length + 1;
					c_end = document.cookie.indexOf(";", c_start);
					if (c_end == -1) {
						c_end = document.cookie.length
					}
					var cookieValue = document.cookie.substring(c_start, c_end);
					cookieValue = cookieValue.replace("\"", "").replace("\"",
							"");
					return decodeURIComponent(cookieValue);
				}
			}
		} catch (err) {
		}
		return ""
	}

	var tongjiSetting = {
		siteId : "$!socialGame.anSiteId",
		uid : getCookieByName("m_last_loginid_"),
		nickName : getCookieByName("m_nick_name"),
		piwik_visitor_id : ""
	};
	var _paq = _paq || [];
	_paq.push([ 'setCustomVariable', 1, "uid", tongjiSetting.uid, "visit" ]);
	_paq.push([ 'setCustomVariable', 2, "nickName", tongjiSetting.nickName,
			"visit" ]);
	_paq.push([ 'trackPageView' ]);
	_paq.push([ 'enableLinkTracking' ]);

	(function() {
		var u = "//tongji.mc2113.com/piwik/";
		_paq.push([ 'setTrackerUrl', u + 'piwik.php' ]);
		_paq.push([ function() {
			tongjiSetting.piwik_visitor_id = this.getVisitorId();
		} ]);
		_paq.push([ 'setSiteId', tongjiSetting.siteId ]);
		var d = document, g = d.createElement('script'), s = d
				.getElementsByTagName('script')[0];
		g.type = 'text/javascript';
		g.async = true;
		g.defer = true;
		g.src = u + 'piwik.js';
		s.parentNode.insertBefore(g, s);
	})();

	(function() {
		// for all click
		if (_paq) {
			$(".iclick").click(
					function() {
						if ($(this).data("action") && $(this).data("label")) {
							try {
								_paq.push([ 'trackEvent',
										$(this).data("action"),
										$(this).data("label") ]);
							} catch (e) {
							}
						}
					});
		}
	})();
});