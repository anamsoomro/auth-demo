const initialState = {
  step: 1,
  username: "LazyAss",
  password: "ImpatientAss",
  hashedPassword: null,
  token: null,
}

export default function reducer (state=initialState, action){

  switch(action.type){
    case "NEXT_STEP":
      // go to next step
      return {
        ...state,
        step: state.step += 1
      }
    case "SET_STEP":
      // pass up to what step to show
      return {
        ...state,
        step: action.step
      }

    case "SET_CREDENTIALS":
      return {
        ...state,
        username: action.username,
        password: action.password
      }
    case "SET_HASH":
      return{
        ...state,
        hash: action.hash
      }
    default: {
      return state
    }
  }
}