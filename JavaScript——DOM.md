# DOM：

## 获取元素：

### getElementById()获取元素：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="time">11111</div>
    <script>
        //1、因为我们文档页面从上往下加载，所以先得有标签所以我们script写到标签的下面
        //2、get 获得 element 元素 by 通过 驼峰命名法
        //3、参数 id 是大小写敏感的字符串
        //4、返回的是一个元素对象
        var timer = document.getElementById("time"); //字符串 里面记得加引号
        console.log(timer);
        console.log(typeof timer);
        //5、console.dir 打印我们返回的元素对象 更好的查看里面的属性和方法
        console.dir(timer);
    </script>
</body>

</html>
```

### getElementsByTagName()获取某类元素：根据标签名获取：

使用getElementByTagName()方法可以返回带有指定标签名的集合

​	语法：

```javascript
document.getElementsByTayName('标签名');
```

注意：

​		1、因为得到的是一个对象的集合，所以我们想要操作里面的元素就需要遍历。

​		2、得到元素对象是动态的。（内容变了，JS不需要改，页面也随之改动）



还可以获取某个元素（父元素）内部所有指定标签名的子元素

```javascript
element.getElementsByTagName('标签名');
```

注意：

​		父元素必须是单个对象（必须指明是哪一个元素对象），获取的时候不包括父元素自己。如：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul>
        <li>知否知否，应是等你好久1</li>
        <li>知否知否，应是等你好久2</li>
        <li>知否知否，应是等你好久3</li>
        <li>知否知否，应是等你好久4</li>
        <li>知否知否，应是等你好久5</li>
    </ul>
    <ol>
        <li>错位时空1</li>
        <li>错位时空2</li>
        <li>错位时空3</li>
        <li>错位时空4</li>
    </ol>
    <script>
        //错误写法：
        var ol = document.getElementsByTagName('ol'); //[ol]
        console.log(ol.getElementsByTagName('li'));//没有指定ol里面进哪个
		//正确写法：
        var ol = document.getElementsByTagName('ol'); //[ol]
        console.log(ol[0].getElementsByTagName('li'));

//以上的写法麻烦，可以在ol里面添加id="ol"，因为id是唯一的，这样可以轻松解决！
//ol中这样写：<ol id="ol">
//在Js这样写：var ol=document.getElementById('ol');
		//  console.log(ol.getElementByTagName('li'));
	</script>
</body>

</html>
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul>
        <li>知否知否，应是等你好久1</li>
        <li>知否知否，应是等你好久2</li>
        <li>知否知否，应是等你好久3</li>
        <li>知否知否，应是等你好久4</li>
        <li>知否知否，应是等你好久5</li>
    </ul>
    <ol>
        <li>错位时空1</li>
        <li>错位时空2</li>
        <li>错位时空3</li>
        <li>错位时空4</li>
    </ol>
    <script>
        //1、返回的是 获取过来元素对象的集合 以伪数组的形式存储的
        var lis = document.getElementsByTagName('li');
        console.log(lis);
        console.log(lis[0]);
        //2、我们想要依次打印里面的元素对象我们可以采取遍历的形式
        for (var i = 0; i < lis.length; i++) {
            console.log(lis[i]);
        }
        //3、如果页面中只有一个li 返回的还是伪数组的形式
        //4、如果页面中没有这个元素 返回的是空的伪数组的形式
        //5、element.getElemnetsByTagName('标签名');父元素必须是指定的单个元素
        //5、这里是getElemnetsByTagName()而不是getElemnetsByTagNameNS()————————！！！！！！！！！！！！！！！！！！！！！！切记看清楚！！！！！
        var ol = document.getElementsByTagName('ol'); //[ol]
        console.log(ol[0].getElementsByTagName('li'));
    </script>
</body>

</html>
```

### H5新增获取元素方式（PC端考虑兼容性）：

​	语法：

```javascript
1.document.getElementsByClassName('类名');//根据类名返回元素对象集合
2.document.querySelector('选择器');       //根据指定选择器返回第一个元素对象
3.document.querySelectorAll('选择器');    //根据指定选择器返回
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="box">盒子</div>
    <div class="box">盒子</div>
    <div id="nav">
        <ul>
            <li>首页</li>
            <li>产品</li>
        </ul>
    </div>
    <script>
        //1、getElementByClassName 根据类名获得某些元素集合
        var boxs = document.getElementsByClassName('box');
        console.log(boxs);
        //2、querySelector 返回指定选择器的第一个元素对象  切记  里面的选择器要加符号 .box #nav 标签选择器本身没符号所以用 li
        var firstbox = document.querySelector('.box');
        console.log(firstbox);
        var nav = document.querySelector('#nav');
        console.log(nav);
        var li = document.querySelector('li'); //返回第一个li
        console.log(li);
        //3、querySelectorAll()返回指定选择器的所有元素对象集合
        var allBox = document.querySelectorAll('.box');
        console.log(allBox); //跟上面的getElementByClassName一样，但比它简单一点！
        var lis = document.querySelectorAll('li');
        console.log(lis);
    </script>
</body>

</html>
```

##### 注意：不考虑兼容性用document.querySelector好一些！！！！！！！！！

### 获取特殊元素（body、html）：

获取body元素：

```javascript
1.document.body    // 返回body元素对象
```

获取html元素：

```javascript
1.document.documentElement    // 返回html元素对象
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="box">盒子</div>
    <div class="box">盒子</div>
    <div id="nav">
        <ul>
            <li>首页</li>
            <li>产品</li>
        </ul>
    </div>
    <script>
        //1、获取body 元素
        var bodyEle = document.body;
        console.log(bodyEle);
        console.dir(bodyEle);
        //2、获取html 元素
        //var hr=htmlEle = document.html;
        var htmlEle = document.documentElement;
        console.log(htmlEle);
    </script>
</body>

</html>
```

## 事件基础：

事件概述：

​		JavaScript使我们有能力创建动态页面，而事件是可以被JavaScript侦测到的行为。

​		简单理解：触发——响应机制。

​		网页中的每个元素都可以产生某些可以触发JavaScript的事件，例如：我们可以在用户点击某按钮时产生一个事件，然后去执行某些操作。

### 事件三要素：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="btn">唐伯虎</button>
    <script>
        //点击一个按钮，弹出对话框
        //1、事件是由三部分组成： 事件源  事件类型  事件处理程序      我们也称为事件三要素
        //(1) 事件源：事件被触发的对象   谁？——按钮
        var btn = document.getElementById('btn');
        //(2) 事件类型：如何触发  什么事件  比如：鼠标点击(onclick) 还是鼠标经过 还是键盘按下
        //(3) 事件处理程序：通过一个函数赋值的方式 完成
        btn.onclick = function() {
            alert('点秋香');
        }
    </script>
</body>

</html>
```

### 执行事件的步骤：

​		1、获取事件源

​		2、注册事件（绑定事件）

​		3、添加事件处理程序（采取函数赋值形式）

| 鼠标事件    | 触发条件         |
| ----------- | ---------------- |
| onclick     | 鼠标点击左键触发 |
| onmouseover | 鼠标经过触发     |
| onmouseout  | 鼠标离开触发     |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动触发     |
| onmouseup   | 鼠标弹起触发     |
| onmousedown | 鼠标按下触发     |

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>123</div>
    <script>
        // 执行事件步骤
        // 点击div 控制台输出：我被选中了
        // 1、获取事件源
        var div = document.querySelector('div');
        // 2、绑定事件  注册事件
        // div.onclick
        // 3、添加事件处理程序
        div.onclick = function() {
            console.log('我被选中了！');
        }
    </script>
</body>

</html>
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button>按钮</button>
    <input type="text" value="输入内容">
    <script>
        // 1、获取元素
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        // 2、注册事件  处理程序
        btn.onclick = function() {
            //input.innerHTML = '点击了';  innerHTML 是普通盒子 比如 div 标签里面的内容
            // 表单里面的值 文字 内容是通过 value 来修改的
            input.value = '被点击了';
            // 如果想要某个表单被禁用 不能再点击 disabled   我们想要这个按钮 button禁用
            // btn.disabled = true;
            this.disabled = true;
            // this 指向的是事件函数的调用者
        }
    </script>
</body>

</html>
```

## 操作元素（核心）：

​		JavaScript的DOM操作可以改变网页内容、结构和样式，我们可以利用DOM操作元素来改变元素里面的内容、属性等。注意：以下都是属性。

### 改变元素内容：

```javascript
element.innerText			//  非标准
```

​	从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉。

```javascript
element.innerHTML			//  标准的 实际开发经常用到的！
```

​	起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div,
        p {
            width: 300px;
            height: 30px;
            line-height: 30px;
            color: #fff;
            background-color: pink;
        }
    </style>
</head>

<body>
    <button>显示当前系统时间</button>
    <div>某个时间</div>
    <p>123</p>
    <script>
        // 当我们点击了按钮    div里面的文字会发生变化
        // 1、获取元素
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        // 2、注册事件
        btn.onclick = function() {
            // div.innerText = '2019-6-6';
            div.innerText = getDate();
        }

        function getDate() {
            var date = new Date();
            //console.log(date.getFullYear()); // 返回当前时期的年
            //console.log(date.getMonth()+1); // 返回月份  要加1
            //console.log(date.getDate()); // 返回的是 几号
            //console.log(date.getDay()); // 
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var dates = date.getDate();
            var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            var day = date.getDay();
            //console.log('今天是：' + year + '年' + month + '月' + dates + '日' + arr[day]);

            return '今天是：' + year + '年' + month + '月' + dates + '日' + arr[day]; //后加！
        }
        // 我们元素可以不用添加事件
        var p = document.querySelector('p');
        p.innerText = getDate();
    </script>
