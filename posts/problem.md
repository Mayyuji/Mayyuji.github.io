---
title: 工作中遇到的一些问题
date: '2025-03-26'
categories:
  - Notes

tags:
  - JavaScript
  - Vue
  - Element
  - npm
---

> 确认事件触发 @onConfim="aaa()"

> vue 打印插件 vue-print-nb 
>
> + v-print  id 或是printObj 对象

> // 图片转base64
>
> ```js
> export const getBase64 = (file) => {
>   return new Promise(function (resolve, reject) {
>     const reader = new FileReader();
>     let imgResult = "";
>     reader.readAsDataURL(file);
>     reader.onload = function () {
>       imgResult = reader.result;
>     };
>     reader.onerror = function (error) {
>       reject(error);
>     };
>     reader.onloadend = function () {
>      resolve(imgResult);
> 	};
>   });
> }
> ```

> #####  文件下载
>
> ```javascript
> export const download = (data, name) => {
>   const blob = new Blob([data]);
>   const fileName = name;
>   if ('download' in document.createElement('a')) { // 非IE下载
>     const elink = document.createElement('a');
>     elink.download = fileName;
>     elink.style.display = 'none';
>     elink.href = URL.createObjectURL(blob);
>     document.body.appendChild(elink);
>     elink.click();
>     URL.revokeObjectURL(elink.href); // 释放URL 对象
>     document.body.removeChild(elink);
> 
>   } else { // IE10+下载
>     navigator.msSaveBlob(blob, fileName);
>   }
> 
> ```

> 文件流下载 请求加 `responseType: 'blob',`

> 对象添加属性 `Object.assign()`

> 打印 调整页面大小 zoom 属性

> 弹窗 出现显示校验 
>
> ```javascript
> this.$refs["staffform"].clearValidate(); 
> ```

> ##### 其他格式转布尔值
>
> ```javascript
> function parseBoolean(string) {
>   switch (String(string).toLowerCase()) {
>     case "true":
>     case "1":
>     case "yes":
>     case "y":
>       return true;
>     case "false":
>     case "0":
>     case "no":
>     case "n":
>       return false;
>     default:
>       //you could throw an error, but 'undefined' seems a more logical reply
>       return undefined;
>   }
> }
> ```

> ————————————   长横线

>  ##### eslint 校验相关 
>
> 段落内关闭 `/* eslint-diable*/ some code /* eslint-enable `
>
> 关闭当前行校验 `balabalabalbal // eslint-disable-line`
>
> 关闭下一行校验
>
> ```javascript
> //eslint-disable-next-line
> some code 
> ```
>
> 关闭整个文件校验 `/* eslint-disable*/`

> element使用事件修饰符后边要加   `@keyup.enter.native`   element进行封装直接用不起作用

> 表格编辑表单自动获取焦点问题: ref 需要根据每行单独设置 `:ref="'inputref' + scoped.$index"`
>
> 获取调用时:   `this.$refs[`inputref${scoped.$index + 1}`].focus()`

> element 表格内删除二次确认框不显示,添加:ref="`popover-${row.index}`" 唯一ref标记

>  

> css   `initial` 关键字用于设置 CSS 属性为它的默认值，可作用于任何 CSS 样式
>
> css  `inherit` 继承父级的可继承css属性

> ```javascript
> this.$refs['tabledialog'].bodyWrapper.scrollTop =    this.$refs['tabledialog'].bodyWrapper.scrollHeight - 250
> // 滚动方法
> ```

> 数字字符串转纯数字数组  `str.split(',').map(Number)`

>  表格渲染 部分数据为刷新 请求前先清空数据请求后重新赋值,this.$forceUpdate, this.$set()

> 路由传值传true false 时会被转换为字符串 

> 笛卡尔积实现商品规格
>
> ```js
> export function cartesianProductOf(...args) {
>   return args.reduce(
>     (total, current) => {
>       let ret = [];
>       total.forEach(a => {
>         current.forEach(b => {
>           ret.push(a.concat([b]));
>         });
>       });
>       return ret;
>     },
>     [[]]
>    );
>    }
>   cartesianProductOf(['红色','黑色'],['衣服','裤子'],['L','M'])
> ```

> <p style="color: black">this.$emit()出发事件额外传入其他参数 父级组件  @input="inChange(arguments,parameter2 )"</p>

#### 三级路由缓存

2018年就有相关提问，最后似乎作者似乎也没有把这个问题解决？好像也不怎么更新维护了
最近折腾这个问题提供一个方案：
1.**src/store/modules/tagsView.js**中修改ADD_CACHED_VIEW方法，将二级菜单加入缓存

```
ADD_CACHED_VIEW: (state, view) => {
    if (state.cachedViews.includes(view.name)) return;
    const { matched, meta, name } = view;
    if (!meta.noCache) {
      if (matched.length > 2) {
        //路由层级大于2时，将父级也加入cachedViews
        for (let i = 1; i < matched.length; i++) {
          if (!state.cachedViews.includes(matched[i].name)) {
            state.cachedViews.push(matched[i].name);
          }
        }
      } else {
        state.cachedViews.push(name);
      }
    }
  }
```

