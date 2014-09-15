
function getCookie(c_name) {
	try {
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + "=");
			if (c_start != -1) {
				c_start = c_start + c_name.length + 1;
				c_end = document.cookie.indexOf(";", c_start);
				if (c_end == -1) {
					c_end = document.cookie.length
				}
				var cookieValue =	 document.cookie.substring(c_start, c_end);
				cookieValue = cookieValue.replace("\"", "").replace("\"", "");
				return decodeURIComponent(cookieValue);
			}
		}
	} catch (err) {
	}
	return ""
}

function iFrameHeight() {   
	var ifm= document.getElementById("iframepage-size");  
	if(ifm){
		var subWeb = document.frames ? document.frames["iframepage-size"].document : ifm.contentDocument;   
		if(subWeb != null) {
		   ifm.height = subWeb.body.scrollHeight;
		}   
	}
}

(function($, D) {
	var readyFun = [ function() {
		$('input[placeholder]').placeholder({isUseSpan:true,onInput:false});
		 $('#anti_ie6 p strong a').click(function(){
		        $('#anti_ie6').hide('slow');
		 });
		 
		if($("#current-menu").val()) {
			$("#" + $("#current-menu").val()).addClass("active");
		}
		
		if($.cookie('m_logined') == 'true') {
			 $('.head .reg-module').addClass('fd-hide');
			 $('.head .center-module').removeClass('fd-hide');
		} else {
			 $('.head .reg-module').removeClass('fd-hide');
			 $('.head .center-module').addClass('fd-hide');
		}
		
		var nickName = $.cookie('m_nick_name');
		if(nickName && nickName != '') {
			  nickName = nickName.replace('"','').replace('"','');
			  $("#header .account-id").html(truncStr(nickName,6,"..."));
		}

	}, function() {
//		$(".navLiXQ").hover(function(){
//		    $(this).find(".twoNav").css({ 
//		    display: "block"});
//		    },function(){
//		        $(this).find(".twoNav").css({ 
//		    display: "none"});
//		});
//
//		$(".issue").hover(function(){
//		    $(this).find(".release").css({ 
//		    display: "block"});
//		    },function(){
//		        $(this).find(".release").css({ 
//		    display: "none"});
//		});
	} ];

	$(function() {
		for ( var i = 0, l = readyFun.length; i < l; i++) {
			try {
				readyFun[i]();
			} catch (e) {
				if ($.log) {
					$.log('Error at No.' + i + '; ' + e.name + ':' + e.message);
				}
			} finally {
				continue;
			}
		}

	});

})(hwm, SY.hwm);


