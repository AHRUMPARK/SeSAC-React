import React from 'react'

export default function FancyBorder(props) {
  return (
    //기초 props와 children 두개 받아온다.
    //객체라 중괄호! 백팁 : 색을 props에서 받을 거여서 사용
    <div style={{ border: `3px solid ${props.color}`}}>
      {props.children}
    </div>
  )
}
