import React, { useState } from 'react'
import PracticeTimer from './PracticeTimer'

export default function ExUnmount() {
  const [show, setShow] = useState(false);

  return (
    <div>
      { show && <PracticeTimer />}
      <button onClick={() => {setShow(!show)}}>보이기</button>
    </div>
  )
}
