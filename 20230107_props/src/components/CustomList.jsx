import React from 'react'

export default function CustomList(props) {

  return (
    <ul>
      {/* arr?은 값이 있으면 map 실행 / 없으면 실행 x */}
      {props.arr?.map((el) => 
        <li key={el}>
          {el}
        </li>
      )}
    </ul>
  )
}
