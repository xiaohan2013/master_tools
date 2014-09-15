
var inner_html_source = "";

/**
 * 创建遮罩层
 * 
 * @return
 */
function show() {

	var div = top.document.createElement("div");
	div.style.width = top.document.documentElement.scrollWidth + "px";
	div.style.height = top.document.documentElement.scrollHeight + "px";
	div.style.backgroundColor = "gray";
	div.style.position = "absolute";
	div.style.left = 0;
	div.style.top = 0;
	div.style.zIndex = 9999;
	if (top.document.all)
		div.style.filter = "alpha(opacity=30)";
	else
		div.style.opacity = .3;
	var img = top.document.createElement("img");
	img.src = "http://style.moree.cn/images/mmoree/loading.gif";
	img.style.position = "absolute";
	img.style.top = (document.body.scrollTop + document.body.clientHeight / 2 - 50)
			+ "px";
	img.style.left = ($(window).width() / 2 - 12.5) + "px";

	div.appendChild(img);

	// div.style.textAlign = "center";
	top.document.getElementById("dialog-mask").appendChild(div);
}

/**
 * 关闭遮罩层
 * 
 * @return
 */
function close() {

	$('#dialog-mask').empty();
}

/**
 * ajax json 请求
 * 
 * @param reqUrl
 *            请求地址
 * @param reqParams
 *            参数
 * @param successFun
 *            成功处理函数
 * @param failFun
 *            失败处理函数
 * @return
 */
function ajaxJsonRequest(reqUrl, reqParams, successFun, failFun) {

	$.ajax( {
		url : reqUrl,
		type : "post",
		dataType : "json",
		cache : false,
		data : reqParams,
		success : function(result) {

			if (result.code == "200") {

				if (successFun) {
					successFun(result);
				} else {
					alert("操作成功！");
				}

			} else {

				if (failFun) {

					failFun(result);

				} else {

					if (typeof (result.data) == "undefined") {
						alert("执行错误！");
					} else {
						alert(result.data);
					}
				}
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert("系统异常，请稍后重试");
		},

		beforeSend : function(xhr, settings) {
			show();
		},

		complete : function(xhr, status) {
			close();
		}
	});
}


/**
 * ajax json 请求
 * 
 * @param reqUrl
 *            请求地址
 * @param reqParams
 *            参数
 * @param successFun
 *            成功处理函数
 * @param failFun
 *            失败处理函数
 * @return
 */
function ajaxJsonRequestExt(reqUrl, reqParams, successFun, failFun) {

	$.ajax( {
		url : reqUrl,
		type : "post",
		dataType : "json",
		cache : false,
		data : reqParams,
		success : function(result) {

			if (result.code == "200") {

				if (successFun) {
					successFun(result);
				} else {
					alert("操作成功！");
				}

			} else {

				if (failFun) {

					failFun(result);

				} else {

					if (typeof (result.data) == "undefined") {
						alert("执行错误！");
					} else {
						alert(result.data);
					}
				}
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert("系统异常，请稍后重试");
		},

		beforeSend : function(xhr, settings) {
			showLoadingMask("http://style.moree.cn/images/mmoree/loading.gif");
		},

		complete : function(xhr, status) {
			closeLoadingMask();
		}
	});
}

/**
 * 显示loading遮罩层
 */
function showLoadingMask(imgUrl) {

	var html = "<div id='dialog-mask'></div>"
	$('body').append(html);

	var div = top.document.createElement("div");
	div.style.width = top.document.documentElement.scrollWidth
			+ "px";
	div.style.height = top.document.documentElement.scrollHeight
			+ "px";
	div.style.backgroundColor = "gray";
	div.style.position = "absolute";
	div.style.left = 0;
	div.style.top = 0;
	div.style.zIndex = 9999;
	if (top.document.all)
		div.style.filter = "alpha(opacity=30)";
	else
		div.style.opacity = .3;

	if (imgUrl) {

		var img = top.document.createElement("img");
		img.src = imgUrl;
		img.style.position = "absolute";
		
		var img_height = 50;
		var img_width = 25;
		if(img.height > 0) {
			img_height = img.height;
		}
		
		img.style.top = (document.body.scrollTop
				+ ($(window).height() / 2) - img_height)
				+ "px";
		
		img.style.left = ($(window).width() / 2 - img_width / 2) + "px";
		div.appendChild(img);

	} else {

		var span = top.document.createElement("span");
		//span.style.color = '#fff';
		span.innerHTML = '执行中，请稍候……';
		span.style.position = "absolute";
		
		span.style.top = (document.body.scrollTop + ($(window).height() / 2) - 50)
				+ "px";
		div.style.textAlign = "center";
		div.appendChild(span);
	}

	top.document.getElementById("dialog-mask").appendChild(div);
}

/**
 * 关闭loading遮罩层
 */
function closeLoadingMask() {
	$('#dialog-mask').remove();
}

/**
 * 关闭对话框
 */
function closeDialogLayer(inner_dialog_divid) {
	$('#dialog_03221319').remove();
	
	if(inner_dialog_divid) {
		$(inner_dialog_divid).append(inner_html_source);
		inner_html_source = "";
	}
	
}

/**
 * inner_dialog_divid : 对话框 selector '#dialog_a','.dialog_b' width :
 * 宽度 top ： 离屏幕上方间隔 background ： 背景色
 * 
 */
function showDialogLayer(inner_dialog_divid, width, top, background,padding) {

	var i_width = '500px';
	if (width) {
		i_width = width + 'px';
	}

	var i_top = (document.body.scrollTop + 100) + 'px';
	if (top) {
		i_top = (document.body.scrollTop + top) + 'px';
	}

	var i_background = '#CCC';
	if (background) {
		i_background = background;
	}

	var i_padding = '20px';
	if(padding) {
		i_padding = padding + "px";
	}
	
	var inner_dialog = $(inner_dialog_divid).html();
	inner_html_source = inner_dialog;
	$(inner_dialog_divid).empty();
	

	var html = '<div id="dialog_03221319" > <div id="windows_03221319" class="dialog-inner">' + inner_dialog + '</div><div id="bg_03221319"></div> </div>';
	$('body').append(html);
	
	$('#windows_03221319').css( {
		'position' : 'absolute',
		'top' : i_top,
		'background' : i_background,
		'width' : i_width,
		'padding' : i_padding,
		'z-index' : 1002
	});

	var left = ($(document).width() - $('#windows_03221319')
			.width()) / 2;

	$('#windows_03221319').css( {
		'left' : left
	});

	var h = document.body.scrollHeight + "px";

	$('#bg_03221319').show().css( {
		'position' : 'absolute',
		'width' : '100%',
		'height' : h,
		'top' : 0,
		'left' : 0,
		'z-index' : 1001,
		'background' : '#000',
		'opacity' : 0.4
	});

}
