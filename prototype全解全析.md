**prototype和原型链查找：**
任何函数都有 prototype属性， prototype是英语“原型”的意思。prototype属性值是个对象，它默认拥有constructor属性指回函数。
举个栗子：
```javascript
        function sum(a,b){
            return a+b;
        }
        console.log(sum.prototype); // {constructor: ƒ}
        console.log(typeof sum.prototype); // object
        console.log(sum.prototype.constructor == sum); // true
```
普通函数来说的prototype是没有任何用处的，但构造函数的prototype属性非常有用。
注意：`构造函数的prototype属性是它的实例的原型`
见图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210521182426745.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzUyMjA3NzI4,size_16,color_FFFFFF,t_70#pic_center)
这里面的 \_proto\_不是W3C的标准属性，而是谷歌浏览器为了学习者学习而创造出现的属性。虽然 \_proto\_不是标准属性，但原型这条线是在所有浏览器中都存在的，只不过在谷歌浏览器中可以访问到这条线的。
举个栗子：
```javascript
        function People(name,age,sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
        }
// 实例化：
       var xiaoming = new People('xiaoming',18,'male');
// 测试：
        console.log(xiaoming.__proto__ == People.prototype); // true
```
**原型链查找：**
Javascript规定：实例可以打点访问它的原型的属性和方法，这被称为“原型链查找”
举个栗子：

```javascript
    function People(name,age,sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    // 往原型上添加nationality属性：
    People.prototype.nationality = '中国';
    var xiaoming = new People('xiaoming',18,'male');
    console.log(xiaoming.nationality); // 中国
    console.log(xiaoming);
```
在这里显示中国是没有任何问题的因为：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210521184935966.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzUyMjA3NzI4,size_16,color_FFFFFF,t_70#pic_center)
在原型链上是可以查找到的。
可以看这副图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210521185330528.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzUyMjA3NzI4,size_16,color_FFFFFF,t_70#pic_center)
要打印的是`xiaoming.nationality`，因为xiaoming身上没有nationality属性，但People.prototype里面有nationality这个属性，所以就会通过_proto_这个链去查找nationality，所以打印出来结果就是中国。

说到这个给一个题目：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210521185855728.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzUyMjA3NzI4,size_16,color_FFFFFF,t_70#pic_center)
问：实例化一个对象Tom，在没有给Tom添加nationality属性时问`console.log(Tom.nationality)`的值和给Tom添加`Tom.nationality = '美国';`后`console.log(Tom.nationality)`的值？
大家想想应该都能得出结果，在没有添加时，Tom没有nationality这个属性，因此就会往原型上找，所以打印出来的结果是中国，但如果一添加`Tom.nationality`，那么在打印`Tom.nationality`时就不需要往原型上找了（自身就有），所以打印出来的结果是美国。

```javascript
    function People(name,age,sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    // 往原型链上设置nationality属性：
    People.prototype.nationality = '中国';
    // 实例化Tom：
    var Tom = new People('Tom',20,'男');
    Tom.nationality = '美国';

    console.log(Tom.nationality); // 美国
```
这种情况也叫原型链的遮蔽效应。
**hasOwnProperty：**
hasOwnProperty方法可以检查对象是否真正“自己拥有”某种属性或者方法。
举例：

```javascript
    function People(name,age,sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    // 往原型链上设置nationality属性：
    People.prototype.nationality = '中国';
    // 实例化xiaoming：
    var xiaoming = new People('xiaoming',18,'male');

   console.log(xiaoming.hasOwnProperty('name')); // true
   console.log(xiaoming.hasOwnProperty('age')); // true
   console.log(xiaoming.hasOwnProperty('sex')); // true
// xiaoming不是自己用于nationality属性，所以结果是false
   console.log(xiaoming.hasOwnProperty('nationality')); // false
   
```
**in：**
in运算符只能检查某个属性或方法是否可以被对象访问，不能检查是否是自己的属性或方法。
举例：

```javascript
    function People(name,age,sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    // 往原型链上设置nationality属性：
    People.prototype.nationality = '中国';
    // 实例化xiaoming：
    var xiaoming = new People('xiaoming',18,'male');

    console.log('name' in xiaoming); // true
    console.log('age' in xiaoming); // true
    console.log('sex' in xiaoming); //true
    console.log('nationality' in xiaoming); // true
```
**在构造函数里字面量添加方法：**
举例：

```javascript
        function People(name,age,sex) {
            this.sayHello = function() {

            }
        }
        var xiaoming = new People();
        var xiaohong = new People();
        var xiaogang = new People();

        console.log(xiaoming.sayHello == xiaohong.sayHello); // false
```
在实例化的时候它们不是同一个引用，指向不同的堆内存。

缺点： 把方法直接添加到实例身上的缺点：每个实例和每个实例的方法函数都是内存中的不同函数，会造成内存的浪费。
解决方法： 将方法写到prototype上面。
图片演示：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210521193249766.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzUyMjA3NzI4,size_16,color_FFFFFF,t_70#pic_center)
在People.prototype上添加方法时，在实例化时都是顺着_proto_这个原型链往People.protype里面找，因为People.prototype是同一个引用，所以可以解决内存的浪费问题。

代码：

```javascript
        function People(name,age,sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
        }
        // 把方法写到原型上，工整，减少内存占用
        People.prototype.sayHello = function() {
            console.log('我是' + this.name + '，我' + this.age + '岁了');
        }
        People.prototype.grown = function() {
            this.age++;
        }

        var xiaoming = new People('小明',20,'男');
        var xiaohong = new People('小红',10,'女');

		console.log(xiaoming.sayHelllo() == xiaohong.sayHello()); // true
        xiaoming.sayHello(); // 我是小明，我20岁了
        xiaohong.sayHello(); // 我是小红，我10岁了

        xiaoming.grown();
        xiaoming.grown();
        xiaoming.grown();
        
        xiaoming.sayHello(); //  我是小明，我23岁了
        xiaohong.sayHello(); // 我是小红，我10岁了
```

