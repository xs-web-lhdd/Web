# ES6基础：

#### let 和 const:

##### let：

​		跟var差不多只不过把var换成了let；

​			1、var 可以重复声明		let同一作用域不能重复声明

​			2、let 的块级作用域    var作用域：全局作用域 和 函数作用域

​													let作用域：全局作用域 和 块级作用域（只能在块级内调用出了块级就出错）

```javascript
        if(true){
            var a=1;
            let b = 100;
        }
        console.log(a);
        console.log(b);
```

​			3、let 和 var 区别：let 本身不进行预解析   var会预解析

##### const：

​		const为常量，一旦赋值后就不能再更改了

```javascript
        const w=1;
        w=undefined
        console.log(w);
报错： Assignment to constant variable.
```

#### 块级作用域：

​		

```javascript
        {
            let lis = document.querySelectorAll('li');
            for(let i =0 ; i < lis.length; i++){
                lis[i].onclick =function(){
                    console.log(i);
                }
            }

            console.log(i);
            // 块级作用域 出了作用域就就报错

            // {
            //     let i = 0;
            //     lis[i].onclick=function(){
            //         console.log(i);
            //     }
            // }

            // {
            //     let i = 1;
            //     lis[i].onclick=function(){
            //         console.log(i);
            //     }
            // }

            // {
            //     let i = 2;
            //     lis[i].onclick=function(){
            //         console.log(i);
            //     }
            // }
        }
```

#### 解构赋值：

​		对象的解构赋值：			

```Javascript
        let obj = {
            a: 1,
            b: 2,
            d: 3
        };

        // let a = obj.a;
        // let b = obj.b;
        // console.log(a,b);

        let {a,b,c} = obj;
        // 在这里a必须与obj里面的名称一致  名称必须一一对应
        console.log(a,b,c);
```

​		数组的解构赋值：

```javascript
        let arr = ['a','b','c'];
        let [e,f] = arr;
        console.log(e,f);
在这里e对应a;f对应b  即数组第一项对应arr第一项，数组第二项对应arr第二项
```

​				经典面试题：

```javascript
        let a = 0;
        let b = 1;
        // 如何快速交换 a b 的值
        // 原本:
        // let c = a;
        // a = b;
        // b = c;
        // 解构赋值：
        [a,b] = [b,a];
        console.log(a,b);
```

​		字符串解构赋值：

```javascript
        let str = 'abc';
        let [e,f] = str;
        console.log(e,f);// a b
```

#### 展开运算符（...）：

​		展开运算符说白了就是把数据展开了，如：展开对象，展开数组

###### 	数组展开：

```javascript
        let arr = [1,2,3,4];
        let arr2 = ['a','b',...arr,'c','d'];
        console.log(arr2);
        // 剩余参数
        let [a,b,...c] = arr;
        console.log(a,b,c);
```

###### 	对象展开：

```javascript
        let obj = {
            a: 1,
            b: 2
        };
        let obj2 = {
            ...obj,
            c: 3,
            d: 4
        };
        console.log(obj2);
        // 把对象剩余的东西存到c中
        let {a,b,...c} = obj2;
        console.log(a,b,c);
```

​	注：一般不建议直接将对象直接赋值给对象，因为对象传值一般是传地址，一个对象里面属性修改则另外一个对象里面的相应属性也会修改，故可用展开运算符 

```javascript
        let obj = {
            a: 1,
            b: 2
        };
        // let obj2 = obj;
        //     obj2.a = 10;
        //     console.log(obj);  //obj中的值发生改变 a: 10,b: 2
        let obj2 = {...obj};
            obj2.a = 10;
            console.log(obj);// obj中的值没有发生改变 a:1,b:2
```

#### Set对象：

​	Set会对数组进行去重

```javascript
        // 构造函数 用来构建某一类型的对象  -  对象的实例化
        let arr = [1,2,1,5,3,4,5]
        let s = new Set(arr);
        console.log(s);//Set(5) {1, 2, 5, 3, 4}
        let arr1 = [...s];
        console.log(arr1);
```

​	Set属性：size就是数值的个数，==> length

​					clear()清空所有值

​					delete('a')删除某一项

​					add()添加某一项，同样会去重，已经有的不会添加成功

​					has(var)是否包含某一项：

​													var 要查找的值  返回 true 或 false

#### Map对象：

​				Map属性去MDN去看

#### 函数新增扩展：

###### 			箭头函数：

​        		形参=>返回值 ----- 一个形参，可省略括号

​       		 (形参,形参)=>返回值 ---- 多个形参

​        		()=>{

​        			 执行语句

​         			返回值

​        			}

​	注：箭头函数必须存起来，不能匿名

###### 			箭头函数不定参：

​					箭头函数没有不定参，即arguments不能用

```javascript
正确写法：
		let fn = (a,b,...arg) =>{
            console.log(arg);
        }
        fn(1,2,3,4);
错误写法：let fn = () =>{
   			console.log(arguments);
		}
		fn(1,2,3,4);
	报错arguments无法识别，即arguments不能在箭头函数中起作用
```

###### 		箭头函数的this指向问题：

​				箭头函数本身没有 this ,调用箭头函数的 this 时，指向是其声明时 所在的作用域的this

###### 		箭头函数的参数默认值：

```javascript
        let fn = (a=10,b=2) =>{
            // a = a || 10;
            // b = b || 2;
            //传统写法
            console.log(a*b);
        };
```

#### 新增数组扩展：

###### 	把类数组转换为数组：

​		    Array.from(类数组)    把一个类数组转换成真正的数组

​                									类数组：有下标有length

   												 返回值：转换之后的新数组

​			用展开运算符： lis = [...lis]

###### 	Array下的方法：

​			Array.of()			将里面的内容转换成一个数组

​			      						console.log(Array.of(1,2,3,4,'A'));

​			Array.isArray(data)	检测数据是否是个数组

###### 	数组的find和findindex：

​			find找值，findindex找索引号					具体见MDN

###### 	数组扁平化：

​			arr.flat([depth])			扁平化多维数组

​			可选参数：depth		指定要提取嵌套数组的结构深度，默认值为1。

​			返回值：	一个包含将数组与子数组中所有元素的新数组（一维数组）