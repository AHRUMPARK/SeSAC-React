import React from 'react'

// 구조분해 할당
// props = {
//   text: "hello, porps world!"
// }

// 구조분해 할당
// props ={
//   text: "go naver",
//   href: "https://www.naver.com/",
//   userID: "수남"
// }

// props 인자 받은것을 그대로 출력하는 형태
// 부모가 자식 컴포넌트에게 보내는 구조 메인헤더를 App.js..에서 

export default function MainHeader(props) {
  // const obj ={
  //   str: "test",
  //   num: 10
  // }

  // console.log(obj.str);
  // console.log(obj.num);
  // 오브젝트 내부의 키를 변수로 빼고싶다
  // const str = obj.str; 이것을 eslint적으로 하면
  // const { str, num } =obj;

 const {text, href, userID } = props;
  
  return (
    <div>
    <h1>{userID} 님 반갑습니다!</h1>
    <a href={href}>{text}</a>
    </div>
  )
}
