行为：Javascript 结构：HTML 表现：CSS

1.window.onload=function(){}
2.获取元素
3.加事件

Chrome Ctrl+shift+J
IE 工具-internet想象-高级-禁用脚本调试（其他）
1.alert();
2.document.tiltle;
3.console.log();

======获取元素 START=================================================================

1.document.getElementById();   //getElementById必须在document下 
2.obj.getElementsByTagName();
3.obj.getElementsByClassName();  兼容ie9+,chrome,firefox  ==>所以要用封装的方式
封装兼容的方法getByClass(oParent,sClass)

document.body  				----- 代表的就是body
document.title 				----- 改变页面标题，也用来调试
document.documentElement    ----- 代表的就是html

标签内容：
1.非表单内容 ----- .innerHTML
2.表单内容   ----- .value

innerHTML问题：清空之前事件，先删除，再添加

获取非行间样式：
getComputedStyle(obj,false)[name];   //Firefox,Chrome  false是为了兼容低版本火狐
obj.currentStyle[name];				 //仅限IE

----------------获取非行间样式封装示例START----------------
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}
}

var oImg=document.getElementById('img');
var oBox=document.getElementById('box');
var oImgHeight=parseInt(getStyle(oImg,'height'));
var oBoxHeight=parseInt(getStyle(oBox,'height'));
----------------获取非行间样式封装示例END----------------

getStyle(obj,name)
不能获取复合样式

设置样式
1.obj.style.属性 = '值';
2.obj.style.cssText = '属性:值;属性:值;属性:值;...';

=====变量类型 START==================================================================

typeof  ----- 用来获取变量类型

类型：number,string,boolean,undefined,object,function

undefined -> undefined
null -> object
arr  -> object
NaN  -> number   //NaN !== NaN，NaN和任何都不相等   TIPS：用isNaN（）判断，如果是NaN，返回true，否则false

null		用id从页面获取不存在的元素
undefined	1.定义了变量，但是没有赋值
			2.访问一个不存在的属性
			3.用tagName获取不存在的元素
			4.没有返回值的函数的值

假：false,0,空字符串,undefined,空对象(null),NaN

number + undefined --> NaN

=====字符串 START==================================================================

str.toUpperCase()		转大写
str.toLowerCase()		转小写
sr.split()				转数组
str.charAt()			传索引 返回字符串
st.substring()			传索引 截取字符串
str.indexOf()			传字符串 返回索引 从左往右  ==》如果没找到，返回-1
str.lastIndexOf()		传字符串 返回索引 从右往左  ==》检测扩展名 .jpg .gif等

1，str.charAt(0)							给索引 返回字符
2，str.indexOf('a')							给字符串 返回索引 ：从左往右找，找到了就返回，不继续找，没有找到返回-1（区分大小写）
3，srt.lastIndexOf('a')						从右往左找
4，str.substring(开始的索引，结束的索引)	截取字符串 不包含结束
   str.substring(开始的索引)				一直截取到最后
5，str.split(' ')							字符串切割成数组
   str.split('')							切成单个字符的数组
6，str.toUpperCase()						转大写
7，str.toLowerCase()						转小写

判断浏览器类型
var UA=window.navigator.userAgent
  [ ie:MSIE 版本  ]
  [ chrome:Chrome ]
  [ FF:Firefox    ]
UA.indexOf('Chrome')!=-1 判断chrome

截取扩展名
var str = 'txt.html';
alert(str.substring(str.lastIndexOf('.')+1));


=====事件 START=====================================================================

onclick ondblclick onmouseover onmouseout onmousedown onmouseup onchange onload

TIPS：onload只能加给window   /   onchange表单专有事件，失去焦点时触发

window.onscroll 当用户滚动滚动条的时候
window.onresize 当用户改变窗口大小的时候

*在用scrollTop，一定要加上window.onscroll

让某一个物体获得焦点：obj.focus();
让某一个物体失去焦点：obj.blur();     ---->去除A标签的边框
焦点:onfucus
聚焦:onblur

var oImg=new Image();
oImg.onload=function(){
	alert('加载成功')
}
oImg.onerror=function(){
	alert('error')
}
oImg.src='www.test.com/1.jpg'
=====数字运算 START==================================================================

