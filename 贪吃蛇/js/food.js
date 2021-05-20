function Food(game) {
    // 食物的位置：
    // 用 do while 循环，作用：先创建一个 row col 然后再判断食物是否在蛇的身上
    do{
        this.row = parseInt(Math.random() * game.row);
        this.col = parseInt(Math.random() * game.col);
        var Food_ROW = this.row;
        var Food_COL = this.col;
    }while((function() {
        // 遍历蛇的 row 和 col 来判断食物是否与蛇身重合
        for(var i = 0; i < game.snake.body.length; i++){
            // console.log(this); // this 是window ，所以if条件中这样写是错误的  ：this.row == game.snake.body[i].row && this.col == game.snake.body[i].col
            // 解决的方案是 可以备份一个 this 或者 备份 this.row 和 this.col
            if(Food_ROW == game.snake.body[i].row && Food_COL == game.snake.body[i].col){
                return true;
            }
        }
        
        return false;
    })())

}

Food.prototype.render = function () {
    game.setHtml(this.row,this.col,'♥');
}