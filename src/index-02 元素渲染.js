import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // 组件
import * as serviceWorker from './serviceWorker';

//  JSX语法
//  <APP /> JS的普通对象
//  let app = <App />
//  let root = document.getElementById('root')
//  ReactDOM.render(app,root)
//  ReactDOM.render 渲染的方法

// let h1 = <h1>helloword<span> 这是副标题</span></h1> //  JSX语法写法，元素
// let root = document.getElementById('root')
// ReactDOM.render(h1,root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//  实现页面时刻的显示
// function clock() {
//     // let time = new Date().toDateString() 不一样的表达
//     // let time = new Date().toLocaleDateString()
//     let time = new Date().toLocaleTimeString()
//     //  可换行用括号括起来
//     let element = (
//         <div>
//           <h1>现在的时间是{time}</h1>
//           <div>第二行</div>
//         </div>
//     )
//     let root = document.getElementById('root')
//     ReactDOM.render(element,root);
// }

// setInterval(clock,1000)



//  2、函数式组件渲染
//  react函数式组件
function Clock(props) {
  return (
      <div>
          <h1>现在的时间是{props.date.toLocaleTimeString()}</h1>
          <h2>函数式组件开发</h2>
      </div>
  )
}
//  组件传值，props写到组件上
function run() {
  ReactDOM.render(
      //  渲染Clock组件
      <Clock date={new Date()} />,
      document.getElementById('root')
  )
}

setInterval(run, 1000)
// 优点：
// 1.JSX执行更快，编译为Javascript代码时进行了优化
// 2.类型更安全，编译过程如果出错就不能编译，及时发现错误
// 3.JSX编写模板更加简单快速（不要跟VUE比）

// 注意：
// 1.JSX必须要有一个根节点
// 2.正常的普通HTML元素要小写，如果是大写默认是组件

// JSX可以写表达式（{ ？： } ）
