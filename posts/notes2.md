---
title: JavaScript学习笔记
date: 2021-04-27 11:08:29
categories:
  - Notes
tags:
  - JavaScript
  - CSS
  - RegExp
  - PHP
  - JQuery
---

## JavaScript 发展历史（JS）

> 1.1994 年，网景公司(Netscape)发布了 Navigator 浏览器 0.9 版，这是世界上第一款比较成熟的网络浏览器，轰动一时。但是这是一款名副其实的浏览器--只能浏览页面，浏览器无法与用户互动,当时解决这个问题有两个办法，一个是采用现有的语言,许它们直接嵌入 页。另一个是发明一种全新的语言。  
>  和 java 没有任 联系  
>  liveScript ==\> javaScript ==\> ECMAscript  
>  2.
> 1995 年 Sun 公司将 Oak 语言改名为 Java，正式向市场推出。Sun 公司大肆宣传，许诺 种语言可以"一次编写，到处运  
>  行"(Write Once, Run Anywhere)，它看上去很可能成为未来的主宰。  
>  3\. 网景公司动了心，决定与 Sun 公司结成联盟  
>  4\. 34 岁的系统程序员 Brendan
> Eich 登场了。1995 年 4 月，网景公司录用了他,他只用 10 天时间就把 Javascript 设 出来了。（多肽语言）  
>  5\. (1)借鉴 C 语言的基本语法; (2)借鉴 Java 语言的数据类型和内存管理;  
>  (3)借鉴 Scheme 语言，将函数提升到"第一等公民"(first class)的地位;
> (4)借鉴 Self 语言，使用基于原型(prototype)的继承机制。

## JavaScript 能干什么

> 1\. 常见的网页效果【表单验证，轮播图。。。】  
>  2\. 与 H5 配合实现游戏【水果忍者：  
>  http://www.jq22.com/demo/html5-fruit-ninja/】  
>  3\. 实现应用级别的程序【http://naotu.baidu.com】  
>  4\. 实现统计效果【http://echarts.baidu.com/examples/】  
>  5\. 地理定位等功能【http://lbsyun.baidu.com/jsdemo.htm\#i4_5】  
>  6\. 在线学编程【https://codecombat.163.com/play/】  
>  7\. js 可以实现人工智能【面部识别】

## JavaScript 的组成

1\. ECMASCRIPT: 定义了 javascript 的语法规范,描述了语言的基本语法和数据类型

2\. BOM (Browser Object Model): 浏览器对象模型

\- 有一套成熟的可以操作浏览器的 API，通过 BOM 可以操作浏览器。比如：
弹出框、浏览器跳转、获取分辨率等

3\. DOM (Document Object Model): 文档对象模型

\- 有一套成熟的可以操作页面元素的 API，通过 DOM 可以操作页面中的元素。比如：
增加个 div，减少个 div，给 div 换个位置等

总结： JS 就是通过固定的语法去操作 浏览器 和 标签结构 来实现网页上的各种效果

## JavaScript 代码的书写位置

和 css 一样，我们的 js 也可以有多种方式书写在页面上让其生效

js 也有多种方式书写，分为 行内式， 内嵌式，外链式

### 行内式 JS 代码（不推荐）

写在标签上的 js 代码需要依靠事件（行为）来触发

写在 a 标签的 href 属性上\<a
href="javascript:alert('我是一个弹出层');"\>点击一下试试\</a\>

写在其他元素上 \<div onclick="alert('我是一个弹出层')"\>点一下试试看\</div\>

### 内嵌式 JS 代码

在 html 页面书写一个 script 标签，标签内部书写 js 代码

注：script 标签可以放在 head 里面也可以放在 body 里面，最后是在 body 的最后

### 外链式 JS 代码（推荐 > 通过 script 标签的 src 属性引入，js 可引入多个

> \<script src="index.js"\>\</script\>

## JS 中的注释

### 单行注释

> 写两个 / ，也可以按 ctrl + / 不可换行

### 多行注释

一般用来写一大段话，或者注释一段代码，可换行

/\*注释部分\*/，也可以按 shift + alt + a

## 变量（重点）

变量指的是在程序中保存数据的一个容器 语法： var 变量名 = 值

### 定义变量及赋值

变量在定义时可以赋值也可以不写

注意：一个变量名只能存储一个值，再次给变量赋值时，值会代替，变量名称区分大小写（JS
区分大小写）

### 变量的命名规则和命名规范

#### 规则：

一个变量名称可以由 数字、字母、英文下划线（\_）、美元符号（\$） 组成

严格区分大小写

不能由数字开头，不要使用中文汉字命名

不能是 保留字 或者 关键字

不要出现空格

#### **规范**：

建议遵守的（开发者默认），不遵守不会报错，变量名尽量有意义（语义化），驼峰命名法

## 数据类型（重点）

### 基本数据类型

#### 数值类型（number） > 一切数字都是数值类型（包括二进制，十进制，十六进制等）

> NaN（not a number），一个非数字，但是属于数字类型中

#### 字符串类型（string）

> 被引号包裹的所有内容（可以是单引号也可以是双引号）

#### 布尔类型（boolean）

> 只有两个（true 或者 false）

#### null 类型（null）

> 只有一个，就是 null，表示空的意思

#### undefined 类型（undefined)

> 只有一个，就是 undefined，表示没有意义的值，未定义的

### 引用/复杂数据类型

**对象类型（object）**

**函数类型（function）**

### 判断数据类型 typeof

一： var n1 = 100; console.log(typeof n1);

二： var s1 = 'abcdefg'; console.log(typeof(s1));

### 判断一个变量是不是数字

isNaN ：(需要判断的东西)is not a number 输出 TRUE 或者 FALSE  
变量是数字=\> false 不是数字=\> true

## 数据类型转换

### Number(变量)

1.可以把一个变量强制转换成数值类型 2.可以转换小数，会保留小数 3.可以转换布尔值 4.遇到不可转换的都会返回 NaN 例子：str= ’1f3ds1fa ’ 结果为 NaN

### parseInt(变量) 不识别小数点之后

1.  从第一位开始检查，是数字就转换，直到第一个不是数字的内容停止

2.  开头就不是数字，那么直接返回 NaN

3.  只能保留整数

### parseFloat(变量)

1.  从第一位开始检查，是数字就转换，直到第一个不是数字的内容停止

2.  开头就不是数字，那么直接返回 NaN

3.  认识一次小数点

4.  除了加法以外的数学运算

5.  运算符两边都是可运算数字才行

6.  如果运算符任何一边不是一个可运算数字，那么就会返回 NaN