= 		永远都是赋值
==		比较（会做隐式转换）    					2 == '2'  ==>true
===     比较（先比较类型，再比较是否相等）			2 === '2' ==>false

1.parseInt('12') ==> 转化成整数      parseInt('12.5')   ==> 12     不能转小数,从左往右开始找，找到第一个不是数字直接跳出
2.parseFloat('12.5') ==> 可以转小数  parseFloat('12.5') ==> 12.5   能转小数,其他和parseInt一模一样
3.Number('12'):只能转长得像数字的    Number('12.5px')   ==> NaN    Not a Number

随机数字公式：parseInt(Math.random()*(m-n)+n)   随机n~m

var arr=[49,5,67,22,16,9];
arr.sort(function(n1,n2){    ///比较函数
	/*if(n1<n2){
		return -199;
	}else if(n1>n2){
		retrun 100;
	}else{
		return 0;y
	}*/
	return n1-n2;  //从小到大
	return n2-n1;  //从大到小		
});


=====函数 START=====================================================================

1.函数定义
2.函数调用

封闭空间：自执行匿名函数

(function(){    		   //写法1
  //语句
})()

!function(){			  //写法2
	
}();

示例：
for(i=0;i<aHandle.length;i++){
	(function(index){
		aHandle[i].onmouseover=function(){
			for(i=0;i<aHandle.length;i++){
				aHandle[i].className='';
				aLi[i].className='';
			}
			this.className='active';
			aLi[index].className='show';			
		};
	})(i);
}

优点  1.少了一个名字
	  2.解决执行时机捣乱的问题
	  	a.解决变量名冲突
	  	b.解决i问题(for里面加事件，时间里的i / for里面加定时器，定时器里面的i)

*函数每调用一次，就会复制一份（到内存）

函数默认返回 undefined 

arguments 实参数组  ============>

求和示例：
function sum(){
	var result=0;
	for(i=0;i<arguments.length;i++){
		ret+=arguments[i];
	}
	return result;
}
sum(1,2,3,4,5)

作用域(函数)
	1.全局变量
	2.局部变量
	3.闭包：子函数可以使用父函数的局部变量
	*window.onload里面的变量都是局部变量

=====输出 START=====================================================================

document.write('hello world') //在页面直接写入内容
document.write中可以写入标签
示例：document.write("<h1>This is a header</h1>");
	  document.write("<p>This is a paragraph</p>");
	  document.write("<p>This is another paragraph</p>");

'+变量+'  插入变量

===========================================================================

操作符
typeof delete break continue return

break:跳出整个循环
continue:跳出当次循环

操作属性： 
1:原生属性	
2:[]变量属性    
3:obj.getAttribute('_src')   获取自定义属性
  obj.setAttribute(名字，值)                       *这三种不能混用

获取内容：表单元素(value)	非表单元素(innerHTML)

硬调试：F12 ctrl+shift+j
软调试：alert(n)  document.title=n  console.log(n)

getElementById只能从document下获取元素

number对象
parseInt(),parseFloat(),Number()
NaN跟谁都不相等，包括他自己
isNaN()

字符串  --->  数字     a=a-0
数字    --->  字符串   a=''+a

======定时器 START=====================================================================

setInterval(函数名,毫秒数)
setTimeout(函数名,毫秒数)
clearInterval(定时器名)
clearTimeout(定时器名)
*用定时器时注意先清再开
*定时器里面不能用this，this变成window

=====时间对象 START======================================================================

oDate = new Date();

oDate.getHours();
oDate.getMinutes();
oDate.getSeconds();
oDate.getFullYear();
oDate.getMonth();		从0开始
oDate.getDate();
oDate.getDay();			周日-->0
oDate.getTime(); 		时间戳（1970年到现在的毫秒数）
	  					天		86400	秒
						小时	3600	秒
						分钟	60		秒

oDate.setFullYear(2014,9,1) 设置年，月，日 (月从0月开始)
oDate.setHours(0,0,0,0) 	设置时，分，秒，毫秒
oDate.setMonth(0,0)			设置月，日
oDate.setDate(1)			设置日

*时间自动进位或退位/没有setDay

