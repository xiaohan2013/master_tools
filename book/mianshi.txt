HTML相关

HTML相关的面试题目

1:html5有哪些新特性？

HTML5 中的一些有趣的新特性：
用于绘画的 canvas 元素
用于媒介回放的 video 和 audio 元素
对本地离线存储的更好的支持
新的特殊内容元素，比如 article、footer、header、nav、section
新的表单控件，比如 calendar、date、time、email、url、search 新的技术webworker websockt

2:不同浏览器的html差异

1）自定义属性问题
说明:IE下,可以使用获取常规属性的方法来获取自定义属性,也可以使用getAttribute()获取自定义属性;Firefox下,只能使用getAttribute()获取自定义属性.
解决方法:统一通过getAttribute()获取自定义属性.

2）event.x与event.y问题
说明:IE下,even对象有x,y属性,但是没有pageX,pageY属性;Firefox下,even对象有pageX,pageY属性,但是没有x,y属性.
解决方法:使用mX(mX = event.x ? event.x : event.pageX;)来代替IE下的event.x或者Firefox下的event.pageX.
3）event.srcElement问题
说明:IE下,event对象有srcElement属性,但是没有target属性;Firefox下,even对象有target属性,但是没有srcElement属性.
解 决方法:使用obj(obj = event.srcElement ? event.srcElement : event.target;)来代替IE下的event.srcElement或者Firefox下的event.target. 请同时注意event的兼容性问题。
4）.innerText在IE中能正常工作，但是innerText在FireFox中却不行. 需用textContent。

5）margin加倍的问题 设置为float的div在ie下设置的margin会加倍。这是一个ie6都存在的bug。解决方案是在这个div里面加上display:inline; 例如： <#div id=”imfloat”> 相应的css为 #IamFloat{ float:left; margin:5px;/*IE下理解为10px*/ display:inline;/*IE下再理解为5px*/}

6）!important

.colortest {
　　border:20px solid #60A179 !important;
　　border:20px solid #00F;
　　padding: 30px;
　　width : 300px;
　　}
　　在Mozilla中浏览时候，能够理解!important的优先级，因此显示#60A179的颜色：
　　在IE中浏览时候，不能够理解!important的优先级，因此显示#00F的颜色：
7)png的透明问题，ie需要滤镜通道
8)ie css能识别* 标准浏览器不识别
3：结构与表现相分离带来的好处主要有：

1.数据的多样显示。通过不同的样式表适应不同的设备，做到内容与设备无关
2.保持整个站点的视觉一致性变得非常简单，修改样式表就可以轻松改版; 
3.由于结构清晰，数据的集成、更新和处理更加方便灵活；
4.更有意义的搜索。
CSS相关

CSS相关的面试题目

1:css3有哪些新的特性？

有@font-face 圆角 阴影 多背景 rgba等

2:css清除浮动的集中方式

1）添加额外标签

这是在学校老师就告诉我们的 一种方法，通过在浮动元素末尾添加一个空的标签例如 <div style=”clear:both”></div>，其他标签br等亦可。

优点：通俗易懂，容易掌握

缺点：可以想象通过此方法，会添加多少无意义的空标签，有违结构与表现的分离，在后期维护中将是噩梦，这是坚决不能忍受的，所以你看了这篇文章之后还是建议不要用了吧。

2)父元素设置 overflow：hidden

通过设置父元素overflow值设置为hidden；在IE6中还需要触发 hasLayout ，例如 zoom：1；

优点：不存在结构和语义化问题，代码量极少

缺点：内容增多时候容易造成不会自动换行导致内容被隐藏掉，无法显示需要溢出的元素；04年POPO就发现overflow:hidden会导致中键失效，这是我作为一个多标签浏览控所不能接受的。所以还是不要使用了

3）使用:after 伪元素

需要注意的是 :after是伪元素（Pseudo-Element），不是伪类（某些CSS手册里面称之为“伪对象”），很多清除浮动大全之类的文章都称之为伪类，不过csser要严谨一点，这是一种态度。

由于IE6-7不支持:after，使用 zoom:1触发 hasLayout。

该方法源自于: How To Clear Floats Without Structural Markup

原文全部代码如下:

<style type="text/css"> 
.clearfix:after { 
content: ".";
display: block;
height: 0;
clear: both;
visibility: hidden; 
} 
.clearfix {display: inline-block;}  /* for IE/Mac */  
</style>
<!--[if IE]> <style type="text/css">
.clearfix {zoom: 1;/* triggers hasLayout */ 
display: block;/* resets display for IE/Win */}
</style> 
<![endif]--> 鉴于 IE/Mac的市场占有率极低,我们直接忽略掉,最后精简的代码如下:
.clearfix:after {content:"."; display:block; height:0; visibility:hidden; clear:both; }

