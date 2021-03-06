兼容低版本
-webkit-transition
-moz-transition
-o-transition
transition

属性选择器
E[attr]                  只使用属性名，但没有确定任何属性值
E[type="text]        指定属性名，并指定了该属性的属性值
E[attr~="value"]    指定属性名，并且具有属性值，此属性值是一个词列表，并且以空格隔开，其中词列表中包含了一个value词，而且等号前面的“～”不能不写
E[attr^="value"]    指定了属性名，并且有属性值，属性值是以value开头的
E[attr$="value"]    指定了属性名，并且有属性值，而且属性值是以value结束的
E[attr*="value"]    指定了属性名，并且有属性值，而且属值中包含value
E[attr|="value"]    指定了属性名，并且属性值是value或者以“value-”开头的值（比如说zh-cn）
备注：IE7及以上支持; 


结构性伪类(n: 0, 1, 2, ...)
E:nth-child(n)  表示E父元素中的第n个子节点
        p:nth-child(odd){background:red} /*匹配奇数行*/
        p:nth-child(even){background:red} /*匹配偶数行*/
        p:nth-child(2n){background:red}
E:nth-last-child(n)  表示E父元素中的第n个子节点，从后向前计算
E:nth-of-type(n)   表示E父元素中的第n个子节点，且类型为E
E:nth-last-of-type(n)   表示E父元素中的第n个子节点，且类型为E, 从后向前计算
E:first-child   表示E元素中的第一个子节点
E:last-child   表示E元素中的最后一个子节点
E:first-of-type   表示E父元素中的第一个子节点且节点类型是E的
E:last-of-type   表示E父元素中的最后一个子节点且节点类型是E的
E:empty   表示E元素中没有子节点。注意：子节点包含文本节点
E:only-child   表示E元素中只有一个子节点。注意：子节点不包含文本节点
E:only-of-type   表示E父元素中只有一个子节点，且这个唯一的子节点的类型必须是E。注意：子节点不包含文本节点


伪类
E:target        表示当前的URL片段的元素类型，这个元素必须是E。URL的hash(#id) == E[id]。可模拟Tab效果
E:disabled      表示不可点击的表单控件
E:enabled       表示可点击的表单控件
E:checked       表示已选中的checkbox或radio。可模拟点击选中效果
E:first-line     表示E元素中的第一行
E:first-letter  表示E元素中的第一个字符
E::selection   表示E元素在用户选中文字时
E::before       生成内容在E元素前
E::after          生成内容在E元素后
E:not(s)        表示E元素不被匹配
E~F                表示E元素后邻的F元素
content        属性

新增颜色模式: 
rgba
    r                Red                红                0~255
    g                Green        绿                0~255
    b                Blue                蓝                0~255
    a                Alpha        透明                0~1
问题：注意边框颜色透明有问题

文字阴影(可叠加)
text-shadow：x y blur color, …
参数
    x                横向偏移
    y                纵向偏移
    blur        模糊距离(越大越模糊)
    color        阴影颜色
文本阴影如果加很多层，会很卡很卡很卡

文字描边
-webkit-text-stroke: 宽度 颜色

新增文本功能
direction  定义文字排列方式(全兼容)
        rtl 从右向左排列
        ltr 从右向左排列
        注意要配合 unicode-bidi: bidi-override 一块使用
text-overflow 定义省略文本的处理方式
        clip  无省略号
        ellipsis 省略号 (注意配合overflow: hidden和white-space: nowrap一块使用) 

自定义文字
格式 
@font-face {
    font-family: ‘miaov';
    src: url('111-webfont.eot');
    src: url('111-webfont.eot?#iefix') format('embedded-opentype'),
         url('111-webfont.woff') format('woff'),
         url('111-webfont.ttf') format('truetype'),
         url('111-webfont.svg#untitledregular') format('svg');
    font-weight: normal;
    font-style: normal;
}
相关软件：AI、asiafont studio(字体制作)
转换字体格式生成兼容代码
http://www.fontsquirrel.com/fontface/generator

弹性盒模型
注意在使用弹性盒模型的时候 父元素必须要加 display:box 或 display:inline-box
box-orient    定义盒模型的布局方向
        horizontal  水平显示
        vertical      垂直方向
box-direction   元素排列顺序
        normal   正序
        reverse   反序
box-ordinal-group   设置元素的具体位置
box-flex   定义盒子的弹性空间
        子元素的尺寸=盒子的尺寸*子元素的box-flex属性值 / 所有子元素的box-flex属性值的和 
box-pack   对盒子多余的空间进行管理
        start   所有子元素在盒子左侧显示，富裕空间在右侧
        end    所有子元素在盒子右侧显示，富裕空间在左侧
        center   所有子元素居中
        justify    多余空间在子元素之间平均分布
box-align   在垂直方向上对元素的位置进行管理
        start   所有子元素在居顶
        end   所有子元素在居底
        center   所有子元素居中

盒模型阴影(可叠加)
box-shadow: [inset] x y blur [spread] color
参数
    inset：投影方式
        inset：内投影
        默认：外投影
    x、y：阴影偏移
    blur：模糊半径
    spread：扩展阴影半径
        先扩展原有形状，再开始画阴影
    color


其他盒模型新增属性
box-reflect 倒影
    direction  方向    above|below|left|right;
    距离
    渐变（可选）
resize 自由缩放
    both 水平垂直都可以缩放
    horizontal 只有水平方向可以缩放
    vertical 只有垂直方向可以缩放
    注意：一定要配合overflow:auto 一块使用只有水平方向可以缩放
box-sizing 盒模型解析模式
    content-box  标准盒模型 width/height=border+padding+content
    border-box 怪异盒模型 width/height=content


分栏布局(-webkit-)
column-width    栏目宽度
column-count    栏目列数
column-gap       栏目距离
column-rule       栏目间隔线 

响应式布局(IE8+)
媒体类型
    all       所有媒体
    braille  盲文触觉设备
    embossed   盲文打印机
    print   手持设备
    projection   打印预览
    screen   彩屏设备
    speech   '听觉'类似的媒体类型
    tty    不适用像素的设备
    tv     电视
关键字
    and
    not      not关键字是用来排除某种制定的媒体类型
    only     only用来定某种特定的媒体类型
媒体特性
    (max-width:600px)
    (max-device-width: 480px)  设备输出宽度
    (orientation:portrait)       竖屏
    (orientation:landscape)        横屏
    (-webkit-min-device-pixel-ratio: 2) 像素比
         devicePixelRatio 设备像素比 window.devicePixelRatio = 物理像素 / dips
样式引入
    <link rel="stylesheet" type="text/css" href="../css/print.css" media="print" />
    @import url("css/reset.css") screen;
    @media screen{
        选择器{
            属性：属性值；
        }
    }
   <link rel=”stylesheet” media=”all and (orientation:portrait)” href=”portrait.css”>
   <link rel=”stylesheet” media=”all and (orientation:landscape)”href=”landscape.css”>
   @media screen and (min-width:400px) and (max-width:500px) {.box {margin: 0 auto;}}
  <link rel="stylesheet" type="text/css" href="styleA.css"  media="screen and (min-width: 800px)">
移动端meta
<meta name="viewport" content="" />
    width   [pixel_value | device-height]
    height   [pixel_value | device-height]
    user-scalable   是否允许缩放 （no||yes）
    initial-scale   初始比例
    minimum-scale   允许缩放的最小比例
    maximum-scale   允许缩放的最大比例
    target-densitydpi   [dpi_value | device-dpi | high-dpi | medium-dpi | low-dpi]

圆角
border-radius: 1-4个数字 / 1-4个数字
  前面是水平，后面是垂直
  不给“/”则水平和垂直一样
        border-radius: 10px/5px;
参数
  各种长度单位都可以：px，%，…
  %有时很方便
        但宽高不一致时不太好
用法
  1个：都一样
        border-radius: 一样
  2个：对角
        border-radius: 左上&右下    右上&左下
  3个：斜对角
        border-radius: 左上    右上&左下    右下
  4个：全部，顺时针
        border-radius: 左上    右上    右下    左下
边框
边框图片 border-image
  border-image-sourceg 引入图片
  border-image-slice 切割图片
  border-image-width 边框宽度
  border-image-repeat 图片的排列方式
  round 平铺,repeat 重复,stretch拉伸 
边框颜色 border-colors


线性渐变
线性渐变格式
  linear-gradient([<起点> || <角度>,]? <点>, <点>…)
  只能用在背景上
        IE                                                                                                   filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#ff0000',GradientType='1');
参数
  起点：从什么方向开始渐变，默认：top
        left、top、left top
  角度：从什么角度开始渐变
        xxx deg的形式
  点：渐变点的颜色和位置
        black 50%，位置可选
线性渐变实例
  最简单
        red, green
        从上到下
  起点位置
        left top, red, green
        30deg, red, green
                逆时针
  repeating-linear-gradient
  加入点的位置
        top, red 40%, green 60%
        top, red 50%, green 50%
                同一个位置两个点——直接跳变
        也可以用px
  配合rgba
        top, rgba(255,255,255,1), rgba(255,255,255,0)
  加入背景图片
        background: -webkit-linear-gradient (top, rgba(255,255,255,1) 30%, rgba(255,255,255,0)), url(a.gif)


径向渐变
radial-gradient([<起点>]? [<形状> || <大小>,]? <点>, <点>…);
  起点：可以是关键字（left,top,right,bottom），具体数值或百分比
  形状： ellipse、circle
  大小 :  具体数值或百分比，也可以是关键字：
        closest-side： 最近端，
        closest-corner：最近角，
        farthest-side：最远端，
        farthest-corner：最远角，
        包含：contain，
        覆盖：cover
                注意：firefox目前只支持关键字

背景
多背景
  逗号分开
        background: url(a.jpg) 0 0, url(b.jpg) 0 100%;
背景尺寸
  background-size: x y
        background-size:100% 100%
        cover 放大
        contain 缩小
  background-origin ： border | padding | content 
        border-box： 从border区域开始显示背景。 
        padding-box： 从padding区域开始显示背景。 
        content-box： 从content区域开始显示背景。
  background-clip
        border-box： 从border区域向外裁剪背景。 
        padding-box： 从padding区域向外裁剪背景。 
        content-box： 从content区域向外裁剪背景。 
        text： 从文本区域向外裁剪背景(webkit)。

Transition过渡
  transition-property  要运动的样式  （all || [attr] || none）
  transition-duration 运动时间
  transition-delay 延迟时间
  transition-timing-function 运动形式 
        ease：（逐渐变慢）默认值
        linear：（匀速）
        ease-in：(加速)
        ease-out：（减速）
        ease-in-out：（先加速后减速）
        cubic-bezier 贝塞尔曲线（ x1, y1, x2, y2 ）  http://matthewlein.com/ceaser/
  过渡完成事件 
        Webkit内核： obj.addEventListener('webkitTransitionEnd',function(){},false);
        firefox: obj.addEventListener('transitionend',function(){},false);
        每个属性的transition都会触发transitionend事件，此外还要注意transition重复执行(removeEnd)。

2D变换
transform
  rotate()  旋转函数 取值度数
        deg  度数
        Transform-origin 旋转的基点
  skew() 倾斜函数 取值度数 
        skewX(deg)
        skewY(deg)
  scale() 缩放函数 取值 正数、负数和小数
        scaleX()
        scaleY()
  translate() 位移函数
        translateX()
        translateY()
transform-origin：变换基点： 关键字(top/left/right/bottom)或坐标值，默认: 0, 0
        transform 执行顺序问题 — 后写先执行
matrix(a,b,c,d,e,f) 矩阵函数
  通过矩阵实现缩放
        x轴缩放 a = x*a    c = x*c     e = x*e;
        y轴缩放 b = y*b   d = y*d     f = y*f;
  通过矩阵实现位移
        x轴位移: e = e+x
        y轴位移: f = f+y
  通过矩阵实现倾斜
        x轴倾斜: c = Math.tan(xDeg/180*Math.PI)
        y轴倾斜: b = Math.tan(yDeg/180*Math.PI)
  通过矩阵实现旋转
        a = Math.cos(deg/180*Math.PI); 
        b = Math.sin(deg/180*Math.PI);
        c = -Math.sin(deg/180*Math.PI);
        d = Math.cos(deg/180*Math.PI);
变换兼容IE9以下IE版本只能通过矩阵来实现
        filter: progid:DXImageTransform.Microsoft.Matrix( M11= 1, M12= 0, M21= 0 , M22=1,SizingMethod='auto expand');
        IE下的矩阵没有E和F两个参数 M11==a; M12==c; M21==b; M22==d，需要动态设置 left 和 top 来模拟e和f 。
IE下很多特殊的兼容方案可通过滤镜 filter 来实现的。

3d变换
transform-style：preserve-3d 建立3D空间
perspective 景深
perspective- origin 景深基点（视线的角度）
transform 新增函数
        rotateX()
        rotateY()
        rotateZ()
        translateZ()
        scaleZ()

animation
关键帧——keyFrames
  类似于flash
        只需指明两个状态，之间的过程由计算机自动计算
  关键帧的时间单位
        数字：0%、25%、100%等
        字符：from(0%)、to(100%)
  格式
        @keyframes 动画名称
        {
            动画状态
        }
        @keyframes  miaov_test
        {
          from { background:red; }
          to { background:green; }
        }
        可以只有to
调用的标签(#div1、xxx:hover之类的)
必要属性
        animation-name                动画名称（关键帧名称）
        animation-duration                动画持续时间
  例如：
        -webkit-animation-name: ‘miaov';
        -webkit-animation-duration: 4s;
  例子：进度条
        animation-play-state 播放状态（ running 播放 和paused 暂停 ）
可选属性
  animation-timing-function        动画运动形式
        linear        匀速。
        ease                缓冲。
        ease-in        由慢到快。
        ease-out        由快到慢。
        ease-in-out        由慢到快再到慢。
        cubic-bezier(number, number, number, number)：        特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内
  animation-delay                        动画延迟
        只是第一次
  animation-iteration-count                重复次数
        infinite为无限次
  animation-direction                        播放前重置
        动画是否重置后再开始播放
        alternate        动画直接从上一次停止的位置开始执行
        normal        动画第二次直接跳到0%的状态开始执行
通过class
        在class里加入animation的各种属性
        直接给元素加-webkit-animation-xxx样式
animation的问题
        写起来麻烦
        没法动态改变目标点位置
obj.addEventListener('webkitAnimationEnd', function (){}, false);
