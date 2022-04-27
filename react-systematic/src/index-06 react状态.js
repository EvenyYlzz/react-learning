import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import './04style.css'

//  React State 相当于 Vue 的 Data

class Clock extends React.Component{
  constructor(props){
    super(props)
    //  状态（数据）——> view
    //  构造函数初始化数据，将需要改变的数据初始化到state中
    this.state = {
      time: new Date().toLocaleTimeString()
    }

    console.log(this.state.time)
  }

  render() {
    //  在此修改数据，会重新进行此处render渲染函数
    //  console.log('渲染函数')
    //  this.state.time = new Date().toLocaleTimeString()
    return (
      <h1>当前时间：{this.state.time}</h1>
    )
  }

  //  生命周期函数，组件渲染完成时调用的函数
  componentDidMount(){
    setInterval(() => {
      console.log(this.state.time)
      //  Do not mutate state directly. Use setState()
      //  this.state.time = new Date().toLocaleTimeString()
      this.setState({
        time: new Date().toLocaleTimeString()
      })
      //  通过this.setState修改完数据后，并不会立即修改DOM里面的内容，react会在这个函数内容所有设置状态改变后，统一对比虚拟DOM对象，然后再统一修改，提升性能（减少DOM操作）
    }, 1000)
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)

// setInterval(() => {
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   )
// }, 1000)

//  反复渲染同一个组件，不会重新进行初始化
//  不生效
// setInterval(() => {
//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   )
// }, 1000)