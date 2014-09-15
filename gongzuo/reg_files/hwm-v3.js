window.hwm = jQuery.sub();
(function($, undefined) {
	var $isFunction = $.isFunction, $isArray = $.isArray, $each = $.each;
	$.noConflict();
	$.extend({
		namespace : function() {
			var a = arguments, o, i = 0, j, d, arg;
			for (; i < a.length; i++) {
				o = window;
				arg = a[i];
				if (arg.indexOf('.')) {
					d = arg.split('.');
					for (j = (d[0] == 'window') ? 1 : 0; j < d.length; j++) {
						o[d[j]] = o[d[j]] || {};
						o = o[d[j]];
					}
				} else {
					o[arg] = o[arg] || {};
				}
			}
		},
		/**
		 * jQuery.debug.js will rewrite this,
		 */
		log : $.noop
	});
	$.namespace('SY.hwm');
})(jQuery);

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}

var gApiUrl = ""; 


var $ = jQuery;
function i(msg) {
	try {
		if (!navigator.userAgent.indexOf("Firefox") > 0) {
			return;
		}
		if (console) {
			console.info(msg);
		}
	} catch (e) {

	}
}

/**
 * 随即排序
 * @param a
 * @param b
 * @return
 */
function randomsort(a, b) {
	return Math.random()>.5 ? -1 : 1;// 用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}

/**
 * 根据最大长度限制返回截断后的字符串
 * 
 * @param str
 *            原字符串
 * @param maxlen
 *            字符串最大长度
 * @param suffix
 *            如果有截断，则返回字符串含后缀（可选）
 */
function truncStr(str, maxlen, suffix) {
	// 后缀默认为空字符串
	if (typeof suffix == "undefined") {
		suffix = "";
	}
	// 字符串真实长度
	var len = strlen(str);
	if (len > maxlen) {
		// 当前双字节字符数
		var count = str.replace(/[\x00-\xff]/g, "").length;
		// 当前至少还需截断的长度
		var cutlen = Math.max(Math.floor((count + str.length - maxlen) / 2), 1);
		// 递归截取字符串
		return truncStr(str.substring(0, str.length - cutlen), maxlen) + suffix;
	} else {
		return str;
	}
}
/**
 * 字符串真实长度
 * 
 * @param str
 *            字符串
 */
function strlen(str) {
	if (str) {
		str += "";
		// 将双字节字符替换成“**”后获取字符串真实长度
		return str.replace(/[^\x00-\xff]/g, "**").length;
	}
	return "";
};

(function($) {
    function Placeholder(input) {
        this.input = input;
        if (input.attr('type') == 'password') {
            this.handlePassword();
        }
        // Prevent placeholder values from submitting
        $(input[0].form).submit(function() {
            if (input.hasClass('placeholder') && input[0].value == input.attr('placeholder')) {
                input[0].value = '';
            }
        });
    }
    Placeholder.prototype = {
        show : function(loading) {
            // FF and IE saves values when you refresh the page. If the user
			// refreshes the page with
            // the placeholders showing they will be the default values and the
			// input fields won't be empty.
            if (this.input[0].value === '' || (loading && this.valueIsPlaceholder())) {
                if (this.isPassword) {
                    try {
                        this.input[0].setAttribute('type', 'text');
                    } catch (e) {
                        this.input.before(this.fakePassword.show()).hide();
                    }
                }
                this.input.addClass('placeholder');
                this.input[0].value = this.input.attr('placeholder');
            }
        },
        hide : function() {
            if (this.valueIsPlaceholder() && this.input.hasClass('placeholder')) {
                this.input.removeClass('placeholder');
                this.input[0].value = '';
                if (this.isPassword) {
                    try {
                        this.input[0].setAttribute('type', 'password');
                    } catch (e) { }
                    // Restore focus for Opera and IE
                    this.input.show();
                    this.input[0].focus();
                }
            }
        },
        valueIsPlaceholder : function() {
            return this.input[0].value == this.input.attr('placeholder');
        },
        handlePassword: function() {
            var input = this.input;
            input.attr('realType', 'password');
            this.isPassword = true;
            // IE < 9 doesn't allow changing the type of password inputs
            if ($.browser.msie && input[0].outerHTML) {
                var fakeHTML = $(input[0].outerHTML.replace(/type=(['"])?password\1/gi, 'type=$1text$1'));
                this.fakePassword = fakeHTML.val(input.attr('placeholder')).addClass('placeholder').focus(function() {
                    input.trigger('focus');
                    $(this).hide();
                });
                $(input[0].form).submit(function() {
                    fakeHTML.remove();
                    input.show()
                });
            }
        }
    };
    var NATIVE_SUPPORT = !!("placeholder" in document.createElement( "input" ));
    $.fn.placeholder = function() {
        return NATIVE_SUPPORT ? this : this.each(function() {
            var input = $(this);
            var placeholder = new Placeholder(input);
            placeholder.show(true);
            input.focus(function() {
                placeholder.hide();
            });
            input.blur(function() {
                placeholder.show(false);
            });

            // On page refresh, IE doesn't re-populate user input
            // until the window.onload event is fired.
            if ($.browser.msie) {
                $(window).load(function() {
                    if(input.val()) {
                        input.removeClass("placeholder");
                    }
                    placeholder.show(true);
                });
                // What's even worse, the text cursor disappears
                // when tabbing between text inputs, here's a fix
                input.focus(function() {
                    if(this.value == "") {
                        var range = this.createTextRange();
                        range.collapse(true);
                        range.moveStart('character', 0);
                        range.select();
                    }
                });
            }
        });
    }
})(jQuery);
