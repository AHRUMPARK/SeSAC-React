import React from 'react'
import styled from 'styled-components'

//변수를 선언하듯 styled.태그 ` css 문법 `
const MyDiv = styled.div`
  background-color: orange;
`
const MyHeading = styled.h1`
  color: blue;
`
const MySpan = styled.span`
  background-color: pink;
  font-weight: 700;
`

export default function TestStyled() {
  return (
    // 컴포넌트가 아닌 태그임
    <MyDiv>TestStyled
    <MyHeading>h1 태그 입니다.</MyHeading>
    <MySpan>태그 입니다.</MySpan>
    </MyDiv>
  )
}
