import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

//  JSX中写表达式
let time = new Date().toLocaleTimeString()
let str = '当前时间是：'
let element1 = (
    <div>
        <h1>helloworld</h1>
        <h2>{1+1}</h2>
        <h2>{str+time}</h2>
    </div>
)

let man1 = '发热'
let element2 = (
  <div>
      <h1>今天是否隔离</h1>
      <h2>{man1==="发热"?"隔离":"居家"}</h2>
  </div>
)

//  JSX变量对象
let element4 = (
    <div>
        <span>横着躺</span>
        <span>竖着躺</span>
    </div>
)

let man2 = '正常'
let element3 = (
  <div>
      <h1>今天是否隔离</h1>
      <h2>{man2==="发热"?<button>隔离</button>:element4}</h2>
  </div>
)

//  class也可以用，但是不推荐这样加入样式，因为class是js的关键词
//  应用className
let color = 'bgRed'
let element5 = (
  <div className={color}>
      <h1>今天是否隔离</h1>
      <h2>{man1==="发热"?"隔离":"居家"}</h2>
  </div>
)

let logo = 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
let element6 = (
  <div className={color}>
      <img src={logo} />
      <h2>{man1==="发热"?"隔离":"居家"}</h2>
  </div>
)

ReactDOM.render(
    element6,
    document.getElementById('root')
)


// JSX表达式
// 1.由HTML元素构成
// 2.中间如果需要插入变量用{}
// 3.{}中间可以使用表达式
// 4.{}中间表达式中可以使用JSX对象
// 5.属性和HTML内容一样都是用{}来插入内容