;function(window, document, undefined) {
	Living = window.Living || {};
	Living.addEvent = function(eventTarget, eventType, eventHandler) {
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

	Living.checkMobile = function(mobile) {
		var regBox = {
			regEmail: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, //邮箱
			regName: /^[a-z0-9_-]{3,16}$/, //用户名
			regMobile: /^0?1[3|4|5|8][0-9]\d{8}$/, //手机
			regMobile2: /^1[3|4|5|7|8][0-9]\d{4,8}$/,
			regTel: /^0[\d]{2,3}-[\d]{7,8}$/,
			pattern: /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/
		}

		var mflag = regBox.regMobile.test(mobile);
		if (!mflag) {
			return false;
		}

		return true;
	}
	//url ? 问号后面的东东哦
	Living.getSearch = function() {
		var url = window.location.search;
		Request = {};
		if (url.indexOf("?") != -1) {

			var str = url.substr(1)
			if (/&/.test(str)) {
				strs = str.split("&");
				for (var i = 0; i < strs.length; i++) {
					Request[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
				}
			} else {
				strs = str.split("=");
				Request[strs[0]] = unescape(strs[1]);
			}

		}
		return Request;
	}
	//去除首尾空格
	Living.trimStr = function(str) {
		return str.replace(/(^\s*)|(\s*$)/g, "");
	}

	//校验正数的
	Living.checkIsInteger = function(str) {
		//如果为空，则通过校验 
		if (!str)
			return false;
		if (/^(\d)+$/.test(str)) {
			return true;
		} else {
			return false;
		}

	}
	//简略版 检测ie
	Living.detectIEBrowser = function() {
		window.browser_test = {};
		browser_test.IE6 = window.navigator.userAgent.search(/MSIE 6/) != -1;
		browser_test.IE7 = window.navigator.userAgent.search(/MSIE 7/) != -1;
		browser_test.IE8 = window.navigator.userAgent.search(/MSIE 8/) != -1;
		browser_test.IE9 = window.navigator.userAgent.search(/MSIE 9/) != -1;
		browser_test.IE10 = window.navigator.userAgent.search(/MSIE 10/) != -1;

		if (browser_test.IE6 || browser_test.IE7 || browser_test.IE8) {
			alert('请尽量使用高级浏览器哦亲！');
		}

	}
	//使用class获取元素
	Living.getByClass = function(oParent, sClass) {
		var aEle = oParent.getElementsByTagName('*');
		var re = new RegExp('\\b' + sClass + '\\b', 'i');
		var aResult = [];
		if (document.getElementsByClassName) {
			return document.getElementsByClassName(sClass);
		}
		for (var i = 0; i < aEle.length; i++) {
			if (re.test(aEle[i].className)) {
				aResult.push(aEle[i]);
			}
		}

		return aResult;
	}
	Living.isArray = function(value) {
		if (typeof Array.isArray === "function") {
			return Array.isArray(value);
		} else {
			return Object.prototype.toString.call(value) === "[object Array]";
		}
	}
	//简易概率计算
	Living.gailu=function(value,fn1,fn2){
		var baseRange = 100;
		var percent = value;
		var data =Math.floor(Math.random()*baseRange );
		if(data >=0 && data<=percent ){
		  fn1 && fn1();
		}else{
			fn2 && fn2(data);
		}
	}
	//css3样式设置
	Living.setStyle3 = function(obj, name, value) { //css3样式设置
		obj.style['Webkit' + name.charAt(0).toUpperCase() + name.substring(1)] = value;
		obj.style['Moz' + name.charAt(0).toUpperCase() + name.substring(1)] = value;
		obj.style['ms' + name.charAt(0).toUpperCase() + name.substring(1)] = value;
		obj.style['O' + name.charAt(0).toUpperCase() + name.substring(1)] = value;
		obj.style[name] = value;
	}
	//随机数
	Living.rnd = function(n, m) {
		return Math.random() * (m - n) + n;
	}
	Living.getRandomColor=function(){
		var c = '#'; 
		var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']; 
		for(var i = 0; i < 6;i++) 
		{ 
		var cIndex = Math.round(Math.random()*15); 
		c += cArray[cIndex]; 
		} 
		return c; 
	}

}(window, document)