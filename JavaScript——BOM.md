# BOM：

## BOM概述：

### 1、什么是BOM：

​	BOM（Browser Object Model）即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是window。

​	BOM由一系列相关的对象构成，并且，每个对象都提供了很多方法与属性。

​	BOM缺乏标准，JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C，BOM最初层是Netscape浏览器标准的一部分。

##### DOM：

​			文档对象模型

​			DOM就是把文档当做一个对象来看待

​			DOM的顶级对象是document

​			DOM主要学习的是操作元素

​			DOM是W3C标准规范

##### BOM：

​			浏览器对象模型

​			把浏览器当做一个对象来看待

​			BOM的顶级对象是window

​			BOM学习的是浏览器窗口交互的一些对象

​			BOM是浏览器厂商在各自浏览器上定义的，兼容性较差

### 2、BOM的构成：

​	BOM比DOM更大，它包含DOM。

​	window由document、location、navigation、screen、history

​	Window对象是浏览器的顶级对象，它具有双重角色。

​			1、它是JS访问浏览器窗口的一个接口。

​			2、它是一个全局对象。定义在全局作用域中的变量、函数都会变成window对象的属性和方法。在调用的时候可以省略window，前面学习的对话框都属于window对象方法，比如alert()、prompt()等。

###### 注意：

​		window下的一个特殊属性window.name

## window对象的常见事件：

### 1、窗口加载事件：

```Js
        window.onload = function() {}
        或者
        window.addEventListener('load', function() {});
```

​	window.onload是窗口（页面）加载事件，当文档内容完全加载完成会触发该事件（包括图像、脚本文件、CSS文件等），就调用的处理函数。

###### 注意：

​		1、有了window.onload就可以把JS代码写到页面元素的上方，因为onload是等页面内容全部加载完毕，再去执行处理函数。

​		2、window.onload传统注册事件方式只能写一次，如果有多个，会以最后一个window.onload为准。

​		3、如果使用addEventListener则没有限制。

```javascript
document.addEventListener('DOMContentLoaded',function(){})
```

​	DOMContentLoaded事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等等。IE9以上支持。

​	好处：如果页面的图片很多的话，从用户访问到onload触发可能需要较长的时间，交互效果就不能实现，必然影响用户的体验，此时用DOMContentLoaded事件比较合适。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        // window.onload = function() {
        //     var btn = document.querySelector('button');
        //     btn.addEventListener('click', function() {
        //         alert('来点我！');
        //     })

        // }
        // window.onload = function() {
        //     alert('aaa');
        // }

        window.addEventListener('load', function() {
            var btn = document.querySelector('button');
            btn.addEventListener('click', function() {
                alert('点击我！！！！');
            })
        })
        window.addEventListener('load', function() {
            alert('aaaaa');
        })
        document.addEventListener('DOMContentLoaded', function() {
                alert(3333333333);
            })
            // load 等页面内容全部加载完毕，包含页面dom元素 图片 flash CSS 等等
            // DOMContentLoaded 是DOM加载完毕，不包含图片 flash CSS 等等就可以执行 加载速度比load更快一些
    </script>
</head>

<body>
    <button>点击</button>
</body>

</html>
```

### 2、调整窗口大小事件：

```javascript
window.onresize = function(){}
window.addEventListener("resize", function(){});
```

window.onresize是调整窗口大小加载事件，当触发时就调用的处理函数。

###### 注意：

​		1、只要窗口大小发生像素变化，就会触发这个事件。

​		2、我们经常利用这个事件完成响应式布局。window.innerWidth当前屏幕宽度。

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
    <script>
        // 注意：当script写到上面去时记得写在load里面！！！
        window.addEventListener('load', function() {
            var div = document.querySelector('div');
            window.addEventListener('resize', function() {
                console.log(window.innerWidth);
                console.log('变化了！');
                if (window.innerWidth <= 800) {
                    div.style.display = 'none';
                } else {
                    div.style.display = 'block';
                }
            })
        })
    </script>
    <div></div>
</body>

</html>
```

## 定时器：

### 1、两种定时器：

​	window对象给我们提供了2个非常好用的方法——定时器。

​			· setTimeout()

