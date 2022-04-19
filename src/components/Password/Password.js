import React from 'react';
import { useState } from 'react';
import "./Password.css";
import GetWord from '../GetWord/GetWord';
import GetSymbol from '../GetSymbol/GetSymbol';

function random(n) {
  return Math.floor(Math.random() * n)
}

function generatePassword() {
  console.log("Generating the Password")
  const rand = random(10)
  const word = GetWord()
  const word1 = GetWord()
  const word2 = GetWord()
  const word3 = GetWord()
  const symbol = GetSymbol()
  const symbol1 = GetSymbol()
  const symbol2 = GetSymbol()
  let newPassword = `${rand}${word}${symbol}${word1}${symbol1}${word2}${symbol2}${word3}`
  console.log(newPassword)
  return newPassword
}

function Password() {
  const [password, setPassword] = useState('BADp@$$w0rd')

  return (
    <div className='Password'>
      <div>{password}</div>
      <div>
        <button onClick={e => setPassword(generatePassword())}
        >Generate</button>
      </div>
    </div>
  )
}

export default Password;