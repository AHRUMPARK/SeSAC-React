// 리덕스 통합 관리
import { combineReducers } from 'redux';
import todo from './modules/todo';

// 각각 스토어를 합치는 combineReducers 밖으로 뺀다.
// todo라는 state 선언한 것을 밖으로 뺄 수 있도록 함
export default combineReducers({
  todo,
});