​			· setInterval()

### 2、setTimeout() 定时器：

```javascript
window.setTimeout(调用函数, [延迟的毫秒数]);
```

​	setTimeout() 方法用于设置一个定时器，该定时器在定时器到期后执行调用函数。

###### 注意：

​		1、window可以省略。

​		2、这个调用函数可以直接写函数，或者写函数名或者采取字符串  '函数名()'  三种形式。第三种不推荐。

​		3、延迟的毫秒数省略默认默认是0，如果写，必须是毫秒。

​		4、以为定时器可能有很多，所有我们经常给定时器赋值一个标识符。

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
        // 1、setTimeout
        // 语法规范： window.setTimeout(调用函数，延时时间);
        // 1、这个window在调用的时候可以省略
        // 2、这个延时时间单位是毫秒，但是可以省略，如果省略默认是0
        // 3、这个调用函数可以直接写函数，还可以写 函数名  还有一个写法：'函数名()'
        // 4、页面中可能有很多的定时器，我们经常给定时器加标识符（名字）
        // setTimeout(function() {
        //     console.log('时间到了！');
        // }, 2000);
        function callback() {
            console.log('你爆炸了！！！');
        }
        var time1 = setTimeout(callback, 4000);
        // setTimeout('callback()', 4000); // 我们不提倡这个写法
        var time2 = setTimeout(callback, 8000);
    </script>
</body>

</html>
```

#### 案例：回调函数以及5秒后自动关闭广告：

​	setTimeout()  这个调用函数我们也称为回调函数 callback

​	普通函数是按照代码顺序直接调用。

​	而这个函数，需要等待时间，时间到了才去调用这个函数，因此称为回调函数。

​	简单理解：回调，就是回头调用的意思。上一件事干完，再回头再调用这个函数。	

​	以前我们讲的  element.onclick=function(){}  或者  element.addEventListener('click',fn);  里面的函数也是回调函数。

##### 案例分析：

​			1、核心思路：5秒之后，就把这个广告隐藏起来。

​			2、用定时器  setTimeout

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
    <img src="图片/3.jpg" alt="" class="ad">
    <script>
        var ad = document.querySelector('.ad');
        setTimeout(function() {
            ad.style.display = 'none';
        }, 5000);
    </script>
</body>

</html>
```

### 3、停止 setTimeout() 定时器：

```javascript
window.clearTimeout(timeoutID)
```

​	clearTimeout()  方法取消了先前通过调用 setTimeout() 建立的定时器。

###### 注意：

​		1、window 可以省略。

​		2、里面的参数就是定时器的标识符。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
    <button>点击停止定时器</button>
    <script>
        var btn = document.querySelector('button');
        var timer = setTimeout(function() {
            console.log('爆炸了！！');
        }, 5000)
        btn.addEventListener('click', function() {
            clearTimeout(timer);
        })
    </script>
</body>

</html>
```

### 4、setlnterval()  定时器：

```javascript
window.setInterval(回调函数，[间隔的毫秒数]);
```

​	setlnterval()  方法重复调用一个函数，每隔这个时间，就去调用一次回调函数。

###### 注意：

​		1、window可以省略。

​		2、这个调用函数可以直接写函数，或者写函数名或者采取字符串  '函数名()'  三种形式。第三种不推荐。

​		3、延迟的毫秒数省略默认默认是0，如果写，必须是毫秒，表示每隔多少毫秒就会自动调用这个函数。

​		4、以为定时器可能有很多，所有我们经常给定时器赋值一个标识符。

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
        // 1、setInterval
        // 语法规范：window.setInterval(调用函数，延时时间);
        setInterval(function() {
            console.log('继续输出！');
        }, 1000);
        // setTimeout  延时时间到了，就去调用这个回调函数，只调用一次 就结束了这个定时器
        // setInterval 每隔这个延时时间，就去调用这个回调函数，会调用很多次，重复调用这个函数
    </script>
</body>

</html>
```

#### 案例：仿京东倒计时效果：

###### 案例分析：

​			1、这个倒计时是不断变化的，因此需要定时器来自动变化（setInterval）。

​			2、三个黑色盒子分别存放时分秒。

