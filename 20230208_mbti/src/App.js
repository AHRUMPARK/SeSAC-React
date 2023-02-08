import './App.css';
import styled from 'styled-components';
import Start from './components/Start';
import GlobalStyle from './components/GloabalStyle';

function App() {
  const Main = styled.main`
    box-sizing: border-box;
    width: 100%;
    padding: 0 35px;
    margin: auto;
    text-align: center;
  `;
  return (
    <>
      <GlobalStyle />
      <Main>
        <Start />
      </Main>
    </>
  );
}

export default App;
