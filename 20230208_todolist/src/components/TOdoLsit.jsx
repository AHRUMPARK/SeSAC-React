import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { create, done } from '../store/modules/todo';

export default function TOdoLsit() {
  // 배열의 filter 메소드는 조건식을 만족하는 배열만 남겨서 리턴
  //<TodoList> 컴포넌트 List 의 항목 중에서 done 의 값이 false 인 친구들만 가져오기
  const list = useSelector((state) => state.todo.list).filter(
    (el) => el.done === false
  );
  // nextID 받는 곳
  const nextID = useSelector((state) => state.todo.nextID);

  const inputRef = useRef();
  const dispatch = useDispatch();

  return (
    <section>
      <h1>할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            if (inputRef.current.value === '') {
              return alert('입력해주세요!');
            }
            dispatch(create({ id: nextID, text: inputRef.current.value }));
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
              {el.text}
              <button
                onClick={() => {
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
