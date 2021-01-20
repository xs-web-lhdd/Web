# CSS字体和文本样式：

## · 文字：颜色、字体颜色、字体、加粗

## · 文本：行高、对齐方式、文本装饰

### 第2章 字体样式：

#### 	字体样式属性：

字体：font-family	字体大小：font-size	文字颜色：color	

文字粗细：font-weight	文字样式：font-style

​	在HTML里面可以用<font></font>标签对字体进行设置，如：

```html
<h1><font face="宋体" color="red" size="20px">内容1</font></h1>
```

##### 	font-family：

定义元素内文字以什么字体来显示：

​	语法：

​		font-family:[字体1],[字体2]......

​	说明：

· 含空格字体名和中文，用英文引号（“”）括起

· 多个字体，用英文逗号","隔开

```css
设置多个字体：
p{font-family:"微软雅黑","宋体","黑体";}

这里的意思是先去找微软雅黑字体，若没有则用宋体，再没有用黑体，若黑体也没有就用浏览器默认的字体
```

· 引号嵌套，外使用双引号，内使用单引号

```html
<p style="font-family:'微软雅黑','黑体'">CSS层叠样式</p>
外使用双引号，内使用单引号
```

##### 	font-family字体属性：

font-family属性值：具体字体名，字体集

字体集：

​		Serif

​		Sans-serif

​		Monospace

​		Cursive

​		Fantasy

##### 	font-size文字大小：

定义元素内文字大小

​	语法：

​		font-size:绝对单位|相对单位

​	绝对单位（大小固定不会变化，不能随浏览器分辨率或父元素大小的改变而改变）：in、cm、mm、pt、pc       xx-small、x-small、small、medium、large、x-large、xx-large

​	相对单位：px像素（受显示器分辨率影响)、em（针对父元素）、%（针对父元素）

1、当不设置字体大小时，默认为浏览器默认值。

2、em和%都是针对父元素而言

##### 	color文字颜色：

colorname、rgb形式（数字：0~255、百分比：0%~100%）、16进制（#开头）

​	16进制时：#080 等同于 #008800

​	可查询：web安全色

##### 	font-weight文字粗细：

为元素内文字设置粗细

​	语法：

​		font-weight：normal|bold|bolder|lighter|100~900

​	说明：

​		默认值：normal

​		400等同于normal，而700等同于bold

设置文字斜体：

​	在HTML用<i></i>或<em></em>

​	在css中用font-style

##### 	font-style文字样式：

为元素内文字设置样式：

​	语法：

​		font-style：normal（正常）|italic（斜体）|oblique（倾斜）

##### 	font-variant字体变形：

设置元素中文本为小型大写字母(针对英文)

​	语法：

​		font-variant：normal|small-caps（小型大写字母）

##### 	font属性（简写）：

语法：

​	font:font-style font-variant font-weight font-size/line-height font-famliy

说明：

​		值之间空格隔开

​		注意书写顺序

​		同时设置font-size和font-family，属性才起作用

​		前三者之间的顺序是任意的，但后两者的顺序不可颠倒是固定的

​		简写的时候有多个字体时还是用 “  ,  ” 隔开

### 第3章 文本样式：

#### 文本对齐方式：

##### 	text-align：

设置元素内文本的水平对齐方式

​	语法：

​		text-align:left|right|center|justify

​	可将img属性外边加一个div标签（将行内元素转换成块级元素），将图像居中显示。

​	text-align可继承

#### 行高：

##### 	line-height：

注：当字体大小发生变化（px）时，行与行之间距离是不一样的。

​	em和%与字体大小有关

​	浏览器有默认行高，不同浏览器默认行高不一样，一般是120%

#### vertical-align属性：

设置元素内容的垂直方式：

​	语法：

​		vertical-align:baseline|sub|super|top|text-top（与文本顶端对齐）|middle|bottom|text-bottom（与文本底端对齐）|长度|百分比

​	注意：

​		垂直对齐方式对行内元素和单元格元素才生效，对块级元素是不生效的，行内元素不能放块级元素！

​		在长度中：上移就是15px，下移就是-15px，在这里上移下移都是对基线而言，百分比也是如此

##### 垂直居中的用法：

单行垂直水平居中：

​	1、行高与高度相同

​	2、text-align用center

多行垂直水平居中：

​	1、将块级元素转换为单元格元素，用display:table-cell属性

​	2、记得在父元素中也要设置display:table属性

​	3、接着用text-align:center进行水平居中

​	注意：1、2两步都要用vertical-align:middle属性，进行垂直对齐方式的垂直居中，但该方式只对行内或单元格元素起作用，故需要display属性进行样式转换！

#### 文本样式其他属性：	

|    字体属性     |                             说明                             |
| :-------------: | :----------------------------------------------------------: |
|  word-spacing   |                    设置元素内单词之间间距                    |
| text-decoration | 设置元素内文本的装饰underline(下划线)\|overline(上划线)\|line-through（贯穿线）\|blink(闪烁效果，有兼容问题)\|none(无任何效果) |
| letter-spacing  |                    设置元素内字母之间间距                    |
| text-transform  | 设置元素内文本的大小写 capitalize（首字母大写）\|uppercase（设置为大写）\|lowercase（设置为小写）\|none（不做任何设置） |

注意：word-spacing对中文不起作用，但如果中文之间用空格隔开那么就会起作用！

​			letter-spacing对中英文均起作用，设置的值可正（间距变大）可负（间距变小）！

​			text-decoration不能继承！