## JS中的对象：

#### delete删除对象的属性：

```javascript
		// 定义一个对象
		var cat = {
            name : 'Tom',
            age : 18,
            hobby : 'basketball',
            type : '加菲猫'
        };
		// 为对象添加新属性
        cat.name = 'Jerry';
        cat.wife = 'dog';

		// 删除对象的属性 --- delete
        delete cat.name;
        console.log(cat); // {age: 18, hobby: "basketball", type: "加菲猫", wife: "dog"}
```

#### in  判断对象中是否有某个属性：

```javascript
        var cat = {
            name : 'Tom',
            age : 18,
            hobby : 'basketball',
            type : '加菲猫'
        };

        cat.name = 'Jerry';
        cat.wife = 'dog';

        console.log('wife' in cat); // true
```

#### for ... in 遍历对象中的所有属性键值对：

```javascript
        var cat = {
            name : 'Tom',
            age : 18,
            hobby : 'basketball',
            type : '加菲猫'
        };

        cat.name = 'Jerry';
 		cat.wife = 'dog';

		// 通过for in 遍历对象中所有属性的键值对
        for(var p in cat){ // 这里的 p 只是一个变量名，可以随意命名
            // 打印出所有的属性名
            console.log(p); // age hobby type name wife
            
      		// 1、
            // cat.p 的意思是去cat这个对象里面找到属性名为p所对应的值
            console.log(cat.p); // undefined cat里面没有p属性名也没其对应值故打印此 
            // 注：想用这种方式打印出cat里面的所有属性名对应值的方法不可行！！！
            
            // 2、
           	// 正确的打印出cat里面所有属性名对应的值的方法！
            console.log(cat[p]);
            // 在这个里面浏览器会先将P找到再传到[]里面
            
            // console.log(cat['wife']); // dog
            
            // 这里cat['p']等同于cat.p   原理与1一致 
            console.log(cat['p']); // undefined
        }
```

## JS中的函数：

#### 函数是一个对象：

```javascript
		// 定义一个函数
        function add(num1 , num2) {
            name : 'Tom';
            return num1 + num2;
        }
		
		// 函数作为对象可以添加属性 --- sex
        add.sex = 'male';
		// 为函数添加属性，此属性为函数
        add.setSex = function(sex) {
            this.sex = sex;
        }

        console.log(add.sex); // male
        console.log(add.setSex('female')); // undefined 因为setSex这个函数没有返回值，因此返回的是undefined
        console.log(add.sex); // female 上行代码调用setSex函数将sex改为female
        console.log(add); // 打印出函数，但里面不包括新增的属性！
```

#### 函数作为数据值使用：

```javascript
		var person = {};
		var add = function(){
            return 1;
        };
		add(); 
		console.log(add()); // 1   打印函数调用后的结果 1
		console.log(add); // 直接打印函数，在这里add就是函数function(){return 1};
// 此外，还有函数作为数组的数据值和对象的属性：
		var arr = [1,2,function(){.....},2,3,4}; // 这个里面函数内部的...指代语句
        // 因为可通过数组下标访问函数，所以函数可以没有名字
        var obj = {
                   name : '李白',
                   setName : function(){
                       return '我是李白';
                   }
                   };
```

#### 函数作为参数：

```javascript
        // 函数作为参数
        setTimeout(() => {
            console.log('我要进大厂！');
        }, 1000);
// 在这个例子中箭头函数就被作为参数传到定时器函数里面

// 这个例子是对上面例子的一个小修改，以区分函数后边加不加括号()的区别
// 加括号代表执行函数，这个例子中直接将fn作为参数即代表将函数传进去，因为fn就是那个函数，如果传入fn()则定时器函数不会执行!
        function fn(){
            console.log('我要进大厂！');
        }
        setTimeout(fn, 1000);
```

#### 函数作为返回值：

```javascript
        function fn(){
            return function (){ // 这里将函数作为返回值
                console.log(111);
            };
        }
        console.log(fn()); // 打印fn的返回值，即function (){console.log(111);}

        var newFn = fn(); // 将函数fn执行后的返回值赋给newFn
        newFn(); // 111     调用fn返回值的函数

        fn()(); // 与上面先赋值newFn再调用起相同作用 111 
```

