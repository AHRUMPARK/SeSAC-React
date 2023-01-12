import React, { useState } from 'react'

export default function ChangeObj2(props) {
  // 0이면 첫번째값 튀어나오고.. 하게 index
  const [index, setIndex] = useState(0);

  // 인댁스 state값이 0으로 초기화되어있어서 뽀로로 값이 들어간다.
  const obj = props.objArr[index];
  
  //이벤트 핸들러
  function changeProfile() {
    // 해당 배열의 끝
    if(index === props.objArr.length -1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  } 

  return (
    <div>
      <h1>이름 : {obj.name}</h1>
      <h2>나이 : {obj.age}</h2>
      <h2>별명 : {obj.nickName}</h2>
      {/* 온클릭같은 함수에다가 if를 거는것은 상관없다. */}
      <button onClick={changeProfile}>프로필 변경</button>
    </div>
  )
}
