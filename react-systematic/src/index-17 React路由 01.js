import React from 'react';
import ReactDOM from 'react-dom';

//  hash模式
//  import { HashRouter as Router,Link,Route } from 'react-router-dom'

//  history模式/后端匹配使用
import { BrowserRouter as Router,Link,Route } from 'react-router-dom'

//  安装 npm install react-router-dom --save

//  ReactRouter 三大组件：
//  Router：所有路由组件的根组件（底层组件），包裹路由规则的最外层容器
//  Route： 路由规则匹配组件，显示当前规则对应的组件
//  Link：  路由跳转的组件

//  注意： 如果要精确匹配，那么可以在route上设置exact属性

function Home() {
  return (
    <div>
      <h1>admin首页</h1>
      <div>admin这里是首页</div>
    </div>
  )
}

function Me() {
  return (
    <div>
      <h1>admin个人中心</h1>
      <div>admin这里是个人中心</div>
    </div>
  )
}

function Product() {
  return (
    <div>
      <h1>admin产品页面</h1>
      <div>admin这里是产品页面</div>
    </div>
  )
}

class DemoPage extends React.Component{
  render() {
    return(
      <div>
        <div>所有页面都显示的普通内容</div>
        <div>------------------------------------------------------------------------</div>
        <Router>
          <div>
              <span>---------</span>
              <Link to="/">主页</Link>
              <span>---------</span>
              <Link to="/product">产品</Link>
              <span>---------</span>
              <Link to="/me">个人中心</Link>
              <span>---------</span>
          </div>
            <Route path="/" exact component={()=>(<div>首页</div>)}></Route>
            <Route path="/me" component={()=>(<div>个人中心</div>)}></Route>
            <Route path="/product" component={()=>(<div>产品页面</div>)}></Route>
          
        </Router>
        <div>------------------------------------------------------------------------</div>
        <Router>  
          {/* basename属性，设置根路由路径，router可以在一个组件中写多个 */}
          <div className="nav">
            <span>---------</span>
            <Link to="/admin/">主页</Link>
            <span>---------</span>
            <Link to="/admin/product">产品</Link>
            <span>---------</span>
            <Link to="/admin/me">个人中心</Link>
            <span>---------</span>
          </div>

          <Route path="/admin/" exact component={Home}></Route>
          <Route path="/admin/product" component={Product}></Route>
          <Route path="/admin/me" component={Me}></Route>
        </Router>
      </div>
    )
    
  }
}

ReactDOM.render(
  <DemoPage />,
  document.getElementById('root')
)