</body>

</html>
```

### 修改常见元素属性：

```
1.innerText、innerHTML 改变元素内容
2.src、href
2.id、alt、title
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id=tu1>图1</button>
    <button id=tu2>图2</button>
    <img src="CSS作业—flex布局/banner3.jpg" alt="" title="11">
    <script>
        // 修改元素属性  src
        // 1、获取元素
        var tu1 = document.getElementById('tu1');
        var tu2 = document.getElementById('tu2');
        var img = document.querySelector('img');
        // 2、注册事件
        tu2.onclick = function() {
            img.src = "CSS作业—flex布局/作业素材/images/logo.png";
            img.title = '图2思密达';
        }
        tu1.onclick = function() {
            img.src = "CSS作业—flex布局/banner3.jpg";
            img.title = '图1小欧巴';
        }
    </script>
</body>

</html>
```

根据时间不同切换不同页面：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img {
            width: 300px;
        }
    </style>
</head>

<body>
    <img src="" alt="">
    <div>上午好</div>
    <script>
        // 思路: 根据系统不同时间判断，所以需要用到日期内置和对象  
        // 利用多分支语句来设置不同的照片  需要一个图片，并且根据时间修改图片，就需要用到操作元素src属性  
        // 需要一个div元素，显示不同问候语，修改元素内容即可

        // 1、获取元素
        var img = document.querySelector('img');
        var div = document.querySelector('div');
        // 2、得到当前的小时数
        var date = new Date();
        var h = date.getHours();
        // 3、判断小时数改变图片和文字信息
        if (h < 12) {
            img.src = "图片/1.jpg";
            div.innerHTML = '亲，上午好，好好写代码！';
        } else if (h < 18) {
            img.src = "图片/2.jpg";
            div.innerHTML = '亲，下午好，好好休息吧！';
        } else {
            div.innerHTML = '亲，晚上好，晚上就不给看图片咯！';
        }
    </script>
</body>

</html>
```

### 修改表单元素属性：

​		利用DOM可以操作如下表单元素的属性

表单专属属性：用innerHTML不起作用！！！

```
type、value、checked、selected、disabled
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button>按钮</button>
    <input type="text" value="输入内容">
    <script>
        // 1、获取元素
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        // 2、注册事件  处理程序
        btn.onclick = function() {
            //input.innerHTML = '点击了';  innerHTML 是普通盒子 比如 div 标签里面的内容
            // 表单里面的值 文字 内容是通过 value 来修改的
            input.value = '被点击了';
            // 如果想要某个表单被禁用 不能再点击 disabled   我们想要这个按钮 button禁用
            // btn.disabled = true;
            this.disabled = true;
            // this 指向的是事件函数的调用者
        }
    </script>
</body>

</html>
```

##### 案例：仿京东显示隐藏密码明文：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>仿京东显示密码案例</title>
    <style>
        .box {
            width: 400px;
            border-bottom: 1px solid #ccc;
            margin: 100px auto;
            position: relative;
        }
        
        .box input {
            width: 370px;
            height: 30px;
            border: 0;
            outline: none;
            /* ???????? */
        }
        
        .box .sanjiao {
            position: absolute;
            top: 7px;
            right: 10px;
            width: 10px;
            height: 10px;
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            transform: rotate(45deg);
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="sanjiao" id="eye"></div>
        <!--本应用img插入图片奈何没偷到图片，只能用个div凑合一下了-->
        <input type="password" name="" id="pwd">
        <!--一个表单里只能有一个ID -->
    </div>
    <script>
        // 1、获取元素
        var eye = document.getElementById('eye');
        var pwd = document.getElementById('pwd');
        // 2、注册事件  绑定事件
        var flag = 0;
        eye.onclick = function() {
            // 点击一次之后，flag一定发生变化
            // 算法：
            if (flag == 0) {
                pwd.type = 'text';
                flag = 1;
                eye.rotate = 180;
            } else {
                pwd.type = 'password';
                flag = 0;
            }
        }
    </script>
</body>

</html>
```

### 修改元素样式属性：

​		我们可以通过JS修改元素的大小、颜色、位置等样式。

```
1.element.style				// 行内样式操作——如果样式较少  或者功能简单的情况下使用
2.element.className			// 类名样式操作
```

注意：

​		1、JS 里面的样式采取驼峰命名法  比如：fontSize、backgroundColor

​		2、JS 修改 style 样式操作，产生的是行内样式，CSS权重比较高

​		3、如果样式修改较多，可以采取操作类名方式更改元素样式

​		4、class因为是个保留字，因此使用className来操作类名属性

​		5、className 会直接更改元素的类名，会覆盖原先的类名！！！！！！！！！！！！

### 1、使用element.style修改元素样式属性：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
</head>

<body>
    <div>
    </div>
    <script>
        // 1、获取元素
        var div = document.querySelector('div');
        // 2、注册事件  处理程序
        div.onclick = function() {
            // div.style 里面的属性采取 驼峰命名法
            this.style.backgroundColor = 'purple';
            this.style.width = '250px';
        }
    </script>
</body>

</html>
```

##### 案例：仿京东关闭二维码：

​		1、核心思路：利用样式的显示和隐藏完成，display:none 隐藏元素 display:block 显示元素

​		2、点击按钮，就让这个二维码盒子隐藏起来即可

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            position: relative;
            width: 74px;
            height: 88px;
            border: 1px solid #ccc;
            margin: 100px auto;
            font-size: 12px;
            text-align: center;
            color: #f40;
            /* 默认：display: block; */
            /* display:none 隐藏元素 display:block 显示元素 */
        }
        
        .box img {
            width: 60px;
            margin-top: 5px;
        }
        
        .box .close-btn {
            position: absolute;
            top: -1px;
            left: -16px;
            width: 14px;
            height: 14px;
            border: 1px solid #ccc;
            line-height: 14px;
            font-family: Arial, Helvetica, sans-serif;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div class="box">
        淘宝二维码
        <img src="图片/京东二维码.png" alt="">
        <i class="close-btn">×</i>
        <script>
            // 1、获取元素
            var btn = document.querySelector('.close-btn');
            var box = document.querySelector('.box');
            // 2、注册事件  程序处理
            btn.onclick = function() {
                box.style.display = 'none';//将display属性改为none隐藏元素
            }
        </script>
    </div>
</body>

</html>
```

##### 仿京东显示隐藏文本框内容案例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>仿京东显示隐藏文本框内容案例</title>
</head>

<body>
    <input type="text" value="手机">
    <script>
        // 1、获取元素
        var text = document.querySelector('input');
        // 2、注册事件  获得焦点事件  onfocus
        text.onfocus = function() {
                if (this.value === '手机') {
                    this.value = '';
                }
                // 获得焦点需要把文本框里面的文字颜色变黑
                this.style.color = '#333';
            }
            // 3、注册事件  失去焦点事件  onblur
        text.onblur = function() {
            if (this.value === '') {
                this.value = '手机';
            }
            // 失去焦点需要把文本框里面的文字颜色变浅色
            this.style.color = '#999';
        }
    </script>
</body>

</html>
```

### 2、使用className修改元素样式属性：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
        }
        
        .class {
            background-color: purple;
            color: #fff;
            font-size: 25px;
            margin-top: 100px;
        }
    </style>
</head>

<body>
    <div class="first">文本</div>
    <script>
        // 1、使用 element.style 获得修改样式属性  如果样式较少  或者功能简单的情况下使用
        var test = document.querySelector('div');
        test.onclick = function() {
            // this.style.backgroundColor = 'purple';
            // this.style.height = '300px';
            // this.style.color = 'white';

            // 让我们当前元素的类名改为了 change  相当于将我们的div添加一个类名 class="change"
            // 2、我们可以通过 修改元素的className更改元素的样式 适合于样式较多或者功能复杂的情况
            // 3、如果想要原先的类名，我们可以这么做 多类名选择器
            // this.className = 'class';
            this.className = 'first change';
        }
    </script>
</body>

</html>
```

##### 案例：密码框格式提示错误信息：仿新浪注册页面：

​		用户如果离开密码框，里面输入个数不是6~16，则提示错误信息，否则提示输入正确信息。

案例分析：

​			1、首先判断的事件是表单失去焦点 onblur

​			2、如果输入正确则提示正确的信息颜色为绿色小图标变化

​			3、如果输入不是6到16位，则提示错误信息颜色为红色小图标变化

​			4、因为里面变化样式较多，我们采用calssName修改样式

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 600px;
            margin: 100px auto;
        }
        
        .message {
            display: inline-block;
            font-size: 12px;
            color: #999;
            background: url(图片/蓝点.png) no-repeat left center;
            padding-left: 20px;
        }
        
        .wrong {
            color: red;
            background-image: url(图片/红点.png);
        }
        
        .right {
            color: green;
            background-image: url(图片/对号1.png);
        }
    </style>
</head>

<body>
    <div class="register">
        <input type="password" class="ipt">
        <p class="message">请输入6~16位密码</p>
    </div>
    <script>
        // 1、首先判断的事件是表单失去焦点 onblur
        // 2、如果输入正确则提示正确的信息颜色为绿色小图标变化
        // 3、如果输入不是6到16位，则提示错误信息颜色为红色小图标变化
        // 4、因为里面变化样式较多，我们采用calssName修改样式

        // 1、获取元素
        var ipt = document.querySelector('.ipt');
        var message = document.querySelector('.message');
        // 2、注册事件  失去焦点
        ipt.onblur = function() {
            // 根据表单里面值的长度  ipt.value.length
            if ((this.value.length > 0) && (this.value.length < 6 || this.value.length > 16)) {
                message.className = 'message wrong';
                message.innerHTML = '您输入的位数不对要求6~16位';
            }
            // 当用户将密码删除时还能显示刚开始时不输入时的提示
            else if (this.value.length == 0) {
                message.className = 'message';
                message.innerHTML = '请输入6~16位密码';
            } else {
                message.className = 'message right';
                message.innerHTML = '您输入的正确';
            }
        }
    </script>
</body>

</html>
```

