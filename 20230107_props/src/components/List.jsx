import React from 'react'
// import ListChild from './ListChild'
// import Modal from './Modal'

export default function List() {

  const dateArrr = [
    { 
   title: "리액트 공부하기",
    content: "state 활용법 익히기"},
    {
      title: "코테 문제 풀기",
      content: "Lv0 정복 가즈아"
    },
    {
      title: "코테 문제 풀21312기",
      content: "Lv0 정복 가즈아"
    }
  ]


  return (

    // <div>
    //   <h1>오늘 해야할 일</h1>
    //   <hr />
    //   <Modal />
    //   <hr />
    //   <h2>React 공부하기</h2>
    //   <p>State 활용법 익히기</p>
    //   <hr />
    //   <h2>코테 문제 풀기</h2>
    //   <p>Lv0 정복 가즈아</p>
    //   <hr />
    //   <Modal />
    // </div>

    <div>
      {/* <h1>오늘 해야할 일</h1>
      <hr /> */}
      {/* <ListChild h2text="리액트 공부하기" ptext="state 사용법 익히기"/>
      <ListChild h2text="코테 문제 풀기" ptext="Lv 0 정복 가즈아"/> */}
      {/* <ListChild h2text={title} ptext={content}/> */}

      {/* <ListChild h2text={dateArrr[0].title} ptext={dateArrr[0].content} />
      <ListChild h2text={dateArrr[1].title} ptext={dateArrr[1].content} /> */}

      {/* {dateArrr.map((el, index) => {
        // map 함수로 첫번째, 두번째 값들이 배열 나열됨 
        return <ListChild h2text={el.title} ptext={el.content} key={index}/>
      })} */}
      
      {/* 바로 return이 나온다면, return과 중괄호 생략 가능 */}
      {/* {dateArrr.map((el) => <ListChild h2text={el.title} ptext={el.content} />)} */}

      {dateArrr.map((el, index) => {
        return (
          <div key={index}>
            <h2>{el.title}</h2>
            <p>{el.content}</p>
            <hr />
          </div>
        )
      })}

    </div>
  )
}
