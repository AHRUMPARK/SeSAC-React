import React, { Component } from 'react'

export default class UseStatTest01 extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div>
        {this.state.value}
        <br />
        <button onClick={() => this.setState( {value : this.state.value + 2 })}>+2</button>
        <button onClick={() => this.setState( {value : this.state.value - 1 })}>-1</button>
      </div>
    )
  }
}
