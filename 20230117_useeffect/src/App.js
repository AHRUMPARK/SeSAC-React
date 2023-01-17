import { Routes, Route } from 'react-router-dom';
import './App.css';
import Board from './components/Board';
import Profile from './components/Profile';
import Header from './components/Header';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail'
// import FancyBorder from './components/FancyBorder';
// import StyledAPP from './components/StyledAPP';
// import TestStyled from './components/TestStyled';
// import InlineCSS from './components/InlineCSS';
// import TestCSS from './components/TestCSS';
// import UseEffectFetch from './components/UseEffectFetch';
// import Image from './components/Image';

function App() {
  return (
    <div className="App">
      {/* <UseEffectFetch />
      <hr /> */}
      {/* <InlineCSS /> */}
      {/* <TestCSS />    */}
      {/* <TestStyled /> */}
      {/* <StyledAPP /> */}
      {/* <Image /> */}
{/* 
      <FancyBorder color='red'>
        칠드런 전달
        <TestCSS />
      </FancyBorder> */}

      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/proflie' element={<Profile />} />
        <Route path='/board' element={<Board />} />
        {/* 키 값이 boardID */}
        <Route path='/board/:boardID' element={<BoardDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