#### 函数三种定义方式及其区别：

```javascript
// 字面量定义方式：
        // function声明
            function add(){
                console.log('我是程序员！');
            }  // 注意：这里函数是个声明不是个语句，因此可以不用加分号;
            add();

        // var赋值表达式
            var add = function fn(){
                console.log('程序员最有名！');
                
                // add();
                // fn();
                // 注意：这样写虽然不会错但不建议，以为会陷入无限调用的圈子里......
                
            };  // 这里就是个语句，因此要加上分号;
            // 注意：这种写法时add()可在函数内调用也可在函数外调用，但fn()只能在函数内调用
            add();
            // fn(); 在函数外调用是错误的！！！

//构造函数定义方式：
			var add = new Function('num1','num2','return num1 + num2');
			add();
        	console.log(add(1,2)); // 3
```

#### 函数的调用：

```javascript
            // 有名函数的调用
            function add(){
				console.log(111);
            }
            add();

            // 匿名函数的调用
            // 1、将函数赋值给一个变量
            var add = function (){

            };
            add();
            // 2、不以function打头
            // 这种形式看似是对的，但其实会报错，因为JS解析器会将以function开头的作为一个函数声明，而不会看作是函数的立即执行
            function (){
                console.log(111);
            }(); // function require a name

            // 解决上述问题的方法是 不让function打头，即在前面加一些有效的字符例如()：
            (function (){
                console.log(111);
            }());
			
			console.log(function (){return 1}());
```

#### 函数方法的调用：

```javascript
// 对象中函数方法的调用：
			var obj = {
                add : function (num1 , num2){
                    return num1 + num2;
                }, 
                subTract : function (num1 , num2){
                    return num1 - num2;
                }
            };
            obj.add(1,2);

// 模拟鼠标点击事件：
            // 可将其看作将函数赋值给document下的onclick属性值
            document.onclick = function (){
                console.log('你点击我了！');
            };
            // 可模拟点击事件
            document.onclick();


// 对象中不合法的标识符：
            var obj = {
                add : function (num1 , num2){
                    return num1 + num2;
                }, 
                subTract : function (num1 , num2){
                    return num1 - num2;
                },
                // 在不合法的标识符上加 '' 就可用了
                '@' : function (){
                    console.log('@');
                    return 1;
                }
            };
            console.log(obj.add()); // add为合法的标识符，可以用 . 
            console.log(obj['@']()); // @为不合法的标识符，必须要用 []
```

#### 构造函数的调用：

```javascript
            function Faa(){

            }
            new Faa();
// 区分函数是不是构造函数是根据调用时的关键字 new  而不是函数名大写不大写，函数名大写是一种构造函数书写的习惯
            console.log(new Faa()); // 在这里就是当作构造函数看待，返回的是对象 Faa{}
            console.log(Faa()); // 在这里只是当作普通函数对待，返回的是 undefined
```

#### 函数的间接调用：

```javascript
            var name = 'xm';
            var person = {};
            person.name = 'xh';
            person.getName = function (){
                return this.name;
            };
            // 直接调用
            console.log(person.getName());
            // 间接调用
            // 通过 call 方法改变this的指向
            console.log(person.getName.call(window));
// call 中第一个参数是this指向，后面的参数是一个一个传
// apply 中有两个参数，第一个是this指向，第二个是一个数组或类数组，该数组包含所有的参数
```

#### 函数中的arguments：

```javascript
// 利用arguments类数组的性质封装不定个数参数加法函数：
            function add(){
                if(arguments.length == 0) return 0;
                var sum = 0;
                for(var i = 0; i < arguments.length; i++){
                    sum += arguments[i];
                }
                return sum;
            }
            console.log(add(1,2,3,10000));
// 在非严格模式下 arguments.callee即代表函数本身：
            function a(num1,num2){
                console.log(arguments.callee);
            }
            a();
// 解决在严格模式下不能用arguments.callee的递归：
            var get = function fn(number){
                if(number == 1) return 1;
                return number*fn(number-1);
                // fn在内部调用自己就可解决上述问题
            }
            console.log(get(3)); // 3
// 注意：一般函数命名不会像上面那样写，一般是 var get = function(){} 或 function get(){} ，一般不会将一个有名函数赋值给一个变量！！！
```



