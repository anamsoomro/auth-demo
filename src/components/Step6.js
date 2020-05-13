import React from 'react'
import { connect } from 'react-redux'
import jwt from 'jsonwebtoken'





function Step6(props) {

  const checkAuth = () => {
    let payload = jwt.decode(localStorage.token, "suhcurrity_is_important")
    return payload.user_id
  }

  return(
    <div>
      <h1> 6 </h1>
      <p>
        now everytime a user makes a request to your server, we better check to see if that got their token
        in our backend we recieve their token pass it our password and decrypt the token for the iinitiial payload
      </p>

      <h4> {localStorage.token} => secret: "suhcurrity_is_important" => user_id: {checkAuth()} </h4>

      <p> 
        if it works, onwards! else go log in. 
      </p>
      {props.step < 7 && <button onClick={props.nextStep}> next </button> }
    </div>
  )

}

const mapStateToProps = (state) => {
  return state
}

const mapDispacthToProps = (dispatch) => {
  return {
    nextStep: () => dispatch({type: "NEXT_STEP" }),
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(Step6)

