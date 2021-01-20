## 								01 CSS选择的艺术

——CSS是表现（外观控制）

什么是CSS：————css为层叠样式

为什么学系CSS：

1、css简化HTML相关标签，网页体积小，下载快

2、解决内容与表现分离的问题

3、更好地维护网页，提高工作效率

#### 												第2章  CSS基础语法

##### 2-1 CSS基础语法：

###### 													       **CSS样式规则**

CSS规则由两部分构成：选择器、声明

​	选择器是为了告诉浏览器给谁设置样式！

```css
h1 		{color 	: 	red;	font-size	:	14px;}
```

选择器  		属性	  声明	值		     属性			声明		值

{}为样式分隔符

###### 															CSS引用

写在<head></head>标签内：

```css
<style type="text/css">
	css样式…………
</style>
```
注:font-size这个属性带单位,值和单位之间不能有空格,如果有空格则值不起作用;

​	在{}内如果不止一个属性,则属性与属性之间用分号隔开

- [x] 记得在每一个声明后边加	;	*养成良好的书写习惯*（最后一个 ; 可有可无）
- [x] 记得所有输入都要用英文符号输入(除了汉字)-----------切记

```css
如:p{font-size:16px	;	color:blue;}
```

- [x] 样式可以并排写:							节省网页空间

```css
p{font-size:16px;color:blue;}h1{color:red;}
```

​	但为了阅读性好和维护性好,往往另起一行去写:

```css
p{font-size:16px;
  color:blue;}
h1{color:red;}
```

- [x] 相同选择器写在一起,每个选择器之间用 	,	隔开:

```css
p,h1,h3,h2,h4{color:black;}
```

- [x] HTML的注释:<!--        -->                      CSS注释:        /*        */

##### 2-5CSS使用方法：

###### 如何引用CSS样式：

——行内样式（内联样式） 	——内部样式表（嵌入样式）		——外部样式表			——导入式

###### 														CSS行内样式

在开始标签内添加style样式属性	如：

```css
<p style="color:red;">内容</P>
```

注:属性要写在开始标签内，不能写在结束标签内，且属性和标签之间要有空格。

style为样式属性 用来定于样式，想要多个属性即在style内用	；	隔开然后书写

```css
<p style="color:red;font-size；16px;">内容</P>
```

由此可见行内样式非常占空间，因此不建议大家大量使用，当个别元素需要特别设置样式时可以运用行内样式。

###### 														CSS内部样式

把代码写在：

```html
	<style type="text/css">
         css样式…………
    </style>
```

该样式为固定样式，只能放在<head></head>标签内

​	在style标签中用HTML的注释将样式包裹住，因为在有些低版本的浏览器中不能识别style标签，就会将样式以HTML的形式表现出来，注释包裹住之后就算浏览器识别不出来style样式也不会将其显示出来。

###### CSS外部样式

——外部样式表，把CSS样式代码写在独立的一个文件中

——扩展名：CSS文件名.CSS

直接将CSS样式写在外部样式表里即可

——引入外部文件：

```css
<linK href="XX.css" rel="stylesheet" type="text/css"/>
```

href为链接路径（可以是相对路径也可以是绝对路径）	rel定义了链接和文档的关系	type说明了文档是什么类型	text/css说明了文档为一个样式表

注：<link/>标签也要放到<head></head>标签内

###### CSS导入式

——@import		"外部CSS样式"                                    其需要写在<style></style>标签内

方法一：

```html
<style type="text/css">
	@import    "XX.css"
</style>
```

方法二：

```html
<style type="text/css">
	@import url(XX.css)
</style>
```

###### CSS使用方法区别：

|     类别      |    引入发布方法    |           位置            |           加载            |
| :-----------: | :----------------: | :-----------------------: | :-----------------------: |
|   行内样式    |  开始标签内style   |        html文件内         |           同时            |
|   内部样式    | <head>中<style>内  |        html文件内         |           同时            |
| 链入外部样式  | <head>中<link>引用 | css样式文件与html文件分离 | 页面加载时同时加载css样式 |
| 导入式@import | 在样式代码最开始处 | css样式文件与html文件分离 | 在读取完html文件之后加载  |

​	链入外部样式在实际开发中用的比较多     好处:

1、CSS和html分离

2、多个文件可以使用一个样式文件

3、多文件引用同一个css文件，css只需我下载一次

​	在实际开发中链入外部样式（外联样式）比导入式用的多：

1、边加载边表现样式

