import React from 'react';
import ReactDOM from 'react-dom';

//  React 列表渲染
//  将列表内容拼装成数组放置到模板中
//  将数据拼装成数组的 JSX 对象

function ListItem(props) {
  return (
    <li>
      <h3>{props.index}:{props.data.title}</h3>
      <p>{props.data.content}</p>
    </li>
  )
}

class ListItem2 extends React.Component{
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <li onClick={(event)=>{this.clickEvent(
        this.props.index,
        this.props.data.title,
        event
        )}}>
        <h3>{this.props.index}:{this.props.data.title}</h3>
        <p>{this.props.data.content}</p>
    </li>
    )
  }

  clickEvent=(index,title,event)=>{
    alert(index+'————'+title)
  }
}

class Welcome extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      list: [
        {
          title: "第一节 React事件",
          content: "事件内容"
        },
        {
          title: "第二节 React数据传递",
          content: "数据传递内容"
        },
        {
          title: "第三节 React条件渲染",
          content: "条件渲染内容"
        }
      ]
    }
  }
  render() {
    let listArr = this.state.list.map( (item,index) => {
      return (
        //  key值要放对
        <ListItem2 key={index} data={item} index={index}></ListItem2>
      )
    })

    //  使用数组的map方法，对每一项数据按照 JSX 的形式进行加工，最终得到一个每一项都是 JSX 对象的数组，再将数组渲染到模板中

    //  key值需要放置到每一项中

    return (
      <div>
          <h1>今天课程内容</h1>

          <ul>
            {listArr}
            <li>
              <h3>这是标题</h3>
              <p>内容</p>
            </li>
          </ul>

          <h1>复杂没有用组件列表</h1>
          {
            this.state.list.map( (item,index) => {
              return (
                <li key={index} onClick={(event)=>{this.clickFn(index,item.title,event)}}>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </li>
              )
            })
          }
      </div>
    )
  }

  clickFn=(index,title,event)=>{
    alert(index+'————'+title)
  }
}

ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
)