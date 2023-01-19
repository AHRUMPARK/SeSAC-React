import React from 'react';
import Button from './Button';

export default function SkyblueButton({ text, clickEvent }) {
  return (
    // 프롭스를 내린다. 내가 결정할거 아니야 위에서 전달해줄거임
    // 오렌지 버튼을 만들었다 다른데서 가져다 쓰면 된다.
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="#7edcfa"
      subColor="#3a82E0"
      hoverColor="#cfecf2"
    />
  );
}