### 操作元素总结以及作业：

​		1、世纪佳缘  用户名  显示隐藏内容

​		2、京东关闭广告（直接隐藏即可）

​		3、新浪下拉菜单（微博即可）

​		4、开关灯案例（一个按钮管黑白两个界面切换）

##### 1、世纪佳缘 用户名 案例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        input {
            width: 120px;
            height: 23px;
            line-height: 23px;
            padding: 0 4px 0 10px;
            border: 1px #d9d9d9 solid;
            color: #aaa;
            float: left;
            margin: 0 0 0 8px;
            display: inline;
            outline: none;
            font: 12px/1.5 tahoma, arial, \5b8b\4f53;
        }
    </style>
</head>

<body>
    <input type="text" class="one" value="邮箱/ID/手机号">
    <script>
        // 1、获取元素
        var ipt = document.querySelector('input');
        ipt.onfocus = function() {
            if (this.value === '邮箱/ID/手机号') {
                this.value = '';
            }
            // 输入时字体为灰色
            this.style.color = '#aaa';
            // 光标定上时边框为粉色
            this.style.borderColor = 'pink';
        }
        ipt.onblur = function() {
            if (this.value === '') {
                this.value = '邮箱/ID/手机号';
                // 字体灰色
                this.style.color = '#aaa';
            } else if (this.value != '') {
                // 字体黑色
                this.style.color = 'black';
            }
            this.style.borderColor = '#d9d9d9';
        }
    </script>
</body>

</html>
```

### 排他思想：

​	如果有同一个元素，我们想要某一个元素实现某种样式，需要用到循环的排他思想算法：

​		1、所有元素全部清除样式（干掉其他人）

​		2、给当前元素设置样式（留下我自己）

​		3、注意顺序不能颠倒，首先干掉其他人，再设置自己

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        button {
            cursor: pointer;
        }
    </style>
</head>

<body>
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>
    <button>按钮4</button>
    <button>按钮5</button>
    <script>
        // 1、获取所有按钮元素
        var btns = document.getElementsByTagName('button');
        // btns得到的是伪数组  里面的每一个元素 btns[i]
        for (var i = 0; i < btns.length; i++) {
            btns[i].onclick = function() {
                // (1) 我们先把所有的按钮背景颜色去掉    干掉所有人
                for (var i = 0; i < btns.length; i++) {
                    btns[i].style.backgroundColor = '';
                }
                // (2) 然后才让当前的元素背景颜色为pink 留下我自己
                this.style.backgroundColor = 'pink';
            }
            btns[i].onblur = function() {
                    for (var i = 0; i < btns.length; i++) {
                        btns[i].style.backgroundColor = '';
                    }
                } // 34-38行代码为当点击按钮外的界面时按钮回到刚开始默认没点过的样式——————————————个人小插曲！
        }
        // 2、首先先排除其他人，然后才设置自己的样式 这种排除其他人的思想我们称为排他思想
    </script>
</body>

</html>
```

##### 案例：百度换肤：

​	案例分析：

​			1、这个案例练习的是给一组元素注册事件

​			2、给4个小图片利用循环注册点击事件

​			3、当我们点击了这个图片，让我们页面背景改为当前的图片

​			4、核心算法：把当前图片的src路径取过来，给body做为背景即可

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        
        body {
            background: url(图片/1.jpg) no-repeat center top;
            /* background-size: cover; */
            /* 设置背景图片的大小 */
        }
        
        ul {
            width: 420px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            /* 可设置也可不设置，高度下面的li元素自动会撑起来*/
            margin: 150px auto;
            list-style: none;
            overflow: hidden;
            background-color: #fff;
        }
        
        li {
            width: 100px;
            height: 65px;
            display: flex;
            align-items: center;
        }
        
        ul li img {
            width: 100px;
            height: 60px;
        }
    </style>
</head>

<body>
    <ul class="baidu">
        <li><img src="图片/1.jpg" alt=""></li>
        <li><img src="图片/2.jpg" alt=""></li>
        <li><img src="图片/3.jpg" alt=""></li>
        <li><img src="图片/4.jpg" alt=""></li>
    </ul>
    <script>
        // 1、获取元素
        var imgs = document.querySelector('.baidu').querySelectorAll('img'); // 准确写法  先找到baidu 再找下面的img
        // 2、循环注册事件
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].onclick = function() {
                // this.src 就是我们点击图片的路径   记住这种用法即可！！！
                // console.log(this.src);
                // 把这个路径给 body 即可
                document.body.style.backgroundImage = 'url(' + this.src + ')'; // 小心这种写法——不要漏掉符号！
            }
        }
    </script>
</body>

</html>
```

注意： this.src这种写法！！！！！！！！！！！！！！！！！！！！！！！！！！！！！

#### JavaScript中this关键字使用方法详解 ： http://www.cnblogs.com/birdshome/archive/2005/03/07/95931.html  

##### 案例：表单全选取消全选案例：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        
        .wrap table {
            margin: 100px auto;
            width: 300px;
            height: 250px;
            text-align: center;
            border: 1px solid #e6e5e5;
            border-collapse: collapse;
        }
        
        th {
            background-color: blue;
            border: 1px solid #e6e5e5;
            height: 48px;
        }
        
        tr {
            border: 1px solid #e6e5e5;
            height: 48px;
        }
        
        td {
            border-left: 1px solid #e6e6e6;
            background-color: #dfd2d2;
        }
    </style>
</head>

<body>
    <div class="wrap">
        <table>
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" id="j_cbAll">
                    </th>
                    <th>商品</th>
                    <th>价钱</th>
                </tr>
            </thead>
            <tbody id="j_tb">
                <tr>
                    <td>
                        <input type="checkbox">
                    </td>
                    <td>iPhone8</td>
                    <td>8000</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox">
                    </td>
                    <td>iPad Pro</td>
                    <td>5000</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox">
                    </td>
                    <td>iPad Air</td>
                    <td>2000</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox">
                    </td>
                    <td>Apple watch</td>
                    <td>4000</td>
                </tr>
            </tbody>
        </table>
    </div>
    <script>
        // 1、全选和取消全选：  让下面所有复选框的checked属性（选中状态） 跟随 全选按钮即可
        // 获取元素
        var j_cbAll = document.getElementById('j_cbAll'); // 全选按钮
        var j_tbs = document.getElementById('j_tb').getElementsByTagName('input'); // 下面所有的复选框
        // 注册事件
        j_cbAll.onclick = function() {
            // this.checked 它可以得到当前复选框的选中状态，如果是true 就是选中，如果是false 就是未选中
            // console.log(this.checked);
            for (var i = 0; i < j_tbs.length; i++) {
                j_tbs[i].checked = this.checked; // 也可以为'checked'
            }
        }
        for (var i = 0; i < j_tbs.length; i++) {
            j_tbs[i].onclick = function() {
                // flag 控制全选按钮是否被选中
                var flag = true;
                // 每次点击下面的复选框都要循环检查4个小按钮是否全被选中
                for (var i = 0; i < j_tbs.length; i++) {
                    if (!j_tbs[i].checked) {
                        flag = false;
                        break; //退出for循环  这样可以提高执行效率 因为只要有一个没有被选中，剩下的就无需循环判断了
                    }
                }
                j_cbAll.checked = flag;
            }
        }
    </script>
</body>

</html>
```

### 自定义属性操作：

#### 1、获取元素的属性值：

​					element.属性		获取属性值。

​					element.getAttribute('属性');

​		区别：

​				element.属性	获取内置属性值（元素本身自带的属性）

​				element.gatAttribute('属性');	主要获得自定义的属性（标准）我们程序员自定			义的属性

#### 2、设置元素的属性值：

​				element.属性= '值'				设置内置属性值

​				element.setAttribute('属性', '值');		

​	区别：

​				element.属性			设置内置属性值

​				element.setAttribute('属性');			主要设置自定义的属性（标准）

#### 3、移除元素的属性值：

​				element.removeAttribute('属性');

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="demo" index="1"></div>
    <script>
        var div = document.querySelector('div');
        // 1、获取元素的属性值
        // (1) element.属性
        console.log(div.id);
        // (2) element.getArrtribute('属性')  get得到获取  arrtribute 属性的意思   我们程序员自己添加的属性我们称为自定义属性 如：index="1"
        console.log(div.getAttribute('id'));
        console.log(div.getAttribute('index')); // 这是一种标准
        // 2、设置属性值
        // (1) elelment.属性='值'
        div.id = 'test';
        div.className = 'navs';
        // (2) element.setAttribute('属性','值');   主要针对于自定义属性
        div.setAttribute('index', '2');
        div.setAttribute('class', 'footer'); // class特殊  这里面写的就是class 不是className
        console.log(div.getAttribute('index'));
        // 3、移除属性值    removeAttribute('属性')
        div.removeAttribute('index');
        console.log(div.getAttribute('index'));
    </script>
