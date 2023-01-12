import React, { useRef, useState } from 'react'

export default function Quiz() {
  // 변수명 짓는 버릇 고쳐주면 좋습니다. 
  // 랜더링이 되도 값을 유지할 필요 없어서 변수로 선언해서 씁니다.
  // 1000을곱하면 ~999
  const firstRandomNumber = Math.floor(Math.random() * 10 );
  const secondRandomNumber = Math.floor(Math.random() * 10 );
  //연산자
  const arithmeticArr = ['+', '-', 'x'];
  const arithmetic = Math.floor(Math.random() * 3 );
  //리사인때매 let
  let answer = 0;
  if( arithmetic === 0 ){
    answer = firstRandomNumber + secondRandomNumber;
  } else if ( arithmetic === 1 ){
    answer = firstRandomNumber - secondRandomNumber;
  } else {
    answer = firstRandomNumber * secondRandomNumber;
  }
  // 훅 두개 사용 useRef 입력값 받기
  const answerInput = useRef();
  // 컴포넌트 리랜더링용
  // 보통 false, true로 자주 쓴다. 이전이 뭐던간에 변하는!
  const [again, setAgain] = useState(false);

  // 정답 체크 버튼  > 위에서 정답을 다 구해놧음 / input은 문자로 받는다 Number로 변환
  const checkAnswer = () => {
    if(answer === Number(answerInput.current.value)){
      alert('정답 입니다!!');
      answerInput.current.value = '';
      answerInput.current.focus();
      //리랜더링 스테이트값 변경
      setAgain(!again);
    
    } else {
      alert('틀렸습니다. 다시 입력해 주세요!');
      answerInput.current.value = '';
      answerInput.current.focus();
    }
  }
  return (
    <div>
      <h1>{firstRandomNumber}{arithmeticArr[arithmetic]}{secondRandomNumber}</h1>
      <input ref={answerInput}/>
      <br />
      <button onClick={checkAnswer}>정답 제출!</button>
    </div>
  )
}
