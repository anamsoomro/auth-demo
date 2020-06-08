import React from 'react'
import { connect } from 'react-redux'
import bcrypt from 'bcryptjs'



function Step2(props) {

  const saltPassword = () => {
    var hash = bcrypt.hashSync(props.password, 5) // 8 salt rounds
    props.setHash(hash)
    // hm when you salt the same value they should have the same hash
    // document.querySelector("#salted").innerText = "salted password:" + hash
    return hash
  }

  return(
    <div className="step">
    <div>
      <h1> 2 </h1>
      <p>
        your password here is passed to a backend server. the backend servers job is to take this password, it encrpyting using password salting and save it to the database securely. 
      </p>
      <h4> password: {props.password} </h4>
      {/* <button onClick={saltPassword}> salt it </button> */}
      <h4 id="salted"> salted password: {saltPassword()}</h4>
      { props.step < 3 && <button onClick={props.nextStep}> next </button> }
    </div>


    <button  data-toggle="modal" data-target="#exampleModal">
      {"< / >"}
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p> 
              {'insert code here'}
              <pre ><code>&lt;p&gt;Sample text here...&lt;/p&gt;
                &lt;p&gt;And another line of sample text here...&lt;/p&gt;
              </code></pre>
            </p>
          </div>
        </div>
      </div>
    </div>



    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    step: state.step,
    password: state.password
  }
}

const mapDispacthToProps = (dispatch) => {
  return {
    // setStep: (step_num) => dispatch({type: "SET_STEP", step: step_num}),
    setHash: (hash) => dispatch({type: "SET_HASH", hash: hash}),
    nextStep: () => dispatch({type: "NEXT_STEP" }),

  }
}

export default connect(mapStateToProps, mapDispacthToProps)(Step2)

