import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import SkyblueButton from './SkyblueButton';
import { next } from '../store/modules/mbti';
import Progress from './Progress';

export default function Mbti() {
  const servey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  const dispatch = useDispatch();
  const SurveyQestion = styled.p`
    font-size: 1.5em;
    color: #777;
  `;
  const Vs = styled.p`
    font-size: 2em;
    padding-top: 1em;
  `;
  console.log('servey :', servey);
  console.log('servey.question : ', servey.question);
  console.log('servey[page - 1].question : ', servey[page - 1].question);
  return (
    <>
      <SurveyQestion>{servey[page - 1].question}</SurveyQestion>
      <ul>
        {servey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              <SkyblueButton
                text={el.text}
                clickEvent={() => {
                  dispatch(next());
                }}
              />
              {index === 0 && <Vs>VS</Vs>}
            </li>
          );
        })}
      </ul>
      <Progress page={page} maxpage={servey.length} />
    </>
  );
}
