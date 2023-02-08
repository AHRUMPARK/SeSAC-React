import React from 'react';
import DoneList from './DoneList';
import TOdoLsit from './TOdoLsit';

export default function ListContainer() {
  return (
    <>
      <TOdoLsit />
      <DoneList />
    </>
  );
}
