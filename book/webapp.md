/* media */
/* ���� */
@media screen and (orientation:landscape){
      
}
/* ���� */
@media screen and (orientation:portrait){
      
}
/* ���ڿ��<960,��ƿ��=768 */
@media screen and (max-width:959px){
      
}
/* ���ڿ��<768,��ƿ��=640 */
@media screen and (max-width:767px){
      
}
/* ���ڿ��<640,��ƿ��=480 */
@media screen and (max-width:639px){
      
}
/* ���ڿ��<480,��ƿ��=320 */
@media screen and (max-width:479px){
      
}
/* windows UI ���� */
@media screen and (-ms-view-state:snapped){
      
}
/* ��ӡ */
@media print{
      
}
=================================================================================================
html5��ӦʽWeb��Ƴ��ô���
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
 
//����Ի������ʱ����߾�
var left = (brsW - curW) / 2;
//var top = sclT + (brsH - curH) / 2;
objC.css({"left":left,"top":47});
}
$(window).resize(function(){
pullUp();
});
});
 
 
һ��ý���ѯ��֧�ֲ�ͬ���ӿ�
1.��CSSý���ѯ
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
 
2.CSS�ж���ʾ������
2.1����
<link rel="stylesheet" media="screen and (orientation:portrait)" href="portrait-screen.css" />
2.2������
<link rel="stylesheet" media="not screen and (orientation:portrait)" href="portrait-screen.css" />
2.3ֻ���ӿڿ�ȴ���800���ص���ʾ���ż����ļ�
<link rel="stylesheet" media="screen and (orientation:portrait) and (min-width:800px)"  href="portrait-screen.css" />
2.4 ��ѯ�б�������һ����ѯΪ�棬�����
<link rel="stylesheet" media="screen and (orientation:portrait) and (min-width:800px),projection"  href="portrait-screen.css" />
 
3.ý���ѯ�������
@media screen and (max-width:320px;){
h1{color:red}//��Ļ���С��320��ʾ��ɫ
}
//�ӿ������Ϊ320���ص���ʾ��������ʽ��
@import url("phone.css") screen and (max-width:320px);
 
width���ӿڿ��
height���ӿڸ߶�
device-width���豸��Ļ�Ŀ��
device-height���豸��Ļ�ĸ߶�
orientation������豸����������
aspect-ratio�������ӿڿ�Ⱥ͸߶ȵĿ�߱ȣ�aspect-ratio��16/9��
device-aspect-ratio�������ӿ���Ⱦƽ���߱�
color��û����ɫ��λ��������min-color:16 �����豸�Ƿ�ӵ��16λ��ɫ
color-index���豸��ɫ�����е���ɫ���������ǷǸ�������
 
4.
<!-- ��֪�����ҳ�����չ�֣������ֵ��ʾҳ�������豸���һ�£���ʼ�����Ŵ������Ŵ����Ϊ1������Զ���Ŵ�--> 
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /> 
//width=device-width �����ҳ��Ŀ��Ӧ�õ����豸���
//maximum-scale ��ҳ��Ŵ�
��ֹ���ţ�
<meta name="viewport" content="initial-scale=1, user-scalable=no" /> 
 
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0"/>
 
width - viewport�Ŀ�� height - viewport�ĸ߶�
initial-scale - ��ʼ�����ű���
minimum-scale - �����û����ŵ�����С����
maximum-scale - �����û����ŵ���������
user-scalable - �û��Ƿ�����ֶ�����
5.ӵ����ʽ����
5.1 ��ʽ��Ŀ��Ԫ�ؿ�ȡ�������Ԫ�ؿ��=�ٷֱȿ��
5.2 em�滻px ��ʽ��Ŀ��Ԫ�سߴ��������Ԫ�سߴ�=�ٷֱȳߴ