.clearfix { *zoom:1; }

3)经典布局之左侧固定200px，右侧自适应

        <div style="width:200px;height: 500px;position:absolute;left:0;top:0;background:#999999;"></div>
        <div style="margin-left:200px;height:100%;background:#CCCCCC;height:100px;font-size:14px;color:#000;">实现左侧规定宽200，右侧自适应宽度的布局</div>
4)英文换行问题

使用<wbr>标签 例如 <p> To learn AJAX, you must be fami<wbr>liar with the XMLHttp<wbr>Request Object. </p>

5)css选择器的优先级
Javascript

Javascript相关的面试题目

1：javascript有几种数据类型

在Javascript中只有五种简单类型，分别为null,undefined,boolean,String和Number。一种复杂类型：object。代码类型只有一种形式就是function。

2：如何判断javascript的类型

可以使用typeof函数

例如

var name = 'mdemo';
console.log(typeof name);  // 'string'
还可以用instanceof
3:javascript的作用域

javascript和其他语言不同，不存在花括号之间的块级作用域，而是用函数来进行作用域的划分。
4：javascript中数组的常用方法

concat--将两个数组连接起来
splice--可以用来删除、添加、替换
5：javascript中数组删除某一元素如何实现

找到要删除的元素的索引，然后使用splice(index,1)删除
6：函数中的arguments是数组吗

不是数组，typeof 可以看到是 object类型，而且arguments还有callee方法，所以不会是数组的。
7：说一下函数执行结果

window.name = 'gdemo';
var me = { name = 'mdemo'};
function sayName(){
    console.log(this.name);
}
sayName();//gdemo
me.sayName = sayName;
me.sayName();//mdemo
8:javascript中如果体现面向对象的三大特性的

封装：javascript中没有类的概念，一般用functions去模拟
较好的封装代码事例
function Person (name,sex,age){
   this.name = name;
   this.sex  = sex;
   this.age  = age;
}
Person.prototype = {
     sayName : function(){
        console.log(this.name)
     }
}
这样封装的好处，所有的属性都是在构造函数中进行，每个对象单独一份，在函数中调用通过this获取当前对象的属性，函数只实例化一次。
继承：javascript的继承主要利用prototype
较好的继承方式
function SuperType(name){
     this.name = name;
     this.colors = ['red','blue','yellow'];
}
function SubType(name ,age){
     SuperType.call(this,name);//继承属性
     this.age = age;
}
SubType.prototype = new SuperType();继承方法
SubType.prototype.sayAge = function(){
   console.log(this.age);
}
多态：主要体现着函数的参数上面
9：什么叫做闭包

