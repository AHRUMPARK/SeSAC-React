import React, { useState } from 'react'
import Item from './Item';

export default function ConditionalRender() {
  // 컨디션 true면 보여주고, false면 안보여준다.
  const [codition, setCodition] = useState('보여주기');
  
  const onChage = () => {
    //
    codition === '보여주기' ?
    setCodition('감추기')
    : setCodition('보여주기');

  }
  
  //변수처리도 가능
  const ConditionalRender = codition === '감추기' && <Item />;

  return (
    <>
    {/* 왼쪽이 ture일때 실행 false면 사라지도록 
    로그인 정보가 있으면 보여주고 할때 처리도 가능하다.
    */}
    {/* {codition === '감추기' && <Item />} */}

    {/* 변수로 처리해서도 가능합니다. */}
    {ConditionalRender}

    {/* 보여주기 버튼일때 바뀐다. */}
    <button onClick={onChage}>{codition}</button>
    </>
  )
}
