import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// 스토어 폴더.. 합치는 얘 store/index.js 파일 export 가져옴
import rootReducer from './store';

// configureStore 위에 reduxDevTool 툴
const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// 스토어 만들기
const store = configureStore({ reducer: rootReducer }, reduxDevTool);
// 우리가 선언해둔 모든 리덕스 값이 저장이 된다.
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
