# JS中正则表达式：

注意：正则表达式都是对字符串而言！

​			正则在默认情况下区分大小写；

#### 什么是正则表达式：

​	有以下两种字符组成的文字模式：

1、普通字符（例如 26个英文字母、数字等）

2、特殊字符（有特殊含义的，例如 .\ 等）

###### 说明：

​	该模式描述在查找文字主体时待匹配的一个或多个字符串。正则表达式作为以作为一个模板，将某个字符模式与所搜索的字符串进行匹配。

#### 正则的三种模式修饰符：

​	忽略大小写：i --- ignoreCase					全局匹配：g --- global					多行匹配：m --- multiline

```javascript
            // 正则表达式里面的 i 忽略大小写
            var str = 'I love Js';
            var parents = /js/i; // 在这里可以多个修饰符混用且顺序对作用不影响 例如：igm img gim gmi mig mgi
            console.log(parents.test(str)); // true
            console.log(parents.exec(str)); // ["Js", index: 7, input: "I love Js", groups: undefined]

            var string = 'hello javascript';
            var string_parents = /Ja/i;
            console.log(string_parents.test(string)); // true
            console.log(string_parents.exec(string)); // ["ja", index: 6, input: "hello javascript", groups: undefined]

// 在构造函数中有一个内置函数：RegExp() 里面有两个参数，第一个参数是正则表达式，第二个是模式修饰符、
       		// 构造函数：
            var str = 'I love js';
            pattern = new RegExp('js','i'); // 注意：构造函数中内置函数
            console.log(pattern.test(str)); // true 
            console.log(pattern.exec(str)); // ["js", index: 7, input: "I love js", groups: undefined]
```

#### 简单的转义字符 \ ：

```javascript
            var str = '//我是注释';
            var pattern = /\//;
            console.log(pattern.test(str)); // true
            console.log(pattern.exec(str)); // ["/", index: 0, input: "//我是注释", groups: undefined]

            var pat = /\/\//;
            console.log(pat.test(str)); // true 
            console.log(pat.exec(str)); // ["//", index: 0, input: "//我是注释", groups: undefined]
```

#### 字符类：

```javascript
            // [] --- 字符类 ，匹配里面任意一项字符，里面可以放任意的字符，切记只匹配一个，匹配到第一个后后面的就不会再匹配了
            var str = 'javascript';
            var pattern = /[sjnwiofno24w_@]/; // 匹配的是 j
            console.log(pattern.exec(str)); // 这里匹配的就是j
            // 字符类取反 ^
            var pattern1 = /[^js]/; // 匹配除了j和s以外的任何字符
            console.log(pattern1.exec(str)); // 匹配的是 a
            // 字符类传范围
            var pattern2 = /[a-z]/; // 这里很灵活，也可以从c开始到d结束，但顺序只能从小到大或自身到自身，不能从大到小如d-c
            console.log(pattern2.exec(str)); //匹配的是 j
            // 匹配小写字母和大写字母时不能混用，要分开写
            var string = 'Love';
            var pattern3 = /[A-Za-z]/; // 这里不能写成 A-z
            console.log(pattern3.exec(string)); // 匹配到的是 L
            // 匹配数字:
            var num = '00544';
            var pattern4 = /[0-9]/;
            console.log(pattern4.exec(num)); // 匹配到的是 0
            var pattern5 =/[-1-20]/;
            console.log(pattern5.exec(num)); //匹配到的 0
```

#### 常用的字符类：

```javascript
            var num = '3.1415926';
            var pattern = /./; // 小数点 . 能匹配到除\n以外的所有的字符
            var pattern1 = /[^\n]/; // 与上面/./等同
            var str = '\n';
            console.log(pattern.exec(str));
            console.log(pattern.exec(num));
            console.log(pattern1.exec(num));
            // 匹配小数点需要用到转义字符
            // 字符类/[a-zA-Z0-9_]/  就相当于 /\w/   ---   小写    
            // 字符类/[^a-zA-Z0-9_]/  就相当于 /\W/  ---   大写
            var sign = '_@';
            pattern2 = /[a-zA-Z0-9_]/;
            pattern3 = /\w/; 
            console.log(pattern2.exec(sign));
            console.log(pattern3.exec(sign));
            // 字符类/[0-9]/   就相当于   /\d/  ---   字符类/[^0-9]/  就相当于  /\D/
            var num1 = '00544';
            pattern4 = /\d/;
            pattern5 = /[0-9]/;
            console.log(pattern4.exec(num1));
            console.log(pattern5.exec(num1));
            // /\s/   既能匹配制表符也能匹配空格
```

#### 正则中的样式：

