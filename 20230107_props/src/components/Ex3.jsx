import React from 'react'
import ChangeObj from './ChangeObj';

export default function Ex3() {
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
    },
  ];


    return (
      <div>
        <ChangeObj objArr={pororoObjArr} />
      </div>
    )
}