本月多少天？
oDate.setMonth(oDAte.getMonth()+1) //时间调到下个月
oDate.setDate(0)	//回到上个月的最后一天
alert(oDate.getDate())

下月多少天？
oDate.setMonth(oDAte.getMonth()+2) //时间调到下个月
oDate.setDate(0)	//回到上个月的最后一天
alert(oDate.getDate())

本月第一天是周几？
oDate.setDate(1);
alert(oDate.getDay());

=====数组 START====================================================================

数组对象：
1,arr.length
2,arr[0]
3,arr.push(0)     往后面添加
4,arr.unshift(0)  往前添加
5,arr.pop()       从后面删除
6,arr.shift()     从前面删除
7,arr.splice(开始位置，删除长度，元素1，元素2...)  万能操作
	arr.splice(0,1)					= arr.shift()
	arr.splice(arr.length-1,1)		= arr.pop()
	arr.splice(0,0,0)				= arr.unshift(0)
	arr.splice(arr.length-1,0,0)	= arr.push(0)
8,arr.reverse()
	翻转数组
	var arr = [1,2,3,4,5];
	while(arr.length){
		arr2.push(arr.pop());
		//arr2.unshift(arr.shift());
	}
9,arr.join('连接方式')				数组转字符串
10,arr.concat(arr2,arr3,[10],'11')  连接数组
11,arr.sort()						排序 （首先把数组项转换成字符串，再排序）
	arr.sort(function(n1,n2){		比较函数 排序数字
		return n1-n2;
	});

快速清空数组
1.arr=[]
2.arr.length=0
3.arr.splice(0,arr.length)
4.while(arr.length){arr.pop();}
*字符串的length不能赋值

arr↓
arr.unshift()	前面添加
arr.shift()		前面删除
arr.push()		后面添加
arr.pop()		后面删除
arr.splice()	万能操作
arr.concat()	连接数组
arr.reverse()	翻转数组
arr.join()		转字符串
arr.sort()		数组排序

=====JSON START======================================================================

var json={名:值,名:值,名:值...}  （给变量打了个包）

json.a == json['a']

delete json.a 删除

		arr2	json
下标	数字	字符串
length	有		没有
循环	for		for(var name in json){alert(json[name])}

function setStyle(obj,json){
	for(var name in json){
		obj.style[name] = json[name];
	}
}
	
=====流程控制 START======================================================================

流程控制：
1.if()else if(){}...
2.sitch(){}

处理兼容：if(){}else{}
假:0，false,'',undefined,null,NaN;

switch(n)
   {
   case 1:
     执行代码块 1
     break
   case 2:
     执行代码块 2
     break
   default:
     如果n即不是1也不是2，则执行此代码
   }

工作原理：switch 后面的 (n) 可以是表达式，也可以（并通常）是变量。然后表达式中的值会与 case 中的数字作比较，如果与某个 case 相匹配，那么其后的代码就会被执行。break 的作用是防止代码自动执行到下一行。

switch语句中用的是===比较

case穿透（或）	switch(n){
					case 0:
					case 1:
						//语句
						break;
				}

eval:把字符串转成js程序

for		length值固定
while	length值不固定

======杂项 START===================================================================

<a href="javascript:;"></a>  //带执行代码的a写法

盒子模型：
	标准模式：盒子模型宽度 = padding+border+width
	怪异模式：盒子模型宽度 = width

自动跳转URL：
<meta http-equiv="refresh" content="3,url=http://www.baidu.com" />

option里面要写value			否则ie8及以下获取不到值
oSelect.options				option的集合
oSelect.options[0].text 	获取option里的文本
<option selected ></option>	默认选中
oSelect.selectedIndex		当前选中的索引

让一个物体垂直水平居中在浏览器里面
position:absolute;left:50%;top:50%;margin-left:-width/2;margin-top:-height/2;z-index:2;

background-image ===================> backgroundImage
margin-left ===============> marginLeft
border-width =================> borderWidth
z-index ================> zIndex
-aa-bb-cc-z-index =================> AaBbCcZInedx
示例：oDiv.style.marginLeft='-100px';

======DOM START====================================================================

JS组成部分：
1. ECMAscript   语法  var a;  for(){}            ---->完全兼容
	if  swtich while 

