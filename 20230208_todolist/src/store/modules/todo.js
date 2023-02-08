// 초기 상태 설정
const initState = {
  list: [
    {
      id: 0,
      text: '리엑트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추의 요정이 말합니다! 척추 펴기!',
      done: false,
    },
    {
      id: 2,
      text: '취업 하기',
      done: false,
    },
  ],
  // nextID : 3,
};
// counts 객체에 키 값 추가
// initState['list'] 같은 개념
// 초기상태값 갯수를 넣고 > 그것에서 [nextID]를 분해한다. counts.nextID?
let counts = initState.list.length;
initState['nextID'] = counts;

// 액션 타입 정의
const CREATE = 'toto/CREATE';
const DONE = 'todo/DONE';

// 액션 함수 정의 (default는 리듀서 함수만 씁니다.)
// 페이로드에는 어떤일을 할 건지의 데이터가 담깁니다.
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}
//페이로드 대신, id값을 컴포넌트에게 받아서 쓰겟다.
export function done(id) {
  return {
    type: DONE,
    id,
  };
}

// 리듀서 설정(실제 작업은 이친구가 한다!!!)
export default function todo(state = initState, action) {
  console.log('action.payload : ', action.payload);

  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            console.log('el', el);
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
