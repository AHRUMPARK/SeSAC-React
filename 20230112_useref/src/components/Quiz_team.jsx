import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
export default function Ex2Quiz() {
    const [num1, setNum1] = useState(Math.floor(Math.random()*10));
    const [num2, setNum2] = useState(Math.floor(Math.random()*10));
    // 0~1 사이 숫자 소수점
    // 랜덤*10 => 0 ~ 9.9999 까지 나와요
    // Math.floor(소수점 버림 함수) => 0 ~ 9 정수만 나오게 설정
    // const num1 = Math.floor(Math.random()*10);
    // const num2 = Math.floor(Math.random()*10);
    // 연산자
    // 연산자[0] = +
    // 연산자[1] = -
    // 연산자[2] = x
    const operator = ['+', '-', 'x'];
    // 0 ~ 2까지만 나오게 설정
    // 최대값
    const operatorMaxNum = Math.floor(Math.random()*3);
    const userResult = useRef();
    const answerBtn = () => {
        if(operatorMaxNum === 0) {
            if(Number(userResult.current.value) === num1 + num2) {
                alert('정답입니다.');
                setNum1(Math.floor(Math.random()*10));
                setNum2(Math.floor(Math.random()*10));
            } else {
                alert('틀렸습니다.');
            }
        } else if (operatorMaxNum === 1) {
            if(Number(userResult.current.value) === num1 - num2) {
                alert('정답입니다.');
                setNum1(Math.floor(Math.random()*10));
                setNum2(Math.floor(Math.random()*10));
            } else {
                alert('틀렸습니다.');
            }
        } else if (operatorMaxNum === 2) {
            if(Number(userResult.current.value) === num1 * num2) {
                alert('정답입니다.');
                setNum1(Math.floor(Math.random()*10));
                setNum2(Math.floor(Math.random()*10));
            } else {
                alert('틀렸습니다.');
            }
        }
        userResult.current.focus();
        userResult.current.value = '';
    }
  return (
    <div>
        <span>{num1}</span> <span>{operator[operatorMaxNum]}</span> <span>{num2}</span>
        <br />
        <input type="text" ref={userResult}/>
        <button onClick={answerBtn}>정답 제출!</button>
    </div>
  )
}