2、浏览器兼容性较好

###### CSS使用方法优先级：

行内样式先于内部样式；内部样式先于导入样式；内部样式与链入外部样式的优先级取决于位置，谁的位置离设置的元素近，谁的优先级就高（就近原则），元素指body中的元素。

##### 													行内样式>内部样式>外部样式

说明:

​	1、链入外部样式表与内部样式表之间的优先级取决于所处位置的先后

​	2、最后定义的优先级最高（就近原则）

#### 第3章 CSS选择器

​	注意：CSS是不区分大小写的，但类选择器和ID选择器是区分大小写的！

##### 3-1 选择器（标签选择器和类选择器）：

###### 																		标签选择器

以HTML标签作为选择器：例如：

```css
P,h1,h2,h3,h4{font-size:30px;}
      /*p标签样式*/
      p{color:biue;
        font-family:"隶书";}
      h1{color:red;}
```

###### 																			类选择器															

 注：只要通过class属性引用类选择器设置的样式，那该标签引用相应的样式。

一、为HTML标签添加class属性：

```html
<h1 class="red">内容1</h1>
```

```html
     <p> 内容2</p>
```

```html
	<p class="red">内容3</p>
```

二、通过类选择器来为具有此class属性的元素设置css样式：

​            .red{color:red;}

三、可对不同类型元素的同一个名称的类选择器设置不同的样式规则：

```css
p.red{font-size:50px;}
h1.red{font-size:20px;}
/*在相应的类选择器上加上标签名*/
```

注：只有设置了class为red的<p>和<h1>标签，才可以引用该样式。

四、同一个元素可以设置多个类，之间有空格隔开：

```html
<h1 class="red">内容1</h1>
<p class="red fsize">内容2</p>
<p class="red">内容3</p>

注意：这样的写法是错误的！
<p clss="red" class="fsize">内容2</p>
```

###### ID选择器：

​	为HTML标签添加ID属性：

```html
<h1>内容1</h1>
<p id="p1">内容2</p>
<p id="p2">内容3</p>
```

​	通过ID选择器来为具有此ID的元素设置CSS规则：

```css
#p1{color:red;}
#p2{color:blue;}
```

​	注意：ID选择器不能像classs选择器可以添加到多个元素上面，id是唯一的

```html
<h1 id="two">内容1</h1>
<ul id="two">内容2</ul>
<li id="two three"></li>
<!--注意：这样写是不正确的-->
```

###### 群组选择器和全局选择器：

​	群组选择器：集体统一的设置样式

```css
p,h1,h2,h3,h4{font-size:30px;}
/*P标签样式*/
p{
    color:blue;
    font-size:"隶书";}
h1{color:red;}

可以实现代码的快速开发，也节省空间，其他选择器也可以这样设置
```

​	全局选择器（通配符选择器）：所有标签进行样式设置

```CSS
*{
    color:blue;
    ......
}
/*全局选择器是对所有元素都进行设置，当再用其他选择器进行设置时就会发生更改*/
```

###### 后代选择器：

从要添加元素的祖先写起，不同级（如：父 子）中间用空格隔开，同一级（如：兄弟）用 , 隔开！

​	注意：后代选择器虽然相对来说提高了一些效率，但是由于后代选择器的权重和优先级的问题会影响我们样式引入的一个冲突，所以我们在使用后代选择器时一定要注意这个问题！

###### 伪类选择器：

​	——伪类选择器定义特殊状态下的样式

​	——无法用标签、id、class及其他属性实现

链接伪类：

|   伪类   |     说明     |
| :------: | :----------: |
|  :link   | 未访问的链接 |
| :visited | 已访问的链接 |
|  :hover  | 鼠标悬停状态 |
| :active  |  激活的链接  |

​	注意：元素和伪类之间是紧挨着的，之间没有空格!

```css
	以下的都是正确的，元素和伪类之间是紧挨着的
a:link{color:red;}/*未访问状态*/
a:visited{}/*已访问状态*/
a:hover{color:yellow;}/*鼠标悬浮状态*/
a:active{}/*激活状态*/
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style type="text/css">
    a:link{color:red;}/*未访问状态*/
    a:visited{}/*已访问状态*/
    a:hover{color:yellow;}/*鼠标悬浮状态*/
    a:active{}/*激活状态*/
</style>
</head>
<body>
    <a href="http://www.imooc.com" target="_blank">CSS使用方法</a>
</body>
</html>
```

​	

​	伪类:hover和:active不单单只用于a标签：

