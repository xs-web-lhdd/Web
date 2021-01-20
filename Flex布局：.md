# Flex布局：

讲解：http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

### 1、flex解释

1、flex布局为flex box的缩写，意思为弹性布局

2、块级元素和行内元素都可以使用flex布局

2、Webkit内核的浏览器，需要加上-webkit前缀





### 2、flex容器属性

首先父元素要加上

```css
display:flex;
```



#### (1)flex-direction

此属性决定主轴的方向

```css
.flex{
    flex-direction:row;//（默认值）主轴水平方向，从左往右
    flex-direction:row-reverse;//主轴水平方向的逆方向，从右往左
    flex-direction:column;//主轴为垂直方向，从上往下
    flex-direction:column-reverse;//主轴为垂直方向的逆方向，从下往上
}
```



#### (2)flex-wrap

此属性定义，如果一条主轴线上排列不下，换行的方式

```css
.flex{
    flex-wrap:nowrap;//（默认）不换行
    flex-wrap:wrap;//正常换行 从上到下
    flex-wrap:wrap-reverse;//逆方向换行 从上到下
}
```



#### (3)flex-flow

此属性定义，是flex-direction和flex-wrap的合并

```css
.flex{
    flex-flow:<flex-direction>空格<flex-wrap>;
}
```



#### (4)justify-content

此属性定义，项目在主轴上的对齐方式

```css
.flex{
    justify-content:flex-start;//左对齐（默认）
    justify-content:flex-end;//右对齐
    justify-content:center;//居中
    justify-content:space-between;//两端对齐，且项目间间隔相等(与边框没空间)
    justify-content:space-around;//每个项目两侧间隔相等，所以项目间 间隔 比项目与边框间间隔大一倍
    justify-content:space-evenly;//项目间间隔与项目与边框间 间隔均匀分配
}
```



#### (5)align-items

此属性定义，项目在交叉轴上的对齐方式

```css
.flex{
    align-items:flex-start;//交叉轴的起点对齐
    align-items:flex-end;//交叉轴的终点对齐
    align-items:center;//交叉轴的中点对齐
    align-items:baseline;//项目的第一行文字的基线对齐
    align-items:stretch;//（默认值）如果项目未设置高度或设为auto，将充满整个父级容器高度
}
```



#### (6)align-content

此属性定义，多个项目多根轴线的对齐方式，只有一个轴线时没有作用

```css
.flex{
    align-centent:flex-start;//交叉轴的起点对齐
    align-centent:flex-end;//交叉轴的终点对齐
    align-centent:center;//交叉轴的中点对齐
    align-centent:space-between;//与交叉轴两端对齐，轴线之间的间隔平均分布
    align-centent:space-around;//每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
    align-centent:stretch;//（默认值）轴线占满整个交叉轴
}
```



### 3、项目的属性



#### (1)order属性

该属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

```css
.item {
  order: <integer>;
}
```



#### (2)flex-grow属性

 该属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。 

```css
.item {
  flex-grow: <number>; /* 默认为 0 */
}
```

​	 如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。 



#### (3)flex-shrink属性

 该属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。 

```css
.item {
  flex-shrink: <number>; /* 默认为 1 */
}
```

 如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。 



#### (4)flex-basis属性

该属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* 默认为 auto */
}
```

它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间。

### 

#### (5)flex属性

 该属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。 

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值：`auto` (`1 1 auto`) 和 none (`0 0 auto`)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。



#### (6)align-self属性

 该属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。 

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

 该属性可能取6个值，除了auto，其他都与align-items属性完全一致。 