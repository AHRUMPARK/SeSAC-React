// import { useState } from 'react';
import './App.css';
import EventEx from './ex/EventEx';

function App() {
  // const [info, setInfo] = useState([
  //   { name: '코디', email: 'codi@gmail.com' },
  //   { name: '윤소히', email: 'ysh@gamil.com' },
  // ]);
  // const info = [
  //   { name: '코디', email: 'codi@gmail.com' },
  //   { name: '윤소히', email: 'ysh@gamil.com' },
  // ];

  // 콘캡 함수를 쓰게 되면!!
  // const [info, setInfo] = useState([
  //   { name: '코디', email: 'codi@gmail.com' },
  //   { name: '윤소히', email: 'ysh@gamil.com' },
  //   {name: name, email:email}
  // ]);

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  // 리액트에서는 돔을 직접적으로 건드리는것은 추천하지 않는다.
  // function aaa() {
  //   document.querySelector('input').value
  //   document.querySelector('input').value
  //   setInfo()
  // }

  // const name = '수남';
  // const animal = '고양이';
  // const styleObj = { textDecorationLine: 'underline' };

  // const a = 35;
  // const b = 25;

  // const book = {
  //   title: '나의 하루는 4시 40분에 시작된다.',
  //   author: '김유진',
  //   price: '13,500원',
  //   type: '자기계발서',
  // };

  return (
    <div className="App">
      {/* 실습 1
       이것은 div 입니다.
      <h3>이것은 div 안에 있는 h3 태그 입니다.</h3> */}

      {/* 실습 2
        <h2>
        제 반려 동물의 이름은 <span style={styleObj}>{name}</span>이 입니다.{' '}
        <br />
        <span style={styleObj}>{name}</span>이는
        <span style={styleObj}>{animal}</span>입니다.
      </h2> */}

      {/* 실습 3
      <p>{3 + 5 == 8 ? '정답입니다!' : '오답입니다!'}</p> */}

      {/* 실습 4
      <p>{a > b && <span>"a가 b보다 큽니다."</span>}</p> */}

      {/* 실습 5
      <div className="test">
        <h1>Hello World</h1>
      </div>
      <div className="test_1">
        아이디 : <input type="text"></input>
        <br />
        비밀번호 : <input type="password"></input>
      </div> */}

      {/* 실습 6
      <div className="colors">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div> */}

      {/* 컴포넌트 실습
      <Test />
      <Test2 /> */}

      {/* props 1번
      <PropsTest />
      <PropsTest food={'마라샹궈'} /> */}

      {/* props 2번
      <PropsTest02 bookData={book} /> */}

      {/* props 3번
      <PropsTest03 test={'App 컴포넌트에서 넘겨준 text props 입니다.'} />
      <br />
      <PropsTest03 /> */}

      {/* state, useState 1번
      <UseStatTest01 /> */}

      {/* state, useState 2번
      <UseStatTest02 /> */}

      {/* 핸들링 실습
      <HandlerEx /> */}
      {/* 
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        name="email"
        value={email}
        placeholder="이메일"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          setInfo(info.concat({ name: name, email: email }));
          // 스테이트 name, email이 input태그에 value로 값이 달려있어, 스테이트 값이 바뀌는 순간 인풋태그들이 리랜더링 됩니다.
          setName('');
          setEmail('');
        }}
      >
        등록
      </button>
      {info.map((el, i) => (
        <h2 key={i}>
          {el.name} : {el.email}
        </h2>
      ))} */}

      <EventEx />
    </div>
  );
}

export default App;
