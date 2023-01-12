import React, { useState } from 'react'
import Timer from './Timer';

export default function ShowTimer() {
  // 조건이 되었을때 해주려고 false
  const [show, setShow] = useState(false);

  return (
    <div>
      {/* 조건에 따라 보여줄지 말지 */}
      {/* 트루가 될때 컴포넌트 실행 되도록! */}
      {show && <Timer />}
      <button onClick={() => {setShow(!show)}}>버튼</button>
    </div>
  )
}
