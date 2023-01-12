import React, { useState } from 'react';

export default function ObjectStateCopy() {
  const [obj, setObj] = useState([0]);

  return (
    <div>
      {obj}
      <br />
      <button
        onClick={() => {
          setObj([1]);
        }}
      >
        +1
      </button>
    </div>
  );
}
