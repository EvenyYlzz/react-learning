import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//  JSX语法
//  <APP /> JS的普通对象
//  let app = <App />
//  let root = document.getElementById('root')
//  ReactDOM.render(app,root)
//  ReactDOM.render 渲染的方法

let h1 = <h1>helloword</h1> //  JSX语法写法
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
