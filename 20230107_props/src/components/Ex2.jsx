import React from 'react'
import Ex2Child from './Ex2Child'

export default function Ex2() {
  const items = [
    {
      item: "PS5",
      price: "685,000원",
    },
    {
      item: "에어 프라이어",
      price: "50,000원",
    },
    {
      item: "사세 치킨윙",
      price: "11,500원",
    }
  ]

  return (
    
    <div>

      {/* 자식요소에게 props 데이터를 보낸다. */}
      {items.map((el, index) => {
        return <Ex2Child item={el.item} price={el.price} key={index} />
      })}

      {/* html에 직접 데이터 삽입 코드 리턴 */}
      {items.map((el, index) => {
        return (
          <div key={index}>
            <h2>품목명 : {el.item}</h2>
            <p>가격 : {el.price}</p>
          </div>
        )
      })}

    </div>
  )
}
