import React from 'react';
import ReactDOM from 'react-dom';

//  React 生命周期、钩子函数
//  在这个生命周期中，有很多我们可以调用的事件

//  React生命周期的3个状态
//  1.Mounting：将组件插入到DOM中
//  2.Updating：将数组更新到DOM中
//  3.Unmounting：将组件移除DOM中

//  生命周期中的钩子函数（方法、事件）
//  ComponentWillMount：组件将要渲染
//  ComponentDidMount：组件渲染完毕
//  ComponentWillReceiveProps：组件将要接受props数据
//  ShouldComponentUpdate：在组件接收到新的状态state或props，判断是否更新，返回bool值
//  ComponentWillUpdate：组件将要更新
//  ComponentDidUpdate：组件已经更新
//  ComponentWillUnmount：组件将要卸载

class ComLife extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      msg: 'HelloWorld'
    }

    console.log('constructor构造函数')
  }

  componentWillMount() {
    console.log('①componentWillMount组件将要渲染')
  }

  componentDidMount() {
    console.log('②componentDidMount组件渲染完毕')
  }

  componentWillReceiveProps() {
    console.log('③componentWillReceiveProps组件将要接收新的状态state和props')
  }

  shouldComponentUpdate() {
    //  如果希望更新，就返回为真，不希望更新就返回为false，什么都不返回即undefined
    console.log('----shouldComponentUpdate返回bool值----')
    //  进行判断是否要更新内容
    if(this.state.msg === 'HelloWorld') {
      console.log('原msg【为】HelloWorld，【更新】返回true')
      console.log('---------------------------------------')
      return true
    } else {
      console.log('原msg【不为】HelloWorld，【不更新】返回false')
      console.log('---------------------------------------')
      return false
    }
    
  }

  componentWillUpdate() {
    console.log('④componentWillUpdate组件将要更新')
  }

  componentDidUpdate() {
    console.log('⑤componentDidUpdate组件更新完毕')
  }

  componentWillUnmount() {
    console.log('⑥componentWillUnmount组件移除')
  }

  render() {
    console.log('render渲染函数')
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.changeMsg}>组件更新</button>
      </div>
    )
  }

  changeMsg=()=>{
    this.setState({
      msg: 'Hello 老师'
    })
  }
}

class ParentCom extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      isShow: true
    }
  }

  render() {

    if(this.state.isShow) {
      return (
        <div>
          <button onClick={this.removeCom}>移除ComLife</button>
          <ComLife />
        </div>
      )
    } else {
      return (
        <div>
          <h1>将ComLife移除</h1>
        </div>
      )
    }
  }

  removeCom=()=>{
    this.setState({
      isShow:false
    })
  }
}

ReactDOM.render(
  <ParentCom></ParentCom>,
  document.getElementById('root')
)
