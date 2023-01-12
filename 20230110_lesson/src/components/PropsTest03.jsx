import React, { Component } from 'react'

export default class PropsTest03 extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    const { test, valid } = this.props;
    
    return (
      <div>
        {test}
        <br />
        <button onClick={() => console.log(valid)}>콘솔 메세지</button>
      </div>
    )
  }
}

PropsTest03.defaultProps = {
  test: '이건 기본 test props 입니다.',
  valid: '콘솔 띄우기 성공!'
}