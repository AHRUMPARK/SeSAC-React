import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../store/modules/todo';

//useRef 값을 받아 올
//useSelector 할일 목록을 받아올

export default function TodoList() {
  const inputRef = useRef();
  // 컴바인 리듀서가 합쳐진 상태의 값 중에서도 todo 값을 받아와야 함
  const list = useSelector((state) => state.todo.list).filter(
    // false인얘들만 남겨줘라!
    (el) => el.done === false
  );

  // 컴포넌트가 처음 소환 되면, 아이디가 0,1,2
  // nextid에는 3이 들어있다. 한바퀴 돌게 되면 아이디는 3까지 있고, netxid +1 nextid는 4가 되어있다.
  const nextID = useSelector((state) => state.todo.nextID);

  // 어떤 액션을 할지 들려 보내야 함
  const dispatch = useDispatch();

  return (
    <section>
      <h1> 할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        {/* 페이로드 안에 값 전달 */}
        <button
          onClick={() => {
            dispatch(create({ id: list.length, text: inputRef.current.value }));
            inputRef.current.value = '';
          }}
        >
          추가
        </button>
      </div>
      <ul>
        {list.map((el) => {
          return (
            <li key={el.id}>
              {el.text}{' '}
              <button
                onClick={() => {
                  // 어떤 애를 완료 시킬건지 아이디 값만 넣었다.
                  dispatch(done(el.id));
                }}
              >
                완료
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
