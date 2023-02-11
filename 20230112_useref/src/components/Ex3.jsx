import React, { useRef, useState } from 'react'

export default function Ex3() {
    const [ render, setRender ] = useState(false);
    const inputAnswer = useRef();

    // floor 0에서 1미만 0.99 * 10 하면 0.9
    // floor 속성 때매 0 ~ 9 
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operator = ['+', '-', 'x'];
    // 0.99 * 3 = 2.97  > 0 ~ 2
    const operatorNum = Math.floor(Math.random() * 3);
    // const op = operator[operatorNum];
    let answer = 0;

    if (operatorNum === 0){
        answer = num1 + num2;
    } else if (operatorNum === 1 ) {
        answer = num1 - num2;
    } else {
        answer = num1 * num2;
    }

    // 질문하기 ! 음수 정답이 안맞는다.. 왜?
    // if (op === 0){
    //     answer = num1 + num2;
    // } else if (op === 1 ) {
    //     answer = num1 - num2;
    // } else {
    //     answer = num1 * num2;
    // }

    function checkAnswer () {
        if ( answer === Number(inputAnswer.current.value)){
            alert('정답 입니다~!!');
            inputAnswer.current.value = '';
            inputAnswer.current.focus();
            setRender(!render)
        } else {
            alert('틀렸네요! 다시 풀어주세요!');
            inputAnswer.current.value = '';
            inputAnswer.current.focus();
        }
    };
    
  return (
    <div>
        <h1>{num1}{operator[operatorNum]}{num2}</h1>
        <input ref={inputAnswer} /><button onClick={checkAnswer}>정답 제출!</button>
    </div>
  )
}