</body>

</html>
```

#### H5自定义属性：

​	自定义属性目的：是为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中。

​	自定义属性获取是通过getAttribute('属性')获取。

​	但是有些自定义属性很容易引起歧义，不容易判断是元素的内置属性还是自定义属性。

​	H5给我们新增了自定义属性：

##### 1、设置H5自定义属性

H5规定自定义属性 data- 开头做为属性名并且赋值。

比如：<div data-index="1"></div>

或者使用 JS 设置

element.setAttribute('data-index'，2)

##### 2、获取H5自定义属性

​	1、兼容性获取	element.getAttribute('data-index'  );              在实际开发中用的比较多

​	2、H5新增 element.dataset.index  或者 element.dataset['index']   IE11才开始支持（用第二种的时候 记住 一定要加引号（单 双都可））

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div getTime="20" data-index="10" data-list-name="Andy"></div>
    <script>
        var div = document.querySelector('div');
        console.log(div.getTime);
        console.log(div.getAttribute('getTime'));
        div.setAttribute('data-time', '15');
        console.log(div.getAttribute('data-time'));
        // 使用getAttribute也可以得到命名复杂的
        console.log(div.getAttribute('data-list-name'));
        console.log(div.dataset["index"]); // 切记一定要加引号   单双都可
        // H5新增的获取自定义属性的方法 它只能获取data-开头的
        // dataset 是一个集合里面存放了所有以data开头的自定义属性
        console.log(div.dataset); // getTime不会在里面  因为getTime不是以data开头的！
        console.log(div.dataset.index);
        console.log(div.dataset.time);
        // 如果自定义属性里面有多个 - 链接的单词，我们获取的时候采取 驼峰命名法
        console.log(div.dataset.listName);
        console.log(div.dataset['listName']);
    </script>
</body>

</html>
```

## 节点操作：

### 为什么学节点操作：

获取元素通常使用两种方式：

#### 	1、利用DOM提供的方法获取元素

​			document.getElementById()

​			document.getElementByTagName()

​			document.querySelector  等

​		确定：逻辑性不强、繁琐

#### 	2、利用节点层级关系获取元素

​			利用父子兄节点关系获取元素

​			逻辑性强，但是兼容性稍差

这两种方式都可以获取元素节点，我们后面都会使用，但是节点操作更简单

### 节点概述：

​		网页中的所有内容都是节点（标签、属性、文本、注释等），在DOM中，节点使用 node 来表示。HTML  DOM 树中的所有节点均可通过 JavaScript 进行访问，所有HTML元素（节点）均可被修改，也可以创建或删除。

​		一般地，节点至少拥有 nodeType（节点类型）、nodeName（节点名称）和 nodeValue（节点值）这三个基本属性。

​	元素节点  nodeType  为1

​	属性节点  nodeType  为2

​	文本节点  nodeType  为3（文本节点包含文字、空格、换行等）

###### 我们在实际开发中，节点操作主要操作的是元素节点

### 节点层级：

​	利用DOM树可以把节点划分为不同的层级关系，常见的是父子兄层级关系。

#### 1、父级节点

```javascript
node.parentNode
```

​	parentNode属性可返回某节点的父节点，注意是最近的一个父节点

​	如果指定的节点没有父节点则返回 null

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- 节点的优点 -->
    <div>我是div</div>
    <span>我是span</span>
    <ul>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
    </ul>
    <div class="demo">
        <div class="box">
            <span class="erweima">×</span>
        </div>
    </div>
    <script>
        // 1、父节点 parentNode
        // var erweima = document.querySelector('.erweima');        以前的写法
        // var box = document.querySelector('.box');
        // console.log(box);
        var erweima = document.querySelector('.erweima'); //         现在的写法
        // erweima.parentNode;
        // 得到的是离元素最近的节点(亲爸爸)   如果找不到父节点就返回为空 null
        console.log(erweima.parentNode);
    </script>
</body>

</html>
```

#### 2、子节点

```javascript
1.	parentNode.childNodes（标准）
```

​	parentNode.childNodes 返回包含指定节点的子节点的集合，该集合为即时更新的集合

###### 注意：

​		返回值里面包含了所有的子节点，包含元素节点，文本节点等。

如果只想要获得里面的元素节点，则需要专门处理。所以我们一般不提倡使用childNodes

```javascript
//只获得元素节点的方法（利用元素节点的节点类型为1）：
var ul = document.querySelector('ul');
for (var i = 0; i < ul.childNodes.length; i++) {
    if (ul.childNodes[i].nodeType == 1) {
        // ul.childNodes[i] 是元素节点
        console.log(ul.childNodes[i]);
    }
}
```

```javascript
2.	parentNode.children（非标准）
```

​	parentNode.children是一个只读属性，返回所有的子元素节点。它只返回子元素节点，其余节点不返回（这个是我们重点掌握的）。

​	虽然children是一个非标准，但是得到了各个

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- 节点的优点 -->
    <div>我是div</div>
    <span>我是span</span>
    <ul>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
    </ul>
    <ol>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
    </ol>
    <div class="demo">
        <div class="box">
            <span class="erweima">×</span>
        </div>
    </div>
    <script>
        // DOM 提供的方法（API） 获取
        // （1）
        var ul = document.querySelector('ul');
        var lis = ul.querySelectorAll('li');
        console.log(lis);
        //  （2）
        var box = document.querySelector('ul').querySelectorAll('li');
        console.log(box);
        // 1、子节点     childNodes 所有的子节点 包含 元素节点 文本节点等等
        console.log(ul.childNodes);
        console.log(ul.childNodes[0].nodeType);
        console.log(ul.childNodes[1].nodeType);
        // 2、children  获取所有的子元素节点    也是我们实际开发常用的
        console.log(ul.children);
        console.log(document.querySelector('ul').children);
    </script>
</body>

</html>
```

##### 第一个元素和最后一个元素

```javascript
3.	parentNode.firstChild
```

​	firstChild 返回第一个子节点，找不到则返回 null。同样，也是包含所有的节点。

```javascript
4.	parentNode.lastChild
```

​	lastChild 返回最后一个子节点，找不到则返回 null。同样，也是包含所有的节点

```javascript
5.	parentNode.firstElementChild
```

​	firstElementChild 返回第一个子元素节点，找不到则返回 null。

```javascript
6.	parentNode.lastElementChild
```

​	lastElementChild 返回最后一个子元素节点，找不到则返回 null。

注意：5和6有兼容性问题，IE9以上才支持。 

###### 	实际开发中，firstChild和lastChild包含其他节点，操作不方便，而firstElementChild和lastElementChild又有兼容性问题，那么我们如何获取第一个子元素节点或最后一个子元素节点呢？

​	解决方案：

​				1、如果想要第一个子元素节点，可以使用parentNode.children[0]

​				2、如果想要最后一个子元素节点，可以使用 ：        														parentNode.children[parentNode.children.length - 1]

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ol>
        <li>我是li1</li>
        <li>我是li2</li>
        <li>我是li3</li>
        <li>我是li4</li>
    </ol>
    <script>
        var ol = document.querySelector('ol');
        // 1、firstChild 第一个子节点 不管是文本节点还是元素节点
        console.log(ol.firstChild);
        console.log(ol.lastChild);
        // 2、firstElementChild 返回第一个子元素节点
        console.log(ol.firstElementChild);
        console.log(ol.lastElementChild);
        // 3、实际开发的写法    既没有兼容性问题又返回第一个子元素          ！！！！！！！！！！！！！
        console.log(ol.children[0]);
        // 最后一个元素
        console.log(ol.children[3]); // 知道元素个数
        console.log(ol.children[ol.children.length - 1]);
    </script>
</body>