2. DOM 文档对象模型(Document Object Model)       ---->基本兼容（能处理）
	document.getElementById
	
3. BOM  浏览器对象模型（BrowserObjectModel）	 ---->基本不兼容（不能处理）
	window.navigator.userAgent

获取父元素：obj.parentNode;
获取子元素：obj.children;
获取下个兄弟节点： obj.nextSibling               兼容IE 6 7 8           ----> TIPS：IE9+ FF Chrome会获取到空格
                   obj.nextElementSibling        兼容 IE9+ FF Chrome
获取上个兄弟节点： obj.previousSibling           兼容IE 6 7 8           ----> TIPS：IE9+ FF Chrome会获取到空格
                   obj.previousElementSibling    兼容 IE9+ FF Chrome           

var oNext=obj.nextElementSibling || obj.nextSibling;
var oPrev=obj.previousElementSibling || obj.previousSibling;

创建元素:var oDiv=document.createElement('div');
往后面插入元素:父级.appendChild(要插入元素);  
往前面插入元素:父级.insertBefore(要插入的元素，谁的前面);
删除元素:父级.removeChild(删除元素);

----------------------------------------------------------
obj.childNodes

元素节点：nodeType  1
文本节点：nodeType  3

tagName  标签名  大写的
----------------------------------------------------------

	        offsetWidth       getStyle

类型           number          string

width       盒模型的宽度       width

display       none不能      none可以获取

1.getStyle ==> 300px
2.offsetWidth ==> 300
(盒模型宽度=width+border+padding)

物体宽度：obj.offsetWidth            * 不包括因 overflow 而未显示的部分
物体高度：obj.offsetHeight           

物体内容高度：obj.scrollHeight       *如果小于offsetHeight，那就是offsetHeight的高度，无视overflow:hidden

物体距离左边距离：obj.offsetLeft;    * 距离有定位父级的一个距离
物理距离上边距离：obj.offsetTop;

可视区宽高：
宽：document.documentElement.clientWidth;
高: document.documentElement.clientHeight;

页面里面：
根：document
根元素：html

结构父级：parentNode
定位父级：offsetParent    * 如果都没有写定位，默认的定位父级是body    定位根：body    body的定位父级是null

----------------求物体绝对位置示例START----------------
function getPos(){
	var l=0;
	var t=0;
	while(obj){
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		obj=obj.offsetParent;
	}	
	return {left:l,top:t};
}

getPos(oDiv1.top);
getPos(oDiv1.left);
----------------求物体绝对位置示例END------------------

缓存：同一个地址，浏览器只会读一次

======BOM START====================================================================

window.navigator.userAgent;
alert(); 的浏览器不会阻止

---------------------------------------
window.open(打开的地址，打开方式)  ==》 window.open('http://www.baidu.com','_blank')  //如果是用户操作打开的浏览器不会阻止
window.close(); 关闭一个窗口 //能关闭自己open出来的窗口

运行代码示例：
<textarea row="10" cols="40"></textarea>
var win=window.open('about:blank');
win.docuemnt.write(oT.value);
win.document.close();    //强制从缓冲区输出东西（只用于执行HTML代码）
文档流 缓冲区

---------------------------------------

window.location.href 本地URL地址  
typeof window.location       ==>  object
typeof window.location.href  ==>  string

3秒后跳转到百度
setTimeout(function(){
	window.location.href='http://www.baidu.com';
},3000)

---------------------------------------

滚动条距离：
document.body.scrollTop               兼容Chrome
document.documentElement.scrollTop    兼容IE系，Firefox

document.body.scrollLeft
document.documentElement.scrollLeft

兼容写法：
var scrollT=document.documentElement.scrollTop || document.body.scrollTop  //支持浏览器多的写前面，少的些后面

if(window.navigator.userAgent.indexof('MSIE 6.0')!=-1){
	//只在IE6执行
}

获取URL地址?后面的数据：
window.location.search

获取URL地址#后面的数据
window.loaction.hash
=====滚轮的使用=====================================================================


=====cookie========================================================================
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

=====组件 START=====================================================================

组件：拿来就用

=====特效 START=====================================================================

瀑布流
1.每一个列的宽度是一致的
2.高度不一致，随机
3.滚不到头

图片预加载：用户体验