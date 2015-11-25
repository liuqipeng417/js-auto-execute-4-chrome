auto-execute : 打开一个网页，自动执行预设的脚本
------------------------------------------
### 依赖
* chrome browser
* Zepto

### 使用
1. 打开chrome browser,在地址栏中输入chrome://extensions/
2. 在extensions页面勾选Developer mode
3 .在extensions页面点击Load unpacked extensions,选中此文件夹
4. 假如改变了js文件夹中文件请重新加载扩展

### 自定义脚本添加规则
1. 脚本命名为当前网页的url(不含'?'后数据以及后缀名,并将所有'/'替换成'&')加上js后缀，比如www.baidu.com/test.html变成www.baidu.com&test.js
2. 脚本要放在解压目录的site-js目录下

### 自定义脚本示例
复制*site-js*目录下的*template.js*并命名为*www.baidu.com.js*

template.js
```javascript
+function ($) {
    //your script goes here,use $ like you use jQuery
}(Zepto);
```

www.baidu.com.js
```javascript
+function ($) {
    //#kw是百度的搜索框
    $("#kw").val("Good good study,day day up !");
}(Zepto);
```
