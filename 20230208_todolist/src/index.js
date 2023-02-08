import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. import 하기
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';

// 4. 리덕스 데브툴즈 사용해 상태값 보기
const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// 2. store 만들기
const store = configureStore({ reducer: rootReducer }, reduxDevTool);
// getState() 메소드로 리덕스에 저장된 store 의 값 확인 가능
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 3. Provider 스토어 울타리 설정
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
