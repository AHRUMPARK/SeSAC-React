import React, { useRef } from 'react'
import { useState } from 'react'

export default function TestRef() {
  const [text, SetText] = useState('안녕하세요');
  const inputValue = useRef();

  function onChangeText() {
    // current ref가 부여된 돔요소 접근
    console.log(inputValue);
    SetText(inputValue.current.value);
  };
  
  return (
    <div>
      <h1>{text}</h1>
      <input ref={inputValue} onChange={() => {onChangeText();}} />
    </div>
  )
}
