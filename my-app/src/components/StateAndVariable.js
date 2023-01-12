import React, { useState } from 'react';

export default function StateAndVariable() {
  const [state, setState] = useState(0);
  // console.log(state);
  // 변수는 값이 변해서 let
  // 변수인 variable은 뭐든 리랜더링하면 값이 0 으로 다시 초기화된다. 1을 최대값으로 가질 수 밖에 없다.
  // 하지만 state는 컴포넌트가 다시 랜더링이 되어도 이전값을 기억하고 있다.
  let variable = 0;

  function setVariable() {
    // 실행되는 시점이 온클릭 시점이라.. 0일수밖에!
    variable += 1;
    console.log(`state: ${state} / variable: ${variable}`);
  }

  return (
    <div>
      {state} / {variable}
      <br />
      {/* 두가지를 한번에 보여줘야 하니 중괄호 열기 */}
      <button
        onClick={() => {
          setState(state + 1);
          setVariable();
        }}
      >
        +1
      </button>
    </div>
  );
}
