import React from 'react';
import ReactDOM from 'react-dom';
import jsonData from './feiyan.json'
import './12style.css'

//  React 制作疫情地图
//  1.疫情数据获取 

console.log(jsonData)

let provinceObj = {

}

jsonData.data.list.forEach( (item, index) => {

  if (provinceObj[item.province] === undefined) {
    provinceObj[item.province] = {
      confirm: 0,
      heal: 0,
      dead: 0
    }
  }

  item.confirm = item.confirm ? item.confirm : 0
  item.heal = item.heal ? item.heal : 0
  item.dead = item.dead ? item.dead : 0

  provinceObj[item.province] = {
    confirm: provinceObj[item.province].confirm + item.confirm,
    heal: provinceObj[item.province].heal + item.heal,
    dead: provinceObj[item.province].dead + item.dead
  }
})

let provinceList = []
for (const key in provinceObj) {
  provinceObj[key].province = key
  provinceList.push(provinceObj[key])
}

//  对数据进行排序
provinceList.sort((a,b)=> {
  if(a.confirm > b.confirm){
    return -1
  } else {
    return 1
  }
})
console.log(provinceList)

class Bili extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h1>中国疫情</h1>
        <ul>
          <li>
            <span>地区</span>
            <span>确诊</span>
            <span>死亡</span>
            <span>治愈</span>
          </li>
          {
            this.props.list.map((item,index) => {
              return (
                <li key={index}>
                  <span>{item.province}</span>
                  <span>{item.confirm}</span>
                  <span>{item.dead}</span>
                  <span>{item.heal}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <Bili list={provinceList} />,
  document.getElementById('root')
)