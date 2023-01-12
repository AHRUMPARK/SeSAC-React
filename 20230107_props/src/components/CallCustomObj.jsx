import React from 'react'
import CustomObj from './CustomObj'

// 객체선언, 객체를 props로 전달
export default function CallCustomObj() {
  const pororoObj = {
    name: "뽀로로",
    age: "5살",
    nickName: "사고뭉치"
  }
  return (
    <div>
      {/* <CustomObj obj={pororoObj} /> */}
      <CustomObj />
    </div>
  )
}
