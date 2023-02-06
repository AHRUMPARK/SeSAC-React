import { useState } from 'react';
import Contact from './Contact';
import Provider from 'react-redux';
import { createStore } from 'redux';
// Provider 스토어 스테이트를 전달할 곳에 울타리 설치( 가장 밖에 )

export default function App() {
  // 1. 스토어 만들어서 provider에게 지정
  // 2. 스토어 reducer 함수 만들기 // 액션에 따라 state를 반환
  // 3. Contact파일로 넘어가서
  function reducer(state = [], action) {
    if (action.type === 'ADD') {
      return [...state, action.payload];
      // 잠시 상식! 이것은 안됨 배열같은 경우 값이 복제가 안됩니다.
      // state.push(action.payload);
      // return state;
      // var a = 1;
      // var b = 2;
      // a = b; > console.log(a) => 2일 것
      // 얘는 값이 복제가 됨
      // 객체나 배열은 값이 존재하는 주소를 복사 합니다
      // 리듀서가 스테이트를 반환하는데 state 주소값이 동일하면, 리액트는 state가 동일하다 여겨서 랜더링을 하지 않는다
      // setState에 주소가 바뀌어야 함
      // 그래서 항상 새로운 주소, 새로운 배열을 만들어 넣겟다라는 의미입니다
      // [...aa] 전개를 하면, 주소를 변경하겠다는 의미입니다
      // var aa = [ 1, 2, 3]
      // var bb = aa;
      // bb.push(4);
      // console.log(aa);
      // console.log(bb);
    }
    return state;
  }
  const store = createStore(reducer);
  const [list, setList] = useState([]);
  return (
    <Provider store={store}>
      현재 개수 : {list.length}
      <br />
      <Contact />
    </Provider>
  );
}