</html>
```

##### 案例：新浪下拉菜单（JS孩子的运用）：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        
        div {
            display: flex;
            justify-content: center;
            font-size: 14px;
        }
        
        ul {
            list-style: none;
            color: #333;
        }
        
        a {
            text-decoration: none;
            color: #333;
        }
        
        .wb,
        .bk,
        .yx {
            width: 150px;
            height: 200px;
        }
        
        .wb-1 a:hover {
            background-color: pink;
            display: block;
            color: white;
        }
        
        .bk-1 a:hover {
            background-color: pink;
            display: block;
            color: white;
        }
        
        .yx-1 a:hover {
            background-color: pink;
            display: block;
            color: white;
        }
        
        .wb ul li {
            width: 110px;
            height: 48px;
            line-height: 48px;
            padding-left: 40px;
            border-left: 1px solid #FECC5B;
            border-right: 1px solid whitesmoke;
            border-bottom: 1px solid #FECC5B;
        }
        
        .yx ul li {
            width: 110px;
            height: 48px;
            line-height: 48px;
            padding-left: 40px;
            border-left: 1px solid #FECC5B;
            border-right: 1px solid whitesmoke;
            border-bottom: 1px solid #FECC5B;
        }
        
        .wb ul li:hover {
            background-color: rgb(253, 223, 168);
        }
        
        .bk ul li:hover {
            background-color: rgb(253, 223, 168);
        }
        
        .yx ul li:hover {
            background-color: rgb(253, 223, 168);
        }
        
        .bk ul li {
            width: 110px;
            height: 48px;
            line-height: 48px;
            padding-left: 40px;
            border-left: 1px solid #FECC5B;
            border-right: 1px solid whitesmoke;
            border-bottom: 1px solid #FECC5B;
        }
        
        .bk ul {
            display: none;
        }
        
        .wb ul {
            display: none;
        }
        
        .yx ul {
            display: none;
        }
        
        .wb-1,
        .bk-1,
        .yx-1 {
            text-align: center;
            height: 48px;
            line-height: 48px;
        }
    </style>
</head>

<body>
    <div class="nav">
        <ul class="wb">
            <li class="wb-1"><a href="#">微博</a></li>
            <ul>
                <li><a href="#">私信</a></li>
                <li><a href="#">评论</a></li>
                <li><a href="#">@我</a></li>
            </ul>
        </ul>
        <ul class="bk">
            <li class="bk-1"><a href="#">博客</a></li>
            <ul>
                <li><a href="#">博客评论</a></li>
                <li><a href="#">未读消息</a></li>
            </ul>
        </ul>
        <ul class="yx">
            <li class="yx-1"><a href="#">邮箱</a></li>
            <ul>
                <li><a href="#">免费邮箱</a></li>
                <li><a href="#">VIP邮箱</a></li>
                <li><a href="#">企业邮箱</a></li>
                <li><a href="#">新浪邮箱客户端</a></li>
            </ul>
        </ul>
    </div>
    <script>
        // 1、获取元素
        var nav = document.querySelector('.nav');
        var uls = nav.children; // 得到三个ul
        // console.log(uls);
        for (var i = 0; i < uls.length; i++) {
            // console.log(uls[i].children[1]);
            uls[i].onmouseover = function() {
                this.children[1].style.display = 'block';
            }
            uls[i].onmouseout = function() {
                this.children[1].style.display = 'none';
            }
        }
    </script>
</body>

</html>
```

#### 3、兄弟节点：

```javascript
1.	node.nextSibling
```

​	nextSibling 返回当前元素的下一个兄弟节点，找不到则返回null。同样，也是包含所有的节点。

```javascript
2.	node.previousSibling
```

​	previousSibling 返回当前元素上一个兄弟节点，找不到则返回null。同样，也是包含所有的节点。

```javascript
3.	node.nextElementSibling
```

​	nextElementSibling 返回当前元素下一个兄弟节点，找不到则返回null。

```javascript
4.	node.previousElementSibling
```

​	previousElementSibling 返回当前元素上一个兄弟节点，找不到则返回null。

注意：3和4有有兼容性问题，IE9以上才支持

问：如何解决兼容性问题?	答:自己封装一个兼容性的函数

```javascript
function getNextElementSibling(element) {
    var el = element;
    while (el = el.nextSibling) {
        if (el.nodeType === 1) {
            return el;
         }
     }
            return null;
}
```

```Html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>我是div</div>
    <span>我是span</span>
    <script>
        var div = document.querySelector('div');
        // 1.nextSibling 下一个兄弟节点 包含元素节点或者 文本节点等等
        console.log(div.nextSibling);
        console.log(div.previousSibling);
        // 2.nextElementSibling 得到下一个兄弟元素节点
        console.log(div.nextElementSibling);
        console.log(div.previousElementSibling);
    </script>
</body>

</html>
```

#### 4、创建节点：

```javascript
document.creatElement('tagName')
```

​	document.creatElement( ) 方法创建由 tagName 指定的 HTML 元素。因为这些元素原先不存在，是根据我们的需求动态生成的，所以我们也称为动态创建节点。

##### 添加节点：

```javascript
1.	node.appendChild(child)
```

​	node.appendChild( )  方法将一个节点添加到指定父节点的子节点列表末尾。类似CSS里面的after伪元素。

```javascript
2.	node.insertBefore(child,指定元素)
```

​	node.insertBefore( )  方法将一个节点添加到指定父节点的子节点前面。类似CSS里面的before伪元素。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul>
        <li>123</li>
    </ul>
    <script>
        // 1、创建节点 元素节点
        var li = document.createElement('li');
        // 2、添加节点 node.appendChild(child)      node 父级  child 是子级
        var ul = document.querySelector('ul');
        ul.appendChild(li);
        // 3、添加节点 node.insertBefore(child,指定元素);
        var lili = document.createElement('li');
        ul.insertBefore(lili, ul.children[0]);
        // 4、我们想要页面添加一个新的元素：(1)创建元素  (2)添加元素
    </script>
</body>

</html>
```

##### 案例：简单版发布留言案例：

###### 	案例分析：

​			1、核心思路：点击按钮之后，就动态创建一个li，添加到ul里面

​			2、创建li的同时，把文本域里面的值通过 li.innerHTML 赋值给 li

​			3、如果想要新的留言后面就用 appendChild 如果想要前面显示就用 insertBefore

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        textarea {
            border: 1px solid pink;
            width: 300px;
            height: 200px;
            margin-left: 200px;
            margin-top: 100px;
        }
        
        ul {
            margin-left: 200px;
        }
        
        li {
            background-color: pink;
            width: 200px;
            margin-top: 10px;
        }
    </style>
</head>

<body>
    <textarea name="" id=""></textarea>
    <button>发布</button>
    <ul>
        <li>123</li>
    </ul>
    <script>
        // 1、获取元素
        var btn = document.querySelector('button');
        var text = document.querySelector('textarea');
        var ul = document.querySelector('ul');
        // 2、注册事件
        btn.onclick = function() {
            if (text.value === '') {
                alert('您没有输入内容！');
                return false;
            } else {
                // (1) 创建元素
                var li = document.createElement('li');
                // console.log(text.value);
                // 先有li才能赋值
                li.innerHTML = text.value;
                // (2) 添加元素
                // ul.appendChild(li);  插入后面
                ul.insertBefore(li, ul.children[0]);
                text.value = '';
            }
        }
    </script>
</body>

</html>
```

#### 5、删除节点：

```javascript
node.removeChild(child)
```

​	node.removeChild( )  方法从DOM中删除一个子节点，返回删除的节点。

切记：是删除父元素里面的子节点！！！

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button>删除</button>
    <ul>
        <li>熊大</li>
        <li>熊二</li>
        <li>光头强</li>
    </ul>
    <script>
        // 1、获取元素
        var ul = document.querySelector('ul');
        var btn = document.querySelector('button');
        // 2、删除元素
        // ul.removeChild(ul.children[0]);
        // 3、点击按钮依次删除里面的孩子
        btn.onclick = function() {
            if (ul.children.length == 0) {
                btn.disabled = true;
            } else {
                ul.removeChild(ul.children[0]);
            }
        }
    </script>
</body>

</html>
```

##### 案例：删除留言案例：

​	案例分析：

​				1、当我们把文本域里面的值赋给 li 的时候，多添加一个删除的链接

​				2、需要把所有的链接获取过来，当我们点击当前的链接的时候，删除当前链接所在的 li

​				3、阻止链接跳转需要添加 javascript:void(0); 或者 javascript:;

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        textarea {
            border: 1px solid pink;
            width: 300px;
            height: 200px;
            margin-left: 200px;
            margin-top: 100px;
        }
        
        ul {
            margin-left: 200px;
        }
        
        li {
            background-color: pink;
            width: 200px;
            margin-top: 10px;
        }
        
        a {
            float: right;
            text-decoration: none;
            color: aliceblue;
        }
    </style>
</head>

<body>
    <textarea name="" id=""></textarea>
    <button>发布</button>
    <ul>

    </ul>
    <script>
        // 1、获取元素
        var btn = document.querySelector('button');
        var text = document.querySelector('textarea');
        var ul = document.querySelector('ul');
        // 2、注册事件
        btn.onclick = function() {
            if (text.value === '') {
                alert('您没有输入内容！');
                return false;
            } else {
                // (1) 创建元素
                var li = document.createElement('li');
                // console.log(text.value);
                // 先有li才能赋值
                li.innerHTML = text.value + "<a href='javascript:void(0);'>删除</a>";
                // (2) 添加元素
                // ul.appendChild(li);  插入后面
                ul.insertBefore(li, ul.children[0]);
                text.value = ''; // 每次输入点提交后将输入框的文字清空
                // (3) 删除元素  删除的是当前链接的li  它的父亲
                var as = document.querySelectorAll('a');
                for (var i = 0; i < as.length; i++) {
                    as[i].onclick = function() {
                        // node.removeChild(child);    删除的是 li  当前a所在的li
                        ul.removeChild(this.parentNode); // ul是爷爷 a(this)是孙子 删除的是li(父亲)
                    }
                }
            }
        }
    </script>
</body>

</html>
```

#### 6、复制节点（克隆节点）：

```javascript
node.cloneNode()
```

​	node.cloneNode( )  方法返回调用该方法的节点的一个副本。也称为克隆节点/拷贝节点

###### 注意：

​		1、如果括号参数为空或者为flase，则是浅拷贝，即只复制节点本身，不克隆里面的子节点。

