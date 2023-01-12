import React, { useRef } from 'react'

export default function RefDom() {
  const orangeEl = useRef();
  const skyBlueEl = useRef();
  const inputEl = useRef();

  //css 적용 함수
  const adjustCSS = () => {
    orangeEl.current.style.backgroundColor = 'orange';
    skyBlueEl.current.style.backgroundColor = 'skyblue';
  }

  const clerInput = () => {
    inputEl.current.value = '';
  }
  return (
    <div>
      <h1 ref={orangeEl}>Orange</h1>
      <h1 ref={skyBlueEl}>skyBlue</h1>
      <input ref={inputEl}/>
      <br />
      <br />
      <button onClick={adjustCSS}>CSS 적용하기</button>
      <button onClick={clerInput}>Input 초기화</button>
    </div>
  )
}
