define(function(require, exports, module) {
	var $ = require("lib/zepto/zepto"), activityID = $("body").data("app-id"), statistics = {
		behaviorStatistics : function(plugType) {
			
		},
		multiStatistics : function() {
			
		}
	};
	setTimeout(function() {
		statistics.multiStatistics()
	}, 2e3), module.exports = statistics
});