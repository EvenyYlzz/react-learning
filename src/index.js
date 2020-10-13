import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import './04style.css'

//  React State 相当于 Vue 的 Data

class Clock extends React.Component{
  constructor(props){
    super(props)
    //  状态（数据）——> view
    this.state = {
      time: new Date().toLocaleTimeString()
    }

    console.log(this.state.time)
  }

  render() {
    return (
      <h1>当前时间：{this.state.time}</h1>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)

setInterval(() => {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  )
}, 1000)