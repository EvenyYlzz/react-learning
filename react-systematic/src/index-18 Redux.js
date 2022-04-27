import React from 'react';
import ReactDOM from 'react-dom';
import Redux,{createStore} from 'redux'

//  Redux（处理数据的一种解决方案，或者说是状态管理的解决方案
//  解决React数据管理（状态管理），用于中大型，数据比较庞大，组件之间数据交互多的情况下使用。如果你不知道是否需要使用Redux，那么你就不需要用它

//  解决组件的数据通信
//  解决数据和交互较多的应用


//  Store：数据仓库，保存数据的地方
//  State：state是1个对象，数据仓库里的所有数据都放到 1 个state里
//  Action：1个动作，触发数据改变的方法，可以触发一个事件，改变state
//  Dispatch：将动作触发成方法
//  Reducer：是 1个函数，通过获取动作，改变数据生成 1个新的state，从而改变页面

//  安装Redux
//  npm install redux --save

//  用于通过动作创建新的state
//  reducer两个作用：1.初始化数据，2.通过获取动作，改变数据
const reducer = function(state={num:0},action) {
  switch(action.type){
      case "add":
        state.num++
        break
      case "dec":
        state.num--
        break
  }

  //  【最好】就是重新解构创建一个新的状态state返回
  return {...state}
}

//  创建仓库
const store = createStore(reducer)
console.log(store)

//  函数器计数器
const Counter = function(props) {
  return (
    <div>
      <button onClick={dec} >计数-1</button>
      {/* 【获取数据】 */}
      <h1>计数数量：{store.getState().num}</h1>

      <button onClick={add} >计数+1</button>
    </div>
  )
}

function add() {
  //  【修改数据】
  //  通过仓库的方法dispatch进行修改数据
  store.dispatch({type:"add"})
  console.log(store.getState().num)
}

function dec() {
  //  通过仓库的方法dispatch进行修改数据
  store.dispatch({type:"dec"})
  console.log(store.getState().num)
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
)

//  【修改视图】
//  监听仓库变化，调用渲染函数重新渲染
store.subscribe(()=>{
  ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  )
})