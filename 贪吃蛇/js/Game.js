function Game(){
    // 行数 列数
    this.row = 20;
    this.col = 20;
    // 设置分数：
    this.score = 0;
    // 初始化节点
    this.init();
    // 实例化蛇：
    this.snake = new Snake();
    // 开启蛇的运动：
    this.start();
    // 设置键盘的事件监听：
    this.bindEvent();
    // 实例化食物：
    this.food = new Food(this);
}
// 初始化：
Game.prototype.init = function() {
    this.dom = document.createElement('table');
    var tr,td;
    // 遍历行和列上树
    for(var i = 0; i < this.row; i++){
        tr = document.createElement('tr');
        for(var j = 0; j < this.col; j++){
            td = document.createElement('td');
            tr.appendChild(td);
        }
        // 追加到节点上树
        this.dom.appendChild(tr);
    }

    // 表格上树
    document.getElementById('app').appendChild(this.dom);
}



// 清除画布：
// 清除蛇的尾部颜色：----------------其实改变的是画布的颜色，如果不理解将颜色改变为 red 就会明白！
Game.prototype.clear = function() {
    for(var i = 0; i < this.row; i++){
        for(var j = 0; j < this.col; j++){
            // 清除尾部
            this.dom.getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.backgroundColor = 'transparent';
            // 清除食物------因为食物的实现是通过innerHTML实现的，所以清除的时候就将其改为空即可。
            this.dom.getElementsByTagName('tr')[i].getElementsByTagName('td')[j].innerHTML = '';
        }
    }
    // console.log('11111');
}




// 设置蛇的颜色：
Game.prototype.setColor = function(row,col,color) {
    // 让表格的第几行第几列设置颜色：
    this.dom.getElementsByTagName('tr')[row].getElementsByTagName('td')[col].style.backgroundColor = color;
}

// 设置食物：
Game.prototype.setHtml = function(row,col,html) {
    this.dom.getElementsByTagName('tr')[row].getElementsByTagName('td')[col].innerHTML = html;
}
// 本想通过一个函数去清除食物，后来发现直接将这项功能写到清除画布的函数里面就可以实现。所以下面注释的代码可以选择性的忽略哦
// // 清除食物：
// Game.prototype.clearHtml = function(row,col,html) {
//     this.dom.getElementsByTagName('tr')[row].getElementsByTagName('td')[col].innerHTML = '';
// }

// 设置键盘事件监听：
Game.prototype.bindEvent = function() {
    document.onkeydown = function(event) {

        // console.log(event);
        // 根据按下的键来改变direction的值，然后来改变蛇的运动方向。
        // console.log(this); // 指向的是 document
        if(event.keyCode == 40 && game.snake.direction != 'T'){
            // 注意：this.snake.direction 是错误的写法，因为this指的是document而不是game
            game.snake.direction = 'D';
        }
        if(event.keyCode == 39 && game.snake.direction != 'L'){
            game.snake.direction = 'R';
        }
        if(event.keyCode == 37 && game.snake.direction != 'R'){
            game.snake.direction = 'L';
        }
        if(event.keyCode == 38 && game.snake.direction != 'D'){
            game.snake.direction = 'T';
        }
    }
}

Game.prototype.start = function() {
    // 贞编号：
    this.f = 0;
    this.timer = setInterval(function(){
    // 定时器的本质就是游戏的渲染本质，清屏-更新-渲染
        game.f++;
        // 显示帧数 和 分数：
        document.getElementById('f').innerHTML = '帧数 ：' + game.f;
        document.getElementById('score').innerHTML = '分数 ：' + game.score;
    //  清屏：
        game.clear();
    // 蛇吃到食物时速度更快： --- 让玩家挺不过 30 分
        var during = game.snake.body.length < 30 ? 30 - game.snake.body.length : 1;
    // 蛇的运动： - 更新
        game.f % during == 0 && game.snake.update();
    // 渲染画布： - 渲染
        game.snake.render();
    // 渲染食物：
        game.food.render();
    }, 20)
}



