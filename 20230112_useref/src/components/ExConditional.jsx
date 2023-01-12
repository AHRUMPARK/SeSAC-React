import React, { useState } from 'react'
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

export default function ExConditional() {
  // 조건부 랜더링은 가급적 state > 반영된것을 바로바로 보기 위함
  const [codition, setCodition] = useState('1번');
  
  const onChange = () => {
    codition === '1번'?
    setCodition('2번')
    : setCodition('1번')
  }
  
  return (
    <div>
      {codition === '1번' ? <PracticeOne text={codition} /> 
      : <PracticeTwo text={codition} />}
      <button onClick={onChange}>{codition}</button>
    </div>
  )
}
