import React from 'react';
import './App.css';
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'
import Step5 from './components/Step5'
import Step6 from './components/Step6'
import Step7 from './components/Step7'
import Step8 from './components/Step8'

import {connect} from "react-redux"

function App(props) {
  return (
    <div className="App">
      <h1> Authentication and Authorization </h1>
      <p> token based backend authorization using bcrypt and jwt</p>
      <button onClick={() => props.setStep(8)}> I aint got time for this Anam </button>

      {props.step > 0 && <Step1 />} 
      {props.step > 1 && <Step2 />} 
      {props.step > 2 && <Step3 />} 
      {props.step > 3 && <Step4 />} 
      {props.step > 4 && <Step5 />} 
      {props.step > 5 && <Step6 />} 
      {props.step > 6 && <Step7 />} 
      {props.step > 7 && <Step8 />} 

    </div>
  );
}

// export default App;

const mapStateToProps = (state) => {
  return  {
    step: state.step
  }
}

const mapDispacthToProps = (dispatch) => {
  return {
    setStep: (step_num) => dispatch({type: "SET_STEP", step: step_num})

  }
}

export default connect(mapStateToProps, mapDispacthToProps)(App)