### 其他数据类型转成字符串变量.toString() > undefined 和 null 不能使用 toString()

> toString （2）toString（8）进制转换

### 其他数据类型转成布尔 Boolean(变量)

> 只有 ''、0、null、undefined、NaN，这些是 false，其余都是 true

## 运算符

### 数学运算符

\+

1.  只有符号两边都是数字，或者有一边是布尔值的时候才会进行加法运算

2.  只要符号任意一边是字符串类型，就会进行字符串拼接

\- 减法运算，自动把两边都转换成数字进行运算

\* 乘法运算，自动把两边都转换成数字进行运算

/ 除法运算，自动把两边都转换成数字进行运算

% 取余运算，自动把两边都转换成数字进行运算

### 赋值运算符

= 把 = 右边的赋值给等号左边的变量名

\+＝ a += 10 等价于 a = a + 10

\-= a -= 10 等价于 a = a - 10

\*= a \*= 10 等价于 a = a \* 10

/＝ a /= 10 等价于 a = a / 10

%= a %= 10 等价于 a = a % 10

\*\*=

### 比较运算符

== 比较两边的值是否相等，不管数据类型 1 == '1 true

=== 比较两边的值和数据类型是否都相等 1 === '1' false

!= 比较两边的值是否不等 1 != '1' false

!== 比较符号两边的数据类型和值是否不等 1 !== '1' true

\>=

> 比较左边的值是否 大于或等于 右边的值  
>  1 \>= 1 true  
>  1 \>= 0 true  
>  1 \>= 2 false

\<=

> 比较左边的值是否 小于或等于 右边的值  
>  1 \<= 2 true  
>  1 \<= 1 true  
>  1 \<= 0 false  
>  **\#\#\#逻辑运算符**

&& 有一边不是 true，那么就会返回 false

\|\| 两边都是 false 的时候才会返回 false

! 取反 true 变成 false

### 自增自减运算符（一元运算符）

\++

i+＋ 先进行运算，得出结果后在+1

\++ i 先+1 运算，再输出

\--

同理于 i++ ++i

`# Day2 08/18`

## 分支结构

JS 代码的执行顺序，自上到下从左向右。

if 语句多用于判断条件，switch（）语句多用于判断是否为某一个具体的值。

### if 条件分支结构

语法 if（条件）{执行代码 }

if (条件) { ① }else{ ② } 条件成立执行 ①，不成立语句 ②。

if (条件 1) { ① }else if（条件 2）{ ② }…else { }
条件 1 成立时执行语句 1，不成立进行条件 2 判断，以此类推。

### switch 条件分支结构

使用时要应用于某一个具体的变量的多个具体值

语法： switch（需要判断的变量）{

case 数值 1：执行语句 1 ； break；

case 数值 2：执行语句 2 ； break；

default：都不满足时执行的代码； default 解决输入意料之外的值。

}

### 三元运算符

基本语法： 条件？语句 1 ： 语句 2

条件为 true 时执行语句 1，条件为 false 时执行语句 2；

`# Day3 08/19`

## 循环结构

根据条件，重复执行的代码。

必要的固定内容：1.初始化 2.条件判断 3.需要执行的代码 4.自身改变

### \#\#\#While 循环

while 语句适合于，未知循环次数或者是死循环

语法：while(判断条件) { 满足条件时执行的语句 }

一定要设置边界值，不然会一直执行，损害电脑，影响后续代码。

1.  初始化 定义一个变量，且赋值 var a= 0；

