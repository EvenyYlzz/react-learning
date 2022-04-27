import React from 'react';
import ReactDOM from 'react-dom';
import './07props.css'

//  Props
//  调用父元素的函数从而操作父元素的数据，从而实现数据从子元素传递至父元素

class ParentCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      childData: null
    }
  }

  render() {
    return (
      <div>
        <h1>子元素传递给父元素的数据：{this.state.childData}</h1>
        <ChildCom setChildData={this.setChildData} />
      </div>
    )
  }
  //  用箭头函数则不需要进行绑定
  setChildData=(data)=>{
    this.setState({
      childData: data
    })
  }
}

class ChildCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      msg: "helloWorld"
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.sendData}>间接传递helloWorld给父元素</button>
        {/* 两种方法 */}
        <button onClick={()=>{this.props.setChildData('直接调用传递HelloWorld')}}>直接传递helloWorld给父元素</button>
      </div>
    )
  }
  //  用箭头函数则不需要进行绑定
  sendData=()=>{
    console.log(this.state.msg)
    //  拿到props中的函数
    console.log(this.props)
    //  将子元素传递给到父元素，实际就是调用父元素传递进来的函数
    this.props.setChildData(this.state.msg)
  }
}

ReactDOM.render(
  <ParentCom />,
  document.getElementById('root')
)