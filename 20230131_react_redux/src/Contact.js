import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Contact() {
  // 3. store state에 접근하는 useSelector 함수 > 스테이트를 가져와서 스테이트에 넣겟다.?
  // 4. useDispatch를 사용해 디스페치를 만듬

  const list = useSelector((state) => state);
  const dispatch = useDispatch();
  function writeList() {
    // 5. 무슨 행동을 할지 지정한 action을
    var action = {
      type: 'ADD',
      payload: {
        writer: '1',
        title: 'a',
      },
    };
    // 6. 디스패치에게 전달
    dispatch(action);

    // let form = document.getElementById('form_write');
    // let newList = {
    //   writer: form.writer.value,
    //   title: form.title.value,
    // };
    // 기존 값에, 새로운 리스트 더하기
    // setList([...list, newList]);
  }
  return (
    <div>
      <form id="form_write" style={{ marginBottom: '15px' }}>
        <input type="text" name="writer" placeholder="작성자" />
        <input type="text" name="title" placeholder="제목" />
        <button type="button" onClick={writeList}>
          작성
        </button>
      </form>

      <table border={1}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {list.map((value, i) => {
            // value = { writer: ~~ , title~~ };
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
