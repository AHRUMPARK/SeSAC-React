import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// 1.값을 받아오려면 useSelector 사용한다.

export default function Test() {
  // 2. 어떤걸 받을지를 콜벡인자로 받은 것을 그대로
  // 3. 리턴 되면 weight로 들어간다.
  // 4. index.js에서.... 값이 온다.
  const weight = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>당신의 몸무게는 {weight} 입니다.</h1>
      {/* dispatch 우편부 인자는 편지지() */}
      <button
        onClick={() => {
          dispatch({ type: '증가' });
        }}
      >
        살 찌기
      </button>
      <button
        onClick={() => {
          dispatch({ type: '감소' });
        }}
      >
        살 빼기
      </button>
    </>
  );
}
