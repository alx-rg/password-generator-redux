import React from "react";
import zxcvbn from "zxcvbn";

function Evaluate(props) {
  const { thepassword } = props

  console.log(thepassword)
  let passStrength = zxcvbn(thepassword)
  return (
    <div>
      <small>
      {/* {passStrength.calc_time} */}
      Password Strength (0-4) : {passStrength.score}
      </small>
      <br></br>
      <small>
      Guesses to crack it: {passStrength.guesses}
      </small>
        

    </div>
  )
}

export default Evaluate