​			3、三个黑色盒子利用innerHTML放入计算的小时分钟秒数。

​			4、第一次执行也是间隔毫秒数，因此刚刷新页面会空白。

​			5、最好采取封装函数的方式，这样可以先调用一次这个函数，防止刚开始刷新页面有空白问题。

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
        
        .bgc {
            width: 190px;
            height: 260px;
            margin: 100px auto;
            background: url(图片/京东秒杀图.png);
            position: relative;
        }
        
        .ms {
            position: absolute;
            top: 30px;
            width: 100%;
            height: 50px;
            text-align: center;
            line-height: 50px;
            color: white;
            font-size: 30px;
            font-weight: 700;
        }
        
        .xz {
            position: absolute;
            top: 157px;
            color: white;
            width: 100%;
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 14px;
            font-weight: 400;
        }
        
        .timer {
            position: absolute;
            top: 200px;
            height: 40px;
            width: 80%;
            padding: 0px 10%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        
        .hz-1,
        .hz-2,
        .hz-3 {
            width: 30px;
            height: 30px;
            background-color: black;
            color: white;
            font-size: 20px;
            font-weight: 700;
            text-align: center;
            line-height: 30px;
        }
        
        .fu-1,
        .fu-2 {
            width: 20px;
            height: 23px;
            font-size: 25px;
            font-weight: 700;
            color: white;
            text-align: center;
            line-height: 23px;
            padding-bottom: 7px;
        }
    </style>
</head>

<body>
    <div class="bgc">
        <div class="ms">京东秒杀</div>
        <div class="xz">本场距离结束还剩</div>
        <div class="timer">
            <div class="hz-1">1</div>
            <div class="fu-1">:</div>
            <div class="hz-2">2</div>
            <div class="fu-2">:</div>
            <div class="hz-3">3</div>
        </div>
    </div>
    <script>
        // 1、获取元素
        var hour = document.querySelector('.hz-1'); // 小时盒子
        var minute = document.querySelector('.hz-2'); // 分钟盒子
        var second = document.querySelector('.hz-3'); // 秒数盒子
        var inputTime = +new Date('2021-2-5 14:17:00'); // 返回的是用户输入时间总的毫秒数
        countDown(); // 我们先调用一次这个函数，防止第一次刷新页面有空白
        // 2、开启定时器
        var timer = setInterval(countDown, 1000);

        function countDown() {
            var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
            var times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数

            var h = parseInt(times / 60 / 60 % 24); // 时
            h = h < 10 ? '0' + h : h;
            hour.innerHTML = h; // 把剩余的小时给黑色盒子

            var m = parseInt(times / 60 % 60);
            m = m < 10 ? '0' + m : m;
            minute.innerHTML = m; // 把剩余的分钟给黑色盒子

            var s = parseInt(times % 60);
            s = s < 10 ? '0' + s : s;
            second.innerHTML = s; // 把剩余的秒数给黑色盒子
            if (s == 0 && m == 0 && h == 0) {
                clearInterval(timer); // 当剩余时间为0时就停止调用回调函数
            }
        }
    </script>
</body>

</html>
```

### 5、停止 setInterval()  定时器：

```javascript
window.clearInterval(intervalID);
```

​	clearInterval()  方法取消了先前调用 setInterval()  建立的定时器。

###### 注意：

​		1、window可以省略。

​		2、里面的参数就是定时器的标识符。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button class="begin">开启定时器</button>
    <button class="stop">停止定时器</button>
    <script>
        var begin = document.querySelector('.begin');
        var stop = document.querySelector('.stop');
        var timer = null; // 全局变量  null是一个空对象
        begin.addEventListener('click', function() {
            timer = setInterval(function() {
                console.log('你好吗');
            }, 1000)
        })

        stop.addEventListener('click', function() {
            clearInterval(timer);
        })
    </script>
</body>

</html>
```

#### 案例：发送短信案例：

​	点击按钮后，该按钮60秒之内不能再次点击，防止重复发送短信。

###### 案例分析：

​			1、按钮点击之后，会禁用 disabled 为true

​			2、同时按钮里面的内容会变化，注意button里面的内容通过innerHTML修改

​			3、里面秒数是有变化的，因此需要用到定时器

​			4、定义一个变量，在定时器里面，不断递减

​			5、如果变量为0说明到了时间，我们需要停止定时器，并且复原按钮初始状态

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    手机号码：<input type="number">
    <button>发送</button>
    <script>
        var btn = document.querySelector('button');
        var timer = 10;
        btn.addEventListener('click', function() {
            btn.disabled = true;
            var dsq = setInterval(function() {
                if (timer == 0) {
                    // 清除定时器和复原按钮
                    clearInterval(dsq);
                    btn.disabled = false;
                    btn.innerHTML = '发送';
                    timer = 10; // 这个10需要重新开始
                } else {
                    btn.innerHTML = '还剩下' + timer + '秒';
                    timer--;
                }
            }, 1000)
        })
    </script>
</body>

</html>
```

### 6、this指向问题：

this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，一般情况下this最终指向的是那个调用它的对象。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button>点击</button>
    <script>
        // this 指向问题 一般情况下this的最终指向的是那个调用它的对象

        // 1、全局作用域或者普通函数中this指向全局对象window(注意定时器里面的this指向window)
        console.log(this);

        function fn() {
            console.log(this);
        }
        window.fn();

        setTimeout(function() {
            console.log(this);
        }, 1000)

        // 2、方法调用中谁调用this指向谁
        var o = {
            sayHi: function() {
                console.log(this); // this指向的是 o 这个对象
            }
        }
        o.sayHi();
        var btn = document.querySelector('button');
        // btn.onclick = function() {
        //     console.log(this); // this 指向的是btn这个按钮对象
        // }

        btn.addEventListener('click', function() {
            console.log(this); // this 指向的是btn这个按钮对象
        })

        // 3、构造函数中this指向构造函数的实例
        function Fun() {
            console.log(this); // this 指向的是fun 实例对象
        }
        var fun = new Fun();
    </script>
</body>

</html>
```

## JS 执行队列：

​	JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。这是因为JavaScript这门脚本语言诞生的使命所致——JavaScript是处理页面中用户的交互，以及操作DOM而诞生的。比如我们对某个DOM元素进行添加和删除操作，不能同时进行。应该先进行添加，之后再删除。

​	单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是：如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。

### 1、一个问题：

以下代码执行的结果是什么？

```javascript
console.log(1);
setTimeout(function () {
    console.log(3);
}, 1000);
console.log(2);
```

### 2、同步和异步：

为了解决这个问题，利用多核CPU的计算能力，HTML5提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程。于是，JS 中出现了同步和异步。

#### 同步：

​	前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步做法：我们要烧水煮饭，等水开了（10分钟之后），再去切菜，炒菜。

#### 异步：

​	你在做一件事情时，因为这件事情会花费很长时间，在做这件事情的同时，你还可以去处理其他事情。比如做饭的异步做，我们在烧水的同时，利用这10分钟，去切菜，炒菜。

###### 他们的本质区别：这条流水线上各个流程的执行顺序不同。

### 3、JS 执行机制：

#### 1、一个问题：

那么以下代码执行的结果又是什么？

```javascript
        console.log(1);
        setTimeout(function() {
            console.log(3);
        }, 0);
        console.log(2);
```

#### 2、同步和异步：

##### 同步任务：

同步任务都在主线程上执行，形成一个执行栈。

##### 异步任务：

JS 的异步是通过回调函数实现的。

一般而言，异步任务有以下三中类型：

​		1、普通事件，如 click、resize 等

​		2、资源加载，如 load、error 等

​		3、定时器，包括 setInterval、setTimeout 等

异步任务相关回调函数添加到任务队列中（任务队列也称为消息队列）。

### 4、JS 执行机制：

​			1、先执行	执行栈中的同步任务。

​			2、异步任务（回调函数）放入任务队列中。

​			3、一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取 任务队列 中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行。

​	由于主线程不断的重复获得任务、执行任务、再获得任务、再执行，所以这种机制被称为事件循环（event loop）。

## location 对象：

### 1、什么是 location 对象：

​	window 对象给我们提供了一个location属性用于获取或设置窗体的URL，并且可以用于解析URL。因为这个属性返回的是一个对象，所以我们将这个属性也称为location对象。

### 2、URL：

​	统一资源定位符（Uniform Resourse Locator，URL）是互联网上标准资源的地址。互联网上的每一个文件都有一个唯一的URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。

###### URL的一般语法格式：

```javascript
protocol://host[:port]/path/[?query]#fragment
http://www.itcast.cn/index.html?name=andy&age=18#link
```

| 组成     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| protocol | 通信协议 常用的http,ftp,maito等                              |
| host     | 主机（域名） www.itcast.com                                  |
| port     | 端口号 可选，省略时使用方案的默认端口 如http的默认端口为80   |
| path     | 路径 由零或多个'/'符号隔开的字符串，一般用来表示主机上的一个目录或文件地址 |
| query    | 参数    以键值对的形式，通过&符号分隔开来                    |
| fragment | 片段     #后面内容   常见于链接 锚点                         |

### 3、location 对象的属性：

| location对象属性  | 返回值                                  |
| ----------------- | --------------------------------------- |
| location.href     | 获取或者设置  整个URL                   |
| location.host     | 返回主机（域名）  www.itcast.com        |
| location.port     | 返回端口号  如果未写返回空字符串        |
| location.pathname | 返回路径                                |
| location.search   | 返回参数                                |
| location.hash     | 返回片段    #后面内容  常见于链接  锚点 |

##### 重点记：href 和 search

##### 案例：5秒之后自动跳转页面：

###### 案例分析：

​				1、利用定时器做倒计时效果

​				2、时间到了，就跳转页面。使用location.href

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button>点击</button>
    <div></div>
    <script>
        var btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            // console.log(window.location.href);
            location.href = 'http:/www.itcast.cn';
        })

        var div = document.querySelector('div');
        var timer = 5;
        fn();
        setInterval(fn, 1000)

        function fn() {
            if (timer == 0) {
                location.href = 'http://www.itcast.cn';
            } else {
                div.innerHTML = '您将在' + timer + '秒钟之后跳转到首页';
                timer--;
            }
        };
    </script>
