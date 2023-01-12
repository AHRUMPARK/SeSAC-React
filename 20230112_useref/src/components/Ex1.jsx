import React, { useRef } from 'react'

export default function Ex1() {
  const inputValue = useRef();
  const divCSS = useRef();

  const chageCSS = () => {
  //  const changeColor = inputValue.current.value;
  //  divCSS.current.style.backgroundColor= changeColor;
   divCSS.current.style.backgroundColor = inputValue.current.value;
  }

  return (
    <div ref={divCSS} style={{
        width:'500px',
        height: '100PX',
        borderRadius: '10PX'
    }}>
      <input ref={inputValue} style={{
          marginTop:'25PX'
      }}/>
      <br />
      <button onClick={chageCSS}>색 적용</button>
    </div>
  )
}