2.要缓存三级菜单的父级vue自己包一层`<keep-alive></keep-alive>`，确保`include`数组包含三级菜单`name`

```
<template>
  <div class="page-padding">
    <keep-alive :include="cachedViews">
      <router-view :key="key"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "记得要填写name",
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    },
    key() {
      return this.$route.path;
    },
  },
};
</script>
```

> github 加后缀1s在线编辑

> 数组扁平化 
>
> ```
> //使用 Infinity，可展开任意深度的嵌套数组
> var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
> arr4.flat(Infinity);   toString()
> ```

> scroll-behavior: smooth

> 数组去空值 this.value.filter(item => item !== null)

> 导入
>
> ```vue
> <el-upload class="filter-item" action :show-file-list="false" :http-request="importData" accept=".xlsx,.xls">
>     <el-button type="primary" plain icon="el-icon-upload2">导入</el-button>
> </el-upload>
> ```
>

> 简单递归
>
> ```javascript
> recursion(data, deptidList) {
>    const rev = (data, deptidList) => {
>      data.map(m => {
>        m.participate = true
>        deptidList.map(list => {
>          if (list === m.deptId) {
>            m.participate = false
>          } else if (m.children) {
>            rev(m.children, deptidList)
>          }
>        })
>      })
>    }
>    rev(data, deptidList)
>  },
>      
>      const rev = (data) => {
>         for (let index = 0; index < data.length; index++) {
>           if (data[index].isEnableDict === 0) {
>             data.splice(index, 1)
>             index--
>           } else if (data[index].children) {
>               rev(data[index].children)
>           }
>         }
>         }
>         rev(result.data)
> ```
>
> 

#####  GIT

> 撤销commit 并保留修改的数据
>
> git reset --soft 5faf5edf0c90a272ebc8   撤回内容到暂存状态
>
> git reset --mixed 5faf5edf0c90a272ebc8   撤回内容到未add状态

##### 判断数字字符串

> if (newval !== '' && !isNaN(Number(newval))) { true} else { false }

#####  扁平转树
> ```javascript
    return _arr.map(item => {
        item.children = _arr.filter(v => v.pid === item.id);
        return item;
    }).filter(item => !item.pid);
}

##### 字符串转数字

> const a =  '17856246541' ;   const b = +a 

#####  文本复制

> navigator.clipboard.writeText(TEXT).then( () => { 'success' } )

| name | age  |
| :---: | ---- |
|      |      |

#####  el-input-number

> 表单套表格回显有问题使用 elinput不会触发
>
> : /* 普通IE浏览器 样式清除 */
>
> input::-webkit-outer-spin-button,
>
> input::-webkit-inner-spin-button {
>
>  -webkit-appearance: none !important;
>
> }
>
> /* 火狐浏览器样式清除 */
>
> input[type="number"] {
>
>  -moz-appearance: textfield;
>
> }
>
> \<el-input type="number" \>

##### element 级联选择器末级多端 `el-cascader`

> ``` html
> :popper-class="isOnlyChild? 'onlychild': ''" 
> <style>
>   .onlychild 
>       .el-cascader-panel 
>       .el-cascader-menu li[aria-haspopup="true"] .el-checkbox{
>           display:none;
>         }
> </style>
> ```

#####  element 表单回车提交

> @submit.native.prevent="fn()"            
>
> <el-button native-type="submit">搜索</el-button>

#####  ES6 判空

> if((value??'') !== ''){  //... }

#####  实现打字效果

```html
<div class="typing">
    <div class="typing-effect">Typing effect for text</div>
</div>
```

```css
.typing {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.typing-effect {
  width: 22ch;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
  animation: typing 2s steps(22), effect .5s step-end infinite alternate;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes effect {
  50% {
    border-color: transparent;
  }
}
```

#####  Table内表单校验

```vue
<el-form ref="ruleForm" :model="formData" :rules="ruleForm">
    <el-table :data="formData.tableDate">
    	<el-table-column label="数量" min-width="120" align="center">
       <template slot-scope="scoped">
          <el-form-item :rules="ruleForm.num" :prop="'tableDate.' + scoped.$index + '.num'">
             <el-input-number v-model="scoped.row.num"></el-input-number>
          </el-form-item>
        </template>
     </el-table-column>
    </el-table>
<el-form>
    ...data
```

循环嵌套校验 :prop="'giftList.' + index + '.goodList.' + scoped.$index + '.num'"

#####  重置表单数据

this.formData = this.$options.data().formData
##### 虚拟表格渲染
umy-ui 虚拟表格渲染
#####  生成随机字符串

> Math.random().toString(36).substr(2)

##### mask-image, mix-blend-mode, background-clip

##### 空值判断

```javascript
if((value??'') !== ''){
  //...
}
```

##### 识别文本内的换行\n
```css
white-space: pre-line
```

#####  vue2使用了deep还是监听不到props的值

<p style="color: red">是不是组件外层使用了`v-if`</p>
