$(function(){
(function($, window, document, undefined) {
	$('#foot_mask').height($(window).height());
	window.MCUI = window.MCUI || {};
	MCUI.API = MCUI.API ||  {};
	//提交分数
	MCUI.API.acceptScore = function(gameScore,succedFunc,failFunc) {
	    $.ajax({
	        type: 'POST',
	        url: mc.refUrl.api,
	        data: {
	            method: 'acceptScore',
	            gameId: mc.info.gameId,
	            source: mc.info.source,
	            ticket: mc.rela.ticket,
	            score:  gameScore
	        },
	        xhrFields: {
	            withCredentials: true
	        },
	        dataType: 'json',
	        timeout: 5000,
	        success: function (data) {
	           if(succedFunc) {
	        	   succedFunc(data);
	           }
	        },
	        error: function (xhr, type) {
	        	 if(failFunc) {
	        		 failFunc();
		         }
	        }
	    });
	};
	
	MCUI.API.getLuck = function (index,attr,succedFunc,failFunc) {
		//mock
//		if(succedFunc) {
//     	   succedFunc({"code":"200","data":{"id":112,"awardName":"好烦大会发达","pcode":"ddaffds"}});
//     	   return true;
//		}
	    $.ajax({
	        type: 'POST',
	        url: mc.refUrl.api,
	        data: {
	            method: 'getLuck',
	            gameId: mc.info.gameId
	        },
	        xhrFields: {
	            withCredentials: true
	        },
	        dataType: 'json',
	        timeout: 5000,
	        success: function (data) {
	        	if(succedFunc) {
		        	   succedFunc(data);
		        }
	        },
	        error: function (xhr, type) {
	        	if(failFunc) {
	        		 failFunc();
		         }
	        }
	    });
	};
	
	MCUI.API.log = function (str) {
		if(console) {
			console.log(str);
		}
	}
})(jQuery, window, document);
});