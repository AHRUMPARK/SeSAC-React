import React, { useEffect, useRef, useState } from 'react'

export default function PracticeTimer() {
  // 타이머에서는 시간이란 버튼을 클릭하면 지금까지의 시간을 띄워야 한다.
  // 컴포넌트가 리랜더링 되기위해 useSTATE사용
  // 값을 저장해야 하니까 useRef 사용
  const [render, setRender] = useState(false);
  const time = useRef(0);
  // 시간이 증가되는 것을 useEffect
  // 처음 마운트 될때만 실행되면 되어서 [] 빈배열 보내기
  useEffect(() => {
    const timer = setInterval(() => {
      time.current += 1;
      console.log(time.current);
    }, 1000);

    // 타이머 멈추려면 (언마운트)
    return () => {
      clearInterval(timer);
    }
  },[]);

  return (
    <div>
      <h1>{time.current}</h1>
      {/* 시간 버튼이 클릭됫을때 리랜더링 됨 */}
      <button onClick={() => {
        setRender(!render)
      }}>시간</button>
    </div>
  )
}
