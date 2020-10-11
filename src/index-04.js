import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import './04style.css'

let exampleStyle = {
  background: "skyblue",
  borderBottom: "1px solid red"
}

let element = (
    <div>
      <h1 style='height:200px' style={exampleStyle}>helloworld</h1>
    </div>
)

let classStr2 = "redBg"
let element2 = (
    <div>
      {/* 不能重复写 注释写法方式*/}
      {/* <h1 className="abc" className={classStr}>helloworld</h1> */}
      <h1 className={classStr2}>helloworld</h1>
      <h1 className="abc" className={"abc "+classStr2}>helloworld</h1>
    </div>
)

let classStr3 = ['abc','redBg']
let element3 = (
    <div>
      <h1 className={classStr3}>helloworld</h1>
    </div>
)// 这种写法不可以

let classStr4 = ['abc2','redBg2'].join(' ')
let element4 = (
    <div>
      <h1 className={classStr4}>helloworld</h1>
    </div>
)// 这种写法可以

ReactDOM.render(
    element4,
    document.getElementById('root')
)