</body>

</html>
```

### 4、location 对象的方法：

| location 对象方法  | 返回值                                                       |
| ------------------ | ------------------------------------------------------------ |
| location.assign()  | 跟 href 一样，可以跳转页面（也称为重定向页面）  可后退       |
| location.replace() | 替换当前页面，因为不记录历史，所以不能后退页面               |
| location.reload()  | 重新加载页面，相当于刷新按钮或者 f5  如果参数为true 强制刷新 ctrl+f5 |

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button>点击</button>
    <div></div>
    <script>
        var btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            // 记录浏览历史，所以可以实现后退功能
            // location.assign('http://www.itcast.cn');
            // 不记录浏览历史，所以不可以实现后退功能
            location.replace('http://www.itcast.cn');
        })
    </script>
</body>

</html>
```

### 5、navigator 对象：

​	navigator 对象包含有关浏览器的信息，它有很多属性，我们常用的是 userAgent ，该属性可以返回由客户机发送服务器的 user-agent 头部的值。

​	下面前端代码可以判断用户那个终端打开页面，实心跳转。

### 6、history 对象：

​	window 对象给我们提供了一个 history 对象，与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中）访问过的 URL。

​	history 对象一般在实际开发中比较少用，但是会在一些OA办公系统中见到。

| history对象方法 | 作用                                                         |
| --------------- | ------------------------------------------------------------ |
| back()          | 可以后退功能                                                 |
| forward()       | 前进功能                                                     |
| go(参数)        | 前进后退功能  参数如果是1 前进一个页面  如果是-1 后退一个页面 |

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <a href="list.html">点击我去往列表页</a>
    <button>前进</button>
    <script>
        var btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            // history.forward();
            history.go(1);
        })
    </script>
</body>

</html>
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <a href="C:\Users\salin\Desktop\2.6 5秒之后自动跳转页面.html">点击我返回首页</a>
    <button>返回</button>
    <script>
        var btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            // history.back();
            history.go(-1);
        })
    </script>
</body>

</html>
```



