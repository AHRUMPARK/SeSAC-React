
import React from 'react'
import bookImg from "../XL.jpg"

export default function PropsTest02(props) {
  const {
    title, author, price, type
  } = props.bookData;

  return (
    <div className='book'>
      <h1 style={{color:'orange'}}>이번주 베스트셀러</h1>
      <img style={{width:'200px'}} src={bookImg} alt="책사진"></img>
      <h2>{title}</h2>
      <div className='bookData'>
      <p>저자 : {author}</p>
      <p>판매가 : {price}</p>
      <p>구분 : {type}</p>
      <br />
      </div>
    </div>
  )
}
