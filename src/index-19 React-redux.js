import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider,connect} from 'react-redux'

//  安装react-redux
//  npm install react-redux --save


//  使用：
//  ①初始化数据，实例化store等到数据仓库
//  ②数据的获取，数据修改
//   - 将state映射到组建的props中，将修改数据的方法映射到组建的props中

class Counter extends React.Component{

    render() {
      // 计数，通过store的state传给props，直接通过props就可以将state的数据获取
      let value = this.props.value
      // 将修改数据的事件或者方法传入到props
      let onAddClick = this.props.onAddClick
      let onAddClick5 = this.props.onAddClick5

      //  等同于vuex的mapMutation mapState

      return (
        <div>
          
          <h1>计数的数量：{value}</h1>
          <button onClick={onAddClick}>数字+1</button>
          <button onClick={onAddClick5}>数字+5</button>
        </div>
      )
    }
}

const addAction = {
   type: 'add'
}

let ActionFnObj = {
  add(state,action) {
    state.num++
    return state
  },
  addNum(state,action) {
    state.num = state.num + action.num
    return state
  }
}
function reducer(state={num:0},action){
  // switch(action.type){
  //   case 'add':
  //     state.num++
  //     break
  //   default:
  //     break
  // }
  if (action.type.indexOf('redux') === -1){
    state = ActionFnObj[action.type](state,action)
    return {...state}
  } else {
    return {...state}
  }
}

const store = createStore(reducer)

//  将store的state映射到组件里的props的函数
function mapStateToProps(state) {
  return {
    value:state.num
  }
}

//  将修改state数据的方法，映射到props，默认会传入store里的dispatch方法，实现了方法的共享
function mapDispatchToprops(dispatch) {
  return {
    onAddClick:() => {dispatch(addAction)},
    onAddClick5:() => {dispatch({type:'addNum',num:5})}
  }
}

//  connect 将组件和数据（方法）进行连接
//  将上面的这两个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件
const AppCom = connect(
  mapStateToProps,
  mapDispatchToprops
)(Counter)



//  provider组件：
//    自动得将store里的state和组件进行管理

ReactDOM.render(
  <Provider store={store}>
    <AppCom />
  </Provider>,
  document.getElementById('root')
)

