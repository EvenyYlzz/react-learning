import React from 'react';
import ReactDOM from 'react-dom';


let arr1 = [1,2,3,4,5,6]

//  对数组直接进行循环，相当于for循环
arr1.forEach((item,index,arr) => {
//  无返回值
//  用return 也没用
})

let arr2 = ['香蕉','苹果','雪梨']

//  对数组每一项进行加工，加工完成后，返回一个新的数组
let res2 = arr2.map((item,index,arr) => {
//  有返回值
  let str = index + item + index
  return str
})

let arr3 = [1,2,3,4,5,6,7,8,9]
//  filter，就是将想要的内容进行筛选，不要的内容去除，最终返回想要的内容数据
let res3 = arr3.filter((item,index,arr) => {
//  有返回值
  if ( item % 2 ===0 ) {
    //  通过返回true还是false进行选择，true就是想要，false就是去除
    return true
  } else {
    return false
  }
})

//  reduce，是对整个数组进行整合
//  将数组每一项内容整合后，返回一个新的内容数据
let arr4 = [1,2,3,4,5,6,7,8,9]
let res4 = arr4.reduce((pre,next,index) => {
  console.log('pre：',pre)
  console.log('next：',next)
  return pre + next
}, 0)

console.log('res4：',res4)

//  for...in...主要用于遍历对象，不适用于遍历数组
//  for...of...可以用来遍历数组，类数组的对象，字符串（ES6）
