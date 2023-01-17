import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProfileComptnent from './ProfileComptnent';

export default function UseEffectFetch() {
  // 배열을 받을거니까 기본값 빈배열로 처리하겠다.
  const [dataArr, setDataArr] = useState([]);

  // 마운트 될때만 데이터를 불러오겠다.
  // 함수를.. useEffect 내부에 하는게 아니라! 함수로 밖에서 처리합니다.
  async function fetchData () {
    const resFetch = await axios.get('http://localhost:4000');
    
    // 보통 이렇게 썼는데 줄여서 쓰면
    // if(resFetch.status === 200 ) {
    // }
    // 통신이 제대로 안이루어지면
    // if문의 예외처리를 return으로 가독성 있도록 
    if (resFetch.status !== 200) return alert('통신 에러');

    // 기억해야할게 초기값이 원시타입이 아니다. 주소값을 비교한다.
    // 새롭게 변수가 들어가기때매 메모리 주소가 달라서 컴포넌트가 변화를 감지해서 리랜더링 됩니다.
    // 가급적 객체, 배열을 덜 사용하는게 좋기는 함
    // aixos는 데이터를 받을때 객체.data로 받는다 /axios가 아닌 그 외는 객체.json();
    const data = await resFetch.data;
    setDataArr(data);
    console.log(data);
    //함수를 선언만 
  }
    // 함수 선언
  useEffect(() => {
    fetchData();
  },[]);
    // useEffect의 실행은 리턴을 한번 그려놓고 그 다음에 호출 됩니다.
    // fetchData가 실행되기전에 return이 실행됨
    // 초기값을 undefined로 주면 js적으로 에러가 발생한다.
    // 비원시타입의 초기값을 잘 주는게 중요하다.
  return (
    <div>
      {dataArr.map((el, index) => {
        return <ProfileComptnent 
        key={index}
        name={el.name}
        age={el.age}
        nickName={el.nickName} />
      })}
    </div>
  )
}