2.  判断进入循环的条件 while ( a\<10 ){

3.  循环时需要执行的语句 console.log ( \` \${ a } \` );

4.  改变自身值 a+=1; 必须设置防止死循环 此时增加的数值也叫步长

### \#\#\#do…whlie 循环 必定先执行一次

相似于 while 循环

注：dowhile 循环执行时，不管条件是否满足都会先执行以此

do{

执行代码块

} while(判断条件)

### \#\#\#for 循环

语法：for ( var i=0 ; i\<10 ; I ++; ) {

需要执行的代码 } for 循环的使用会多余其他循环

for 循环更适合于嵌套循环

### \#\#\#break 终止循环

在循环执行时设置 if（某个特定的值）{ break } 使其所在的整个循环终止（结束）执行。

### \#\#\#continue 结束本次循环

在循环执行时设置 if（某个特定的值）{ continue }
使其所在的本次循环跳过后续语句的执行，并且开始执行下一次循环。
此时使用 for 循环之外使要把自增条件写在 continue 语句之前

`# Day4 08/20`

## 函数定义

### 声明式

语法：

function 函数明 ( 函数形参 ) { 一段代码}

### 赋值式

var fn = function () { 内部代码段 }

不需要在 function 后面书写函数的名字了，因为在前面已经有了

### 两种方式注意点

> 1.两种定义函数的方式不同，但是调用函数的方式都以一样的 > 2.定义完一个函数以后，如果没有函数调用，那么写在 {}
> 里面的代码没有意义，只有调用以后才会执行  
>  3.调用时声明式函数可以在函数体之前或之后侯调用赋值式函数只能在声明函数之后再调用

## 函数的参数（重点）

( ) 是用来放参数的位置，参数分为两种 行参 和 实参

**function fn(行参写在这里)**

1.  行参就是在函数内部可以使用的变量，在函数外部不能使用

2.  形参可以有多个但是如果只有行参的话，那么在函数内部使用的值个变量是没有值的，也就是
    undefined

3.  行参的值是在函数调用的时候由实参决定的(实参将值传入)

### 实参

在函数调用的时候给行参赋值的，在调用的时候是给一个实际的内容的

### 参数注意点

1.多个参数的时候，是按照顺序一一对应的

2.参数个数的关系

> 行参比实参少，多余的实参无用  
>  行参比实参多，所以多出来的行参就是没有值的，就是 undefined。

## 函数和事件的结合 点击事件

？？.onClick=.....

getElementById()获取元素 id

getquerySelector(‘select’)获取

## 函数的 return（重点） > 1.终断函数 return 关键字可以在函数中间的位置停掉，让后面的代码不在继续执行

> （默认值 undefined，只写 return 也是 undefined，写了值写什么就返回什么）  
>  2.返回值，函数调用本身也是一个表达式(有值) 默认 undefined  
>  3.可以在函数内部使用 return ，可以将任何内容当作这个函数运行后的结果

## 函数的优点

1.  封装代码，使代码更加简洁

2.  复用，在重复功能的时候直接调用就好

3.  控制代码运行，可以在我们想要执行的时候执行

## 预解析（重点） js 代码的编译和执行

js 是解释型语言，会在代码执行前，对代码进行通读和解释，然后再执行代码。

因为是在所有代码执行之前进行解释，所以叫做 预解析（预解释）

console.log(变量)； //undefined

if(....){var 变量＝值；}

预解析会先声明这里又一个变量，但不会给变量赋值所以 undefinede 不是报错或者输出值

————————————变量提前

预解析的无节操

\\1. 不管 if 条件是否成立，代码块里面的 var 都会进行声明

\\2. return 后面的代码虽然不会执行，但是会进行预解析

`# Day5 08/21`

## 函数作用域

**全局作用域**

全局作用域是最大的作用域（打开浏览器是生成全局作用域 window ，直到浏览器关闭）

全局作用域 的变量可以在任何地方使用

## 局部作用域 在 js 中只有函数能生成局部作用域

局部作用域只能在局部作用域内部使用 每一个函数都是一个局部作用域

## 变量的使用规则

### 访问规则

局部变量权重大于全局变量

需要获取一个变量的值的时候，这个行为称作访问

获取规则：先在自己所在的作用域内查找，没有时一层一层向上（只能向上）查找，如果全局作用域没有报错（
变量 is not defined ）

### 赋值规则

赋值时，先在自己所在的作用域内查找进行赋值，没有时一层一层向上（只能向上）查找，如果都没有就定义为全局变量，再给它赋值。

## 递归函数 一个函数内部调用了自己循环往复

递归的实现和循环类似 要写终止的判断条件，无限循环死递归。

不推荐使用占用大量内存，执行效率低

function add(n) {

// 传递进来的是 1

// 当 n === 5 的时候要结束

if (n === 5) {

return 5

} else {

// 不满足条件的时候，就是当前数字 + 比自己大 1 的数字

return n + add(n + 1)

}

}

add(1)

## arguments JS 关键字

一个伪数组，可以使用 arguments.length 来求位数，可以使用【索引下标】语法

arguments.length 伪数组的内容个数 arguments[ i ] 对应角标的数值（从 0 开始）

内部以数组的方式储存数据

## Day 事件对象

声明对象 var obj= { 要书写的数据 name：‘what’， }；

或者 ??/待补全

## 浏览器事件

\- onload 加载完毕

\- onscroll 浏览器滚动事件

## 鼠标事件

\- onclick 单击事件

\- ondblclick 双击事件

\- onmousedown 鼠标左键按下事件

\- onmousemove 鼠标移动事件

\- onmouseup 鼠标抬起事件

\- onmouseover 鼠标移入事件

\- onmousout 鼠标移除事件

## 键盘事件

\- 要么你绑在整个页面上 docuemnt

\- 要么你绑在一个表单元素上

\- onkeydown 键盘按下事件

\- onkeyup 键盘抬起事件

**触摸事件（移动端**）

\- ontouchstart 触摸开始

\- ontouchmove 触摸移动

\- ontouchend 触摸结束

## 表单事件

\- onchange 表单改变事件（失去焦点触发）

\- oninput 表单输入事件（随着输入触发）

\- onsubmit 表单提交事件（当你点击 submit 的时候触发）（事件是表单的事件，绑定在
form 上）

## 其他事件

\- ontransitionend 过度结束的时候触发

\- onanimationend 动画结束的时候触发

\*/

`# Day2-1 08/24 `

## 数组

字面量创建数组 var arr=[ 0, 1 2];

内置函数创建数组 var arr1= new Array(); arr1=[1,2,2,3 ]

### 数组的 length

length 表示数组的长度,arr.length

### 数组的索引/下标

在所有的语言中索引都是从零开始

索引也叫做下标,是指一个数据在数组里面排第几个位置

### 数据类型之间存储的区别(!)

他们最大的区别就是在存储上的区别

我们的存储空间分成两种 **栈** 和 **堆**

栈： 主要存储基本数据类型的内容

堆： 主要存储复杂数据类型的内容

#### 复杂数据类型在内存中的存储情况

> 在堆里面开辟一个存储空间把数据存储到里面,把存储空间的地址赋值给栈里面的变量

#### 数据类型之间的比较

> 基本数据类型之间是值的比较 > 复杂数据类型之间时地址的比较,即使两个复杂数据类型的内容值相等他们也不等
> flase

### 数组的常用方法

#### arr.push()是用来在数组的末尾追加元素

push()内可以写多个值逗号间隔,push 的返回值是,新数组的长度

#### arr.pop()删除数组的最后一项

arr.pop()内写值不起作用,返回的是被删除的对象,影响原数组

#### 数组末尾删除 pop

pop 是用来删除数组末尾的一个元素，括号内不需要值

#### 数组前添加 unshift

使用 unshift 方法想数组的最前面添加一个元素 arr.unshift(x，y，....)

数组常用方法之 shift

#### shif**t 是删除数组最前面的一个元素**

使用 shift 方法删除数组最前面的一个元素 arr.shift()

#### splice 数组截取 影响原数组

splice 是截取数组中的某些内容，按照数组的索引(下标)来截取

语法： splice(开始位置(被截取)，截取元素个数，替换的新元素)
（用不到的可以不写，三个参数只能按顺序未来）数组变为剩余值

#### reverse 数组反转

reverse 使数组内元素反向排列

#### sort 数组的简单排序(只看第一位)

arr.sort()简单排序

arr.sort(function(a,b){ return a-b})从小到大排序

arr.sort(function(a,b){ return b-a})从大到小排序

#### concat 把多个数组进行拼接

和之前的方法不同 concat 不会改变原始数组，而是返回一个新的数组

var arr = [1, 2, 3] ； var newArr = arr.concat([4, 5, 6])；

console.log(newArr) // [1, 2, 3, 4, 5, 6]

#### join 把数组里面的每一项内容链接起来，变成一个字符串

arr.join(要以什么内容链接) 不会改变原始数组，而是把链接好的以字符串返回

var arr = [1, 2, 3]

var str = arr.join('-') 不写时(包括引号) 结果为 str=1,2,3 join(‘’)123

console.log(str) // 1-2-3

### for 和 for in 循环

使用 for 循环来循环数组里的元素 遍历

对象没有索引，可以用 for in 循环来遍历对象得到的是对象的 key(属性名)

## 函数参数传递基本数据类型和复杂数据类型的区别

深浅复制

### 基本数据类型赋值，

把 a 的值复制了一份一摸一样的给了 b 变量，赋值以后两个在没有关系

### 复杂数据类赋值，

复杂数据类型，变量存储的是地址，真实内容在 堆空间内存储

所以赋值的时候相当于两个栈公用一个相同的堆(地址)，所以其中一个值改变时也会影响下一个

## 函数的参数

函数的参数也是赋值的之中，在函数调用的时候，实参给行参赋值

函数传递基本数据类型: 和之前变量赋值的时候一样，在把 num
的值复制了一份一摸一样的给到了函数内部的行参, 两个之间在没有任何关系了

函数传递复杂数据类型:

function fn(o) {

o.name = 'Rose'

console.log(o.name) // Rose

}

var obj = {

name: 'Jack'

}

fn(obj)

console.log(obj.name) // Rose

把 obj 内存储的地址复制了一份一摸一样的给到函数内部的行参 o,函数外部的 obj
和函数内部的行参 o，存储的是一个地址，指向的是一个存储空间

所以两个变量操作的是一个存储空间

## for(var 自定义变量 in 数组){程序}

会将 数组的索引下标,存储在自定义变量中

通过自定义变量存储的索引,来获取数组的单元数据信息

只能获取索引,别的不能获取数组.forEach(function(形参 1,形参 2,形参 3){})

形参 1: 存储的是当前循环次数时,获取的单元数据

参数 2: 存储的是当前循环次数时,获取的单元索引下标

参数 3: 存储的是原始数组

三个形参,不一定都要定义,可以根据实际需求

形参可以任意定义,只要符合命名规范就可以

forEach() 只能循环遍历数组,不能循环遍历对象

`# Day2-2 08/25`

## 严格模式(了解) ‘user strict’

### \#\#\#规则

声明变量前必须有 var 关键字

函数的两个形参不能重复

声明式函数调用的时候函数内部不能有 this //正常时指向 window

## ES5 中常见的数组常用方法

### indexOf ( 按照下标查找数组中的某一项 )

区分大小写 只能查询一次

如果没有就返回-1 有返回对应字符的下标

### forEach 循环遍历数组

arr1.forEach(function ( item , index , arr ){ } )

index: 数组中的每一项

index: 数组中每一项的索引值

arr : 原始数组

### map

var newArr = arr1.map(function ( item , index , arr ){

return item (+-\*/ 进行运算)

} )

返回一个新的数组

### filter 筛选所有满足条件的值

var newArr=arr.filter( function(){…… return item\>1 })

f 返回数组中所有大于一的项

**some()**

只做验证该数组里面是否有满足条件的元素只要有一个就可以

满足时 return 返回值为 true 不改变原数组

### every()

只做验证该数组里面所有元素时候都满足条件

满足时返回 true 不改变原数组

## 字符串常用方法

1.  charAt( 索引 ) 返回值为下标对应的值 ,如果没有对应值返回为空字符串

2.  charCodeAt(索引) 返回值为对应下标位置的 unicode 编码 没有返回 NaN

3.  indexOf(“ x “ , 5) 按照字符找到对应的下标 返回下标,没有 -1 区分大小写 下标 5
    之后开始找

4.  lastIndexOf(“ x “ , 5)) 按照字符找到对应的下标从后往前找
    最后出现的位置对应下标,或者查询子串出现位置 区分大小写

5.  toLowerCase() 字符串中英文全小写,有中文不影响 不改变原数组

6.  toUpperCase ( ) 字符串中英文全大写,有中文不影响 不改变原数组

7.  substring(开始下标,结束下标) 字符串的截取
    原字符串不变 str.substring(返回值被截取的字符串 开始下标,结束下标-1 字符 [ )

8.  substr( 开始下标,截取个数) 从开始下标,截取对应个数
    没指定到结尾,获得截取后字符串

9.  str.split(“ ”, num) 字符串的分割 将字符串以某种格式分割 返回值为数组,
    split(‘’)空时全部分割 num 指定返回的最大长度

10. replace(参数 1,参数 2) 字符串替换 将 1 换为 2 原有字符串不受影响 正则

11. slice ( ) 返回字符串中提取的子字符串

var str1=str.slice(2); //如果只有一个参数，则提取开始下标到结尾处的所有字符串

var str2=str.slice(2,7);
//两个参数，提取下标为 2，到下标为 7 但不包含下标为 7 的字符串

var str3=str.slice(-7,-2);
//如果是负数，-1 为字符串的最后一个字符。提取从下标-7 开始到下标-2 但不包含下标-2 的字符串。前一个数要小于后一个数，否则返回空字符串

12\. match() 返回所有查找的关键字内容的数组

var str="To be or not to be";

var reg=/to/ig;

var str1=str.match(reg);

console.log(str1); //["To", "to"]

console.log(str.match("Hello")); //null

`# Day2-3 08/26`

## Math

### Math.random()随机数

随机数 a\~b 容错 前提是 b\>a

( Math.random()\*(b-a+1)+a )

### Math.round() 四舍五入 得到的是整数

\-3.7 得到 -4

### Math.floor() 向下取整 得到的是整数

console.log( Math.floor (9.9 ) ) // 9

### Math.ceil() 向上取整 得到的是整数

console.log( Math.ceil (9.1 ) ) // 10

### Math.abs() 绝对值 得到的是正数

console.log( Math.abs (-8 ) ) // 8

### Math.max() 最大值

console.log( Math.max (5,45,3,999 ) ) // 999

### Math.min() 最大值

console.log( Math.min (5,45,3,999 ) ) // 3

### Math.pow(底数,指数) 求幂

console.log( Math.pow (2,3) ) //8

### Math.sqrt() 开平方

console.logt( Math.sqrt (9) ) //3

## π Math.PI

console.log ( Math.PI ) //3.1415926

## 日期函数 get

var d = new Date (2021/2/3 0:59:59 ); 创建时间

获取当前年份 d.getFullYear ( )

获取当前月份 d.getMonth ( ) 值是 0\~11

获取当前天数 d.getDate ( )

d.getDay ( ) 当前天数是周几 值 0\~6

获取当前的小时 d. getHours ( )

获取当前的分钟 d. getMinutes ( )

获取当前秒数 d.getSeconds ( )

毫秒数 d. getMilliseconds

格里尼治时间 以 1970/1/1 为零 毫秒为单位天(毫秒数 1000/60/60/24)

d.getTime() 时间距离格里尼治时间 0 的相差毫秒数

## 日期函数 set……( )

获取时间的方法都可以用来设置时间, 周几不能设置

`# Day2_4 8/27`

## BOM( window.方法名

Browser Object Model 操作浏览器的一些能力 核心是 window

window 是浏览器的一个内置对象包含着对浏览器的操作方法

### 获取窗口尺寸

innerWidth innerHeight

### 浏览器弹出层

aler( ‘ 提示框 ’ ) confirm ( ‘ 询问框 ‘ )确定返回 true 取消返回 false prompt ( ‘
内容输入框 ’ )确定返回输入内容取消返回 null

window.open('www.baidu.com', '\_blank') 打开的地址,打开方式”\_self”/”\_blank”

'newwindow', 'height=299,width=299,top=0,'

新的窗口打开

### 浏览器地址信息

location.href 储存地址栏内的 url 信息 中文转为 url 编码格式

decodeURIComponent(window.location.href) 转为中文显示

location.reload() 重新加载页面,刷新 不能写在全局,不然会一直刷新

window.location.host 地址栏信息中,主机地址信息

window.location.port 获取地址栏信息中,端口的数值

window.location.search 获取地址栏信息中,传参的数据

### 浏览器历史记录

history.back() 返回前一个页面 相当于浏览器的

history.forward() 前进到下一条记录 相当于浏览器的

history.lenth ( ) 输出历史纪录的条数,url 不同时产生一条记录

history.go() 正数前进对应数字条数的记录 负数后退对应数字的记录 0 刷新当前页面

### 浏览器滚动事件

scrollTop 获取浏览器页面向上滚动的距离 scrollLeft 横向滚动的距离

写法 document.body.scrollTop\|\|document.documentElement.scrollTop;

### 定时器 setInterval ( )

var i = 0 ;

var 名称 = setInterval(function() {

执行的事件;

if ( i == ?) {

clearInterval ( 名称 ); }

},执行间隔时间毫秒)

### 延时器 setTimeout( )

setTimeout(function(){

执行内容,(可通过在外部 onclick 事件配合实现流氓广告,无限弹窗)

},多少毫秒后执行)

### 清除定时器延时器

clearInterval() clearTimeout()

## DOM

### dom 节点类型

元素节点: \<div _class_="img1"\>\</div\>

属性节点: class=’ img1’

文本节点: div 中的文本

### 获取元素结点的方式

document.getElementById(); 获取 id

document.getElementByNmae() 通过 name 属性获取

document.querySelector() 通过选择器选取,可以是类名 id 属性

document.querySelectorAll() 得到伪数组

node.getElementsByTagName(); 通过元素名称获取

document.getElementsByClassName(); 获得伪数组 node.getElementsByClassName(); 8
IE 以下不兼容

### 可直接获取的元素

获取 body :document.body 获取 html: document.Elemnent

获取头部 head: document. 获取 title: document.title

## 元素节点属性

var oDiv= document.querySelect( ‘ div ‘ );

oDiv.tagName 只能获取不能设置 为英文字母大写

获取/设置 oDiv.id = ‘id’ oDiv.title oDiv.className

oDiv.style.backgroundColor 获取时只能获取行内样式

inner HTML 标签间的内容

innerText 标签中的纯文本

outerHTML 整个标签

### - 节点的分类

\+ 元素节点

= nodeType === 1

= nodeName === 大写标签名

= nodeValue === null

\+ 文本节点

= nodeType === 3

= nodeName === \#text

= nodeValue === 文本内容

\+ 属性节点

= nodeType === 2

= nodeName === 属性名

= nodeValue === 属性值

\+ 注释节点

= nodeType === 8

= nodeName === \#comment

= nodeValue === 注释内容

### setAttribute 方法 操作的是元素节点的行间属性

获取元素的属性 元素.getAttribute( ‘ 你要获取的属性 ‘ )

设置更改标签的属性 元素.setAttribute ( ‘属性’ , ‘ 属性值 ‘ )

删除标签 元素.removeAttribute( ‘ 属性 ‘ );

### 元素子节点

oDiv.childNodes 获取一个节点的所有子节点 ,得到伪数组

firstChild 得到节点的第一个子节点

> laseChild 得到节点的最后一个子节点

firstElementChlid 得到节点子级的第一个节点

lastElementChlid 得到节点子级的第一个节点

nextSibing 得到节点的的下一个兄弟节点

previousSibing 得到节点的的下一个兄弟节点

nextElementSibing 得到节点的的下一个元素节点

previousElementSibing 得到节点的的下一个元素节点

parentNode 可以快速获取当前节点的父节点

### 节点的操作方法

document.write( ‘ hello word’ ); 覆盖原内容

appendChild( ) a.appendChild( b ) 把 b 插入到 a 子节点的末尾

createTextNode( 文本内容 ) 创建文本节点

insertBefor ( ) oDiv.insertBefor( a , b ) 把 a 添加在 oDiv 子节点 b 之前

replaceChild() oDiv.replaceChild( a, b) 用节点 a 替换节点 b

removeChild()/remove() 节点.removeChild( box1 ) 删除节点 box1

node.cloneNode(), 克隆节点本身

### offse

offsetLeft 元素到边界的距离 元素左上角 包括

offsetTop 元素到浏览器上边的距离

offsetWidth offsetHeight 获取元素内容宽高包括内容 padding border

clientWidth clientHeight 获取元素宽高 内容+ padding

## 事件 on+…

### 绑定事件

1.  内联模式

2.  外联模式/脚本模式 元素节点.on……=function(){ }

## 事件类型

### 鼠标事件( 可以绑定在任意元素节点上 )

click 单击

dblclick 双击

mouseover 鼠标移入:穿过元素或子元素时会重复触发

mouseout 鼠标移出:穿过元素或子元素时重复触发

mouseenter 鼠标移出只有鼠标穿过被选元素时,才会触发

mouseleave 鼠标移出 同理

mousemove 鼠标移动会不同出发

mouseup 鼠标抬起

### 键盘事件

keydown 键盘按下:按下会一直触发

keyup 键盘抬起

keypress 键盘按下 ( 支支持字符键

### HTML 事件

#### window 事件

load 当页面加载完成后触发

unload 当页面解构时触发 ( 刷新页面、关闭页面) 只能 IE

scoll 页面滚动

resize 窗口大小改变时触发

#### 表单事件

blur 失去焦点

focus 获取焦点

select 当在输入框内选中文本时触发

change 党对输入框内文本进行改变且失去焦点时触发

submit 点击 submit 时触发

reset 点击 reset 按钮时触发

## 事件对象

### button 的属性 e,button

1.  左键

2.  鼠标中建

3.  按下鼠标右键

### 获取当前鼠标位置 ( 获取时原点不同

clientX clientY 原点位置: 可视窗口的左上角为原点

pageX pageY 原点位置: 整个网页的左上角包括滚动出去的

screenX screnY 原点位置: 电脑屏幕的左上角

offsetX offsetY 原点位置: 当前事件元素(被选中元素)的左上角

### 四个修改键 按下时点击鼠标

shiftKey 如果按下就为 true 否为 false

ctrlKey altKey metaKey(win 键、command 键)

[事件](事件%20%20%20%20on+....docx)

[正则](正则表达式.docx)

[ECMA5/6](ECMA5-6.docx)

## 异步串行

ES6 简化 promise 的写法 ， async await（async wait）

async function show(){

return ‘ 你是真行 ’ ；

}

async function tool(){

var res = await show();

console.log(res);

}

## Promise 的其他方法

全部执行完成进行后续操作：.all

promise.all([ p1,p2,p3 ]).then(function(){ console.log（ ‘全部执行完成’ ）；

最快的一个执行完成进行后续操作: .race

promise.race([ p1,p2,p3 ]).then(function(){ console.log（ ‘最快的执行完成’ ）；

如果其中有 reject 失败，不管只要有其中一个执行成功就行。 .any

Promise.any([ p1,p2,p3 ]).then(function(){ console.log（ ‘执行成功’ ）；

## 面向对象

概念:
面向对象是一种编程思想,要实现面向对象编程,必须通过类和对象这两个语法去实现,ES6 之前通过构造函数去实现.通过构造函数,我们可以实现继承、封装、多态
通过面向实现的代码具有继承封装多态的特点.

### 面向对象

1.历史 :面象过程的语言 c 汇编 面向过程的语言 c++ Oject-c Javascript python go
java

2.编程思想: 面向过程只关心数学逻辑 面向对象 将生活中的逻辑映射到我们的程序中

3.例 一辆车时速 60km/h 路长 1000km 问多久能跑完

4.实现面向对象,必须有两个语法支持.

1 ) 类: 具有相同特征的事物的抽象概念.( ECM6 之前通过构造函数实现 ) 2 ) 对象:
类中的某一个具体的个体, 唯一的实例

5.数据结构: 基本数据类型(储存单个值) 复合数据类型(储存批量的值)
对象(即可以储存数据,又可以储存函数)

**封装函数** 类似于原料加工出厂的函数叫做工厂函数

使用 new 调用函数后,会自动完成原料和出场操作,通过 new 创建的函数 this 会指向当前新创建的对象(一般情况下把通过 new 调用的函数叫做构造函数,首字母大写)

如果需要给构造方法添加方法,使其可以被所有对象共享,可以将函数添加在 prototype 上,此时这个函数会被所有对象共享

function Person( name , sex ){

this.name=name;this.sex=sex;

}

Person.prototype.showName=function(){ console.log( this.name ) }

var p1= new Person( ‘dasd’ , ‘男’);

p1.showName( ) ;

## 继承和多态

**继承** 对父类的属性和方法的继承

function Worker( name ,sex ,job ){

Person.call( this , name, sex );

this.job= job;//添加自身属性

}

Worker.prototype=new Person ( ) ;

### 多态

多态和继承其实是同一件事的两个侧重，多态更加侧重于自己的方法或者重写父类的方法

## ECMA6 方法实现

class Person{

constructor( name , sex ){ //构造函数

this.name=name;

this.sex=sex;

}

shhowName(){ //构造方法

console.log( this.name);

}

shhowSex(){

console.log( this.sex);

}

class Worker extends Person{ //继承父类

constructor( name , sex , job ){

super( name. sex )； //继承父类属性

this.job=job;

}

showJob(){ console.log( this.job ) };

var w1= new Worker( “dasf“ ， ” 男 “ ， ” 西巴“ ) ；w1.showName( ); …

## JS 运动

1.运动的物体要使用绝对定位 2.通过改变物体的原属性使其运动或变化

window.onload=function(){

获取节点; 节点.触发方法=function(){ 调用运动框架(带有计时器的函数)

}

var timer=null; 必须声明在运动函数调用之前

function 运动函数名(target){

cearInterval( timer );

timer=setInterval(function(){

speed= ( target – node.offsetLeft )/8 8:参数防止数据过大运动太快

speed=speed\>0? Math.ceil(speed) : Math.floot(speed); 取整很重要

if( onde.offSetLeft==target){ 条件判定

clearInterval( timer ) 满足条件时清除定时器结束运动

}else{

node.style.left=node.offsetLeft+speed+’px’;

}

}

}

### 多物体运动

多物体运动时在传入目标是参数时,同时须传入当前函数指向(this), 不需要再提前定义 var
timer=null ;。 函数: function(node,target){ clearInterval( node.timer )
node.timer=setInterval( function(){ …………… } ) }

## PHP

php 是后台语言不能,只能在特定的环境运行,浏览器是执行不了的

### 变量的定义规则:

1.以\$,开头

2.变量名必须以字母或者下划线开始

3.变量名只能包含字母数字下划线

4.不能有空格,区分大小写

**数据类型**: String, Integer ,Float,Boolean,Arry,Object,NULL;

### 语法:

每条语句结尾必须带分号

输出: echo “” echo(“”);

print ““ print(“”)

print_r(“”)

var_dump(“”);

字符串拼接: echo "\<br\>我的名字叫:".\$username.", 今年:".\$age;

echo "我的名字叫：{\$username}，今年{\$age}岁,性别是：{\$sex}\<br/\>";

if 判断 switch 判断 for 循环 function show(){} 函数

**数组** \$arr1=array(“lal”,”lalala”) for(\$i=0;\$i\<count(\$arr1);\$i++){ }

关联数组:键值对形式

\$arr2=array(“pipi”=\>”bobo”,”lal”=\>”dudu”) foreach(\$arr2 as \$key=\>\$value){
}

**md5**加密:32 位十六进制字符串,不可逆加密,相同的字符加密得到的字符串也相同

可以通过穷举破解

md5(\$str) 可以通过套娃增加破解难度 echo md5(md5(md5(\$str1). "qingdao") .
"qianfeng");

**日期**: date 必须传入格式化输出日期对象的字符串

Y 年 m 月 d 代表日 H 小时 i 分钟 S 秒

中国时区 date_default_timezone_set (“PRC”)

date_default_timezone_set(“Asia/Shanghai”);

未设置时区时,默认显示,格里尼治时间

## AJAX

ajax 是前后端交互的语言

优势: 不需要插件,原生 js 支持,不需要刷新页面就能更新数据,减轻服务端和带宽的负担

缺点: 搜索引擎的支持够,因为数据都不在页面上,搜索引擎搜不到

创建 AJAX 对象:

var xhr=null;

if(window.XMLHTTPRequest()){

xhr=new XMLHTTPRequest; //兼容 IE 以上

}else{

xhr= new ActiveXObject(‘Microsoft.XMLHTTP’); //IE9 以下

} //或者使用 try{ }catch(e){ }

方法:

xhr.open(“请求方法”,”请求地址”,”是否异步”); //配置信息

xhr.send(); //发送

xhr.onreadystatechange = function () { //等待数据相应

_if_ (xhr.readyState === 4) {

_if_ (xhr.status == 200) {

success && success(xhr.responseText);

} _else_ {

error && error("Error:" + xhr.status);

}

}

}

HTTP 状态码 xhr.status:

1xx:请求收到正在处理

2xx:成功

3xx:完成请求,必须进行进一步处理

4xx:失败

5xx:服务器错误

### 规则

xhr.open();

get 请求时直接在 url 后面进行字符串拼接?key=value&key=value

post 请求时不需要拼接但要执行 xhr.setRequestHeader("content-type",
"application/x-www-form-urlencoded");

xhr.send();

get 时直接发送

post 时需要发送的数据要放在 xhr.send(‘key=value&key=value’);

### GET:

数据通过 url 传输,有大小限制,快捷, 缺点:不安全,不能进行上传,最大 2kb

### POST

通过内部提交,理论上没有最大值,可进行数据上传 缺点: 底层实现比 get 复杂

JSON 对象

html

JSON.Stringify(arr) 数据串化

JSON.Parse(str) json 字符串解析为格式化数据

php

json_encode(); 转为 json 字符串

json_decode();转为对应的 数据结构

## MySql 语句结尾一定要有分号;

登录 mysql -u root -p

查看所有数据库 show databases;

创建数据库 create database name character set utf8; 设置使用 utf8 字符集

选择要使用的数据库 use name;

删除数据库 drop database [if exists] name ; if exists //存在就删除不存在退出

### 数据表

create table tb_name(

id int unsigned, 设置为无符号数

name varchar(30) not null default ‘’, 不能为空 默认值是空

birthday date, 日期类型

salary float not null default 0.0;

resume text 大文本

)character set utf8;

### 表的操作

insert 插入: insert into 表名(字段 1,字段 2…) values(值 1,值 2,…);

update 更新: update 表明 set 字段 1=新值 1,字段 2=新值 2,… where 字段=值;

delete 删除: delete from 表名 where 限制条件

select 查找: select 字段 1,字段 2… from 表名 where 条件( name like ‘张%’ );

order by 排序: select \* from 表名 (可以不写 where 条件) order by 字段 asc/desc;

limit 跳过式查询: select \* from users limit {\$jump},{\$limit}

count(\*)数据总条数: select count(\*) from users; \$res1 = mysql_query(\$sql1);

\$row1 = mysql_fetch_assoc(\$res1);

\$count 此时的值为总条数 \$count=\$row1['count(\*)'];

## [JSONP](../../HBuilderProjects/qianfeng/keshang2/week6/jsonp&cookie/03封装jsonp.html)

## Cookie:

1.最大 4kb

2.单个域名下可以储存 50 条数据

3.可以设置过期时间

cookie 的完整格式:

name=value;[exprise=date];[path=path];[domain=somewhere.com];

name 和 value 都是自定义,必填字段.

中括号里的内容是可选项,可按照自己的需求下进行选择

[注]chrome 只支持服务器加载缓存的 cookie

encodeURLComponent 编码

decodeURLComponent 解码

## 本地缓存

cookie

1.可以设置过期时间

2.最多只能储存 4kb

3.每个域名最多能储存 50 条数据

document.cookie = "name" = encodeURIComponent("牛山后");

console.log(decodeURIComponent(document.cookie));

exoirse:过期时间

内容必须为日期对象

如果不写默认为结束当前会话时过期

[注]: 系统会自动清除,已过期的时间

document.cookie = encodeURIComponent(name) + "=;expires=" + new Date(0);

path:设置路径

访问路径的时候,加载页的路径,必须一致,不一致就访问失败

domain :限制访问域名

默认是当前文件的域名

sexure 之前只能被 https,现在都行

H5 新增

localStorage

1.永久储存

2.最多 5MB

sessionStorag

1.只能储存一次会话

2.最多 5MB

## JQuery

### jquery 获取页面元素

1.传入参数,是一个选择器的形式 . 表达式的形式

**\$("") \#id .class tag**

伪类 :first :last :even :odd :eq(num 从零开始)

**filter** 对现有的元素进行二次筛选

\$("tag").filter(".class")\<=\>\$("tag.class")或者 id calue ...  
\$("tag").eq(1)\<=\> \$("tag:eq(1)") 同理第一条

**not** 也是筛选,但意义和 filter 相反

**has** 选择的是当前节点,但筛选条件是子节的条件

\$("div").not(".box").css("fontSize", '100px');

### 链式操作:

同一事件下的不同操作可写为链式

\$("tag").click(function(){\$("this").css(....)}).mouseover(function(){同上}).mouseou(function(){同上});

JQuery 和 js 可以共存但不能混用

### 获取节点

.prev() 前一个兄弟节点

.next() 后一个兄弟节点

\$("ftag").find("tag/id/class...") 在父类中选出符合条件的元素 节点 等价于 \$("ul
p ")

\$("node").index() 获取节点在兄弟节点中的下标

.attr("") 获取节点属性(class,id)的值 或设置多个多个 css 属性 及值

链式函数之所以能连续调用是因为函数的返回值是 this 指向当前事件
第二个函数执行时相当于 this.fn2();

### Class:

addClass("") 给节点添加 class 值一个或多个空格间隔

removeClass("") 给当前节点 class 移出值某个或多个

### Width:/Height

.width() width

.innerWidth() width+padding

.outerWidther() width+border+padding

.outerWidther(true) width+padding+border+margin

### 节点操作:

#### 插入

a.before(b) a 插入到 b 结点之后

a.insertBefore(b) a 插入到 b 结点之前

a.after(b) a 插入到 b 结点之前

a.insertAfter(b) a 插入到 b 结点之后

a.append(b) 在 a 节点中插入 b(最后)

a.appendTo(b) 把 a 插入 b 节点中(最后)

a.perpend(b) 在 a 节点中插入 b(开始位置)

a.perpendTo(b) 把 a 插入 b 节点中(开始位置)

a.remove() 移除 a 节点

#### 节点查找

父类:

\$("\#node").parents("条件 id/class..").css("color", 'red'); 所
有符合条件的父类,或不写条件直接到 html

\$("\#node").parents().css("color", 'red'); 直接父类

\$("\#node").closest(".box").css("backgroundColor", 'red'); 第
一个符合条件的父类

\$("\#li1").parentsUntil("body").css(); 查找父类直到 body

兄弟:

【注】下面的括号中都可以传入选择器

siblings() 除自己外的所有兄弟节点

• nextAll() 除自己之外之后所有的兄弟

prevAll() 除自己之外之前所有的兄弟

• parentsUntil() nextUntil() prevUntil()

\$("\#li1").nextUntil("h3").css() 之后的兄弟直到 h3 标签

\$("\#li1").prevUntil("h3").css() 之前的兄弟直到 h3 标签

### 事件绑定 JQ 不需要自己兼容:

ev.事件对象

ev.pageX clientX offsetX screenX

which:

1.鼠标事件 1 左键 2 中键 3 右键

2.keydown 代表键码

3.keypress 代表字符码

precentDefault(阻止默认事件) stopPropagation(阻止事件冒泡) 或者 return false

### 获取节点属性值:

\$("\#node").offset().left 获取距离页面左侧的距离

\$("\#node").position().left 获取与第一个具有定位的父元素之间的间距

\$("\#node").offsetParent() 获取第一个具有定位的父!节点!

\$("\#node").val() 获取或设置 value 值

\$("\#node").html() 获取或设置标签内的值

\$("\#node").size() 输出获取到的节点个数

each 对获取的节点遍历 \$("node").each((index,tiem)=\>{console.log(item/index)}

**JQ 的特效函数** \$()

• hover() 覆盖

• show() hide() 从左上角收起和展开

• fadeIn() fadeOut() 淡入 淡出

• fadeTo(time,opicty,fn(){}) 改变透明度

• slideDown() slideUp() 卷闸效果

除 hover’之外都可以设置执行时间第一个参数

如果还需其他效果加第三个参(函数)并在里面写效果

### anmate

animate(运行的目的值对象, 毫秒数/500, callback);

【注】animate 默认的运行形态：慢快慢，或设置额外参数”linear”匀速。

【注】有别的运动形态。必须通过 JQUI 对 JQ 的功能进行拓展。

【注】默认情况下，会把触发的动画，全部放在一个队列里面依次执行。

动画根据链式操作写为链式动画

### **delay()** **延迟时间毫秒数**

#### stop()

\$("\#div1").stop(); //将当前正在运行的动画阻止，但是后续的动画不受影响

\$("\#div1").stop(true);//所有动画都停止了

\$("\#div1").stop(true, true);
//将所有的动画都停止，将当前正在运动的动画直接到达目的值

\$("\#div1").finish(); //将所有的动画都停止，将所有的运动的动画直接到达目的值

### JQ 方法

on:

一个事件绑定一个函数 \$("node").on("event",function(){...});

两个事件绑定同样函数 \$("node").on("event event1",function(){...});

多个事件多个函数 解构 .on({event:functioon(){},event1:functioon(){}})

传三个参数时,第二个是触发对象可以是一个或多个

off:

取消事件下的某个函数 \$("node").off("event",fnName);

取消事件下的所有函数 \$("node").off("event");

取消当前节点的事件绑定 \$("node").off();

get()将 JQ 对象转化为 js 对象让他可以使用 js 的方法

\$(document).ready() 相当于 window.onload()

.remove()删除节点

.detach()删除节点,从新添加时还可用之前该节点下的方法

\$("\#div1").clone(true) 克隆节点,值为 true 时同时克隆节点的方法

\$("\#node").add("\#node1").css( ); 同时选中 node 和 node1

\$(“li”).slice(1,3).css() 选中下标第一到第三个节点前毕后开.

\$(“\#ndoe”).serialize() 以键值对的形式返回 name=value  
\$("\#node").serializeArray() 数组套对象的形式 arr[0]=\> { name:””,value:””}

#### 包装

.wrap() 给选中节点添加一个父节点

.wrapAll()
给所有选中的节点添加一个总的父类,所有节点放在所有节点放在第一个 node 所在的位置

.warpInner() 给选中的节点内部添加节点

.unwarp() 给当前节点去一层父节点,body 除外

#### 工具方法

\$.type(a) 输出当前数据的数据类型

\$.trim(str ) 删除字符串的首尾空格

\$.inArry(参数 1 , 2 , 3 )
1:需要查找的元素,2:需要查找的数组名称 3:起始位置不写从零开始 返回值为下标

noConflict() 给\$ 起别名的 之后再用\$要用别名代替

\$.parseJSON ( ) 将 json 字符串转为对应的数据结构

\$.makeArray(aLis) 将伪数组转为数组

## 其他

### 求随机数

math.ramdom ( ) [1,0) 生成 0——1 之间的小数 可以取到 0，取不到 1

如果要生成 a\~b 范围之间的数值，且能够取到 a b

parseInt( Math.random ( ) \* (b+1-a) + ( a ) )

### 冒泡排序

var arr = [9,23,45,6,1,0,33,56,7];

for(var i=0;i\<arr.length-1;i++){

for(var k=0;k\<arr.length-1-i;k++){

if(arr[k]\>arr[k+1]){

var temp = 0; 不要写在外部,每次循环重置为零

temp = arr[k];

arr[k] = arr[k+1];

arr[k+1] = temp;

}

}

}

console.log(arr)

### 选择排序

#### ①

var arr = [9,23,45,9,1,0,33,56,7];

for(var i=0;i\<arr.length-1;i++){

var min = i;

for(var k=i+1;k\<arr.length;k++){

if(arr[k]\<arr[min]){

min = k;

}

}

if(min!==i){//如果不是 这两者位置互换

var temp = 0;

temp = arr[i];

arr[i] = arr[min];

arr[min] = temp;

}

}

console.log(arr)

#### ②

function changeSort(arr) {

for (var i = 0, len = arr.length; i \< len - 1; i++) {

for (var j = i + 1; j \< len; j++) {  
if (arr[i] \> arr[j]) {

var tmp = arr[i];

arr[i] = arr[j];

arr[j] = tmp;

}

}

}

}

### 快速排序

function qyickSort(arr){

if ( arr.lengtth \<= 1 ){

return arr;

}

var middle =arr.split( paresInt( arr.length/2 ) ,1); 找中间的数作为基准数

var left =[] 放置基准数左边的数

var right =[] 放基准数右边的数

for ( arr i=0; i\<arr.lenght; i++){

arr[ i ] \>middle? right.push( arr[ i ] ) : left.push( arr[ i ] ) ;

}

return quickSort(left).concat(middle, quickSort(right));

}

console.log(quickSort(arr));

### 数字 进制之间的转换

toString ( )方法可以在数字转成字符串的时候给出一个进制数

二进制 前面加 0b 二进制 0 1 组成

八进制 前面加 0 八进制 0\~7 组成

十进制 正常写数字就行

十六进制 是 0\~9 A\~F 组成

### 保留几位小数 toFixed(保留几位小数)得到的是 字符串
