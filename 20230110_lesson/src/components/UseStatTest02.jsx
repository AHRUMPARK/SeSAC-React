import React from 'react'
import { useState } from 'react'

export default function UseStatTest02() {
  const [state, setState] = useState(0);
  function Increase() {
    setState(state+1);
  }
  function Decrease(){
    setState(state-2);
  }
  return (
    <div>
      {state}
      <br />
      <button onClick={Increase}>+1</button>
      <button onClick={Decrease}>-2</button>
    </div>
  )
}
