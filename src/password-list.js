import { useState } from 'react'
import { connect, useSelector } from 'react-redux'

function PasswordList() {
  const passwords = useSelector((state) => state.passwords)

  const passwordList = passwords.map((pass, index) => {
    return (
      <div key={index}>
        <li>
          Name: {pass.name} 
        </li>
        <li>
          Password: {pass.password}
        </li>
        <hr></hr>
      </div>)
  })
  
  return (
    <div>
      <h1>List of Passwords saved:</h1>
      <ul>
        {passwordList} 
      </ul>
    </div>
  )
}

export default PasswordList