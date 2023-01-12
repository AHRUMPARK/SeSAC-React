import React from 'react'
import { useState } from 'react'


export default function EventEx() {
const [info, setInfo] = useState([
  {name : '코디', email:'codi@gmail.com'},
  {name : '윤소희', email:'ysh@gmail.com'}
])

const [name, setName] = useState();
const [email, setEmail] = useState();
    
  return (
    <div>
      <input type="text" placeholder='이름' name='name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
      <input type="email" placeholder='이메일' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
      <button onClick={() => {setInfo(info.concat({name:name, email:email}))
      setName('');
      setEmail('');
    }}>등록</button>
      {info.map((el, i) =>
            <li key={i}>
              {el.name} : {el.email}
            </li>
      )}
    </div>
  )
}
