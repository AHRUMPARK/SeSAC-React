// 초기 상태 설정
// 객체 안의 배열 안에 객체가 세개 존재
// 완료 여부 : done : false
const initState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
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
};

// 객체에 키값 추가
let counts = initState.list.length;
// 1부터 시작하면 + 1 해줘야함
initState['nextID'] = counts;

// 액션 타입 정의하기
// 메뉴판
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

// 액션 생성 함수 설정
// 메뉴판 작업
// export (디폴트는 리듀서만, 얘는 필요할때만 쓴다.) 어떤일을 하는지 알린다.
// payload 어떤일을 할 건지의 데이터가 여기 담김 ( 컴포넌트에서 리덕스에 데이터를 보낼게 있다는 뜻 )
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

// 페이로드 대신 아이디값을 받아오도록 하겠다.
export function done(id) {
  return {
    type: DONE,
    id,
  };
}

//리듀서 > default 기본적인 얘! 중요
// nextID 생성되는 값을 미리 넣어준다
export default function todo(state = initState, action) {
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