```javascript
            // 指定个数 --- 匹配3个
            var num = '110';
            var pattern = /\d{3}/; // {}内放量词的个数
            console.log(pattern.exec(num)); // 匹配到的就是110
            // 匹配范围 --- 匹配1-2个，就是2个
            var num1 = '5210';
            var pattern1 = /\d{1,2}/; // 前面的小于后面的就行
            console.log(pattern1.exec(num1)); // 匹配到的时52
            // 注意：这种写法时逗号之后不能有空格，即{1, 2}这样写是不对的

            // 匹配至少一个 
            var num2 = '909';
            var pattern2 = /\d{1,}/; // 至少匹配一个
            console.log(pattern2.exec(num2));

            // 切记：没有至多匹配几个

            // 量词的简写:
            // 匹配0个或1个 --- {0,1} 可以简写为 ?
            var num3 = '687';
            var pattern3 = /\d?/; // 这里等同于 /\d{0,1}/
            console.log(pattern3.exec(num3));
            // 匹配至少一个可以用 + 表示
            var pattern4 = /\d+/; // 这里等同于 /\d{1,}/
            console.log(pattern4.exec(num3));
            // 至少0次用 * 表示
            var pattern5 = /\d*/; // 这里等同于 /\d{0,}/
            console.log(pattern5.exec(num3));
```

#### 非贪婪匹配： ----  有问题待解决！

```javascript
            // 贪婪匹配：在正则中条件允许的情况下会尽可能的多匹配
            var str = 'aaab';
            var pattern = /a+/;
            console.log(pattern.exec(str)); // 匹配的是 aaa

            // 将贪婪匹配转换为非贪婪匹配只需在量词后边加一个?
            var str1 = 'aaab';
            var pattern1 = /a+?/;
            console.log(pattern1.exec(str1)); // 匹配的是 a



            var str2 = 'aaab';
            var pattern2 = /a+b/;
            console.log(pattern2.exec(str2)); // 匹配到 aaab

            var str3 = 'aaab';
            var pattern3 = /a+?b/;
            console.log(pattern3.exec(str3)); // 匹配到 aaab 而不是 ab


            var str4 = '<td><p>a</p></td><td><p>b</p></td>';
            var pattern4 = /<td>.*<\/td>/;
            console.log(pattern4.exec(str4)); // 匹配到的是 <td><p>a</p></td><td><p>b</p></td>
            
            var str4 = '<td><p>a</p></td><td><p>b</p></td>';
            var pattern4 = /<td>.*?<\/td>/;
            console.log(pattern4.exec(str4)); // 匹配到的是 <td><p>a</p></td>
```

#### 选择：

```javascript
// 正则的选择：
            var str = 'js';
            var pattern = /html|css|js/;
            console.log(pattern.exec(str)); // js

            var str1 = 'html js';
            var pattern1 = /html|css|js/;
            console.log(pattern1.exec(str1)); // html

            var str2 = 'css html js';
            var pattern2 = /html|css|js/;
            console.log(pattern2.exec(str2)); // css

// 匹配的是最先遇到的而不是最合适的：
            var str3 = 'ab';
            var pattern3 = /a|ab/; 
            console.log(pattern3.exec(str3)); // a 而不是 ab

            var str = 'js1';
            var pattern = /html|css|js|js1/;
            console.log(pattern.exec(str)); // js 而不是 js1
```

#### 分组和引用：

```javascript

var  str = 'abab';
            var pattern = /ab+/;
            console.log(pattern.exec(str)); // 这里是ab ，不能错误的理解为b后面有+就是abab，因为+只对它前面紧挨着的字符有效在这个例子中即只对b有效
            
//          () 相当于分组,即将ab归为一组
            var pattern1 = /(ab)+/;
            console.log(pattern1.exec(str)); // 匹配到了 abab ab

//          () 括号起捕获分组的作用
            var str2 = 'abcd';
            var pattern2 = /(ab)c/;
            console.log(pattern2.exec(str2)); // abc ab
            // 在这里先正则abc 之后再正则ab

//          避免分组捕获:
            var str3 = 'abcd';
            var pattern3 = /(?:ab)c/;
            console.log(pattern3.exec(str3)); // abc 不会对括号里面的ab进行捕获
//          分组括号的并列和嵌套
            var str4 = 'abcd';
            var pattern4 = /(ab)(c)/;
            console.log(pattern4.exec(str4)); // abc ab c

            var str5 = 'abcd';
            var pattern5 = /(a(b(c)))/;
            console.log(pattern5.exec(str5)); // abc abc bc c

            var str = 'ab cd ab';
            var pattern = /ab cd ab/;
            console.log(pattern.exec(str)); // ab cd ab
            
            var str1 = 'ab cd ab';
            var pattern1 = /(ab) cd \1/;
            console.log(pattern1.exec(str1)); // 第一组ab cd ab第二组ab
// 分组的引用
            var str2 = '<p><a>这是一段文字!</a></p>';
            var pattern2 = /<([a-zA-Z]+)>(.*)<\/\1>/;
            console.log(pattern2.exec(str2)); // ["<p><a>这是一段文字!</a></p>", "p", "<a>这是一段文字!</a>", index: 0, input: "<p><a>这是一段文字!</a></p>", groups: undefined]
            // 在这个例子中 ([a-zA-Z]+)是第一个分组     (.*)是第二个分组  \1 指代的是第一个分组里面的符号p
```

#### 位置匹配之首尾匹配：

