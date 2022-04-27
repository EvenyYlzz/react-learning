import React from 'react';
import ReactDOM from 'react-dom';

import { Redirect,BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom'

//  重定向组件
//  要访问某个组件时，如果有重定向组件，那么就会修改页面路径，使得页面内容显示为所定向路径的内容

function LoginInfo(props) {
  // props.LoginState = 'success'
  // props.LoginState = 'fail'
  
  // 可以自己判断逻辑进行跳转，不一定要使用这个重定向插件
  if (props.location.state.LoginState === 'success') {
      return (
        <Redirect to="/admin"></Redirect>
      )
  } else {
      return(
        <Redirect to="/login"></Redirect>
      )
  }

}

let FormCom = () => {

  let pathObj = {
      pathname: "/logininfo",
      state: {
        LoginState: 'success'
      }
  }

  return (
    <div>
      <h1>表单验证</h1>
      <Link to={ pathObj }>登录验证后页面</Link>
    </div>
  )
}

class ChildCom extends React.Component {
    render() {
      return (
        <div>
          <button onClick={ this.clickEvent }>跳转到首页</button>
        </div>
      )
    }

    clickEvent = () => {
      console.log(this.props)
      this.props.history.push("/",{ msg: '这是由ChildCom组件发给首页的数据' })
      // this.props.history.replace("/",{ msg: '这是由ChildCom组件发给首页的数据' })
    }
}

class AppCom extends React.Component{
  render() {
    return (
      <div>
        <Router>
            {/* Swicth，让组件内的内容的route值匹配1个，只要匹配到了，剩余的路由规则则不再匹配，这样两个abc页就不会显示第二个，只显示第一个 */}
          <Switch>
            <Route path="/" exact component={(props)=>{ console.log(props); return(<h1>首页</h1>) }}></Route>
            <Route path="/formcheck" exact component={ FormCom }></Route>
            <Route path="/login" exact component={()=>(<h1>登录页</h1>)}></Route>
            <Route path="/logininfo" exact component={ LoginInfo }></Route>
            <Route path="/admin" exact component={()=>(<h1>已登录页面，登陆成功</h1>)}></Route>
            {/* 路由一致，同时显示 */}
            <Route path="/abc" exact component={()=>(<h1>abc1页，登陆成功</h1>)}></Route>
            <Route path="/abc" exact component={()=>(<h1>abc2页，登陆成功</h1>)}></Route>
            <Route path="/child" exact component={ ChildCom }></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <AppCom />,
  document.getElementById('root')
)