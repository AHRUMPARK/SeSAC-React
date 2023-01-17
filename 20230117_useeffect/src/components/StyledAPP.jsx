import logo from '../../src/logo.svg';
import '../../src/App.css';
import styled, { keyframes } from 'styled-components';

const RootDiv = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
//에니메이션 선언 styled는?
//이미지 로고보다 앞에 위치
const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotation} infinite 20s linear;
`

const MyA = styled.a`
   color: #61dafb;
`
function StyledAPP() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}

export default StyledAPP;
