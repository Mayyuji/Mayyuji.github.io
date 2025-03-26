---
title: 0元购,将网站解析到阿里云域名
date: '2023-06-01'
description: 如何把github.io解析到对应服务上域下的步骤
categories:
  - Diary
tags:
  - Service
---
### 前期准备
  + 一个已经搭建完成的GitHub.io
  +  [阿里云](https://wanwang.aliyun.com/domain/1yuan) (要想白嫖或一元购必须是新人) 


### 1.域名获取
+ [阿里云](https://wanwang.aliyun.com/domain/1yuan),输入查询想要的域名(可选后缀.top,.xyz.love,.store)
+ 选择一个喜欢的域名点击去结算,如果第一次使用可能需要添加 信息模板 正常添加即可
+ 添加完成之后点击立即购买即可(购买后需要一定的事件审核你的信息,会有短信通知)
+ 等待相关审核通过之后 去[域名控制台](https://dc.console.aliyun.com/next/index)即可查看域名信息


#### 2.github配置
+ 在根目录添加`CNAME`文件,内容为你域名,注意不需要前缀Http://和www即aaa.xxx
+ 点击项目的`setting` --> `Pages` --> 找到`Custom domain`如果未填写需要手动填写


#### 3.在阿里云[域名控制台](https://dc.console.aliyun.com/next/index)中添加解析
+ 打开CMD ping你现在的xxx.github.io 并复制响应IP
+ 打开 阿里云[域名列表](https://dc.console.aliyun.com/next/index#/domain-list/all) 点击解析设置页面
+ 点击新手引导 
    - 选择`将网站域名解析到服务器IPv4地址`
    - `对应设置“@”主机记录`和`对应设置“www”主机记录`
    - 将之前复制的IP粘贴到输入框内
    - 确定耐心等待即可(10min-48h不等)


#### 4.欢乐时光
+ 点击解析设置页面的`域名检测`点击`开始诊断`当显示 域名解析检测正常，解析已生效
+ 欢乐时光就要开始了
