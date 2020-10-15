import React from 'react';
import ReactDOM from 'react-dom';

//  React 列表渲染
//  将列表内容拼装成数组放置到模板中
//  将数据拼装成数组的 JSX 对象

let arr = ["小红","小象","小象红"]

let arrHTML = [<li>小红</li>,<li>小象</li>,<li>小象红</li>]

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
    let listArr = []
    for(let i = 0 ; i<this.state.list.length ; i++) {
      let item = (
        <li>
          <h3>{this.state.list[i].title}</h3>
          <p>{this.state.list[i].content}</p>
        </li>
      )
      listArr.push(item)
    }

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

      </div>
    )
  }
}

ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
)