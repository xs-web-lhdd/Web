# CSS背景和列表：

#### 背景样式：

​	· background-color：设置元素的背景颜色

​	· background-image：把图像设置为背景

​	· background-position：设置背景图像的起始位置

​	· background-attachment：背景图像是否固定或者随着页面的其余部分滚动

​	· background-repeat：设置背景图像是否重复及如何重复

​	· background：简写属性，作用是将背景属性设置在一个声明中

#### 列表样式：

​	· list-style-type：设置列表项标志的类型

​	· list-style-image：将图像设置为列表项标志

​	· list-style-position：设置列表中列表项的位置

​	· list-style：简写属性，用于把所有列表的属性设置于一个声明中

#### 第二章 CSS背景：

##### 背景颜色：

​	设置元素的背景颜色

​	background-color:颜色|transparent

说明：

​		· transparent是全透明黑色（black）的速记法，类似rgba(0,0,0,0)这样的值

​		· 颜色值（颜色名|RGB|十六进制|）————最常用，兼容性最好！

​		· 背景包括内容、内边距（padding）和边框、不包含外边距（margin）  

##### 背景图片：

​	设置元素的背景图片：

​	background-image:URL(图像路径)|none

说明：

​		· URL地址可以是相对地址也可以是绝对地址。

​		· 元素的背景占据了元素的全部尺寸，包括内边距和边框，但不包括外边距。

​		· 默认地，背景图像位于元素的左上角，并在水平和垂直方向上重复。

##### 既设置背景图片又设置背景图片时，背景图片会覆盖背景颜色。

##### 背景图片重复：

​	设置元素的背景图片的重复方式：

​	background-repeat:repeat（重复）|no-repeat|repeat-x（水平重复）|repeat-y（竖直重复）

​		注意：如果不用no-repeat的话那么其他定义的属性不起作用！

##### 背景图片显示方式：

​	设置元素的背景图片的显示方式：

​	background-attachment:scroll|fixed

说明：

​		scroll：默认值，背景图片随滚动条滚动

​		fixed：当页面的其余部分滚动时，背景图片不会移动

##### 背景图片定位：

​	设置元素的背景图片的起始位置：

​	background-position:百分比|值|top|right|bottom|left|center

|       值        |                             说明                             |                注意                |
| :-------------: | :----------------------------------------------------------: | :--------------------------------: |
|  长度值（x y）  |         第一个值水平方向，第二个值垂直位置左上角0 0          | 只写一个参数的话，第二个默认为居中 |
| 百分比（x% y%） | 第一个值水平位置的百分比，第二个值垂直位置的百分比  左上角0%  0%，右下角100%  100%，如果仅规定了一个值，另一个值将是50% | 只写一个参数的话，第二个默认为居中 |
|       top       |          顶部显示，相当于垂直方向0（整个容器上边）           | 只写一个参数的话，第二个默认为居中 |
|      right      |           右边显示，相当于右边100%（整个容器右边）           | 只写一个参数的话，第二个默认为居中 |
|      left       |          左边显示，相当于水平方向0（整个容器左边）           | 只写一个参数的话，第二个默认为居中 |
|     bottom      |         底部显示，相当于垂直方向100%（整个容器下边）         | 只写一个参数的话，第二个默认为居中 |
|     center      |          居中显示，相当于水平方向50%或者垂直方向50%          |        水平、垂直方向都居中        |

​		注意：这里的位置是相对整个网页而言的，故：如果单独放在一个容器中且容器过小有可能看不到定位的图片！

##### 背景缩写：

background:[background-color]	[background-image]	[background-repeat]

​						[background-attachment]	[background-position]

说明：

​		· 各值之间用空格分隔，不分先后顺序

#### 第三章 CSS列表：

##### 列表项标记：

​	设置列表项的标记样式类型：

​			list-style-type:关键字|none

​	关键字：

​		无序列表：

|   值   |    说明    |
| :----: | :--------: |
|  none  |   无标记   |
|  disc  | 实心的圆点 |
| circle | 空心的圆点 |
| square | 实心的方块 |

​		有序列表：

|     值      |     说明      |
| :---------: | :-----------: |
|    none     |    无标记     |
|   decimal   | 从1开始的整数 |
| lower-roman | 小写罗马数字  |
| upper-roman | 大写罗马数字  |
| lower-alpha | 小写英文字母  |
| upper-alpha | 大写英文字母  |

​		注意：当用通配符去掉margin和padding时，列表前面不会显示样式！



​	使用图片设置列表项的标记：

​		list-style-image:URL|none

​	设置列表项标记的位置：

​		list-style-position:inside|outside

​				inside：列表项标记位置在文本以内，且环绕文本根据标记对齐

​				outside：默认值，列表项目标记位置在文本以外，且环绕文本不根据标记对齐

##### 列表样式缩写：

​		list-style:list-style-type

​						list-style-position

​						list-style-image

说明：

​		· 值之间用空格分隔

​		· 顺序不固定

​		· list-style-image会覆盖list-style-type的设置

