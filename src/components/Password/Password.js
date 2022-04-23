import React from 'react';
import { useState } from 'react';
import "./Password.css";
import GetWord from '../GetWord/GetWord';
import GetSymbol from '../GetSymbol/GetSymbol';

function generatePassword() {
  // console.log("Generating the Password")
  let newPassword = `${GetWord()}${GetSymbol()}${GetWord()}${GetSymbol()}${GetWord()}`
  // console.log(`Symbols ${newPassword}`)
  return newPassword
}

function generateHyphenPassword() {
  // console.log("Generate Hyphen Password")
  let newHyphenPassword = `${GetWord()}-${GetWord()}-${GetWord()}`
  // console.log(`Hyphen ${newHyphenPassword}`)
  return newHyphenPassword
}

function Password() {
  const [password, setPassword] = useState('BADp@$$w0rd')
  const [name, setName] = useState("Desc. for Password")
  const [hyphen, setHyphen] = useState(true)
  let isHyphened = hyphen === true ? generateHyphenPassword : generatePassword

  return (
    <div className='Password'>
       <div>
         <div>{name}</div>
         <input 
          value={name} 
          onChange={(e) => setName(e.target.value)}>
        </input>
      </div> 
         <div>Password: {password}</div>
       <div>
         <input 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}>
        </input>
      </div> 
      <div>
        <button onClick={e => setPassword(isHyphened())}
        >Generate</button>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={hyphen}
            onChange={(e) => setHyphen(e.target.checked)} 
          />
          Hyphenize the Password?
          
        </label>
      </div>
    </div>
  )
}

export default Password;