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

  }

  render() {
    return (
      <div>
        <ul>
          {arrHTML}

          {/* <li></li>
          <li></li>
          <li></li> */}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
)