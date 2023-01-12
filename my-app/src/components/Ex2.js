// import React, { useState } from 'react';

// export default function Ex2() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       {count}
//       <br />
//       <button onClick={() => (setCount(count + 1 > 10) ? '😘' : '🤕')}>
//         😘
//       </button>
//     </div>
//   );
// }

import React, { useState } from 'react';

// 변화되는값이 숫자 밖에 없으니 state 설정은 하나면 된다.

export default function Ex2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/*if 쓰면 오류남.. 삼항연산자 써야한다. */}
      <span onClick={() => setCount(count + 1)}>
        {count <= 10 ? '😘' : '🥰'}
      </span>
      <br />
      <span>{count}</span>
    </div>
  );
}
