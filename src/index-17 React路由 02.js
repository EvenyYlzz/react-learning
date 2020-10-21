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


//  Link的replace属性：点击链接后，将新地址替换成历史访问记录的原地址

function Home() {
  return (
    <div>
      <h1>admin首页</h1>
      <div>admin这里是首页</div>
    </div>
  )
}

function Me(props) {
  console.log(props)
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

function News(props) {
  //  实现动态路由
  return (
    <div>
      新闻页，新闻id：{props.match.params.id}
    </div>
  )
}

class DemoPage extends React.Component{
  render() {

    let meObj = {
      pathname:"/me", //  跳转的路径
      search:"?username=admin", //  get请求参数
      hash:"#abc",  //  设置的HASH值
      state:{msg:'helloworld'}  //  传入组件的数据
    }
    //  自动对路径进行拼接

    return(
      <div>
        <Router>  
          {/* basename属性，设置根路由路径，router可以在一个组件中写多个 */}
          <div className="nav">

            {/* Link组件可以设置to属性来进行页面的跳转，to属性可以直接写路径的字符串，也可以通过一个对象，进行路径的设置 */}

            <span>---------</span>
            <Link to="/">主页</Link>
            <span>---------</span>
            <Link to="/product">产品</Link>
            <span>---------</span>
            {/* 在to后面加replace，可以改变前进后退，后退直接回到首页 */}
            <Link to={ meObj }>个人中心</Link>
            <span>---------</span>
            <Link to="/news/456789">新闻页面</Link>
            <span>---------</span>
          </div>

          <Route path="/" exact component={Home}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/me" exact component={Me}></Route>
          <Route path="/news/:id" component={News}></Route>
        </Router>
      </div>
    )
    
  }
}

ReactDOM.render(
  <DemoPage />,
  document.getElementById('root')
)