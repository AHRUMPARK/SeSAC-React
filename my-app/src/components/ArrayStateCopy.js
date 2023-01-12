import React, { useState } from 'react';

export default function ArrayStateCopy() {
  const [state, setState] = useState([0]);

  return (
    <div>
      {state}
      <br />
      <button
        onClick={() => {
          state[0] = 1;
          const copyArr = [...state];
          setState(copyArr);
        }}
      >
        +1
      </button>
    </div>
  );
}
