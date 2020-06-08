import React from 'react'
import { connect } from 'react-redux'



function Step1(props) {

  const submit = (event) => {
    let username = event.target[0].value
    let password = event.target[1].value
    event.preventDefault()
    if (username === "", password === ""){
      alert("nah dog put a username and password in")
    } else { 
      props.setCred(username, password)
      props.nextStep()
    }
  }

  return(
    <div className="step">
      <h1> 1 </h1>
      <h3> sign up below, not storing anything, just tryna show you something </h3>
      <form onSubmit={submit}>
      <label>username</label>
      <input type="text" />
      <label>password</label>
      <input type="text" />
      <input type="submit" />
      </form>
    </div>
  )

}

const mapStateToProps = (state) => {
  return state
}

const mapDispacthToProps = (dispatch) => {
  return {
    setStep: (step_num) => dispatch({type: "SET_STEP", step: step_num}),
    setCred: (username, password) => dispatch({type: "SET_CREDENTIALS", username: username, password: password}),
    nextStep: () => dispatch({type: "NEXT_STEP" }),

  }
}

export default connect(mapStateToProps, mapDispacthToProps)(Step1)

