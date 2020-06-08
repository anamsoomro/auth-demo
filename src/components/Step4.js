import React from 'react'
import { connect } from 'react-redux'
import jwt from 'jsonwebtoken'



function Step4(props) {

  const token = () => {
    const payload = {user_id: 2}
    const accessToken = jwt.sign(payload, "suhcurrity_is_important")
    localStorage.token = accessToken
  }

  token()

  return(
    <div className="step">
    <h1> 4 </h1>
      <p>
        users are authorized by giving them tokens that are stored on the client side which gives them access to your application. 
      </p>

      <p>
        to generate a token, we pass a payload that isunique to that user, we can use their user_id. a secret. and an encrypting algorithm.
      </p>

      <h4> payload: user_id: {Math.floor(Math.random() * 100)}</h4>
      <h4>secret: "suhcurrity_is_important"</h4>
      <h4>algorithm: "HS256"</h4>

      <h4> user_id + secret + algorithm ---> {localStorage.token} </h4>

      <p>
        send this token to the user and store it in their local storage. 
      </p>
      <h4> localStorage.token = {localStorage.token} </h4>

      <p>
        from the front end, as your user navigates the site you can check to see if they have a token in local storage or if you need to send them back to login
      </p>

      { props.step < 5 && <button onClick={props.nextStep}> next </button> }
      

      </div>
  )

}

const mapStateToProps = (state) => {
  return {
    step: state.step
  }
}

const mapDispacthToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch({type: "SET_TOKEN", token: token}),
    nextStep: () => dispatch({type: "NEXT_STEP" }),

   }
}

export default connect(mapStateToProps, mapDispacthToProps)(Step4)

