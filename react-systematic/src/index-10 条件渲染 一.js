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
      isLogin: true
    }
    
  }

  render(){
    if (this.state.isLogin) {
      return (<UserGreet />)
    } else {
      return (<UserLogin />)
    }
  }
}
//  ---------------------------------------以上为第一种

ReactDOM.render(
  <ParentCom />,
  document.getElementById('root')
)