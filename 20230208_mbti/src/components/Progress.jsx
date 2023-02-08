import React from 'react';
import styled from 'styled-components';

export default function Progress({ page, maxpage }) {
  console.log('page 여기 프로그래스:', page);
  return (
    <MyProgress>
      <div>
        {page} / {maxpage}
      </div>
      <Fill>
        <Gauge percent={(page / maxpage) * 100}></Gauge>
      </Fill>
    </MyProgress>
  );
}
const MyProgress = styled.div`
  margin-top: 3em;
`;
const Fill = styled.div`
  width: 100%;
  height: 10px;
  background-color: #777;
  margin-top: 1em;
  text-align: left;
`;
const Gauge = styled.div`
  background-color: skyblue;
  display: inline-block;
  height: inherit;
  position: relative;
  top: -4px;
  width: ${(props) => props.percent}%;
`;
