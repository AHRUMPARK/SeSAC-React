import React, { useRef, useState } from 'react'

export default function Comparing() {

  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  let countvar = 0;

  //랜더링을 일으키는
  const [render, setRender] =useState(false);

  const countUpState = () => {
    setCountState(countState + 1);
    console.log('State : ', countState);
  }
  //Ref는 값은 항상 currnet에 들어있다!!!!
  const countUpRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref : ', countRef.current );
  }

  const countUpVar = () => {
    countvar += 1;
    console.log('Variable : ', countvar);
  }
  
  //컴포넌트 리랜더링
  const reRender = () => {
    setRender(!render);
  }

  return (
    <div>
      <h1>State : {countState}</h1>
      <h1>Ref : {countRef.current}</h1>
      <h1>Variable : {countvar}</h1>
      <br />
      <button onClick={countUpState}>State Up!</button>
      <button onClick={countUpRef}>Ref Up!</button>
      <button onClick={countUpVar}>Variable Up!</button>
      <button onClick={reRender}>렌더링!</button>
    </div>
  )
}
