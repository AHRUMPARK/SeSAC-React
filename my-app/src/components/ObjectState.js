import React, { useState } from 'react';

export default function ObjectState() {
  const [state, setState] = useState({ teacher: '이효석' });
  console.log(state);

  return (
    <div>
      <button
        onClick={() => {
          // 값만 카피, 주소 변동
          state.teacher = 'tetz';
          const copyObj = { ...state };
          setState(copyObj);
          console.log(state);
        }}
      >
        영어로!
      </button>
      <br />
      <span>{state.teacher}</span>
    </div>
  );
}
