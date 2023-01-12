import React, { Component } from 'react'

export default class PropsTest extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    const { food } = this.props;
    return (
      <div>
        제가 좋아하는 음식은 <span style={{ color: 'red' }}>{food} </span>입니다.
      </div>
    )
  }
}

PropsTest.defaultProps = {
  food: '밥'
}