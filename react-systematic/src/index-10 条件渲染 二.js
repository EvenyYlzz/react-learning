import React from 'react';
import ReactDOM from 'react-dom';

//  React 条件渲染
//  React中条件渲染即和Javascript的条件运算，如if、else、三元运算符等

//  1.直接通过条件运算返回要渲染的JSX对象
//  2.通过条件运算得出JSX，再将JSX对象渲染到模板中

function UserGreet(props){
  return (
    <div>
      <h1>欢迎登录</h1>
    </div>
  )
}

function UserLogin(props){
  return (
    <div>
      <h1>请先登录</h1>
    </div>
  )
}

class ParentCom extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      isLogin: false
    }
    
  }

  render(){
    let element = null

    if (this.state.isLogin) {
      element = <UserGreet />
    } else {
      element = <UserLogin />
    }

    return (
      <div>
        <h1>这是头部</h1>
        {element}
        <hr/>
        <h1>这是三元运算符操作</h1>
        {this.state.isLogin?<UserGreet />:<UserLogin />}
        <h1>这是尾部</h1>
      </div>
    )
  }
}
//  ---------------------------------------以上为第二种

ReactDOM.render(
  <ParentCom />,
  document.getElementById('root')
)