​		2、如果括号参数为true ，则是深度拷贝，会复制节点本身以及里面所有的子节点。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul>
        <li>121323124</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <script>
        var ul = document.querySelector('ul');
        // 1、node.cloneNode( );    括号参数为空或者为flase  则是浅拷贝  只复制标签不复制里面的内容 
        // 2、node.cloneNode(true);    括号为true  是深拷贝  复制标签 复制里面的内容 
        var lili = ul.children[0].cloneNode(true);
        ul.appendChild(lili);
    </script>
</body>

</html>
```

#### 7、三种动态创建元素区别：

​		document.write( )

​		element.innerHTML

​		document.createElement( )

###### 区别：

​		1、document.write  是直接将内容写入页面的内容流，但是文档执行完毕，则它会导致页面重绘（加载一个新的HTML页面）

​		2、innerHTML  是将内容写入某个 DOM 节点，不会导致页面全部重绘

​		3、innerHTML  创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂

​		4、createElement( )  创建多个元素效率稍低一点点，但是结构更清晰

## DOM重点核心：

​		文档对象模型（DocumentObjectModel，简称 DOM），是W3C组织推荐的处理可扩展标记语言（HTML或者XML）的标准 编程接口。

​		W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式。

​		1、对于JavaScript，为了能够使JavaScript操作HTML，JavaScript就有了一套自己的dom编程接口。

​		2、对于HTML，dom使得html形成一棵dom树，包含 文档、元素、节点。

###### 关于dom操作，我们主要针对元素的操作。主要有创建、增、删、改、查、属性操作、事件操作。

##### 创建：

​		1、document.write

​		2、innerHTML

​		3、createElement

##### 增：

​		1、appendChild

​		2、insertBefore

##### 删：

​		1、removeChild

##### 改：

​		主要修改dom的元素属性，dom元素的内容、属性，表单的值等

​		1、修改元素属性：src、href、title等

​		2、修改普通元素内容：innerHTML、innerText

​		3、修改表单元素：value、type、disabled等

​		4、修改样式属性：style、className

##### 查：

​		主要获取查询dom元素

​		1、DOM提供API方法：getElementById、getElementByTagName  古老方法 不太推荐

​		2、H5提供新方法：querySelector、querySelectorAll  提倡

​		3、利用节点操作获取元素：父(parentNode)、子(children)、兄(previousElementSibling、nextElementSibling)  提倡

##### 属性操作：

​		主要针对自定义属性。

​		1、setAttribute：设置dom的属性值

​		2、getAttribute：得到dom的属性值

​		3、removeAttribute：移除属性

##### 事件操作：

​		给元素注册事件，采取  事件源 事件类型 = 事件处理程序

​		onclick ...... onmousesedown

## 事件高级：

### 目标：

​			能够写出元素注册事件的两种方式

​			能够说出删除事件的两种方式

​			能够说出 DOM 事件流的三个阶段

​			能够利用事件对象完成跟随鼠标案例

​			能够封装阻止冒泡的兼容性函数

​			能够说出事件委托的原理

​			能够说出常用的鼠标和键盘事件

### 1、注册事件：

​		给元素添加事件，称为注册事件或者绑定事件。

​		注册事件有两种方式：传统方式和方法监听注册事件。

##### 传统注册事件：

​		利用 on 开头的事件 onclick

​		<button onclick="alert('hi~')"></button>

​		btn.onclick = function(){}

​		同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数

##### 方法监听注册方式：

​		w3c 标准 推荐方式

​		addEventListener( )  它是一个方法

​		IE9之前的IE不支持此方法，可用attachEvent( )代替

​		特点：同一个元素同一个事件可以注册多个监听器

​		按注册事件依次执行

#### addEventListener  事件监听方式（推荐）：

```javascript
eventTarget.addEventListener(type,listener[, useCapture])
```

​	eventTarget.addEventListener( )  方法将指定的监听器注册到eventTarget（目标对象）上，当该对象触发指定的事件时，就会执行事件处理函数。

​	该方法接受三个参数：

​			type：事件类型字符串，比如 click、mouseover  ，注意这里不要带 on

​			listener：事件处理函数，事件发生时，会调用该监听函数

​			useCapture：可选参数，是一个布尔值，默认是flase。学完DOM事件流后，我们再进一步学习

#### attachEvent  事件监听方式（Ie9以上（独有 其他浏览器不支持））：

```javascript
eventTarget.attachEvent(eventNameWithOn, callback)
```

​	eventTarget.attachEvent( )  方法将指定的监听器注册到eventTarget(目标对象)上，当该对象触发指定的事件时，指定的回调函数就会被执行。

​	该方法接受两个参数：

​			eventNameWithOn：事件类型字符串，比如 onclick、onmouseover ，这里要带on

​			callback：事件处理函数，当目标触发事件时回调函数被调用

###### 处理兼容性问题（封装函数）：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button>传统注册事件</button>
    <button>方法监听注册事件</button>
    <button>ie9 attachEvent</button>
    <script>
        var btns = document.querySelectorAll('button');
        // 1、传统方式注册事件
        btns[0].onclick = function() {
            alert('hi');
        }
        btns[0].onclick = function() {
            alert('aaaaa');
        }

        // 2、事件侦听注册事件  addEventListener  
        // (1) 里面的事件类型是字符串 必定加引号  而且不带on
        // (2) 同一个元素 同一个事件可以添加多个侦听器 （事件处理程序）
        // btns[1].addEventListener('click', function() {
        //     alert(111);
        // })
        // btns[1].addEventListener('click', function() {
        //         alert(22222);
        //     })
        //     // 3、attachEvent ie9以前的版本支持 
        // btns[2].attachEvent('onclick', function() {
        //     alert(999);
        // })

        function addEventListener(element, eventName, fn) {
            // 判断当前浏览器是否支持  addEventListener  方法
            if (element.addEventListener) {
                element.addEventListener(eventName, fn); // 第三个参数 默认是false
            } else if (element.attachEvent) {
                element.attachEvent('on' + eventName, fn);
            } else {
                // 相当于 element.onclick = fn;
                element['on' + eventName] = fn;
            }
        }
    </script>
</body>

</html>
```

兼容性处理的原则：首先照顾大多数浏览器，再处理特殊浏览器。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button>传统注册事件</button>
    <button>方法监听注册事件</button>
    <button>ie9 attachEvent</button>
    <script>
        var btns = document.querySelectorAll('button');
        // 1、传统方式注册事件
        btns[0].onclick = function() {
            alert('hi');
        }
        btns[0].onclick = function() {
            alert('aaaaa');
        }

        // 2、事件侦听注册事件  addEventListener  
        // (1) 里面的事件类型是字符串 必定加引号  而且不带on
        // (2) 同一个元素 同一个事件可以添加多个侦听器 （事件处理程序）
        btns[1].addEventListener('click', function() {
            alert(111);
        })
        btns[1].addEventListener('click', function() {
            alert(22222);
        })

        // 3、attachEvent ie9以前的版本支持 
        btns[2].attachEvent('onclick', function() {
            alert(999);
        })
    </script>
</body>

</html>
```

### 2、删除事件（解绑事件）：

#### 1、删除事件的方式：

##### 	1、传统注册方式

​			eventTarget.onclick = null;

##### 	2、方法监听注册方式

​			eventTarget.removeListener(type,listener[, useCapture]);

​			eventTarget.detachEvent(eventNameWidthOn, callback);-------------IE专属！

##### 删除事件兼容性解决方案：

```javascript
        function removeEventListener(element, eventName, fn) {
            // 判断当前浏览器是否支持  removeEventNameListener 方法
            if (element.removeEventListener) {
                element.removeEventListener(eventName, fn); //  第三个参数 默认是false
            } else if (element.deatchEvent) {
                element.deatchEvent('on' + eventName, fn);
            } else {
                element['on' + eventName] = null;
            }
        }
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
</head>

<body>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <script>
        // div点击一次后不再弹出对话框
        var divs = document.querySelectorAll('div');

        divs[0].onclick = function() {
            alert(111);
            // 1、传统方式删除事件
            divs[0].onclick = null;
        }

        // 2、removeEventListener 删除事件
        divs[1].addEventListener('click', fn) // fn不加括号

        function fn() {
            alert(1111);
            divs[1].removeEventListener('click', fn);
        }
        // 3、
        divs[2].attachEvent('onclick', fn1);

        function fn1() {
            alert(333333333);
            divs[2].deatchEvent('onclick', fn1);
        }
    </script>
</body>