```javascript
// 首匹配:
            var str = 'js';
            var pattern = /^js/; // 这里 ^ 的意思就是匹配js开头的
            console.log(pattern.exec(str)); // js

            var str1 = 'html js'; // 这里不是以 js 开头的,故下面匹配不到返回的 null
            var pattern1 = /^js/;
            console.log(pattern1.exec(str1)); // null
// 尾匹配: 
            var str2 = 'js';
            var pattern2 = /js$/; // 这里 $ 的意思就是匹配js结尾的
            console.log(pattern2.exec(str2)); // js

            var str3 = 'js css'; // 这里不是以 js 结尾的,故下面匹配不到返回 null
            var pattern3 = /js$/;
            console.log(pattern3.exec(str3)); // null

// 验证输入的都是数字:
            // 方法1:
            var str4 = '311333';
            var pattern4 = /^\d+$/;
            // console.log(pattern4.exec(str4));
            if(pattern4.test(str4)){
                console.log('输入的全是数字!');
            }else{
                console.log('输入的包含非数字!');
            }
            // 方法2:
            var str4 = '311333';
            var pattern4 = /\D/;
            // console.log(pattern4.exec(str4));
            if(pattern4.test(str4)){
                console.log('输入的不全是数字!');
            }else{
                console.log('输入的全是数字!');
            }
 
```

#### 位置匹配之单词边界匹配： ----    需2刷！

```javascript

// 位置匹配之单词边界匹配:
            var str = 'js';
            var pattern = /\bjs\b/; // b表示的就是 \w和\W之间的那个位置
            console.log(pattern.exec(str));

            var str1 = 'js html';
            var pattern1 = /js\b/;
            console.log(pattern1.exec(str1));
```

#### 位置匹配之单词前瞻性匹配和负向前瞻性匹配：

```javascript
// 前瞻性匹配:
            var str = 'javascript';
            var pattern = /java(?=script)/; // 只有java后面跟的script时才匹配的为java
            console.log(pattern.exec(str)); // java
// 负向前瞻性匹配:
            var str1 = 'javascript';
            var pattern1 = /java(?!script)/; // 只有java后面跟的script时才不匹配
            console.log(pattern1.exec(str1)); // null
```

#### RegExp对象的实例方法： ----    详情见 Javascript高级语言程序设计第三版

​	注意：在使用RegExp进行转义的时候要双重转义！

```javascript

```

####  String对象中与正则相关的方法之search,match和split：

```javascript
// search：
            var str = 'html js';
            var pattern = /js/;
            console.log(str.search(pattern)); // 5  返回找到字符串位置下标
            
            var str1 = 'html js';
            var pattern1 = /js1/;
            console.log(str1.search(pattern1)); // -1 找不到相应的字符串位置就返回-1

// 注意：search 对有没有全局匹配都无所谓：
            var str2 = 'html js js';
            var pattern2 = /js/;
            console.log(str2.search(pattern2)); // 5 返回的并不是一个数组

// match：
            // 在不全局匹配时，什么分组啥子的都跟exec没啥区别
            var str3 = 'js js js';
            pattern3 = /(j)s/;
            console.log(str3.match(pattern3)); // ["js", "j", index: 0, input: "js js js ", groups: undefined]
// match全局匹配：
            var str4 = 'js js js';
            pattern4 = /(j)s/g;
            console.log(str4.match(pattern4)); // ["js", "js", "js"]
            // match全局匹配和exec的区别为match全局匹配把分组中的小j弄没了，还有match直接用一个数组把所有的都匹配到了，而exec需要多个数组
// match VS exec：
            // match：非全局的情况下才会返回分组中匹配到的内容，全局匹配只能匹配到所有匹配到的字符
            // exec：无论是否全局匹配都会返回分组中匹配到的内容，都只会返回当前匹配到的一个内容，而不是全部返回

// 
            var str5 = '1.js\n2.js\n3.js';
            var pattern5 = /js$/mg;
            console.log(str5);
            console.log(str5.match(pattern5));

// spilt：
            // 字符串中的 spilt
            var str6 = 'html,css,js';
            console.log(str6.split(','));
            // 正则表达式中的 spilt
            var str7 = 'css,html,js';
            var pattern7 = /,/;
            console.log(str7.split(pattern7));

            var str8 = 'js , html , css';
            console.log(str8.split(' , ')); // 普通的需要' , '才能把空格和,去掉
            var str9 = 'js , html , css';
            var pattern9 = /\s*,\s*/;
            console.log(str9.split(pattern9)); // 在正则中用\s*代替不定个数空格，而字符串中的方式只有确定空格个数时才能使用
```

#### String对象中与正则相关的方法之replace:

```javascript
// replace：
            var str = 'I love js js';
            console.log(str.replace('js','html')); // I love html js
            // 在使用字符串中的替换时只能替换一个
            var str1 = 'I love js js';
            var pattern1 = /js/g;
            console.log(str1.replace(pattern1,'html')); // I love html html
            // 在正则全局中使用replace时会将所有的 js 替换成 html
            
            var str2 = 'I love code';
            var pattern2 = /(code)/;
            document.write(str2.replace(pattern2,'<strong        style="color:red;">&1</strong>'));
```

