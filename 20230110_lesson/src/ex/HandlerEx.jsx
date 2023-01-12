import React from 'react'
import { useState } from 'react'

export default function HandlerEx() {
  const [state, setState] = useState('Hello world!')
  return (
    <div>
      {state}
      <br />
      <button onClick={() => setState('Goodbye world!')}>클릭</button>
    </div>
  )
}
