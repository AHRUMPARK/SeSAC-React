import React from 'react';
import styled from 'styled-components';

const MyButton = styled.a`
  position: relative;
  // 한줄 다 차지 x
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  line-height: 1.6em;
  font-size: 1.2em;
  padding: 1.25em 2em;
  background-color: ${(props) => props.mainColor};
  // 그림자
  border: 2px solid ${(props) => props.subColor};
  border-radius: 0.75em;
  user-select: none;
  transition: transform;
  transition: transform 0.15s ease-out;

  // 3차원적 속성
  transform-style: preserve-3d;
  margin-top: 1em;

  &::before {
    content: '';
    position: absolute;
    // 부모요소와 완전 겹치도록 함
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${(props) => props.subColor};
    border-radius: inherit;
    // 그림자 역할
    box-shadow: 0 0 0 2px ${(props) => props.subColor};
    // 3D 입체효과
    transform: translate3d(0, 0.75em, -1em);
    // 자기 선택
    &:hover {
      background-color: ${(props) => props.hoverColor};
      transform: translateY(0.25em);
    }
  }
`;
export default function Button({
  text,
  clickEvent,
  mainColor,
  subColor,
  hoverColor,
}) {
  return (
    <MyButton
      onClick={clickEvent}
      mainColor={mainColor}
      subColor={subColor}
      hoverColor={hoverColor}
    >
      {text}
    </MyButton>
  );
}
