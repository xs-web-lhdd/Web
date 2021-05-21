JS规定，使用new调用函数会进行四步走：
1、函数体内会自动创建出一个空白对象。
2、函数的上下文（this）会自动指向这个对象。
3、函数体内的语句会执行。
4、函数会自动返回上下文对象，即使函数没有return语句。

下面进行解释四步走：
用一下代码进行举例：

```javascript
        function sun() {
            this.a = 3;
            this.b = 5;
        }


        var obj = new sun();
        console.log(obj);
```
在第一步中：函数体内会自动创建出一个空白对象。
因此就相当于在sun函数中自动多了一个对象，即：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210521163114929.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzUyMjA3NzI4,size_16,color_FFFFFF,t_70#pic_center)
在第二步中函数的上下文（this）会自动指向这个对象。即：
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021052116322243.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzUyMjA3NzI4,size_16,color_FFFFFF,t_70#pic_center)
这步也很好理解，就不多赘述了。
第三步：函数体内的语句会执行。
所以就会往新创建的对象中加 a: 3，b:5，这两个属性值，
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210521163411663.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzUyMjA3NzI4,size_16,color_FFFFFF,t_70#pic_center)
第四步：函数会自动返回上下文对象，即使函数没有return语句
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210521163442782.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzUyMjA3NzI4,size_16,color_FFFFFF,t_70#pic_center)
返回的就是this，this指向的是那个新创建的空对象，所以obj就是{a:3,b:5}，所以最终打印出来的结果就是`sun {a: 3, b: 5}`，如果这里不用new ，而只是直接这样`var obj = fun()`那么打印出来的是undefined，原因很简单在fun函数中没有设置返回值，所以结果就是undefined。

**构造函数：**
定义：用new调用的函数就是构造函数，任何函数都可以是构造函数，只要用new调用它。
故名思意，构造函数用来构造新对象，它内部的语句将为对象添加若干属性和方法，完成对象的初始化。
构造函数必须用new关键字调用，否则不能正常工作，正因如此，开发者规定构造函数首字母要大写（可以小写，没有硬性规定要大写，只是为了区分普通函数和构造函数）。

举个构造函数的栗子：

```javascript
        function People(name,age,sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
        }
        var obj = new People('李白',30,'female');
        console.log(obj); // People {name: "李白", age: 30, sex: "female"}
```
给构造函数添加方法：

```javascript
        function People(name,age,sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.sayHello = function() {
                console.log('我是'+this.name+'我'+this.age);
            }
        }
        var obj = new People('李白',30,'female');
        obj.sayHello(); // 我是李白我30
```

