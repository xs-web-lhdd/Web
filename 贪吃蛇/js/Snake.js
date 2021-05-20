function Snake(){
    // 蛇的初始化身体
    this.body = [
        {row : 3, col : 5},
        {row : 3, col : 4},
        {row : 3, col : 3},
        {row : 3, col : 2},
        {row : 3, col : 1}
    ]
    // this.render();

    // 设置蛇的运动方向：
    this.direction = 'R';
}






// 蛇的运动：
// var i = 6;
Snake.prototype.update = function() {
// 用switch语句进行方向选择：
    switch(this.direction){
        case 'R':
            this.body.unshift({row : this.body[0].row, col : this.body[0].col+1});
            break;
        case 'D':
            this.body.unshift({row : this.body[0].row+1, col : this.body[0].col});
            break;
        case 'T':
            this.body.unshift({row : this.body[0].row-1, col : this.body[0].col});
            break;
        case 'L':
            this.body.unshift({row : this.body[0].row, col : this.body[0].col-1});
            break;
    }
    // this.body.pop();
    // this.body.unshift({row : this.body[0].row, col : this.body[0].col+1});
    
    
    // 蛇的不同方向的运动：
    
    // 判断游戏是否结束： 1、撞到边缘部分就死亡 —————————— 如果蛇头的位置的坐标不在地图中就结束游戏。
    // console.log(this); // this 就是 蛇类
    if(this.body[0].col > game.col - 1 || this.body[0].col < 0 || this.body[0].row > game.row - 1 || this.body[0].row < 0){
        alert('游戏结束 你当前的得分是：'+game.score);
        clearInterval(game.timer);
    }
    // if(this.body[0].col < 0){
        //     alert('结束了');
        //     clearInterval(game.timer);
        // }
    // if(this.body[0].row > game.row - 1){
        //     alert('结束了');
        //     clearInterval(game.timer);
        // }
    // if(this.body[0].row > 0){
        //     alert('结束了');
        //     clearInterval(game.timer);
        // }
        
        // 2、自己撞到自己的时候也会判定死亡
        for(var i = 1; i < this.body.length; i++){
            if(this.body[0].col == this.body[i].col && this.body[0].row == this.body[i].row){
                alert('死亡了 你当前的得分是：'+game.score);
                this.body.shift();
                clearInterval(game.timer);
            }
            
        }
                
                             
        // 蛇吃食物：
        // 如果蛇的头部没有碰到食物就代表着没有吃到食物，就进行尾删，如果碰到了就代表吃到了，就不进行尾部删除。此时只有头部增加了，没有尾部删除
        if(this.body[0].row == game.food.row && this.body[0].col == game.food.col){
            // alert('吃到食物');
            // 这种方法行不通：
            // this.body.push({row : this.body[this.body.length - 1].row - 1, col : this.body[this.body.length - 1].col - 1  }); 

            // 此时只有头部增加了，没有尾部删除
            game.food = new Food(game);
            // 加分：
            game.score++;
            // game.clearHtml(); // 本想通过封装一个函数进行实现，后发现直接写到清除画布函数中就可以实现，因此这条代码就不要看咯。略略略~~~
            // 让贞编号归零 --- 防止蛇窜一下：
            game.f = 0;
        }else {
            this.body.pop();
        }
                
                
                
Snake.prototype.render = function() {
    // console.log(game);
    // 设置蛇-头的颜色：
    game.setColor(this.body[0].row , this.body[0].col , 'pink');
    // 设置蛇-身的颜色： i 从1开始就是为了设置蛇身
    for(var i = 1; i < this.body.length; i++){
        game.setColor(this.body[i].row , this.body[i].col , 'orange');
    }
}

}