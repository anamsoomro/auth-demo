import React from 'react'
import { connect } from 'react-redux'



function Step8() {


  return(
    <div className="step">
    <h1> 8 </h1>

    <button> Ruby and React Authorization and Authenticaion Demo Project </button>

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

export default connect(mapStateToProps, mapDispacthToProps)(Step8)

