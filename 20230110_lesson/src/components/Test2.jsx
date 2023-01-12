import React, { Component } from 'react'
import imgFile from "../logo.svg"

export default class Test2 extends Component {

  render() {
    return (
      <div style={{color: 'orange', fontSize: '40px', marginTop: '20px' }}>
        <h2>"안녕하세요"</h2>
        <img src={imgFile} alt="그림"></img>
      </div>
    )
  }
}
