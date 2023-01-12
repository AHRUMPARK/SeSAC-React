import React, { useState } from 'react';

export default function GoodBtn() {
  const [goodBtn, setGoodBtn] = useState(0);

  return (
    <div>
      <button onClick={() => setGoodBtn(goodBtn + 1)}>{goodBtn}</button>
      <br />
      <span>{goodBtn < 10 ? '💓' : '💗'}</span>
    </div>
  );
}
