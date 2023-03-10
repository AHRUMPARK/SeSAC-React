// import React, { useState } from 'react';

// export default function Ex2() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       {count}
//       <br />
//       <button onClick={() => (setCount(count + 1 > 10) ? 'π' : 'π€')}>
//         π
//       </button>
//     </div>
//   );
// }

import React, { useState } from 'react';

// λ³νλλκ°μ΄ μ«μ λ°μ μμΌλ state μ€μ μ νλλ©΄ λλ€.

export default function Ex2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/*if μ°λ©΄ μ€λ₯λ¨.. μΌν­μ°μ°μ μ¨μΌνλ€. */}
      <span onClick={() => setCount(count + 1)}>
        {count <= 10 ? 'π' : 'π₯°'}
      </span>
      <br />
      <span>{count}</span>
    </div>
  );
}