1.:hover用于访问的鼠标经过某个元素时

2.:active用于一个元素被激活时（即按下鼠标之后放开鼠标之前的时间）



​	伪类:hover和:active兼容：

·IE6及更早版本，支持<a>元素的4种状态

·IE6浏览器不支持其他元素的:hover和:active



​	注意：链接伪类的顺序：

:link > :visited > :hover > :active

说明：

​	1、a:hover 必须置于 a:link 和 a:visited 之后，才有效

​	2、a:active 必须置于 a:hover 之后，才有效

​	3、伪类名称对大小写不敏感

##### 第四章 CSS继承、层叠和优先级：

###### 4-1CSS继承和层叠：

​	继承好处：

​		1.父元素设置样式，子元素可以继承部分属性

​		2.减少CSS代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style type="text/css">
    div{
        font-size: 12px;/*子元素可以继承父元素属性*/
        color:red;/*子元素可以继承父元素属性*/
        border:1px solid red;/*子元素不可以继承父元素属性*/
    }
</style>
</head>
<body>
    <div><!--父元素-->
        <p>CSS<span>继承</span></p><!--子元素-->
        <div>CSS层叠</div>
    </div>
    <p>CSS继承和层叠</p>
</body>
</html>
```

​	注意：继承也会发生错误如：在IE6以下浏览器表格就不会继承body设置的属性。为了解决这种问题就用群组选择器



​	CSS层叠：

·可以定义多个样式

·不冲突时(如：字体和颜色），多个样式可层叠为一个

·冲突时（都是颜色），按不同样式规则优先级来应用样式(：就近原则)



###### 4-4CSS选择器优先级

​	Id选择器优先于标签选择器；class选择器优先于标签选择器；id选择器优先于class选择器；在定义多个class时的顺序对样式的表现无影响，有样式冲突时后定义的样式起作用（就近原则），跟定义class值的先后顺序无关系；同类（标签、ID、class等）样式多次引用，样式表中后定义的优先级高。



​	CSS优先级规则：

​		同一样式表中：

​			1、权值相同

​					就近原则（离被设置元素越近优先级越高）

​			2、权值不同:

​					根据权值来判断CSS样式，

​					那种CSS样式权值高，就使用那种样式

##### 	选择器的权值:

##### ·标签选择器：权值为1

##### ·类选择器和伪类：权值为10

##### ·ID选择器：权值为100

##### ·通配符选择器：权值为0

##### ·行内样式：权值为1000



​	！important规则

1、可调整样式规则的优先级

2、添加在样式规则之后，中间用空格隔开

```css
div{color:red !important;}
在一定情况下它的优先级最高
```



###### CSS优先级总结：

1、！important声明高

2、CSS使用方法的优先级

​			行内样式 > 内部样式 > 外部样式

​		注：link链入外部样式和style内部样式优先级，取决于先后顺序

3、样式表中优先级

​			ID选择器 > class选择器 > 标签选择器 > 通配符

​		权值相同：就近原则

​		权值不同：使用权值高的

##### 第五章 CSS命名规范：

CSS样式命名：

​	· 采用英文字母、数字以及“-”和“_”命名

​	· 以小写字母开头，不能以数字和“-”、“_”开头

​	· 命名形式：单字，连字符，下划线和驼峰

```css
/*驼峰写法：除第一个单词外，其他首字母大写*/
.mainTitle{......}
```

​	· 使用有意义命名

###### 常用的css样式命名：

1、页面结构:

| 页头：header            | 导航：nav                 |
| :---------------------- | :------------------------ |
| 页面主体：main          | 侧栏：siderbar            |
| 页尾：footer            | 栏目：column              |
| 内容：content/container | 页面外围控制：wrapper     |
| 容器：container         | 左右中：left right center |

2、导航

| 导航：nav           |                      |
| ------------------- | -------------------- |
| 主导航：mainnav     | 菜单：menu           |
| 子导航：subnav      | 子菜单：submenu      |
| 顶导航：topnav      | 标题：title          |
| 边导航：sidebar     | 摘要：summary        |
| 左导航：leftsidebar | 右导航：rightsidebar |

3、功能

| 标志：logo       | 注册：register |
| ---------------- | -------------- |
| 广告：banner     | 搜索：search   |
| 登陆：login      | 功能区：shop   |
| 登陆条：loginbar | 标题：title    |

​		id和class的使用

​	· id不要滥用，谨慎使用

​	· 适当使用class

