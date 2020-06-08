import React from 'react'
import { connect } from 'react-redux'



function Step7(props) {

  const logout = () => {
    localStorage.clear()
    document.querySelector("#localStorage").innerText = "localStorage.token = undefined"
    props.nextStep()
  }

  return(
    <div className="step">
      <h1> 7 </h1>
      <p> 
        yo dont forget your logout.  dont worry thats easy you just clear your clients local storage. 
        now when they can come back to the site with no token theyll be asked to login
      </p>
      <button onClick={logout}> logout </button>
      <h4 id="localStorage" > localStorage.token = {localStorage.token} </h4>
    </div>
  )

}

const mapStateToProps = (state) => {
  return state
}

const mapDispacthToProps = (dispatch) => {
  return {
    nextStep: () => dispatch({type: "NEXT_STEP"})
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(Step7)

