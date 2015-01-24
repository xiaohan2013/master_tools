;function(window,document,undefined){
	Living=window.Living || {};
Living.addEvent=function(eventTarget, eventType, eventHandler) {
     if (eventTarget.addEventListener) {
         eventTarget.addEventListener(eventType, eventHandler, false);
     } else {
         if (eventTarget.attachEvent) {
            eventType = "on" + eventType;
            eventTarget.attachEvent(eventType, eventHandler);
         } else {
             eventTarget["on" + eventType] = eventHandler;
         }
    }
}

Living.checkMobile=function(mobile) {
			var regBox = {
				regEmail : /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,//邮箱
				regName : /^[a-z0-9_-]{3,16}$/,//用户名
				regMobile : /^0?1[3|4|5|8][0-9]\d{8}$/,//手机
				regMobile2:/^1[3|4|5|7|8][0-9]\d{4,8}$/,手机2
				regTel : /^0[\d]{2,3}-[\d]{7,8}$/
			}

			var mflag = regBox.regMobile.test(mobile);
			if (!mflag) {
				return false;
			}

			return true;
}
 //url ? 问号后面的东东哦
Living.getSearch=function()
{ 
	var url=window.location.search; 
	Request ={}; 
	if(url.indexOf("?")!=-1) 
	{ 
	
		var str = url.substr(1) 
		if(/&/.test(str)){
			strs = str.split("&"); 
			for(var i=0;i<strs.length;i++) 
			{ 
				Request[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
			}
		}else{
			strs = str.split("=");
			Request[strs[0]]=unescape(strs[1]);
		}
		
	}
	return Request;
}
//去除首尾空格
Living.trimStr=function(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

//校验正数的
Living.checkIsInteger=function(str) {
	//如果为空，则通过校验 
	if (!str)
		return false;
	if (/^(\d)+$/.test(str)){
		return true;
	}else{
		return false;
	}
		
}	
//简略版 检测ie
Living.detectIEBrowser=function(){
	window.browser_test={};
	browser_test.IE6=window.navigator.userAgent.search(/MSIE 6/)!=-1;
	browser_test.IE7=window.navigator.userAgent.search(/MSIE 7/)!=-1;
	browser_test.IE8=window.navigator.userAgent.search(/MSIE 8/)!=-1;
	browser_test.IE9=window.navigator.userAgent.search(/MSIE 9/)!=-1;
	browser_test.IE10=window.navigator.userAgent.search(/MSIE 10/)!=-1;
	
	if( browser_test.IE6 || browser_test.IE7 || browser_test.IE8 ){
		alert('请尽量使用高级浏览器哦亲！');
	}
	
}

}(window,document)
