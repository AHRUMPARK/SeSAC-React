import React from 'react';
import Button from './Button';

export default function PinkButton({ text, clickEvent }) {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="#ff95d3"
      subColor="#af0d6c"
      hoverColor="#ff9fcf"
    />
  );
}
