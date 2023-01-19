import React from 'react';
import styled from 'styled-components';
import SkyblueButton from './SkyblueButton';
//리덕스로부터 값을 가져와야하니 유즈 셀렉터
import { useDispatch, useSelector } from 'react-redux';
import { check, next } from '../store/modules/mbti';

const SurveyQuestion = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const Vs = styled.p`
  font-size: 2em;
  padding-top: 1em;
`;

export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);

  const dispatch = useDispatch();
  return (
    <>
      <SurveyQuestion>
        {/* 배열의 인덱스는 0부터 시작해서 -1 */}
        {survey[page - 1].question}
      </SurveyQuestion>
      <ul>
        {/* 배열은 그냥 map!  > 페이지가 증가할때마다 변경? */}
        {survey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              <SkyblueButton
                text={el.text}
                clickEvent={() => {
                  // 결과값이 붙는다.
                  dispatch(check(el.result));
                  dispatch(next());
                }}
              />
              {index === 0 && <Vs>Vs</Vs>}
            </li>
          );
        })}
      </ul>
    </>
  );
}
