# CSS3：

### 属性选择器：

| 选择符        | 简介                                  |
| ------------- | ------------------------------------- |
| E[att]        | 选择具有att属性的E元素                |
| E[att="val"]  | 选择具有att属性且属性值等于val的E元素 |
| E[att^="val"] | 匹配具有att属性、且值以val开头的E元素 |
| E[att$="val"] | 匹配具有att属性、且值以val结尾的E元素 |
| E[att*="val"] | 匹配具有att属性、且值中含有val的E元素 |

​	属性选择器的权重要高于标签选择器

​	类选择器、属性选择器、伪类选择器，权重为10

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
        /* curser属性为设置按钮的选中样式 pointer为小手状态 */
        /* 属性选择器的使用方法 */
        /* 选择的是：既是button 又有disabled 这个属性的元素 */
        
        button[disabled] {
            cursor: default;
        }
    </style>
</head>

<body>
    <!-- disabled 是禁用我们的按钮 -->
    <button>按钮</button>
    <button>按钮</button>
    <button disabled>按钮</button>
    <button disabled>按钮</button>
</body>

</html>
```

### 结构伪类选择器：

| 选择器           | 简介                       |
| ---------------- | -------------------------- |
| E:first-child    | 匹配父元素中第一个子元素E  |
| E:last-child     | 匹配父元素中最后一个子元素 |
| E:nth-child(n)   | 匹配父元素中的第n个子元素E |
| E:first-of-type  | 指定类型E的第一个          |
| E:last-of-type   | 指定类型E的最后一个        |
| E:nth-of-type(n) | 指定类型E的第n个           |

​	类选择器、属性选择器、伪类选择器，权重为10

##### nth-child（n）：

​		n 可以是数字、关键字和公式

​		n 如果是数字，就是选择第几个

​		常见的关键词有 even 偶数   odd 奇数

​		常见的公式如下（如果n是公式，则从0开始计算）

| 公式 | 取值                           |
| ---- | ------------------------------ |
| 2n   | 偶数                           |
| 2n+1 | 奇数                           |
| 5n   | 5    10    15……                |
| n+5  | 从第5个开始（包含第5个）到最后 |
| -n+5 | 前5个（包含第5个）……           |

注意：这里的公式只是用法的距离，实际上公式不固定，可以自己写公式！

​		但是 第0个元素或者超出了元素的个数会被忽略



注意：nth-child()在选择的时候只管选第几个，不管它是什么类型！

​			nth-of-type()在类型不一样时使用！

​			nth-of-type() 选择指定类型的元素！

​			ul里面我们允许放li 所以 nth-child 和 nth-of-type 就一样了

### 伪元素选择器：

​	伪元素不是真正的元素，但具有元素的一些特性，故叫伪元素！

|  选择符  |           简介           |
| :------: | :----------------------: |
| ::before | 在元素内部的前面插入内容 |
| ::after  | 在元素内部的后面插入内容 |

注意：

​		before 和 after 必须有 content 属性

​		before 在内容前面，after在内容后面

​		before和after创建一个元素，但是属于  行内  元素（设置样式必须转换为块级元素）

​		因为在dom里面看不见刚才创建的元素，所以我们称为伪元素

​		伪元素和标签选择权一样，权重为1

​		::	或	:	都可以生效，但标准的是	:	

### 伪元素字体图标：

​		……………………

### 2D转换：

​		转换（transform）是CSS3中具有颠覆性的特征之一，可以实现元素的位移、旋转、缩放效果

​		转换（transform）你可以简单理解为变形

​			移动：translate

​			旋转：rotate

​			缩放：scale

##### 移动：translate

语法：

```css
transform:translate(x,y);或者分开写
transform:translateX(n);
transform:translateY(n);
```

重点：

​		定义 2D 转换中的移动，沿着X和Y轴移动元素

​		translate最大的优点：不会影响到其他元素的位置———————！！！！！！！！

​		translate中的百分比单位是相对于自身元素的translate：（50%，50%）；

​		对#### 行内标签	####没有效果—————————————！！！！！！！！！

移动盒子的位置：定位	盒子的外边距	2d转换移动

##### 盒子居中：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        div {
            background-color: pink;
            width: 400px;
            height: 400px;
            transform: translateX(100%);
            position: relative;
            /*父元素需要添加相对定位的属性*/
        }
        p {
            width: 100px;
            height: 100px;
            background-color: red;
            position: absolute;
            top: 50%;/*position配合top left属性进行绝对定位*/
            left: 50%;
            /* margin-top: -50px;
            /* margin-left: -50px; */
            /*用margin属性将盒子居中，这是用px，高度宽度都定死了*/
            transform: translate(-50%, -50%);
            /*用tranform属性，定义自身百分比*/
        }
    </style>
</head>
<body>
    <div>
        <p></p>
    </div>
</body>

</html>
```

