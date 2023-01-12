import React, { useState } from 'react';

export default function ConditionCopy() {
  const [condition, setCondition] = useState(true);
  return (
    <div>
      {condition ? '😘' : '🤕'}
      <br />
      <button onClick={() => setCondition(!condition)}>컨디션 전환!</button>
    </div>
  );
}
