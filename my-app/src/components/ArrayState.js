import React, { useState } from 'react';

export default function ArrayState() {
  // [0]값이 0
  const [state, setState] = useState([0]);
  console.log(state);

  return (
    <div>
      {/* 0번째 인덱스 */}
      {state[0]}
      <br />
      <button
        onClick={() => {
          // 초기값 0 을 1로 초기화 한다.
          // 컴포넌트 변경 함수를 해야 값이 변경된다.
          // 이전 주소 [0]과 주소가 달라졌다..
          state[0] = 1;
          const copyArr = [...state];
          setState(copyArr);
          console.log(state);
        }}
      >
        +1
      </button>
    </div>
  );
}
