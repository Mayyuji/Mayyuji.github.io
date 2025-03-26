---
title: HTML+CSS笔记
date: '2021-04-27'
categories:
  - Notes
tags:
  - HTMl
  - CSS
---

### 文件夹命名规则

建议使用英文、数字、\_ -, 不要有特殊字符(\#$%@.?),不要有中文和空格

### HTML 文档结构

\<!DOCTYPEhtml\>文档声明，声明这是一个 html5,作用是告知浏览器这是一

个 html5 文档结构

\<html\>\</html\>根元素，一- 个文档有且只有一个根元素

\<head\>\</head\>页面的头部,放置页面的一些基本信息

\<meta charset="utf-8" /\>编码方式

\<title\>\</title\>状态栏标题

\<body\>\</body\>页面主体内容,放 htm1\|标签

### 标签的语法

封闭类型标签（双标签）\<body\>\</body\>

由开始标签和结束标签构成

非封闭类型标签(单标签，空标签)\<img /\>

### 标签的属性

\<div 属性 1="属性值" 属性 2="属性值"\>\</div\>多个属性不分先后，空格隔开

\<img 属性 1=" 属性值" 属性 2=" 属性值"/\>

### HTML 标签

> 1.标题
> \<h1\>\</h1\>一级标题 一般包裹 logo  
> \<h2\>\</h2\>二级标题  
> \<h3\>\</h3\>三级标题  
> \<h4\>\</h4\>四级标题  
> \<h5\>\</h5\>五级标题  
> \<h6\>\</h6\>六级标题

2.段落元素

\<p\>\</p\>一般包裹描述性文本

3.\<div\>\</div\>容器

4.列表

无序列表 ul\>li type circle 空心圆 disc 默认(圆点) square 矩形

有序列表 ol\>li type 属性改表示符号 1 A a Ⅰ i start=“”从哪开始

自定义列表 dl\>dt.dd 缩进---图文混排

5.水平分割线  
\<hr\>  
\-------------以上 1-5 标签都是独占一行,叫做块级元素---------------

6.加粗 \<b\>\</b\>

\<strong\>\</strong\>

7.倾斜 \<i\>\</i\>

\<em\>\</em\>

8.下划线\<u\>\</u\>

9.删除线\<del\>建议用\</del\> \<s\>\</s\>

10.span 标签：用于一大段文本中某一部分文本设置

1 ）包裹内容不换行

2 ）自身不带任何样式

11.图片

\<img src=“” alt=”” title=”” /\>

src 绝对路径：本机、网络

> 相对路径：相对位置 同级 01.png 返回上一步../01.png
> 返回上一级进入其他../img/01.png

alt 属性:图片无法正常显示时显示的提示文本

title 属性:鼠标移入显示的文本

12.超链接-页面间跳转

\<a href=" " target=””\>test\</a\>

href 属性:引入页面的路径

> target 属性:页面打开的方式  
> target="\_ self" 当前页面打开，默认值  
> target=" \_blank" 新的标签也打开  
> 既是标题又是超链接,建议用块级元素包行内元素  
> \<a href=”id”/\> 跳转到相应的 id 位置  
> text-decoration:none 去除超链接默认下划线

13.下标 \<sub\>\</sub\>

14.上标\<sup\>\</sup\>

15.文本换行 \<br /\>

\-----------------以上 6\~15 为行内元素----------------------------

### 转义字符

空格&nbsp；

\< \> &lt； &gt；

\&copy；版权 ©

注册 \&reg；®

`### Day2.3 7/22`

### 表格

Table-tr-td

1.  table 属性：

单元格外边距 cellspacing

> 单元格内边距 cellspadding  
> 边框 border  
> 宽度 width  
> 高度 height  
> 表格水平位置 algin=“left / right / center ”

1.  td 的属性

    向右合并单元格，跨列合并单元格 colspan

    向下合并单元格，跨行合并单元格 rowspan

    宽度 width---更改本列单元格的宽

    高度 height---更改本行单元格的高度

    内容水平位置 align

### 表单元素

\<form action= "" method="" name=""\>\</form\>

1\. form 的属性

> action 提交的地址  
> method 提交方式: get 默认，明文提交/ post 密文提交  
> name 起个名字（后端

1.  文本框

    \<input type=”text” name=”username” value=”请输入用户名“ /\>

    type="text"文本框

    name=”username"'起个名字

    value="请输入您的昵称"控件上的文字

    \<input type="password" name="pwd" /\>

2.  提交按钮

    \<input type="submit" value=””/\>

3.  重置按钮

    type=“reset“ 清除输入内容

    value=““

6.普通按钮

type=”button” value=””

### CSS 介绍

1.css 层叠样式表，级联样式表，简称样式表

2.基本样式

> 字体颜色 color  
> 背景颜色 background-color  
> 宽度 width  
> 高度 height  
> 能设置宽高的元素：  
>  块级元素(div,p,h1-h6,hr,ol,u1, li,dl,dt,dd, table,tr,td,form)  
> 行内元素(img, input)\|

3.引入样式表的方法

\-内部样式表

\<style type="text/css"\>

div{

width: 100px;

height: 100px;

background-color: aqua;

}

\</style\>

\-外部样式表

第一种方法（常用）：在 css 文件夹中创建 css 文件在 html 文件中 link 引入（可引入多个）

@charset "utf-8";防止 css 文件中中文乱码

\<link rel="stylesheet" type="text/css" href="css/style.css"/\>

rel="stylesheet"作用：关联样式表

第二种方法（没人要）：\<style type="text/css"\>

@import url("css/style.css");

\</style\>

差别 1：本质的差别：link 属于 XHTML 标签，而@import 完全是 CSS 提供的一种方式。

差别 2：加载顺序的差别：当一个页面被加载的时候（就是被浏览者浏览的时候），link 引用的 CSS 会同时被加载，而@import 引用的 CSS 会等到页面全部被下载完再被加载。所以有时候浏览@import 加载 CSS 的页面时开始会没有样式（就是闪烁），网速慢的时候还挺明显。

差别 3：兼容性的差别：@import 是 CSS2.1 提出的，所以老的浏览器不支持，@import 只有在 IE5 以上的才能识别，而 link 标签无此问题。

差别 4：使用 dom(document object model 文档对象模型
)控制样式时的差别：当使用 javascript 控制 dom 去改变样式的时候，只能使用 link 标签，因为@import 不是 dom 可以控制的.

\-内联样式、行内样式

\<div style="width: 200px; height: 200px;color: red;"\>第一个 div\</div\>

4.样式表的特征：

\-层叠性：不重复的属性会层叠到一起，重复的属性以后者为准

\-就近原则

\-手动调整样式最高优先级

background-color: pink ! important;

`### Day3.4 7/23`

### 选择器

> \-元素选择器 div { }  
> 适用于更改页面中的某一类元素的样式 （例如超链接样式）  
> \-id 选择器  
> id 有唯一性：一个元素只能有一个 id 名，并且同 id 名只能被使用一次  
> 一般情况下会给板块的大容器设置  
> \-class 类选择器  
> .class 类名：  
> 一个元素可以有多个类名，并且类名可以被重复使用（不同/相同的元素使用）多个类名用空格间隔  
> 类名命名规则：  
> 见名知意，可以包含字母、数字、\_ 、- 、，写字母开头，不能包含特殊字符  
> \-通配符选择器 \*匹配页面中所有的元素  
> \*{  
> margin：0;外边距  
> padding：0；内边距  
> }  
> \-群组选择器  
> 给多个元素添加相同的样式  
> .main, .content, . box { }  
> \-子代选择器 IE-6 不识别  
> \> 前后父子关系，一个页面中不要频繁使用  
> .lists\>li { width：100px；height：200px }  
> \-后代选择器  
> 空格隔开  
> .warp a { }  
> \- 伪类选择器  
>  :link 访问前的状态  
>  :visited 访问后的状态  
>  :hover 鼠标移入  
>  :active 激活状态(鼠标按下未松开)

### 权值

元素选择器 1

class 类 10

id 100

内联样式 1000

. wrap\>box a{ } 权值=111

. wrap , .box, a { } 权值不能相加，逗号前后没有关联

### Fscapture 与 PS 的使用

Fscapture 颜色拾取器: crtl+2

background-color: rgb (29,58,126) ;

background-color:1D3A7E;

PS:

1.  编辑-首选项-单位与标尺-单位改成像素

2.  放大 alt+鼠标滚轮

3.  移动 空格键+鼠标左键

ps 切图步骤:

> 1.选择器切片工具  
> 2.进行切片  
> 标尺:视图-标尺勾选 PS  
> 重新调整切片：按 ctrl 单单击  
> 3.文件-导出-存储为 web 所有格式-左下角缩小到 6%-框选全图-右上角选

择保存格式-存储-改文件名为英文-所有用户切片-保存

### CSS 常用属性

#### 文本属性

1.  字体大小

    font-size：12px

    浏览器默认字体大小 16px，允许设置的最小字体 12px

2.  字体

    font- family: "微软雅黑",arial, "times new roman";

    font-family 指定字体:中文要加引号,一个单词不用加""，多个单词需要加

    先设置第-一个字体，如果用户电脑中没有该字体会向后查找，如果都没有最终采取默认字体

3.  字体颜色

    color：rgb（123，123，123）；每一位的范围是 0\~255

    color：2B579A；六位十六位禁止表示法，每一位范围 0\~9A\~F

    纯白 rgb(255,255, 255)、ffffff、 fff

    纯黑 rgb(0,0,0)、000000、 000

4.  文本粗细

    加粗 font-weight：bold；

    正常 font-weight：normal；

    细体 font-weight：lighter；（没人要

5.  首行缩进

    text-indent：2em；可以取负值

    text-indent：-9999px 解决背景图做导航浏览器检索不到内容

6.  文本线条修饰

    下划线 text-decoration:color underline ;

    删除线 text-decoration: line-through；

    无线条 text-decoration: none;

7.  行高

    line-height：20px

    \*\*\*单行文本的垂直居中 行高等于父元素的高

8.  文本和图片的水平对齐方式

    text-align：left / right / center 、

    图片居中要给图片的容器设置

### 文本属性补充 PS：

> 1.字体大小 font-size  
> 默认值 medium=16px  
> 单位 px，pt，em 父元素字体大小的倍数 ，rem  
> 2.文本倾斜 font-style： italic 斜体/ oblique 字体倾斜  
> 3.字间距 letter-spacing:value;控制英文字母或汉字的字距。  
> 4.词间距 word-spacing:value; 控制英文单词词距。  
> 5\. text-transform:none 无转换 Fcapitalize 首字母大写/uppercase 全都大  
> 写/lowercase 全都小写;

1.  font 简写属性 至少要有字号和字体

    font : bold italic 12px/1. 5em "宋体"; （粗细 倾斜）（字体大小） / 行高 字体

2.  文本垂直对齐方式 vertical-align

    top 上

    bottom

    middle 居中

    baseline 基线对齐，默认值

    \*解决图片下方 4px 间距问题

    img {vertical-align:非 baseline } 或者 display:block
    要考虑 text-algin：center 问题

    table;可以使用该属性设置垂直方向的位置

    input, img 可以使用该属性设置旁边的文本的垂直位置

#### 列表属性

\*去掉列表标识符

ul,ol,li {

list-style:”none”;

list-style-type:”none”;

}

1.  list-style-type: 改变列表标识符 thai circle 空心圆 disc 默认(圆点) square 矩形

2.  list-style-image：url（）；改变标识符为图片

3.  list-style-position：inside 标识符位置

#### 边框属性

border：粗细 线型 颜色

线型：

直线 solid、虚线 dashed、点状线 dotted、双线 double、

同时给四个方向设置边框

单方向设置边框：

上边框 border-top:1px solid 000; transparent 透明色

下边框 border-bottom:1px solid 000 ;

左边框 border-left:1px solid 000;

右边框 border- right : 1px solid 000;

`### Day5 7/24`

### 背景图

\-背景图一般是装饰作用

\-背景颜色 background-color： ；

\-引入背景图 backgroud-image：url（）；

\-背景重复 background-repeat：no-repeat；

\-背景定位 background-position：100px 100px ；center / top / bottom / left / right

\-简写 background：背景色 背景路径 重复 定位 ；

\-背景固定 background-attachment: fixed; 背景不跟随滚动条

\-CSS sprite / 精灵图 / 雪碧图

把小图标拼合放在一张图

### 浮动

浮动的元素会脱离文档流

\-浮动的属性

float：left / right / none ；

\-浮动的停止条件

1.碰到父元素的边缘

2.碰到浮动的元素

`# Week2## Day6 7/27`

### 框模型、盒子模型

标准和模型：内容、内边距、外框、外边距

元素的占地宽度：左外边距+左边框+左内边距+内容宽+右内边距+右边框+右外边距

#### 外边距

margin：10px; 上右下左 10px

margin：10px 20px； 上下 左右

margin：10px 20px 30px ；上 左右 下

margin：10px 20px 30px 40px； 上右下左

\*块级元素的水平居中

水平方向的值设置为 auto，在浮动时不生效

使用 margin 遇到的问题：

1.  垂直方向外边距合并，在没有浮动的情况下会遇到，以大值为准

2.  不能设置的行内元素（span、a）无法置垂直方向外边距，水平可以

3.  内外嵌套的 div，如果都不存在浮动父元素没有边框，给子元素设置上外边距会默认作用于父元素（外边距传递问题）

### 内边距 padding

设置值—同 margin

使用 paddin 遇到的问题

1.  不能设置尺寸的行内元素（span、a）垂直方向只会撑大元素，不会改变元素位置

2.  元素添加内边距后尺寸会变大 width 减 padding\*2

### 文本溢出属性

overflow：

visible 溢出可见

hidden 溢出隐藏

scroll 滚动条 建议用 auto

oveflow- x 控制水平方向溢出

oveflow-y 控制水平方向溢出

单行文本显示省略号效果

. box{

width: 600px; 宽度

white-space: nowrap; 控制文本不换行

overflow: hidden; 溢出隐藏

text-overflow: ellipsis; 显示省略号

}

`### Day7 7/28`

### 元素嵌套

块级元素可以嵌套块级元素和行内元素，p 标签不能包块级元素

### 元素类型转换

display：

block 块

inline 行内

inline-block 行内块

能设置宽高，不自动换行（类似于 img input）

none 无

元素不再占据文档空间

list-item 此元素会作为列表显示

### 置换元素

浏览器根据元素的标签和属性，来决定元素的具体显示内容

\< input type=”button” /\>

\<img src=”” /\>

父元素设置 overflow：auto / hidden 会被浮动的子元素撑开高

`### Day8 7 / 29`

### 定位

position:

static 默认值

relative 相对定位

absolute 绝对定位

fixed 固定定位

sticky 粘性定位

1.  相对定位 position：relative

    参照物：元素本身

    是否脱离文档流： 不脱离

    偏移距离（向着中心点移动为正值）

    top;100px right left bottom

2.  绝对定位 position ：absolute

    是否脱离文档流： 脱离

    参照物：外层具有 position 属性的元素，如果没有找到最终参照浏览器空白文档区域定位

    top;100px right left bottom 所有值都为距离参考物的距离

z-index 改变元素的层叠位置，可取负值，越打越靠前没有单位（兄弟之间）

1.  固定定位 position：fixed；

    参考物：浏览器空白文档区域

    是否脱离文档流： 脱离

2.  粘性定位 position : sticky;

    参考物:浏览器空白文档区域

    是否脱离文档流:不脱离

    Top

### 定位实现元素居中

> 1.父元素尺寸未知,子元素尺寸已知  
>  该方法同样适用于子元素比父元素尺寸大的情况  
>  父元素{  
>  width: 600px;  
>  height: 600px;  
>  border: 1px solid 000;  
>  position: relative;  
>  }  
>  子元素{  
>  width: 100px;  
>  height: 100px;  
>  background: yellow;  
>  position: absolute;  
>  top: 50%;  
>  left: 50%;  
>  margin-top: -50px;  
>  margin-left: -50px;  
>  }

> 2.父元素子元素尺寸未知 只适用于子元素比父元素尺寸小的情况  
>  父元素{  
>  position: relative;  
>  }  
>  子元素{  
> position: absolute;
> margin:auto;  
>  top: 0;  
>  bottom: 0;  
>  left: 0;  
>  right: 0  
>  }

> 3.通过 2D 移动属性 可用于子比父大的情况  
> 父元素{  
>  position: relative;  
>  }  
>  子元素{  
> position: absolute;  
> top：50%；  
> left ：50%；  
> transform：translate（-50%，-50%）；  
> }

### 透明度 用作遮罩层

> background :rgba(255,0,0,0-1 之间的小数)  
> 数值越小越透明，IE 678 不支持该属性  
> opacity:0-1;  
> 数值越小越透明，有继承性 。IE 678 不支持该属性  
> filter：alpha(opacity=40);  
> IE 678 支持该属性

### 锚点

当前页面的锚点跳转

\<a href= ”anchorname"\>点击的位置\</a\>

\<div id="anchorname"\>\</div\>

其他页面的锚点跳转

\<a href=" index . htmlanchorname"\>点击的位置\</a\>

\<div id="anchorname"\>\</div\>

`### Day9 7/30`

### 宽度自适应

1.  宽度 width 默认值 auto 或者不写 并不是 100%

2.  高度自适应默认值 auto 或者不写

3.  全屏页面 无滚动条页面（主要是移动端）

    \*{

    Padding：0；

    Margin： 0；

    }

    Html，body{

    Height: 100%;

    }

    body 里面的板块才能平分浏览器空白文档区域的高度

4.  最大最小宽高

    最大宽度 max-width

    最小宽度 min-width 解决背景 bug

    最大高度 max-height

    最小高度 min- height

5.  \-子元素浮动，父元素没有设置高度

6.  给父元素固定高度

7.  overflow：hidden

    \-触发了 BFC，子元素参与宽高计算

8.  clear：borh；

9.  .clr:after{

    content:" ";

    display:block;

    clear:both;

    height:0;

    overflow: hidden ;

    visibility: hidden;

    }

    clr{

    zoom:1 ; 兼容 IE

    }

### 元素隐藏

display:none; 元素隐藏位置不在

visibility:hidden 元素隐藏，位置还在

### 伪对象选择器

：：first-letter 匹配元素的第一个字符

：：first-line 匹配元素的第一行

：before{之前

content：“文字” ；

}

：after{ 之后

content：“ ” ；追加元素

display:block;

width:100px ;

height:100px;

}

`### Day10 7/30`

### 定位设置元素宽高

两边固定中间自适应-float.html

### 表单元素的补充

1.  单选按钮 点击文字选中 lable

    \< input type=”radio” name=”相同“ value=”不同“ checked(默认选中) / \>

2.  复选框

    \< input type=”checkbox” name=”相同“ value=”不同“ checked(默认选中) / \>

3.  下拉菜单

    \<select name= "city" size="5"\>

    \<option value="qd"\>青 岛\</option\>

    \<option value="bj"\>北 京\</ option\>

    \<option value="nj"\>南 京\</ option\>

    \<option value="jn"\>济 南\</ option\>

    \</ select\>

    Size 显示的行数

    selected 可以设置某一项默认选中（selected=“selected“ 等同于 selected）

4.  多行文本域

    \< textarea name=” ” cols=”每行字符数” rows=“行数“ \>\</textarea \>

    resize : none; css3 禁止用户改变元素尺寸 并不是行内属性

5.  文件上传

    \< input type=”file” /\>

6.  表单字段集

    \<fieldset\>

    \<legend\>标题\</legend\>

    \<!--\<div\>表单字段集里面的文本表单 div\>--\>

    \</fieldset\>

7.  Lable 标签

    第一种方法 \<lable\> 删掉 lable for 属性

    我同意此条款\<input type=”checkbox” name=”” value=”” /\>

    \</ lable\>

    第二种方法

    \<lable for=“aggre“\>我同意此条款\</ lable\>

    \<input type=”checkbox” name=”” value=”” id=“aggre“ /\>

### 表格属性

#### 表格行分组

thead 表头、tbody、tfoot 表尾

thead-tr-th（加粗并居中）

1.  边框

    td，th { border：1px solid 000 }

2.  单元格间距 ——给 table 添加、

    border-spacing: 0;

3.  合并表格边框——给 table 添加

    borde-collapse:collapse;

4.  表格标题位置

    caption-side: top / bottom;

5.  固定表格布局 宽高

    table-layout : fixed / auto 默认值

6.  无内容单元格显示、隐藏

    empty-cells：hide；

    BFC

    子元素的高度参与计算

`# Week3## Day11 8/3`

### 渐变

1.  线性渐变

    background:linear-gradient（角度，颜色，颜色，…）

    角度：

    可以写方向，例如由左到右写成 to right

    写数值 15deg

2.  径向渐变：

    background: radial-gradient(fff,000); 或指定颜色

3.  重复线性渐变

    background:repeating-linear-gradient（方向，颜色 0%，颜色 20%，…）

4.  重复径向渐变

    background:repeating-radial-gradient（颜色 0%，颜色 20%，…）

### 过渡

1.transiton： 过渡的属性 所需的时间 速度效果 延迟效果

速度效果：

匀速过渡 linear(匀速)

先慢后快 ease-in

先快后慢 ease-out

由慢变快后变慢 ease- in-out

默认值,慢速开始慢速结束 ease 王

2\. transition 如果给 hover:鼠标移入有过渡，移出没有过渡

transition 如果给元素本身:鼠标移入移出都有过渡

1.  多个属性设置不同效果

    用逗号进行隔离

    Transition：width 2 linear 1s，background 1s ；

2.  多个属性设置相同的过渡效果

    属性用 all 来表示

    Transition ：all 2s linear 1s ；

### 浏览器前缀

谷歌，Safari ：-webkit-

欧朋 Opera ：-o-

火狐 Firefox ：-moz-

IE ：-ms-

### 2D

1.  位移

    transform：translate(100px)

    x 轴正方向移动

    transform：translate(100px，100px)

    第一个值 x 轴方向移动，第二个值 y 轴方向移动

    transform：translateX(100px)

    x 轴方向移动

    transform：translateY(100px)

    y 轴方向移动

2.  旋转

    transform : rotate(45deg);顺时针旋转 45deg

    transform : rotate(-45deg);逆时针旋转 45deg

    \-转换中心

    transform-origin：50% 50%；

    旋转，缩放会影响坐标轴一起旋转缩放

3.  缩放

    transform：scale（2）；元素变为原来的二倍

    transform：scale（2，0.5）；元素变为原来的宽二倍高 0.5

    transform：scaleX（2）；元素变为原来的二倍

    transform：scaleY（2）；元素变为原来的二倍

4.  倾斜

    transform ：skew（45deg）；

### 元素居中第三种方法

> 父{  
>  position:relative;  
>  }  
>  子{  
>  position:absolute;  
>  top:50%;  
>  left:50%;  
>  transform:translate(-50%,-50%);移动自己尺寸的一半  
>  }

### 3d

> 父元素添加 perspective:3000px; 景深  
> \*父元素添加 transform-style:preserve-3d;  
> 子元素保留 3d 转换位置  
> 位移：  
> transform:translateZ()  
> transform:translate3d(100px,200px,200px);  
> transform:translateX(100px) translateY(200px) translateZ(200px);  
> 旋转：  
> transform:rotateX(45deg);  
> transform:rotateY();  
> transform:rotateZ();  
> transform:rotate3d(x,y,z,45deg);

### 动画

1.  定义动画

    @keyframs 动画名称{

    from/ 0% { }

    50% { }

    to / 100% { }

    }

2.  执行动画 给元素本身打开浏览器本身，覆盖（鼠标移入）执行：写 hover 里

    animation: 动画名 动画执行时间 速度效果 延迟时间(0s) 执行次数 是否反向；

    执行次数：infinite；无限循环

    是或反向：反向 alternate

    animation-play-state 检索或设置对象动画的状态

    暂停 paused

    animation-fill-mode: forwards;停在最后一帧

`### Day12 8/5`

### Html5 语法

> 内容类型  
> html5 的文件拓展符与内容类型保持不变，仍为 .html 或 .htm 。  
> doctype 声明  
> 不区分大小写  
> 指定字符编码集  
> \<meta charset=”UTF-8”\>  
> 可省略标记的元素  
> 不允许写结束标记的元素：br col embed hr img input link meta > 可以省略结束标记的元素：li dd dt p option colgroup thead tbody tfoot tr td
> th  
> 可省略全部标记的元素：html head body colgroup tbody  
> 省略引号  
> 属性值可以用双引号，也可以是使用单引号

### H5 新增的语义化标签

#### 块级

section 元素 表示页面中的一个区块

article 元素 文章内容（一大段文本）

aside 元素 侧边栏，辅助信息

header 元素 页面头部

footer 元素 页面底部

nav 元素 页面导航  
\<nav\>

\<li\> \</li\>

\</ nav\>

figure 元素表示一段独立的流内容，使用\<figcaption\>标题\</figcaption\>\<article\>内容\</article\>

main 元素 表示页面中的主要内容

hgroup 元素 标题的一个分组 \<hgroup\>\<h5\>\</h5\>\<h6\>\</h6\>\</hgroup\>

#### 行内

mark 高亮文本 文本突出显示颜色

time 时间

### 视频和音频

视频\<video src=””\>\</video\>

音频\<audio\>\</audio\>

controls 属性：向用户显示控件，比如播放按钮，根据浏览器显示不同样式

autoplay 属性：自动播放。谷歌屏蔽此功能

loop 属性：重复播放属性

muted 属性：静音属性

poster 属性：规定视频正在加载时显示的图像，指导用户点击播放按钮 音频无此属性

\<source\>\</source\>定义媒介资源，写在 video 内部，
规定可替换的视频/音频文件供浏览器根据它对媒体类型或者编解码器的支持进行选择。

video 支持的格式：mp4 ogg webm{每个浏览器兼容性不同}

audio 支持的格式：mp3 pgg

### H5 新增表单元素 在 form 内

\<input type=” “

required 此表单元素为必填 n

Type="email”限制用户必须输入邮箱类型

Type=“url”限制用户必须输入地址类型

Type-="range”产生一个滑动条表单

Type=“number”数字类型

Type=”search”产生一个搜索意义的表单

Type=“color”生成一个颜色选择的表单

以下有兼容问题:

Type=“time”限制用户必须输入时间类型

Type="month”限制用户必须输入月类型

Type=“week”限制用户必须输入周类型

Type=“datetime -local”选取本地时间

Type="date”日期类型

\<output\>\</output\> 用来接收两个控件计算的值

### H5 新增的属性

1.  list 属性 输入框提示输入内容

    \<input type="url" list="url-lists"/\>

    \<datalist id="url-lists"\>

    \<option value="http: / /WWw. baidu. com" label="百度"/\>

    \<option value="http:/ /WWw. google.com" label="谷歌" /\>

    \<option value= "http: / /WWW. jd. com'' label="京东" /\>

    \</datalist\>

2.  placeholder 提示文本，相较于 value 不用删除

3.  autofocus

    页面中的某一个控件自动获取焦点

4.  required 必填字段

5.  pattern 正则

    \<input type=”text” pattern=”[0-9][a-z]{3}” \>

6.  input type=“number”

    min ， max ， step

    min 最小值

    max 最大值

    step 步长 step=“5“ 每次递增 5

7.  multiple 多选，可选怎多个上传文件

8.  novalidate 取消验证

9.  autocomplete 自动完成 写 on 或 off

`### Day13 8/6`

### 回顾

1.H5 新增语义标签

section 区块 section

article 文本

header 头部 header

footer 底部 fotter

nav 导航 nav

aside 侧边栏 aside

figure-figcaption 独立文本流

main 主体 主体 main

hgroup 标题分组

mark 高亮文本

time 时间

2.H5 表单元素
`email` `url` `range` `color` `number` `search` `time` `month` `week` `date` `datetime` `datetime-local`
3.H5 表单属性

required 必填

placeholder 提示

pattern 正则

list 选择提示

min

max

step

`autofocus `自动获得焦点

autocomplete 自动完成

novalidate 取消验证

multiple file 文件多选

### 渐进增强和优雅降级

渐进增强:针对低版本浏览器进行构建页面，保证最基本的功能，

然后再针对高级浏览器进行效果、交互等改进和追加

功能达到更好的用户体验

优雅降级:一开始就构建完整的功能，然后再针对低版本浏览器进行兼容

### css3 选择器

#### 一、层级选择器

E\>F 子代选择器(非 css3)

E+F 匹配紧邻元素 E 的后面的元素 F(非 css3)

E\~F 选择前面有 E 元素的每个 F 元素

#### 二、属性选择器

1、E[attr]：只使用属性名，但没有确定任何属性值

2、E[attr="value"]：指定属性名和属性值(值完整)

3、E[attr\~="value"]：指定属性名，并且具有属性值，

此属性值是一个词列表，并且以空格隔开，

其中词列表中包含了一个 value 词

4、E[attr\^="value"]：属性值是以 value 开头的(一部分也可以)

5、E[attr\$="value"]：属性值是以 value 结束的(一部分也可以)

6、E[attr\*="value"]：属性值中包含了 value(一部分也可以)

7、E[attr\|="value"]：属性值是 value 或者以“value-”开头的值

（比如说 zh-cn）;

\*\*\*4/5/6 是 css3 新增的选择器

#### 三、伪类选择器

1.结构性伪类选择器

X:first-child 匹配子集的第一个 X 元素(非 css3)

X:last-child 匹配子集的最后一个 X 元素

X:nth-child(n) 匹配索引值为 n 的子元素,索引值从 1 开始

X:only-child 匹配唯一的子元素

X:nth-of-type(n) 匹配同类型中的第 n 个同级兄弟元素 X

X:only-of-type 匹配同类型中唯一元素 X

X:first-of-type 匹配同类型兄弟元素中的第一个 X 元素

X:nth-last-child(n) 从最后一个开始算索引

X:nth-last-of-type(n) 匹配同类型中的倒数第 n 个兄弟元素 X

X:root 匹配文档的根元素

X:empty 匹配没有任何子元素,也没有文本的元素 X

.list li:nth-child(even){偶数

background-color: yellow;

}

.list li:nth-child(odd){奇数

background-color: pink;

}

2.目标伪类选择器

E:target 选择匹配 E 的所有元素，且匹配元素被相关 URL 指向

3.语言伪类选择器

E:lang(language) 指定了 lang 属性,而且其值为 language(非 css3)

4.UI 元素状态伪类选择器

E:enabled 匹配（form 表单）中处于可用状态的 E 元素

E:disabled 匹配（form 表单）中处于不可用状态的 E 元素

E:checked 匹配（form 表单）中处于选中状态的 E 元素

E::selection 匹配 E 元素中被用户选中的部分，（鼠标拖动选中文字）

5.否定伪类选择器

E:not(s) （IE6-8 浏览器不支持）

匹配所有不匹配简单选择符 s 的元素 E

6.动态伪类选择器(非 css3)

E:link 超链接并未被访问过

E:visited 超链接已被访问过

E:active 元素被激活

E:hover 鼠标停留在元素 E 上

E:focus 元素获取焦点

### 浏览器前缀

IE:-ms-

火狐 mozilla firefox:-moz-(基于 gecko 内核的浏览器)

欧朋 Opera:-o-

谷歌 google chrome,Safari:-webkit-(基于 webkit 内核的浏览器)

### 盒子阴影

box-shadow:水平位置 垂直位置 模糊距离 [阴影尺寸] 阴影颜色 [内阴影(inset)];

例子 box-shadow: 0px 0px 20px 666;

### 文本阴影

text-shadow:水平位置 垂直位置 模糊距离 阴影颜色;

### 文本换行的相关属性

word-wrap

属性值：

normal 只在允许的断字点换行（浏览器保持默认处理）

break-word 允许长单词或 URL 地址换行到下一行

word-break

属性值：

break-all 直接进行单词内的断句

keep-all 文本不会换行，只能在半角空格或连字符处换行

### @font-face 字体图标

阿里巴巴矢量图标库

### 背景的新增属性

1.background-origin 背景原点

padding-box 背景图像填充框的相对位置(默认值)

border-box 背景图像边界框的相对位置

content-box 背景图像的相对位置的内容框

2.background-clip 背景裁切

border-box 背景被裁剪到边框盒(默认值)

padding-box 背景被裁剪到内边距框

content-box 背景被裁剪到内容框

3.background-size 背景尺寸

cover 把背景图像扩展至足够大，完全覆盖背景区域

contain 把图像图像扩展至最大尺寸，以使其宽度或高度完全适应内容区域

具体数值/百分比

4.多背景属性

### 边框的新增属性

1.border-image 图片边框

border-image-source 路径

border-image-slice 图片边框向内偏移

border-image-repeat 平铺(repeat)铺满(round)拉伸(stretch)

border-image-outset 边框图像区域超出边框的量

简写形式 border-image:路径 偏移 平铺;

2.border-radius 圆角边框

border-radius:5px;

border-radius: 5px 10px 20px 50px;从左上角开始顺时针设置倒角

border-radius: 30px/15px;倒椭圆形

border-radius:10px 20px 30px 40px/40px 30px 20px 10px;

`### Day14 8/7`

### 弹性盒

#### 给父元素添加

1.display:flex/inline-flex;

flex 将对象作为弹性伸缩盒显示

inline-flex 将对象作为内联块弹性伸缩盒显示

2.flex-direction (主轴排列方向)

row 默认，横向一行排列

row-reverse 反转横向排列

column 纵向排列

column-reverse 反转纵向排列

3.justify-content(主轴对齐方式)

flex-start 默认，顶端对齐

flex-end 末端对齐

center 居中对齐

space-between 两端对齐，中间自动分配

space-space-evenly 两端和元素之间间距相等

space-around 自动分配距离

\*默认元素在主轴上容不下不会换行，会被压缩

4.align-items (侧轴对齐方式)

flex-start 侧轴起始边界

flex-end 侧轴结束边界

center 居中放置

baseline 基线对齐

stretch 默认值，项目被拉伸以适应容器

5.flex-wrap 设置换行

nowrap 容器为单行，该情况下子项可能会溢出容器

wrap 容器为多行，子项内部会发生断行

wrap-reverse 反转排列

6.align-content(行与行之间对齐方式)

flex-start 没有行间距

flex-end 底对齐没有行间距

center 居中没有行间距

space-between 两端对齐，中间自动分配

space-around 自动分配距离

stretch 默认值，项目被拉伸以适应容器

#### 给子元素添加

给子元素添加

1.align-self 灵活容器内被选中项目的对齐方式

\--可重写灵活容器的 align-items 属性

auto 默认值，元素继承了它的父容器的 align-items 属性

stretch 元素被拉伸以适应容器

center 元素位于容器的中心

flex-start 元素位于容器的开头

flex-end 元素位于容器的结尾

2.order 排序优先级

数字越大越往后排，默认为 0，支持负数

3.flex-grow 项目的放大比例

flex:1;--放大比例

4.flex-shrink 项目的缩小比例

flex-shrink:0;元素不缩小

5.flex-basis 项目的长度

\*flex 为第 345 条的简写形式（不建议写）;

flex:0 1 auto;

### 多列

column-count：；列数

column-gap：间距；

column-rule：；线条

\*break- inside:avoid;禁止元素内部打断

`### Week 4## Day15 8/10`

### 媒体查询

@media only screen and (min-width :1201px ) {

box{

background: yellow;

} -1201 及以上尺寸

@media only screen and (min-width: 601px) and (max-width: 1200px) {

box{

background: green;

} -601px 到 1200px 之间的尺寸

@media only screen and (max-width : 600px ) {

box{

background: red;

}

} -600px 一下的尺寸

@media screen and (orientation : portrait) {}竖屏

@media screen and ( orientation: landscape) {}横屏

断点:逻辑像素

iphone5 :320px、iphone6/ 7/8:375px、iphone6/ 7/8plus :414px、

### 移动端布局

1\. meta 标签

\<meta name="viewport"

content= "width=device -width，initial-scale=1, minimum-scale=1 ,
maximum-scale=1,user- scalablezno" /\>

这段代码的几个参数解释:

width = device-width: 宽度等于当前设备的宽度

initial-scale:初始的缩放比例(默认设置为 1.0)

minimum-scale:允许用户缩放到的最小比例(默认设置为 1.0)

maximum-scale:允许用户缩放到的最大比例(默认设置为 1.0)

user-scalable:用户是否可以手动缩放
(默认设置为 no，因为我们不希望用户放大缩小页面)

2.单位 rem

em 是父元素字体大小的倍数

rem 是根元素字体大小的倍数

1.  dpr

    ppi：像素密度，所表示的是每英寸所拥有的像素数量

    dpr = 物理像素(UI 设计图) / 逻辑像素(代码设置的尺寸)

`### Day15 8/11`

#### vw-rem 布局

vw：

1vw=视口宽的 1%

100vw=视口宽度

vh：

1vh=视口宽的 1%

100vh=视口宽度

iphone5 标准

320px=100vw

100px=31.25vw

iphone6/7/8 标准

375px=100vw

100px=26.67vw

`### Day16 8/12`

CSS Sprites、精灵图、雪碧图

\-将多个图片整理在一张图片上，通过背景定位的方式引入不同图片

\-背景图一般是小图标或者装饰作用的图片

\-img 一般是页面的内容

#### 图片整合优势

1)通过图片整合来减少对服务器的请求次数，从而提高页面的加载速度

2)通过整合图片来减小图片的体积

#### 图片整合的原则

1.根据实际需求，小图标尽量上下排列(防止后面不必要的背景图)

2.小图标之间尽量留出足够的空间

3.整合大图片的背景-.定是透明的

4.列表符号的图标尽量放在图片最右侧

5.一般情况下，小图标才会做整合

### debug

IETester:IE6--11

### CSSHack 指一种兼容 CSS 在不同浏览器中正确显示的技巧方法:

1.图片间隙

img 设置 display:block;或者 vertical-align:不为 baseline ;

父元素设置 font-size:0;

2.浮动双倍外边距(IE6 会碰到)

子元素添加 display:inline;

1.  表单元素高度及对齐方式不一致

    \<input type= "text" / \>\<input type="button" value="按钮" /\>

    同高对平方向不在一条线

    浮动起来，再调节高度

4.a 标签包裹图片

5.透明写法

opacity: 0\~1;IE8 以上的浏览器

filter :alpha( opacity=1\~100); IE9 及 IE9 以 下的浏览器

6.cursor 鼠标移入效果

pointer 小手/hand(IE)

### 特殊符号进行 IE 浏览器的兼容

IE6 识别\_ -

ie6, 7 识别\* +

ie8-11 识别\\0 background: green\\0;

ie9-10 识别在属性后\\9\\0

### 优化

1.css 优化

相同的 CSS 样式提取到一个样式表里,调用即可

2.头部优化

\<meta name="keywords ”content="" /\>向搜索引擎说明你的网页的关键词王

\<meta name="description" content=""/\> 告诉搜索引擎你的站点的主要内容

> 3.超链接优化

> 建议采用纯文本链接

> title 属性

> 最好别使用图片热点链接

4.图片优化

alt 和 title

\<img src=”01.png” alt=”” /\>

1.  搜索引擎不喜欢索引大体积的页面

2.  css 规范

    命名方法（语义化命名，结构化命名）

### 快捷键

补全标签 tab

注释 ctr1+/\|

删除 ctrl+d

div.lal →\<div class=”lal”\>\</div\>

divlal →\<div id=”lal”\>\</div\>

### 其他

transparent 透明色

\<link rel="stylesheet" type="text/css" href="css/style.css"/\>

rel="stylesheet"作用：关联样式表

!important 最高

一个容器可以添加多个背景中间用 ， 做间隔 但小的要在前

Margin 设置上边距父元素没有边框会设置给父元素 ：解决办法 1 给父元素透明边框

### CSS 的继承性

不可继承的: display、mangin、border、padding、 background、 height、min-height、
max-height、、min-width、 max-width、 overflow、 position、 left、 right、 top、

bottom、z-index、 float、 clear、 table-layout、 vertical-align

所有元素可继承: visibility 和 cursor。

内联元素可继承: letter-spacing、 word-spacing、 line -height、color、
font、font- family、font-size、 font-style、 font-variant、font-weight、text-

decoration、text-transform。

块状元素可继承: text- indent 和 text-align

列表元素可继承: list-style、 list-style-type、 list-style-position、 list-style-
image。

表格元素可继承: border-collapse。

line- , text- , font- ，color 开头的子类可以继承

pointer-events: none;
用来解决鼠标移出父元素覆盖子元素时，过渡反复执行问题，示例：D:\\HBuilderProjects\\qianfeng\\keshang\\几十种 CSS3 鼠标悬停动画特效\\test.html `uu考虑上传`
