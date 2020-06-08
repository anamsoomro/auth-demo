import React from 'react'
import { connect } from 'react-redux'




function Step5(props) {

  return(
    <div className="step">
      <h1> 5 </h1>
      <p>
        for the backend you want to also be checking to see if your user is authenticated with every request.
      </p>
      <p>
        all fetches will now include a token. the token is decrptyed through bcypt and make sure the user_id matches.  
      </p>
      <h4>headers: Authorization: Bearer {localStorage.token} </h4>
      { props.step < 6 && <button onClick={props.nextStep}> next </button> }
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
    nextStep: () => dispatch({type: "NEXT_STEP" }),
  }
}

export default connect(mapStateToProps, mapDispacthToProps)(Step5)

