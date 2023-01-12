import React, { useEffect } from 'react'

export default function Timer() {
  // 언마운트가 되도 계속 콘솔이 찍힌다. 끝낼 코드를 추가 return!
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행 중!');
    }, 1000); //1초에 한번씩 콘솔 찍힘

    // 멈추게 할 코드 멈추려면 변수에 담아야 합니다!
    return () => {
      clearInterval(timer);
    };
  },[]);

  return (
    <h1>
      Timer 가 실행 중 입니다.
    </h1>
  )
}
