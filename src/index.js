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
function clock() {
    let time = new Date().toDateString()
    let element = <h1>现在的时间是{time}</h1>
    let root = document.getElementById('root')
    ReactDOM.render(element,root);
}

clock()