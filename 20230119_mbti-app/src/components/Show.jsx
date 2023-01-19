import React from 'react';
import styled from 'styled-components';
import OrangeButton from './OrangeButton';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 3em;
`;
const Explaination = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const Result = styled.p`
  font-size: 3em;
  color: dodgerblue;
`;
const Additional = styled.p`
  font-size: 2em;
  color: orange;
`;
const AdditionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;

export default function Show() {
  const result = useSelector((state) => state.mbti.mbtiResult);
  const explaination = useSelector((state) => state.mbti.explaination[result]);
  const dispatch = useDispatch();

  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      {/* 리덕스에서 유즈 셀렉터로 갑받아서 넣을 예정 */}
      <Explaination>{explaination.text}</Explaination>
      <Result>{result}</Result>
      <Additional>이건 재미로 읽어보세요</Additional>
      <AdditionalImg src={explaination.img} alt="팩폭" />
      <OrangeButton text="다시 검사하기" clickEvent={() => dispatch(reset())} />
    </>
  );
}
