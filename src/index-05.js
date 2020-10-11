import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import './04style.css'

//  函数式组件
//  比较简单，一般没有事件，因为函数里面写函数，复杂且不方便
function Childcom(props){
  console.log(props)

  let title = <h2>我是副标题</h2>
  let weather = props.weather
  let isGo = weather==='下雨' ? '下雨了不出门':'不下雨出门'

  return (
    <div>
      <h1>函数式组件helloworld</h1>
      {title}

      <div>
        是否出门？
        <span>{isGo}</span>
      </div>
    </div>
  )
}

//  类组件定义
//  一般又称为动态组件，会有交互及数据修改，如果有事件，尽量用类组件，动态修改数据，用类组件
//  组件中嵌套组件的，叫做复合组件 
class HelloWorld extends React.Component{
  render() {
    console.log('父：',this.props)
    return (
      <div>
        <h1>类组件定义HELLOWORLD</h1>
        <h1>{this.props.name}</h1>
        {/* 父传子 */}
        <Childcom weather={this.props.weather} />
      </div>  
    )
  }
}

// ReactDOM.render(
//     <Childcom weather='下雨' />,
//     document.getElementById('root')
// )

ReactDOM.render(
  <HelloWorld name='老陈' weather='下雨' />,
  document.getElementById('root')
)