会造成内存泄漏的闭包
function alertID(){
    var element = document.getElementId("mdemo");
    element.onclick = function(){
        consol.log(element.id);
    ｝
｝
这个就形成了闭包，因为oncolick事件调用的时候，需要调用element变量，这样element永远都不会被回收，导致内存泄漏
修改后的版本
function alertID(){
    var element = doucment.getElementId('mdemo);
    var id = element.id;
    element.onclick = function(){
       console.log(id);
     }
    element = null;
}
10:javascript类型转换

1. Boolean(value):把值转换成Boolean类型；

2. Nnumber(value):把值转换成数字（整型或浮点数）；

3. String(value):把值转换成字符串。

4.parseXXX
11:domReady和onload的区别

onload是指整个网页所有内容都加载完毕

domready是指网页的dom元素加载完毕即可不用等待元素内容的加载

12:离线存储

manifest：相当于一个缓存的配置文件，配置的内容将会默认加载缓存

如果想更新的话，通过修改manifest文件。主要用于文件的缓存。

localstorage：可以通过cookie 来设置版本号，通过服务器去获得版本号，以此来更新内容。主要用于游戏存档和js css代码存储

13:动态加载如何实习

其实主要考的是

window.onscroll = function(){console.log(document.body.scrollTop);}

滚动条的滚动事件和滚动距离

14:事件冒泡

例如列表中元素的触发事件是一样的，那么多列表不可能一一设置事件，这时可以设置其父元素的事件。

<script type="text/javascript">
function showMsg(obj,e)
{
    alert(obj.id);
    stopBubble(e)
}

//阻止事件冒泡函数
function stopBubble(e)
{
    if (e && e.stopPropagation)
        e.stopPropagation()
    else
        window.event.cancelBubble=true
}
</script>


15:一道 JavaScript 字符串去重的题目

var str = 'aagbdfced';


假设现在有一个字符串变量 str，要求实现一个函数，传入 str，返回字符串中去重相同字符的结果（本例为 agbdfce）。

要求

占用内存尽可能的少
效率尽可能的高
字符串字符的范围为 ASCII 字符
网络方面也会问

计算机网络相关的面试题目

1：何为三次握手

2：http状态码

200 ：OK
301：永久重定向
302：临时重定向
404：不存在
500：服务器出错

3：ajax状态码

存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
0: 请求未初始化
1: 服务器连接已建立
2: 请求已接收
3: 请求处理中
4: 请求已完成，且响应已就绪


4：跨域问题

1：jsonp
使用的原理，因为html中img、script等标签，是不受跨域的影响 json 收到js的原生支持 所以可以直接使用封装成js的json 来进行
跨域支持
2：子域名与主域名之间
document.domain
3：flash silverlight 
crossdomain.xml
4：服务端的支持

5：get与post的区别

GET请求的数据会附在URL之后，POST把提交的数据则放置在是HTTP包的包体中。

GET方式提交的数据最多只能是1024字节，理论上POST没有限制，可传较大量的数据

POST的安全性要比GET的安全性高

6：tcp/ip体系结构
应用层如ftp 运输层 tcp/udp 互联网层ip 网络接口层
少不了数据结构算法

数据结构算法相关的面试题目

1：javascript中数组的栈方法、队列方法

可以使用push将元素推入数组，栈方法使用pop()，后进先出，队列方法使用shift()，先进先出

2：用javascript写一个快速排序

复杂度O(nlog2n) 最差O(n^2)

function quickSort(arr){

        //如果数组只有一个数，就直接返回；
        if(arr.length<1){
            return arr;   
        }
       
        //找到中间的那个数的索引值；如果是浮点数，就向下取整
        var centerIndex = Math.floor(arr.length/2);
       
        //根据这个中间的数的索引值，找到这个数的值；
        var centerNum = arr.splice(centerIndex,1);
       
        //存放左边的数
        var arrLeft = [];
        //存放右边的数
        var arrRight = [];
       
        for(i=0;i<arr.length;i++){
            if(arr<centerNum){
                arrLeft.push(arr)
            }else if(arr>centerNum){
                arrRight.push(arr)
            }
        }
        return quickSort(arrLeft).concat(centerNum,quickSort(arrRight));
       
    };
    var arrSort = [33,18,2,40,16,63,27];
    var arr1 = quickSort(arrSort);
    console.log(arr1);
其他

其他的面试题目

1：对于用户体验有什么想法或见解

1.取得一致性：
类似的情况应该有让使用者有一致性的操作。在提示、选单与说明文件中，应该采用同样的名词。并且保持命令的一贯性。

2.让重度用户使用快捷方式：
当使用频率增加时，使用者会希望减少互动的次数、让每次的互动能够一次做更多的动作。缩写、功能键、隐藏功能与综观全局的功能，对专家来说非常有用。

3.提供有意义的回馈：
当使用者做出一些动作时，系统应该提供回馈。越频繁的动作，其回馈的强度可以低一些。越重要或不寻常的动作，其回馈强度应该要显著一些。

4.设计对话产生结束：
一连串的动作应该被组织成开始、中间、结束三部份。当动作结束的时候，要提供回馈让使用者知道动作已经完成。在做下个一连串的动作之前，先告知使用者整个流程，能够减轻使用者的压力、提高满意度。

5.提供简单的错误处理：
最好不要让系统有严重错误的可能性。如果还是造成错误，系统应该能够侦测出出来，并提供一个简单、使用者可以理解的错误处理方式。

6.允许回到上一步：
这个功能可以减低使用者的焦虑，因为使用者只到做错了可以重来。这个功能鼓励使用者探索不熟西的选项。回到上一步的功能，可以包含一个、或是一连串的动作。

7.满足使用者控制的需求：
有经验的使用者强烈的感觉到他们在控制系统，做出动作之后，系统提供回馈。系统设计上要让使用者作为动作的处发者，而不是响应者。

8.减少短期记忆需求：
人类的短期记忆有限，因此显示上要保持简单、能同时显示多页数据以减少窗口切换频率，减少记忆指令和动作顺序的时间。

2：设计模式

js单例模式

obj.single = function(){
        return{

        };
}();