##### 旋转：rotate：

语法：

```css
transform:rotate(度数)
```

重点：

​			rotate里面跟度数，单位是deg 比如 rotate(45deg)

​			角度为正时：顺时针，负时：为逆时针

​			默认旋转的中心点是元素的中心点

​	过渡：

```css
/* 过渡写在本身上，谁做动画给谁加 */
transition: all 0.6s;
```

###### 小案例—旋转动画：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        div {
            background-color: pink;
            width: 400px;
            height: 400px;
            position: relative;
            /* 过渡写在本身上，谁做动画给谁加 */
            transition: all 0.6s;
        }
        p {
            width: 100px;
            height: 100px;
            background-color: red;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            /*用tranform属性，定义自身百分比*/
        }
        div:hover {
            transform: rotate(360deg);
        }
    </style>
</head>
<body>
    <div>
        <p></p>
    </div>
</body>
</html>
```

###### 小案例—三角旋转：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=div, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 249px;
            height: 35px;
            border: 1px #000 solid;
            position: relative;
        }
        div::after {
            content: "";
            position: absolute;
            top: 8px;
            right: 15px;
            width: 10px;
            height: 10px;
            border-bottom: 1px #000 solid;
            border-right: 1px #000 solid;
            transform: rotate(45deg);
            transition: all 0.6s;/*一定要记得加单位秒：s*/
        }
        div:hover::after {/*记住该种选择器的写法*/
            transform: rotate(225deg);
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```

##### 转换中心点：transform-origin:

语法：

```css
transform-origin: x y;
```

重点：

​			注意后面的参数 x 和 y 用空格隔开

​			x y 默认转换的中心点是元素的中心点（50%  50%）

​			还可以给 x y 设置 像素 或者  方向名词（top  bottom  left  right  center）

注意：

​			默认的为 50%  50%	等价于   center  center

​			可以是像素px

##### 缩放：scale：

缩放，顾名思义，可以放大和缩小。只要给元素添加上了这个属性就能控制它放大还是缩小

语法：

```css
transform:scale(x,y);
```

注意：

​			注意其中的x和y用逗号分隔

​			transform:scale(1,1)：宽和高都放大一倍，相对于本身没有放大

​			transform:scale(2,2)：宽和高都放大两倍

​			transform:scale(2)：只写一个参数，第二个参数则和第一个参数一样，相当于scale(2,2)

​			transform:scale(0.5,0.5)：缩小

​			scale缩放最大的优势：可以设置转换中心点缩放，默认以中心点缩放的，而且不影响其他盒子——————————！！！！！！！！！！！！！！！！！！！！！

​			scale放大的时候如果有盒子阴影的话也会将盒子阴影放大！！！！！！！！！！

​			在写样式中可能不显示，有可能是权重问题！！！！	可以添加!important来直接解决！！！！	也可以比较权重后再修改高一些！！！！

​	普通的只会使盒子往下变大或变小从而影响下面的盒子，如：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=div, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 100px auto;
        } 
        div:hover {
            width: 100px;
            height: 100px;
            background-color: black;
        }
    </style>
</head>
<body>
    <div></div>
    123456
