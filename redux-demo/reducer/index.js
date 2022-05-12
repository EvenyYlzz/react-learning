const initState = {
  value: '默认值'
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'send_type':
      return 1
    default:
      return state
  }
}

module.exports = {
  reducer
}