</html>
```

### 3、DOM事件流：

​		事件流描述的是从页面中接收事件的顺序。

​		事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流。

DOM事件流分为3个阶段：

​			1、捕获阶段

​			2、当前目标阶段

​			3、冒泡阶段

​	事件冒泡：IE 最早提出，事件开始时由最具体的元素接收，然后逐层向上传播到DOM最顶层节点的过程。

​	事件捕获：网景最早提出，由DOM最顶层节点开始，然后逐层向下传播到最具体的元素接收的过程。

##### 注意：

​		1、JS 代码中只能执行捕获或者冒泡其中的一个阶段。

​		2、onclick 和 attachEvent(IE专有) 只能得到冒泡阶段。

​		3、addEventListener(type, listener[, useCapture])第三个参数如果是 true,表示在事件捕获阶段调用事件处理程序；如果是false（不写默认就是false），表示在事件冒泡阶段调用事件处理程序。

​		4、实际开发中我们很少使用事件捕获，我们更关注事件冒泡。

​		5、有些事件是没有冒泡的，比如：onblur、onfocus、onmouseover、onmouseleave。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        
        .father {
            width: 300px;
            height: 300px;
            margin: 100px auto;
            background-color: pink;
        }
        
        .son {
            width: 200px;
            height: 200px;
            background-color: purple;
            text-align: center;
            line-height: 200px;
            transform: translate(25%, 25%);
            color: white;
        }
    </style>
</head>
<div class="father">
    <div class="son">son盒子</div>
</div>

<body>
    <script>
        // dom  事件流 三个阶段
        // 1、 JS 代码中只能执行捕获或者冒泡其中的一个阶段。
        // 2、 onclick 和 attachEvent(IE专有) 只能得到冒泡阶段。
        // 3、捕获阶段 如果addEventListener  第三个参数是 true 那么则处于捕获阶段  document -> html -> body -> father -> son
        // var son = document.querySelector('.son');
        // son.addEventListener('click', function() {
        //     alert('son');
        // }, true);
        // var father = document.querySelector('.father');
        // father.addEventListener('click', function() {
        //     alert('father');
        // }, true);

        // 4、冒泡阶段 如果addEventListener  第三个参数是 false或省略  那么则处于冒泡阶段    son -> father -> body -> html -> document
        var son = document.querySelector('.son');
        son.addEventListener('click', function() {
            alert('son');
        }, false);
        var father = document.querySelector('.father');
        father.addEventListener('click', function() {
            alert('father');
        }, false);
        document.addEventListener('click', function() {
            alert('document');
        });
    </script>
</body>

</html>

</html>
```

### 4、事件对象：

#### 1、什么是事件对象：

```javascript
eventTarget.onclick = function(event){}
evnetTarget.addEventListener('click',function(event) {})
// 这个 event 就是事件对象，我们还喜欢的写出 e 或者 evt
```

这个event是个形参，系统帮我们设定为事件对象，不需要传递实参过去。

当我们注册事件时，event事件就会被系统自动创建，并以此传递给事件监听器（事件处理函数）。	

​	官方解释：event对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态。

​	简单理解：事件发生后，跟事件相关的一系列信息数据的集合都放到这个对象里面，这个对象就是事件对象event，它有很多属性和方法。如：

​					1、谁绑定了这个事件。

​					2、鼠标触发事件的话，会得到鼠标的相关信息，如鼠标位置。

​					3、键盘触发事件的话，会得到键盘的相关信息，如按了哪个键。

#### 2、事件对象的兼容性方案：

​	事件对象本身的获取存在兼容问题：

​			1、标准浏览器中是浏览器给方法传递的参数，只需要定义形参 e 就可以获取到。

​			2、在 IE6~8 中，浏览器不会给方法传递参数，如果需要的话，需要到 window.event 中获取查找。

###### 解决：

​		e = e || window.event;

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
</head>

<body>
    <div>123</div>
    <script>
        // 事件对象
        var div = document.querySelector('div');
        // (1)
        // div.onclick = function(event) {
        //         console.log(event);
        //         console.log(window.event);   // ie678 写法
        //     }

        // 兼容性解决方法
        // div.onclick = function(e) {
        //         console.log(e); // 正常浏览器
        //         console.log(window.e); // IE浏览器
        //         e = e || window.event; //解决兼容性的方法————————所有浏览器均可

        //     }
        // (2)
        div.addEventListener('click', function(event) {
                console.log(event);
            })
            // 1、event 就是一个事件对象 写到我们侦听函数的 小括号里面 当形参来看
            // 2、事件对象只有有了事件才会存在，它是系统给我们自动创建的，不需要我们传递参数
            // 3、事件对象 是 我们一系列相关数据的集合 跟事件相关的 比如鼠标点击里面就包含了鼠标的相关信息，鼠标坐标啊，如果是键盘事件里面就包含的键盘事件的信息 比如：判断用户按下了哪个键
            // 4、这个事件对象我们可以自己命名  比如：event、 evt、 e
            // 5、事件对象也有兼容性问题 ie678 通过 window.event
    </script>
</body>

</html>
```

#### 3、事件对象的常见属性和方法：

| 事件对象属性方法    | 说明                                                         |
| :------------------ | ------------------------------------------------------------ |
| e.target            | 返回触发事件的对象                                 标准      |
| e.srcElement        | 返回触发事件的对象                                  非标准 ie6~8使用 |
| e.type              | 返回事件的类型   比如 click   mouseover  不带on              |
| e.cancelBubble      | 该属性阻止冒泡   非标准   ie6~8                              |
| e.returnValue       | 该属性阻止默认事件（默认行为）  非标准 ie6~8使用  比如不让链接跳转 |
| e.preventDefault()  | 该方法阻止默认事件（默认行为）  标准  比如不让链接跳转       |
| e.stopPropagation() | 阻止冒泡   标准                                              |

##### this 和 target 区别：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
</head>

<body>
    <div>123</div>
    <ul>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
    </ul>
    <script>
        // 常见事件对象的属性和方法
        // 1、e.target  返回的是触发事件的对象（元素）    this返回的是绑定事件的对象（元素）
        // 区别： e.target 点击了那个元素就返回那个元素    this 那个元素绑定了这个点击事件那么就返回谁
        var div = document.querySelector('div');
        div.addEventListener('click', function(e) {
            console.log(e.target);
            console.log(this);
        });
        var ul = document.querySelector('ul');
        ul.addEventListener('click', function(e) {
            // 我们给ul 绑定了事件  那么this 就指向ul
            console.log(this);
            console.log(e.currentTarget);
            // e.target  指向我们点击的那个对象 谁触发了这个事件 我们点击的是li e.target  指向的就是li
            console.log(e.target);
        });

        // 了解兼容性
        // div.onclick = function(e) {
        //     e = e || window.event;
        //     var target = e.target || e.srcElement;
        //     console.log(target);
        // }

        // 2、了解  跟this 有个非常相似的属性 currentTarget   ie678不认识
    </script>
</body>

</html>
```

#### 4、事件对象阻止默认行为：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>123</div>
    <a href="http://www.baidu.com">百度</a>
    <form action="http://www.baidu.com">
        <input type="submit" value="提交" name="sub" />
    </form>
    <script>
        // 常见事件对象的属性和方法
        // 1、返回事件类型
        var div = document.querySelector('div');
        div.addEventListener('click', fn);
        div.addEventListener('mouseover', fn);
        div.addEventListener('mouseout', fn);

        function fn(e) {
            console.log(e.type);
        }
        // 2、阻止默认行为（事件）让链接不跳转 或者让提交按钮不提交
        var a = document.querySelector('a');
        a.addEventListener('click', function(e) {
            e.preventDefault(); // dom 标准写法
        });
        a.onclick = function(e) {
            // 普通浏览器  e.preventDefault();  方法
            // e.preventDefault();
            // 低版本浏览器 ie678   属性
            // e.returnValue;
            // 我们可以利用return false 也能阻止默认行为 没有兼容性问题  特点：return后面的代码不执行了，而且只限于传统的注册方式（本方法）
            return false;
        }
    </script>
</body>

</html>
```

#### 5、事件对象阻止事件冒泡：

事件冒泡：开始时由最具体的元素接收，然后逐层向上传播到 DOM 最顶层节点。

事件冒泡本身的特性，会带来的坏处，也会带来的好处，需要我们灵活掌握。

##### 阻止事件冒泡：

​		标准想法：利用事件对象里面的 stopPropagation( ) 方法

##### 阻止事件冒泡的兼容性解决方案：

```javascript
if(e && e.stopPropagation){
    e.stopPrapagation();
}else{
    window.event.cancelBubble = true;
}
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        
        .father {
            width: 300px;
            height: 300px;
            margin: 100px auto;
            background-color: pink;
        }
        
        .son {
            width: 200px;
            height: 200px;
            background-color: purple;
            text-align: center;
            line-height: 200px;
            transform: translate(25%, 25%);
            color: white;
        }
    </style>
</head>
<div class="father">
    <div class="son">son盒子</div>
</div>

<body>
    <script>
        // dom  事件流 三个阶段
        // 1、 JS 代码中只能执行捕获或者冒泡其中的一个阶段。
        // 2、 onclick 和 attachEvent(IE专有) 只能得到冒泡阶段。
        // 3、捕获阶段 如果addEventListener  第三个参数是 true 那么则处于捕获阶段  document -> html -> body -> father -> son
        // var son = document.querySelector('.son');
        // son.addEventListener('click', function() {
        //     alert('son');
        // }, true);
        // var father = document.querySelector('.father');
        // father.addEventListener('click', function() {
        //     alert('father');
        // }, true);

        // 4、冒泡阶段 如果addEventListener  第三个参数是 false或省略  那么则处于冒泡阶段    son -> father -> body -> html -> document
        var son = document.querySelector('.son');
        son.addEventListener('click', function(e) {
            alert('son');
            e.stopPropagation(); // stop 停止   propagation 传播    标准：在实际开发中会用的多一些
            e.cancelBubble = true; // 非标准 cancel 取消 bubble 泡泡
        }, false);
        var father = document.querySelector('.father');
        father.addEventListener('click', function() {
            alert('father');
        }, false);
        document.addEventListener('click', function() {
            alert('document');
        });
    </script>
</body>

</html>

