import React from 'react'
import { connect } from 'react-redux'
import bcrypt from 'bcryptjs'
// figure out bcrypt



function Step3(props) {

  const checkCredentials = (event) => {
    event.preventDefault()
    let username = event.target[0].value
    let password = event.target[1].value
    // const $ = document.querySelector.bind(document);
    let userSuccess = document.querySelector("#user-good")
    let userError = document.querySelector("#user-bad")
    let passSuccess = document.querySelector("#pass-good")
    let passError = document.querySelector("#pass-bad")
    debugger
    // idk why when i uncomment this ReferenceError: passError is nott defined on line `18

    [userSuccess, userError, passSuccess, passError].forEach( indicator => {
      indicator.style.display = "none"
    })

    if (username === props.username ){
      userSuccess.style.display = "block"
    } else { 
      userError.style.display = "block"
      return;
    }
    if (password === props.password){
      passSuccess.style.display = "block"
    } else {
      passError.style.display = "block"
    }
    // bcrypt.compare(password, props.hashedPassword, (err, res) => {
    //   debugger
    //     if (res === true ){
    //       passSuccess.style.display = "block"
    //     } else {
    //       passError.style.display = "block"
    //     }
    // });

    if (username === props.username && password === props.password){
      props.nextStep()
    }
  }

  return(
    <div>
    <h1> 3 </h1>
    <h3> now try logging in </h3>
    <form onSubmit={checkCredentials}>
      <label>username</label>
      <input type="text" />
      <label>passowrd</label>
      <input type="text" />
      <input type="submit" />
    </form>

    <p>
      these credentials are now sent to the back end. if a user exists, thie password is diigested usiinig the same algorithm and compared. 
    </p>

      <h4> find username. </h4>
      <h4 id="user-good" style={{display: "none"}}> found </h4>
      <h4 id="user-bad" style={{display: "none"}}> not found </h4>

      <h4> digest password and compare with password in db </h4>
      <h4 id="pass-good" style={{display: "none"}}> checks out </h4>
      <h4 id="pass-bad" style={{display: "none"}}> doesnt match </h4>


    
    </div>

  )

}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password,
    hashedPassword: state.hashedPassword
  }

}

const mapDispacthToProps = (dispatch) => {
  return {
    setStep: (step_num) => dispatch({type: "SET_STEP", step: step_num}),
    nextStep: () => dispatch({type: "NEXT_STEP"})
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(Step3)

