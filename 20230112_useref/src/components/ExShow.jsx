import React, { useState } from 'react'
import PracticeTimer from './PracticeTimer';

export default function ExShow() {
  const [show, setShow] =useState(false);

  return (
    <div>
      {/* 조건부 처리 */}
      {show && <PracticeTimer />}
      <button onClick={() => setShow(!show)}>{show ? '숨기기' : '보여주기' }</button>
    </div>
  )
}