**原型链的终点：**

大家先看这张图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210522114029757.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzUyMjA3NzI4,size_16,color_FFFFFF,t_70#pic_center)
在这张图片中Peopel.prototype相当于Object new出来的，所以People可以通过_proto_原型链查找到原型Object.prototype，可以通过`console.log(xiaoming.__proto__.__proto__ == Object.prototype);`进行验证，还有一点这里也可以解释了：上面我们讲过`hasOwnProperty()`和`toString()`方法，知道xioaming可以打点调用这两个方法，为什么可以调用？这里就得到了答案，因为`hasOwnProperty()`和`toString()`方法是原型链终点Object.prototype的方法，所以xiaoming可以通过原型链查找的方式去找到`hasOwnProperty()`和`toString()`方法，因此可以打点调用，还有一点就是Object.prototype是原型链的终点，这点可以通过代码`console.log(Object.prototype.__proto__);`为null进行解释。

具体见下面代码：

```javascript
        function People(name,age) {
            this.name = name;
            this.age = age;
        }
        var xiaoming = new People('小明',30);
        console.log(xiaoming.__proto__.__proto__ == Object.prototype); // true
    
        console.log(Object.prototype.__proto__); // null

        console.log(xiaoming.toString()); // [object Object]
```
这里还有个数组的原型链：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210522115135615.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzUyMjA3NzI4,size_16,color_FFFFFF,t_70#pic_center)
任何数组都是Array实例化的表现(Array new 出来的)，在数组的原型链Array.prototype上有push() pop() slice()等方法，所以任何数组都可以打点调用这些方法，通过这点我们就能知道为什么数组可以调用那些方法了，还有一点就是数组的原型链终点也是Object.prototype，所以数组也可以调用`hasOwnProperty()`和`toString()`方法的。

下面见代码演示：

```javascript
        var arr = [44,55,33,66];
// 等价于 var arr = new Array(44,55,33,66);
        console.log(arr.__proto__ == Array.prototype); // true
        console.log(arr.__proto__.__proto__ == Object.prototype); // true
        console.log(Array.prototype.hasOwnProperty('push')); // true
        console.log(Array.prototype.hasOwnProperty('pop')); // true
```
**继承（面试题——手写继承）：**

1、实现继承的关键在于：子类必须拥有父类的全部属性和方法，同时子类还应该能定义自己特有的属性和方法。
2、使用Javascript特有的原型链特性来实现继承，是普遍的做法。
3、在今后学习ES6时会学习新的实现继承的方法。

见图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210522123350810.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzUyMjA3NzI4,size_16,color_FFFFFF,t_70#pic_center)
讲解：先定义一个父类People，在父类身上添加方法sayHello(),sleep()，接着定义一个子类Student，然后将子类Student的原型Student.prototype指向父类People new 的实例，然后在子类的原型上（Student.prototype）添加方法study() exam()等，然后再实例化子类`var hanmeimei = new Student()`，然后hanmeimei就可以通过打点的方法调用各种方法（父类 子类均可以）。其中非常关键的一步就是：将子类Student的原型Student.prototype指向父类People new 的实例`Student.prototype = new People();`

见代码：

```javascript
	// 父类：
        function People(name,age,sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
        }
        People.prototype.sayHello = function() {
            console.log('你好我是'+this.name+',我今年'+this.age+'岁了');
        }
        People.prototype.sleep = function() {
            console.log(this.name + '开始睡觉了 zzzzz');
        }

        // 子类 学生
        function Student(name,age,sex,scholl,studentNumber) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.scholl = scholl;
            this.studentNumber = studentNumber;
        }
        // 关键语句，实现继承： 要写在子类添加方法之前
        Student.prototype = new People();


        Student.prototype.study = function() {
            console.log(this.name + '正在学习！');
        }
        Student.prototype.exam = function() {
            console.log(this.name + '正在考试！加油！');
        }

        // 实例化：
        var hanmeimei = new Student('韩梅梅',20,'女','爱大学','31299999');

        hanmeimei.study(); // 韩梅梅正在学习！
        hanmeimei.sayHello(); // 你好我是韩梅梅,我今年20岁了
        hanmeimei.exam(); // 韩梅梅正在考试！加油
```

**拓展继承——手写父类的方法：**

代码：

```javascript
        function People(name,age,sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
        }
        People.prototype.sayHello = function() {
            console.log('你好我是'+this.name+',我今年'+this.age+'岁了');
        }
        People.prototype.sleep = function() {
            console.log(this.name + '开始睡觉了 zzzzz');
        }

        // 子类 学生
        function Student(name,age,sex,scholl,studentNumber) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.scholl = scholl;
            this.studentNumber = studentNumber;
        }
        // 关键语句，实现继承：
        Student.prototype = new People();


        Student.prototype.study = function() {
            console.log(this.name + '正在学习！');
        }
        Student.prototype.exam = function() {
            console.log(this.name + '正在考试！加油！');
        }
///////////////////////////////////////////////////////////////////
        // 重写、复写（overwrite）父类的sayHello方法：
        Student.prototype.sayHello = function() {
            console.log('敬礼！我是' + this.name);
        }
//////////////////////////////////////////////////////////////////


        // 实例化：
        var hanmeimei = new Student('韩梅梅',20,'女','爱大学','31299999');

        hanmeimei.study(); // 韩梅梅正在学习！
        hanmeimei.sayHello(); // 敬礼！我是韩梅梅
        hanmeimei.exam(); // 韩梅梅正在考试！加油！
```

