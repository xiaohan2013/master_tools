/* media */
/* 横屏 */
@media screen and (orientation:landscape){
      
}
/* 竖屏 */
@media screen and (orientation:portrait){
      
}
/* 窗口宽度<960,设计宽度=768 */
@media screen and (max-width:959px){
      
}
/* 窗口宽度<768,设计宽度=640 */
@media screen and (max-width:767px){
      
}
/* 窗口宽度<640,设计宽度=480 */
@media screen and (max-width:639px){
      
}
/* 窗口宽度<480,设计宽度=320 */
@media screen and (max-width:479px){
      
}
/* windows UI 贴靠 */
@media screen and (-ms-view-state:snapped){
      
}
/* 打印 */
@media print{
      
}
=================================================================================================
html5响应式Web设计常用代码
$(function(){
pullUp();
function pullUp(){
var objW = $(window);
var objC = $("#wrapper");
var brsW = objW.width();
//var brsH = objW.height();
//var sclL = objW.scrollLeft();
//var sclT = objW.scrollTop();
var curW = objC.width();
//var curH = objC.height();
 
//计算对话框居中时的左边距
var left = (brsW - curW) / 2;
//var top = sclT + (brsH - curH) / 2;
objC.css({"left":left,"top":47});
}
$(window).resize(function(){
pullUp();
});
});
 
 
一、媒体查询：支持不同的视口
1.用CSS媒体查询
body{background-color:red;}
@media screen and (max-width:960px;){
body{background-color:grey;}
}
@media screen and (max-width:768px;){
body{background-color:orange;}
}
@media screen and (max-width:550px;){
body{background-color:yellow;}
}
@media screen and (max-width:320px;){
body{background-color:green;}
}
 
2.CSS判断显示屏纵向
2.1纵向：
<link rel="stylesheet" media="screen and (orientation:portrait)" href="portrait-screen.css" />
2.2非纵向：
<link rel="stylesheet" media="not screen and (orientation:portrait)" href="portrait-screen.css" />
2.3只有视口宽度大于800像素的显示屏才加载文件
<link rel="stylesheet" media="screen and (orientation:portrait) and (min-width:800px)"  href="portrait-screen.css" />
2.4 查询列表中任意一个查询为真，则加载
<link rel="stylesheet" media="screen and (orientation:portrait) and (min-width:800px),projection"  href="portrait-screen.css" />
 
3.媒体查询检测特性
@media screen and (max-width:320px;){
h1{color:red}//屏幕宽度小雨320显示红色
}
//视口最大宽度为320像素的显示屏加载样式表
@import url("phone.css") screen and (max-width:320px);
 
width：视口宽度
height：视口高度
device-width：设备屏幕的宽度
device-height：设备屏幕的高度
orientation：检查设备横向还是纵向
aspect-ratio：基于视口宽度和高度的宽高比（aspect-ratio：16/9）
device-aspect-ratio：基于视口渲染平面宽高比
color：没中颜色的位数，比如min-color:16 会检测设备是否拥有16位颜色
color-index：设备颜色索引中的颜色数，必须是非负整数。
 
4.
<!-- 告知浏览器页面如何展现，这里的值表示页面宽度与设备宽度一致，初始化不放大，且最大放大比例为1（即永远不放大）--> 
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /> 
//width=device-width 浏览器页面的宽度应该等于设备宽度
//maximum-scale 将页面放大
禁止缩放：
<meta name="viewport" content="initial-scale=1, user-scalable=no" /> 
 
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0"/>
 
width - viewport的宽度 height - viewport的高度
initial-scale - 初始的缩放比例
minimum-scale - 允许用户缩放到的最小比例
maximum-scale - 允许用户缩放到的最大比例
user-scalable - 用户是否可以手动缩放
5.拥抱流式布局
5.1 公式：目标元素宽度÷上下文元素宽度=百分比宽度
5.2 em替换px 公式：目标元素尺寸÷上下文元素尺寸=百分比尺寸