import React from 'react';
import ReactDOM from 'react-dom';

//  React 事件
//  写法特点：
//  1.react事件，绑定事件（onClcik）的命名采用驼峰命名法
//  2.{}括起来，传入一个函数，而不是字符串

class ParentCom extends React.Component{
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div>
        <form action="https://www.baidu.com">

          <div>
            <div className="child">
              <h1>helloWorld</h1>
              <button onClick={this.parentEvent1}>提交1</button>
            </div>
          </div>
        </form>
        <p></p>
        <button onClick={this.parentEvent2('传参传参')}>提交2</button>
        <p></p>
        <button onClick={(e)=>this.parentEvent3('ES6匿名箭头函数msg:helloWrold',e)}>提交3</button>
        {/* 通过匿名箭头函数传递多个参数 */}
        <p></p>
        <button onClick={ function(e){this.parentEvent3('不使用ES6的匿名函数msg:helloWrold',e)}.bind(this) }>提交4</button>
        {/* 通过匿名函数传递多个参数，需要绑定this */}
      </div>
    )
  }

  parentEvent1=(e)=>{
    //  React返回的事件对象是代理的原生的事件对象，如果想要查看事件对象的具体值，必须直接输出事件对象的属性（不然从控制台是看不到的，null）
    console.log(e)

    //  return false
    //  原生，阻止默认行为时，可以直接返回return false
    //  此处是代理，所以不能这样用，应像如下进行解决，已解决默认行为
    e.preventDefault()

  }

  parentEvent2=(e)=>{
    //  未点击就调用输出，再点击不生效，因为如此传值不正确，要传入函数，而不是字符串
    console.log(e)
  }

  parentEvent3=(msg,e)=>{
    //  通过这种方式完成参数传递，并传递事件源对象，又可以对源对象进行操作
    //  正确时间函数传值
    console.log(msg)
    console.log(e)
  }

  parentEvent4=(msg,e)=>{
    //  通过这种方式完成参数传递，并传递事件源对象，又可以对源对象进行操作
    //  正确时间函数传值
    console.log(msg)
    console.log(e)
  }
}

//  React 事件传参，

ReactDOM.render(
  <ParentCom />,
  document.getElementById('root')
)