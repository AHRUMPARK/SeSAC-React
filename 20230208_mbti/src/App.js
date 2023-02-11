import './App.css';
import styled from 'styled-components';
import Start from './components/Start';
import Mbti from './components/Mbti';
import GlobalStyle from './components/GloabalStyle';
import { useSelector } from 'react-redux';
import Show from './components/Show';

function App() {
  const page = useSelector((state) => state.mbti.page);
  const survey = useSelector((state) => state.mbti.survey);
  return (
    <>
      <GlobalStyle />
      <Main>
        {page === 0 ? (
          <Start />
        ) : page !== survey.length + 1 ? (
          <Mbti />
        ) : (
          <Show />
        )}
      </Main>
    </>
  );
}

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

export default App;
