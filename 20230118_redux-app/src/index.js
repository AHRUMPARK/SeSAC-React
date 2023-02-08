import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';




// 1. 가게에는 이 품목이 있다. state 선언
const weight = 100;

// 2. 품목관리 Reducer 만들기! 인자로 넣는다.
function reducer ( state = weight, action ) {
  if( action.type === '증가') {
    state += 1;
    return state;
  } else if ( action.type === '감소'){
    state -= 1;
    return state;
  } else {
    return state ;
  }
}

// 3. 리덕스를 총괄할 가게를 만드는 과정 strore라는 변수에 정보가 있다.
// reducer보다 아래에 위치 하도록 한다.
let store = createStore(reducer);

// 4. provider로 감싸기
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
