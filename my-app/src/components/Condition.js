import React, { useState } from 'react';

export default function () {
  //const변수는 리사인이 불가능해서 추천
  const [condition, setCondition] = useState(true);

  return (
    <div>
      <button onClick={() => setCondition(!condition)}>컨디션 변경!</button>
      <br />
      {/* 삼항연산자 사용 */}
      <span>{condition ? '😘' : '🤕'}</span>
    </div>
  );
}
