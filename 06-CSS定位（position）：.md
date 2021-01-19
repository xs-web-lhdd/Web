# 06-CSS定位（position）：

#### position的应用：

​		1、position Layout Module（position作为模块）：

​							提供与元素定位和层叠相关功能 它是核心模块

包含：

​			1、盒子模型的类型和尺寸

​			2、布局模型

​			3、元素之间的关系

​			4、视口大小、图像大小等其他相关方面



​		2、属性中的position，如：

```css
.box{position:relative;}
```

#### 课前小知识点：

​		document tree：即HTML文档中的关系图——祖先节点、兄弟节点等

​		normal-flow（自然顺序）：即没有人为干涉的节点顺序——祖先节点到子孙节点

​		containing-block：容器概念

#### 定位模型：

​			static	自然模型							relative	相对定位模型							absolute	绝对定位模型				fixed	固定定位模型				sticky	磁贴定位模型

## 第二章 position属性（重难点）：

### static（默认定位）：

​	——静态定位/常规定位/自然定位——————定位中的一股清流—回归本真

作用：使元素位于 常规/自然流 中

​			（块、行垂直排列下去、行内水平从左到右）

特点：

​			1、忽略top、bottom、left、right或者z-index声明

​			2、两个相邻元素如果都设置了外边距，那么最终外边距=两者外边距中最大的

​			3、具有固定width和height值的元素，如果把左右外边距设置为auto，则左右外边距会自动扩大占满剩余宽度。造成的效果就是 这个块水平居中

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>position</title>
    <style type="text/css">
        *{
            margin: 0;
            padding: 0;
        }
        .l1{
            width:100px;
            height:100px;
            background: red;
            position: static;
            margin:0 auto;
        }
    </style>
</head>
<body>
    <div class="main">
        <div class="l1">111</div>
    </div>
</body>
</html>
```

### relative（相对定位）：			 

​		作用：使元素成为 containing-block-官话是 可定位的祖先元素（以祖先为参照物进行定位）

​		特点：

​					1、可以使top、right、bottom、left、z-index进行相对定位——？相对的是谁（相对的是原来在常规流中的位置）

​					2、相对定位的元素不会离开常规流——心念家乡（原来的位置还在）————————重要！

​					3、任何元素都可以设置为relative，它的绝对定位的后代都可以相对于它进行绝对定位——超好用

​					4、可以使浮动元素发生偏移，并控制它们的堆叠顺序 ——————————————重要！

举例：特点2例子：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
            *{
                margin: 0;
                padding: 0;
            }
            .l1{
                width: 80px;
                height: 80px;
                line-height: 80px;
                border:2px red solid;
                text-align: center;
            }
            .l2{
                width: 80px;
                height: 80px;
                line-height: 80px;
                border:2px red solid;
                text-align: center;
                position: relative;
                top: 10px;
                left:10px;
            }
            .l3{
                width: 80px;
                height: 80px;
                line-height: 80px;
                border:2px red solid;
                text-align: center;
            }
    </style>
</head>
<body>
    <div class="l1">a</div>
    <div class="l2">b</div>
    <div class="l3">c</div>
</body>
</html>
```

举例：特点4（浮动元素发生偏移）例子：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
            *{
                margin: 0;
                padding: 0;
            }
            .l1{
                width: 80px;
                height: 80px;
                line-height: 80px;
                border:2px red solid;
                text-align: center;
                float: left;
            }
            .l2{
                width: 80px;
                height: 80px;
                line-height: 80px;
                border:2px red solid;
                text-align: center;
                float: left;
                /* top: 10px;想让其发生偏移——无效 */
                position: relative;/*用该属性就会生效*/
                top:10px;
            }
    </style>
</head>
<body>
    <div class="l1">a</div>
    <div class="l2">b</div>
