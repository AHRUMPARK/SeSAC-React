import React from 'react'
// ㅍ롭스 받을거임, 인자에 구조분해 할당
export default function ProfileComptnent({name, age, nickName }) {
  
  return (
    <div>
      <h1>이름 : {name} </h1>
      <h1>나이 : {age} </h1>
      <h1>별명 : {nickName} </h1>
    </div>
  )
}
