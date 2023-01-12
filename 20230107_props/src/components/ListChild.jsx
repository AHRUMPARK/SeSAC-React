import React from 'react'

export default function ListChild(props) {
  
  const { h2text, ptext } = props; 

  return (
    <div className='ListChild'>
      <h2>{h2text}</h2>
      <p>{ptext}</p>
      <hr />
    </div>
  )
}