</body>
</html>
```

特点4（堆叠顺序：b堆叠a上面）例子：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
            *{
                margin: 0;
                padding: 0;
            }
            .l1{
                width: 80px;
                height: 80px;
                line-height: 80px;
                border:2px red solid;
                text-align: center;
                float: left;
            }
            .l2{
                width: 80px;
                height: 80px;
                line-height: 80px;
                border:2px black solid;
                text-align: center;
                float: left;
                /* top: 10px;想让其发生偏移——无效 */
                position: relative;/*用该属性就会生效*/
                top:0px;/*b方格堆叠到a方格上面*/
                left:-84px;
            }
    </style>
</head>
<body>
    <div class="l1">a</div>
    <div class="l2">b</div>
</body>
</html>
```

### absolute（绝对定位）——实际工作中用的最多，同时也相对较难：

​			作用：使元素脱离常规流

​			特点：

​					1、脱离常规流

​					2、设置尺寸要注意：百分比比的是谁？——最近定位祖先元素

​					3、lrtb(left、right、top、bottom)如果设置为0 它将对齐到最近定位祖先元素的各边——衍生出一个居中妙计

​					4、lrtb如果设置为auto 它将被打回原形

​					5、如果没有最近定位祖先元素 会认body做爹爹

​					6、z-index可以控制堆叠顺序，999999见过吧？

举例 特点1 如：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
            .l1{
                width:80px;height:80px;line-height: 80px;text-align: center;border: 2px blue solid;
                position: absolute;top: 20px;left: 20px;z-index: 999999;
            }
            .l2{
                width:80px;height:80px;line-height: 80px;text-align: center;border: 2px red solid;
                position: absolute;top: 20px;left: 20px;z-index: 1;
            }
            .l3{
                width:80px;height:80px;line-height: 80px;text-align: center;border: 2px black solid;
            }
    </style>
</head>
<body>
    <div class="l1">A</div>
    <div class="l2">B</div>
    <div class="l3">C</div>
</body>
</html>
```

##### 如果必须将2设置在1旁边，那么只需要将1设置为相对定位，将2设置为绝对定位即可！

如：小广告式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        .parent{
            width:400px;
            height: 300px;
            background: blue;
            position: relative;
        }
        .child{
            width: 100px;
            height: 100px;
            background: red;
            position: absolute;
            right: -100px;
            top: 0;
        }
    </style>
</head>
<body>
    <div class="parent">
        <div class="child"></div>
    </div>
</body>
</html>
```

举例 特点3 如：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        .parent{
            width:400px;
            height: 300px;
            background: blue;
            position: relative;
        }
        .child{
            background: red;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
        }
    </style>
</head>
<body>
    <div class="parent">
        <div class="child"></div>
    </div>
</body>
</html>
```

举例： 如：垂直居中

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        .parent{
            width:400px;
            height: 300px;
            background: blue;
            position: relative;
        }
        .child{
            width: 100px;
            height: 100px;
            background: red;
            position: absolute;
            margin: auto auto;
            right: 0;
            left: 0;
            top: 0;
            bottom: 0;
        }
    </style>
</head>
<body>
    <div class="parent">
        <div class="child"></div>
    </div>
</body>
</html>
```

### fixed（固定定位）——广告图：

​			作用：我跟绝对定位不本是同根生相煎何太急

​			特点：

​					1、跟absolute有啥区别？——相对于谁做绝对定位（只有这个一个区别）

​					2、固定定位元素不会随着视口（用户肉眼可见的区域）滚动而滚动

​					3、继承absolute特点

举例：绝对和固定1区别：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        body{
            height: 1000px;
            color: blue;
        }
        .l1{
            width: 100px;
            height: 100px;
            border: 2px black solid;
            line-height: 100px;
            text-align: center;
            position: absolute;
        }
        .l2{
            width: 100px;
            height: 100px;
            border: 2px black solid;
            line-height: 100px;
            text-align: center;
            position: fixed;
        }
    </style>
</head>
<body>
    <div class="l1">绝对定位</div>
    <div class="l2">固定定位</div>
</body>
</html>
```

