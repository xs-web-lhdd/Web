**Ajax是什么：**
1、Ajax 是 Asynchronous JavaScript and XML（异步 JavaScript 和 XML）的简写
2、 Ajax 中的异步：可以异步地向服务器发送请求，在等待响应的过程中，不会阻塞当前页面，浏览器可以做自己的事情。直到成功获取响应后，浏览器才开始处理响应数据
3、XML（可扩展标记语言）是前后端数据通信时传输数据的一种格式，XML 现在已经不怎么用了，现在比较常用的是 JSON
4、Ajax 其实就是浏览器与服务器之间的一种异步通信方式
5、使用 Ajax 可以在不重新加载整个页面的情况下，对页面的某部分进行更新
**使用前搭建开发环境：**
Ajax 需要服务器环境，非服务器环境下，很多浏览器无法正常使用 Ajax。
使用VS Code时可以使用Live Server 插件，使用该插件时不能直接打开该html文件，应该打开html文件的上一级文件夹。

## Ajax的基础用法：
**1、XMLHttpRequest：**
想要使用Ajax时没有现成的Ajax供我们使用的，Ajax 想要实现浏览器与服务器之间的异步通信，需要依靠 XMLHttpRequest，它是一个构造函数
**2、Ajax 的使用步骤：**
1、创建 xhr 对象： `const xhr = new XMLHttpRequest();`
2、准备发送请求：`      xhr.open(
        'HTTP 方法 GET、POST、PUT、DELETE',
        '地址 URL https://www.imooc.com/api/http/search/suggest?words=js ./index.html ./index.xml ./index.txt',
        true
      );`，这里有三个参数，第一个参数是HTTP的方法，第二个参数是地址，第三个参数是 是否异步（true / false），第三个参数注意一下，虽然可以不是异步请求，但注意一般不用false，一般都是true，大家想一下，如果不是异步请求那还使用Ajax干嘛？自己给自己找麻烦吗？所以一般都是true。
      还有：调用 open 并不会真正发送请求，而只是做好发送请求前的准备工作。
3、发送请求：调用 send() 正式发送请求，数据可以通过send携带过去，send是通过请求体传数据的。

注意：如果上面open用的是HTTP方法中的GET方法，一般send里面不传数据，就算传了也是传个null`xhr.send(null);`，如果是HTTP中的POST方法，那就可以将数据放到send里面。

4、监听事件，处理响应：当获取到响应后，会触发 xhr 对象的 `readystatechange` 事件，可以在该事件中对响应进行处理。 `xhr.onreadystatechange() => {}`

```javascript
      readystatechange 事件监听 readyState 这个状态的变化
      它的值从 0 ~ 4，一共 5 个状态
      0：未初始化。尚未调用 open()
      1：启动。已经调用 open()，但尚未调用 send()
      2：发送。已经调用 send()，但尚未接收到响应
      3：接收。已经接收到部分响应数据
      4：完成。已经接收到全部响应数据，而且已经可以在浏览器中使用了
```

下面的写法兼容性非常好，IE6都可以兼容：
```javascript
// 记得加on
      xhr.onreadystatechange = () => {
      // 判断网络传输过程是否出现问题，获取到4就说明没有出现问题：
        if (xhr.readyState !== 4) return;
// 判断请求和服务器端有没有出现问题：
		// 1、200~299表示没问题 304也是成功的
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          console.log(xhr.responseText); // 数据存储在这里
          console.log(typeof xhr.responseText); // 
        }
      };
```

要是` readystatechange`配合`addEventListener`要注意兼容性IE6-8不支持。
还有一点：例如`xhr.readyState !== 4`中xhr可以用this，但由于有兼容性的问题，所以直接写`xhr`，一般不使用this。

还有就是尽量将时间监听放到`open`前面。
下面见完整代码：

```javascript
      const url = 'https://www.imooc.com/api/http/search/suggest?words=js';

      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;

        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          console.log(xhr.responseText);
          console.log(typeof xhr.responseText); // string
        }
      };
      xhr.open('GET', url, true); // GET方法
      xhr.send(null); // 什么也不传，为了兼容性传个null
```
## GET请求：
**1、携带数据：**
。
GET 请求不能通过请求体携带数据，但可以通过请求头携带。
携带方式也很简单，就是通过？以名值对的方式携带数据，如果想传多项数据就通过&连接，举例(绿色部分)：

```javascript
URL = https://www.imooc.com/api/http/search/suggest?`words=js&username=alex&age=18'`
// 绿色的部分
```
使用GET时，send()里面不能传数据，尽管在send()里面写一些数据也不会报错，但数据传输时是不会将send()里面的东西传过去的。
**2、数据编码：**

如果携带的数据是非英文字母的话，比如说汉字，就需要编码之后再发送给后端，不然会造成乱码问题。
可以使用 encodeURIComponent() 编码。
代码：

```javascript
      const url = `https://www.imooc.com/api/http/search/suggest?words=${encodeURIComponent(
        '前端'
      )}`;
      const xhr = new XMLHttpRequest();

      xhr.onreadystatechange = () => {
        if (xhr.readyState != 4) return;

        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          console.log(xhr.responseText);
        }
      };

      xhr.open('GET', url, true);

      xhr.send(null);
```
其实有的浏览器即使不编码浏览器也会自动编码，但不同浏览器的编码方式可能不一样，所以我们要自己出动编码。

## POST请求：
**1、携带数据：**
POST 请求主要通过请求体携带数据，同时也可以通过请求头携带。

```javascript
      const url = 'https://www.imooc.com/api/http/search/suggest?words=js';
      const xhr = new XMLHttpRequest();

      xhr.onreadystatechange = () => {
        if (xhr.readyState != 4) return;

        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          console.log(xhr.responseText);
        }
      };

      xhr.open('POST', url, true);
      xhr.send('name'); 
```
![第一行是URL携带的数据，第二行是send携带的数据](https://img-blog.csdnimg.cn/20210525182146857.png#pic_center)

如果想发送数据，直接写在 send() 的参数位置，一般是字符串.
传数据的时候要跟后端协商好传数据的格式，现在一般有两种比较常用的格式：
第一种：`xhr.send('username=alex&age=18');`用这种格式的原因是form表单的POST发送格式是`username=alex&age=18`这种形式的，为了POST传输统一，所以用这种格式。
第二种：
`不能直接传递对象，需要先将对象转换成字符串的形式`举例：

```javascript
      xhr.send({
        username: 'alex',
        age: 18
      });
 //     [object Object]
```
像上面的格式是不行的，浏览器会自动将对象`      xhr.send({
        username: 'alex',
        age: 18
      });
  `转换为字符串，转换完就是`[object Object]`，显然不符合我们的要求，当然这里的意思可不是我们手动将其用toString的方法转换为字符串，而是用`json`的方式，后面会讲。
  **2、数据编码：**
  这里讲的跟上面GET讲的一样，无非是POST可以通过send()传输数据，所以要比GET多一步，即send()里面的数据也要进行编码，直接上代码：
  

```javascript
xhr.send(`username=${encodeURIComponent('张三')}&age=18`);
```

  