</body>
</html>
```

##### 图片放大：

​	1、给父元素添加overflow:hidden属性，将多余的部分隐藏

​	2、利用translate:scale()给图片设置放大的倍数	

​	3、利用transition: ;设置过渡，切记谁过渡把属性加到谁身上，过渡图片为 img

##### 2D转换综合写法：

注意：

​		1、同时使用多个转换，其格式为：transform:translate() rotate() scale() 等等

​		2、其顺序会影响转换的效果。（先旋转会改变坐标轴方向）

​		3、当我们同时有位移和其他属性的时候，记得要将位移放到最前面

看案例：位移和旋转的顺序案例

### 动画：

​	动画（animation）是CSS3中具有颠覆性的特性之一，可通过设置多个节点来精确控制一个或一组动画，常用来实现复杂的动画效果。相比较过渡，动画可以实现更多变化，更多控制，连续自动播放等效果。

##### 一、动画的基本功：

​	制作动画分为两步：

​			1、先定义动画

​			2、再使用（调用）动画

1、用keyframes（关键帧）定义动画（类似于定义类选择器）

```css
@keyframes 动画名称 {
    0%{
        width:100px;
    }
    ……
    100%{
        width:200px;
    }
}
```

动画序列：

​			0%是动画的开始，100%是动画的完成。这样的规则就是动画序列。

​			在@keyframes中规定某项CSS样式，就能创建由当前样式逐渐改为新样式的动画效果。

​			动画是使元素从一种样式逐渐变化为另一种样式的效果。你可以改变任意多的样式任意多的次数。

​			请用百分比来规定变化发生的时间，或用关键词"from"和"to"，等同于0%和100%。

​			可以做多个状态的变换  keyframe  关键帧。

​			里面的百分比要是整数。

​			里面的百分比就是  总的时间  的划分。

2、元素使用动画

```css
div {
      width: 200px;
      height: 200px;
      background-color: aqua;
      /* 调用动画 */
      animation-name: 动画名称;
      /* 持续时间 */
      animation-duration: 持续时间(单位为秒);
}
```

##### 二、动画常见属性：

|           属性            |                             描述                             |
| :-----------------------: | :----------------------------------------------------------: |
|         @keyframe         |                           规定动画                           |
|         animation         |    所有动画片属性的简写属性，除了animation-play-state属性    |
|      animation-name       |              规定@keyframes动画的名称（必须的）              |
|    animation-duration     |  规定动画完成一个周期所花费的秒或毫秒，默认为0（必须的）。   |
| animation-timing-function |                规定动画速度曲线，默认是"ease"                |
|      animation-delay      |                  规定动画何时开始，默认为0                   |
| animation-iteration-count |         规定动画被播放的次数，默认是1，还有infinite          |
|    animation-direction    | 规定动画是否在下一周期逆向播放，默认是"normal"，alternate逆播放 |
|   animation-play-state    |  规定动画是否正在运行或暂停。默认是"running"，还有"paused"   |
|    animation-fill-mode    |      规定动画结束后状态，保持forwards回到起始backwards       |

##### 三、动画简写属性：

​	animation:动画名称(必写)    持续时间(必写)    运动曲线    何时开始    播放次数    是否反方向    动画起始或者结束的状态。

​	注意：

​			animation-play-state属性需要单写！

##### 四、动画速度曲线步长：

animation-timing-function：规定动画的速度曲线，默认是"ease"

|     值      |                     描述                     |
| :---------: | :------------------------------------------: |
|   linear    |       动画从头到尾的速度是相同的，均匀       |
|    ease     | 默认，动画以低速开始，然后加快，在结束前变慢 |
|   ease-in   |                动画以低速开始                |
|  ease-out   |                动画以低速结束                |
| ease-in-out |             动画以低速开始和结束             |
|   steps()   |      指定了时间函数中的间隔数量（步长）      |

### 3D：

特点：

​		近大远小

​		物体后面的遮挡不可见

##### 三维坐标系：

​		X轴：水平向右		注意：X右边是正值，左边是负值

​		Y轴：垂直向下		注意：Y下面是正值，上面是负值

​		Z轴：垂直屏幕		注意：往外面是正值，往里面是负值

##### 3D位移：translate3d(x,y,z):

​		transform:translateX(100px)：仅仅是在X轴上移动

​		transform:translateY(100px)：仅仅是在Y轴上移动

​		transform:translateZ(100px)：仅仅是在Z轴上移动（注意：translateZ一般用px单位）——————！！！！！！！！

​		transform:translate3d(x,y,z)：其中x、y、z分别指要移动的轴的方向的距离

​		x y z是不能省略的，如果不要就写 0 

##### 3D转换透视：perspective：

​		如果想要在网页产生3D效果需要透视（理解成3D物体投影在2D平面内）

​		模拟人类的视觉位置，可认为安排一只眼睛去看

​		透视我们也称为视距：视距就是人的眼睛到屏幕的距离

​		距离视觉点越近的在电脑平面成像越大，越远成像越小

​		透视的单位是像素

注意：

​		透视要写在被观察元素的父盒子上面

​				d：就是视距，视距就是一个距离人的眼睛到屏幕的距离

​				z：就是z轴，物体距离屏幕的距离，z轴越大（正值）我们看到的物体就越大

##### 3D旋转 rotate3d：

3D旋转指可以让元素在三维平面内沿着x轴，y轴，z轴或者自定义轴进行旋转。

语法：

​		transform:rotateX(45deg)：沿着x轴正方向旋转 45 度

​		transform:rotateY(45deg)：沿着y轴正方向旋转 45deg

​		transform:rotateZ(45deg)：沿着Z轴正方向旋转 45deg

​		transform:rotate3d(x,y,z,deg)：沿着自定义轴旋转 deg为角度（了解即可）

##### 3D呈现  transform-style:

​		控制子元素是否开启三维立体环境

​		transform-style:flat; 子元素不开启3d立体空间 默认的

​		transform-style:preserve-3d; 子元素开启立体空间

​		代码写给父级，但是影响的是子盒子

​		这个属性很重要，后面必用