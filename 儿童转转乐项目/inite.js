// 点击切换页面功能
var firstClick = document.getElementsByClassName('firstclick')[0];
var first = document.getElementsByClassName('container')[0];


var secondClick = document.getElementsByClassName('secondclick')[0];
var second = document.getElementsByClassName('container-addtwo')[0];


var threeClick = document.getElementsByClassName('threeclick')[0];
var three = document.getElementsByClassName('container-addthree')[0];


var arrayClick = [firstClick,secondClick,threeClick];
var array = [first,second,three];

// 实现页面切换 字体变色 字体下边框
for(let i=0; i < array.length; i++){
    arrayClick[i].addEventListener('click',function(){
        for(var j=0; j < arrayClick.length; j++){
            array[j].style.display = 'none';
            arrayClick[j].style.borderBottom = '2px solid white';
            arrayClick[j].style.color = '#999';
        }
        array[i].style.display = 'block';
        arrayClick[i].style.borderBottom = '2px solid #282828'; 
        arrayClick[i].style.color = 'black';
    });
    
}