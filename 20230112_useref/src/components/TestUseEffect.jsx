import React, { useEffect, useRef, useState } from 'react'

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력 하세요!');
  const inputValue = useRef();

  // 버튼 클릭 없이 마운트 됬을때 콘솔로그를 쓰고싶다면 useEffect 적용
  const onButtonClick = () => {
    console.log('😍 버튼 클릭');
    setCount( count + 1 );
  };

  // 특정값에만 반응 > useRef 사용할거임 / {text}라는 state가 변경되었기 때문에
  // state 변경이 먼저, useEffect가 뒤 따라온다.
  const onInputChange = () => {
    console.log('🎹 키 입력');
    setText(inputValue.current.value);
  }

  // 실행시킬 익명함수 인자 하나만 => 마운트, 업데이트 시 실행 / 랜더링 될 때 마다 실행
  useEffect(() => {
    console.log('🐇 랜더링 될 때 마다 실행 (마운트 포함)');
  });

  // 배열 내부가 변화해야... 바뀜 [] 빈 배열은 값을 변할것이 참조할 수 없어 최초 마운트 때만 실행이 됩니다.
  useEffect(() => {
    console.log('🐸 마운트 될 때만 실행')
  }, [])

  // 카운트 값이 업데이트 되었을 때만 실행
  // input창이 바뀌면, 뜨지 않는다 {text}여서 그럼
  useEffect(() => {
    console.log('📍버튼이 클릭시 실행');
  }, [count]);
  
  // 의존성 배열! 키보드 입력일 때만
  useEffect(() => {
    console.log('👌키보드 입력일 때만~!')
  }, [text]);
  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>+1 버튼</button>
      <br />
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onInputChange}/>
    </>
  )
}
