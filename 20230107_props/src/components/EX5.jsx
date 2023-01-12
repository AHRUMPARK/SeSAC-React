import React from 'react'
import ChangeObj2 from './ChangeObj2';

// 부모가 자식에게 데이터를 전달한다.
// 받은 데이터를 자식놈이 요리해서 여기 부모에서 출력한다.
export default function EX5() {
  const pororoObjArr = [
    {
      name: "뽀로로",
      age: "5살",
      nickName: "사고뭉치"
    },
    {
      name: "루피",
      age: "4살",
      nickName: "공주님"
    },
    {
      name: "크롱이",
      age: "5살",
      nickName: "장난꾸러기"
    }
  ];

  return (
    <div>
      <ChangeObj2 objArr={pororoObjArr}/>
    </div>
  )
}
