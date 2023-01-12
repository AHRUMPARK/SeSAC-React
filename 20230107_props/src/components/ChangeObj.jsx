import React, { useState } from 'react'

export default function ChangeObj(props) {
  const [index, setIndex] = useState(0);

  const obj = props.objArr[index];

  function changeProfile(){
    if(index === props.objArr.length -1) {
      // objArr = 개수 3
      // objArr[2] 끝
      // index 3이면 objArr[3] => 데이터 없음, Error
      // index = 2, objArr.length-1 => 2
      // 원래라면 index + 1 => 3
      // obj[3] => 에러 발생하므로 index 값을 다시 0으로 초기화
      // obj[0] 출력
      setIndex(0);
    }
    // 클릭을 하면 다음으로 넘어가야 하니 + 1
    setIndex(index + 1)
  }

  return (
    <div>
      <h1>이름 : {obj.name}</h1>
      <h2>나이 : {obj.age}</h2>
      <h2>별명 : {obj.nickName}</h2>
      <button onClick={changeProfile}>프로필 변경</button>
    </div>
  )
}
