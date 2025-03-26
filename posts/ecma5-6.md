---
title: ECMA5-6部分常用知识
date: '2021-04-27'
categories:
  - Notes
tags:
  - JavaScript
  - JSON
---

### ECMA5

- foreach 遍历
- filter 找出满足条件的项
- map 把数组的每一项进行数学运算

- JOSN 方法

- JOSN.parse
  - 是将 json 格式的字符串转换为 js 的对象
- JOSN.stringfy

  - 是将 对象或者数组转换成 json 格式的字符串

- THIS

- 函数内部关键字

  - this 指向只与调用者有关 有明确调用对象时指向事件源或调用者,没有时指向 window

- 强制改变 this 指向的方法

  - 函数.call( '新的指向' , 第一个参数 )

  - 函数.apply ( '指向' , [ 参数 ])

  • 数组内存放需要传入的参数

  - 函数 . bind( ' 指向 ' )( 参数)

  • 第二个中括号内存放参数

- 配合箭头函数使用

- array.forEach(item =\>item);

- arr.filter(item=\>item\>2);

- arr.map(item =\> item \* 2);

- let 和 const(定义变量)关键字

- let、const 和 var 的区别

- let 和 const 不允许重复声明变量

- let 和 const 不会预解析(变量提升)暂时死区

- let 和 const 声明的变量两个 { } 之间为它的作用域

- let 和 const 的区别

- let 声明变量之后可以改变值,const 不能(const 用来声明常量)

- let 声明的时候可以不赋值,const 声明时必须赋值

- 箭头函数

- 语法: (函数的形参)=\>{ 函数体内要哦执行的代码}或者时 return 的值

- 箭头函数的特殊性

- 箭头函数内没有 this,箭头函数内的 this 是上一层函数中的 this

- 箭头函数内没有 arguements 这个参数集合

- 函数只有一个参数是可以不写(),大于一个时必须写

- 函数体只有一行时可以不写 return 并且会自动返回 return,其余需要写全

- 多线程

- 程序的运行状态

- 同步 : 阻塞.当前程序要执行,必须等前面的程序执行完

- 异步:非阻塞,当前程序是否执行与之前的无关

- 多程序之间的关系

- 并行 :多个程序同时执行

- 串行: 多程序之间 a---\>b----\>c

- 解构赋值(正常声明)

- 通过数组 [ ] 解构进行赋值

- 转为数组

- 通过对象 { } 解构进行赋值

- 转为对象

- 优点

- 两个数交换时直接[x,y]=[y,x]

- 可同时返回多个 return 值

- 传参时不用考虑传参的顺序,{}内的顺序随意

  - { age , sex, name }

- 函数传入的参数可以带有默认值

  - { name, sex=555,age=0}

  - 有时函数在我不传某个参数时候需要一个默认值,以此来解决问题

- 模板字符串

- 两个反双引号 \` \`

- 内容之中使用\${ } 来表示字符串中的变量

- 展开运算符

- ... 展开运算符

- 可以将数组展开以数字形式

- 将伪数组以数组的方式展开

### ECMA6 新增方法

- 将伪数组转为数组

- ...伪数组

- Arry.form(伪数组)

- 官方方法,通过委托实现

  - Arry.prototype.slice.call( 伪数组,0 )

- Object

- `Object.keys( )` 以数组的形式返回对象的属性

- `Object.values( )` 以数组的形式返回对象的值

- `Objict.assign(z,x,c,v,b`) 对象合并之后并入第一个,浅拷贝内部的数组对象只会拷贝地址

- 新增数组方法

- .find()

  - 查找符合条件的元素,只会输出第一个

- .findIndex ( ) 产找符合条件的元素的下标,返回第一个

- .conpyWithin( x,y,z )

  - x 需要赋值的开始位置

  - y 复制的开始位置

  - z 复制的结束位置(不包括)

  - xyz 均为下标 此方法影响原数组

- 不影响原数组

- 深拷贝

- 对象 1=JSON.parse(JSON.stringify( 对象 1))

- 通过递归实现

  > - //使用递归的方式实现数组、对象的深拷贝
  >
  > function deepClone1(obj) {  
  >  //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
  > var objClone = Array.isArray(obj) ? [] : {};  
  >  //进行深拷贝的不能为空，并且是对象或者是  
  >  if (obj && typeof obj === "object") {  
  >  for (key in obj) {  
  >  //判断 obj 中是否有 key 这个键  
  >  if (obj.hasOwnProperty(key)) {  
  >  if (obj[key] && typeof obj[key] === "object") {  
  >  objClone[key] = deepClone1(obj[key]);  
  >  } else {  
  >  objClone[key] = obj[key];  
  >  }  
  >  }  
  >  }  
  >  }  
  >  return objClone;  
  >  }

- Set

- 声明

  - let set=new Set()

- 赋值

  - set.add( )

  - let set= new Set( [ 1,2,3,'str' ] )

- 方法

  - set.key() 返回键名的遍历器

  - set.values() 返回键值的遍历器

  - set.entries() 返回键值对的遍历器

  • [ key,value] of set.entries() 输出 keyvalue

  • item of set.entries() 输出 数组形式[key,value]

- key=value

  - 集合内不会有相同的值出现

  • 数组去重

  • 1. new Set( arr ) 数组转换为集合

  • 2. ...new Set( arr ) 集合拆分展开

  • [...new Set( arr )] 进行数组解构转为数组

- Map

- 声明 let map= new Map();

- 赋值

  - map.set('key', 'value' )

  - let map = new Map([  
    ['name', '张三'],  
    ['title', 'Author']  
    ]);

- 获取单个值 map.get('key') 通过键直接指向值

- 便利 for of 通过 key 可直接遍历出键值结构(数组形式输出)

- 遍历方法

- 数组

  - for

  - forEach

  - forin

  - forof

- 对象

  - forin

- Promis

```var state = 0;
   new Promise(function(resolve, reject){
   if(state == 1){
   resolve("成功");
   }else{
   reject("失败");
   }
   }).then(function(msg){
   console.log("then：" + msg);
   }).catch(function(msg){
   console.log("catch：" + msg);

   })
```

- 其中 resolve 和 reject 都是函数调用 resolve 代表正常,reject 时出现异常时调用的,可以只写一个

  - 调用 resolve 时执行 then(........)