</html>
```

#### 6、事件对象事件委托（代理、委派）：

##### 事件委托：

​			事件委托也称为事件代理，在jQuery里面称为事件委派。

##### 事件委托的原理：

​			不是给每个子节点单独设置事件监听器，而是给父节点设置事件监听器，然后利用冒泡原理影响设置每个子节点。如：		给ul注册点击事件，然后利用事件对象的target来找到当前点击的li，事件会冒泡到ul上，ul有注册事件，就会触发事件监听器。

##### 事件委托的作用：

​			我们只操作了一次DOM，提高了程序的性能。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul>
        <li>知否知否，应是弹窗在手！</li>
        <li>知否知否，应是弹窗在手！</li>
        <li>知否知否，应是弹窗在手！</li>
        <li>知否知否，应是弹窗在手！</li>
        <li>知否知否，应是弹窗在手！</li>
    </ul>
    <script>
        var ul = document.querySelector('ul');
        ul.addEventListener('click', function(e) {
            alert('知否知否，应是弹窗在手！');
            // e.target 这个可以得到我们点击的对象
            e.target.style.backgroundColor = 'pink';
        })
    </script>
</body>

</html>
```

#### 7、常用的鼠标事件（禁止选中文字、禁止右键菜单）：

##### 1、禁止鼠标右键菜单：

​	contextmenu主要控制应该何时显示上下文菜单，主要用于程序员取消默认的上下文菜单。

```javascript
document.addEventListener('contextmenu', function(e){
    e.preventDefault();
})
```

##### 2、禁止鼠标选中（selectstart 开始选中）：

```javascript
document.addEventListener('selectstart', function(e){
    e.preventDefalut();
})
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    我是一段不愿意分享的文字！
    <script>
        // 1、contextmenus  我们可以禁用右键菜单
        document.addEventListener('contextmenus', function(e) {
            e.preventDefalut();
        })

        // 2、禁止选中文字  selsectstart
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
        })
    </script>
</body>

</html>
```

##### 3、鼠标事件对象：

​	event对象代表事件的状态，跟事件相关的一系列信息的集合。现阶段我们主要是用鼠标事件对象MouseEvent 和键盘事件对象 KeyboardEvent。

| 鼠标事件对象 | 说明                                          |
| ------------ | --------------------------------------------- |
| e.clientX    | 返回鼠标相对于浏览器窗口可视区的X坐标         |
| e.clientY    | 返回鼠标相对于浏览器窗口可视区的Y坐标         |
| e.pageX      | 返回鼠标相对于文档页面的X坐标        IE9+支持 |
| e.pageY      | 返回鼠标相对于文档页面的Y坐标        IE9+支持 |
| e.screenX    | 返回鼠标相对于电脑屏幕的X坐标                 |
| e.screenY    | 返回鼠标相对于电脑屏幕的Y坐标                 |

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        // 鼠标事件对象 MouseEvent
        document.addEventListener('click', function(e) {
            console.log(e.clientX);
            console.log(e.clientY);
        })
    </script>
</body>

</html>
```

##### 案例：跟随鼠标的天使：

​	案例分析：

​				1、鼠标不断的移动，使用鼠标移动事件：mousemove

​				2、在页面中移动，给document注册事件

​				3、图片要移动距离，而且不占位置，我们使用绝对定位

​				4、核心原理：每次鼠标移动，我们都会获得最新的鼠标坐标，把这个X和Y坐标做为图片的top和left值就可以移动图片

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img {
            position: absolute;
            transform: translate(-50%, -40%);
        }
    </style>
</head>

<body>
    <img src="图片/动态小天使2.gif" alt="">
    <script>
        var pic = document.querySelector('img');
        document.addEventListener('mousemove', function(e) {
            // 1、mousemove只要我们鼠标移动1px  就会触发这个事件
            // 2、核心原理： 每次鼠标移动，我们都会获得最新的鼠标坐标， 把这个X和Y坐标作为图片的top和left 值就可以移动图片
            var x = e.pageX;
            var y = e.pageY;
            // console.log(x, y);
            // 3、千万不要忘记给left 和 top 添加 px 单位!!!!!!!!!!
            pic.style.left = x + 'px';
            pic.style.top = y + 'px';
        })
    </script>
</body>

</html>
```

#### 8、键盘事件对象：

##### 1、常用的键盘事件对象：

事件除了使用鼠标触发，还可以使用键盘触发。

| 键盘事件   | 触发条件                                                     |
| ---------- | ------------------------------------------------------------ |
| onkeyup    | 某个键盘按键被松开时触发                                     |
| onkeydown  | 某个键盘按键被按下时触发                                     |
| onkeypress | 某个键盘按键被按下时触 但是它不识别功能键 比如:ctrl shift箭头等 |

###### 注意：

​		1、如果使用addEventListener不需要加on

​		2、onkeypress和前面2个区别是，它不识别功能键，比如左右箭头，shift等

​		3、三个事件的执行顺序是：keydown ------ keypress ------ keyup





```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        // 常用的键盘事件
        // 1、keyup按键弹起的时候触发
        // document.onkeyup = function() {
        //     console.log('我弹起来了！');
        // }
        document.addEventListener('keyup', function() {
            console.log('我弹起来了！');
        })

        // 2、keydown按键按下的时候触发         能识别功能键 比如 ctrl shift 左右箭头啊
        document.addEventListener('keydown', function() {
            console.log('我按下了down！');
        })

        // 3、keypress按键按下的时候触发        不能识别功能键 比如 ctrl shift 左右箭头啊
        document.addEventListener('keypress', function() {
            console.log('我按下了press！！！');
        })

        // 4、三个事件的执行顺序    keydown -->  keypress -->  keyup
    </script>
</body>

</html>
```

##### 2、keyCode判断用户按下哪个键：

| 键盘事件对象属性 | 说明              |
| ---------------- | ----------------- |
| keyCode          | 返回该键的ASCII值 |

###### 注意：

​			onkeydown和onkeyup不区分字母大小写，onkeypress区分字母大小写。在我们实际开发中，我们更多的使用keydown和keyup，它能识别所有的键（包括功能键Keypress不识别功能键，但是keyCode属性能区分大小写，返回不同ASCII值。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        // 键盘事件对象中的keyCode属性可以得到相应键的ASCII码值
        // 1、我们的keyup 和 keydown 事件不区分字母大小写 a 和 A 得到的都是65
        // 2、keypress 事件区分字母大小写 A 65  a 97
        document.addEventListener('keyup', function(e) {
            // console.log(e);
            console.log(e.keyCode);
            // 我们可以利用keyCode返回的ASCII码值来判断用户按下了哪个键
            if (e.keyCode === 65) {
                alert('你按下a键！')
            } else {
                alert('你没有按下a键！')
            }
        })
        document.addEventListener('keypress', function(e) {
            console.log('press：' + e.keyCode);
        })
    </script>
</body>

</html>
```

##### 案例：模拟京东按键输入内容案例：

案例分析：

​		1、核心思路：检测用户是否按下了 s 键，就把光标定位到搜索框里面。

​		2、使用键盘事件对象里面的keyCode判断用户按下的是否是 s 键。

​		3、搜索框获得焦点：使用JS里面的focus() 方法。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <input type="text">
    <script>
        var search = document.querySelector('input');
        // keyup是按完后弹起的时候起作用 当s按完后才会把光标定进去才会起作用        若是keydown按下就起作用光标就定进去，s就会写入
        document.addEventListener('keyup', function(e) {
            if (e.keyCode === 83) {
                search.focus();
            }
        })
    </script>
</body>

</html>
```

##### 案例：模拟京东快递单号查询：

案例分析：

​		1、快递单号输入内容时，上面的大号字体盒子显示（里面的字号更大）。

​		2、表单检测用户输入：给表单添加键盘事件。

​		3、同时把快递单号里面的值（value）获取过来赋值给con盒子（innerText）作为内容。

​		4、注意：keydown和keypress在文本框里面的特点：他们两个事件触发的时候，文字还没有落入文本框中。————————！！！！！！！！！！！！！！！！！！！！

​		5、keyup事件触发的时候，文字已经落入文本框里面了。

​		6、当我们失去焦点的时候，就隐藏这个con盒子。

​		7、当我们获取焦点的时候，并且文本框内容不为空，就显示这个con盒子。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .search {
            width: 178px;
            height: 40px;
            position: relative;
            margin: 100px;
        }
        
        .con {
            display: none;
            position: absolute;
            top: -40px;
            width: 171px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            padding: 5px 0;
            font-size: 18px;
            line-height: 20px;
            color: #333;
        }
        
        .con::before {
            content: "";
            width: 0;
            height: 0;
            position: absolute;
            top: 28px;
            left: 18px;
            border: 8px solid #000;
            border-style: solid dashed dashed;
            border-color: #fff transparent transparent;
        }
    </style>
</head>

<body>
    <div class="search">
        <div class="con">123</div>
        <input type="text" placeholder="请输入你的快递单号" class="jd" />
    </div>
    <script>
        var con = document.querySelector('.con');
        var jd_input = document.querySelector('.jd');
        jd_input.addEventListener('keyup', function() {
            // console.log('输入内容啦！');
            if (this.value == '') {
                con.style.display = 'none';
            } else {
                con.style.display = 'block';
                con.innerHTML = this.value;
            }
        })

        // 当我们失去焦点就隐藏这个con盒子
        jd_input.addEventListener('blur', function() {
            con.style.display = 'none';
        })

        // 当我们获得焦点，就显示这个con盒子
        jd_input.addEventListener('focus', function() {
            if (this.value !== '') {
                con.style.display = 'block';
            }
        })
    </script>
</body>

</html>
```

