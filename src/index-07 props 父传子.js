import React from 'react';
import ReactDOM from 'react-dom';
import './07props.css'

//  Props
//  父传递给子组件数据，单向流动，不能子传递给父
//  props的传值，可以是任意的类型

//  props可以设置默认值
//  HelloMessage.defaultprops = { name:'老陈' , mas: 'helloWrold' }

//  props可以传递函数，props可以传递父元素的函数，就可以去修改父元素的state，从而达到传递数据给父元素


//  在父元素中使用state去控制子元素props，从而达到父元素数据传递给子元素
class ParentCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isActive: true,
    }

    this.changeShow = this.changeShow.bind(this)
  }

  changeShow() {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.changeShow}>控制子元素显示</button>
        <ChildCom isActive={this.state.isActive} />
      </div>
    )
  }
}

class ChildCom extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render() {
    let strClass = null
    if(this.props.isActive){
      strClass = 'active'
    } else {
      strClass = ''
    }

    return (
      <div className={'content '+strClass}>
        <h1>我是子元素</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <ParentCom />,
  document.getElementById('root')
)