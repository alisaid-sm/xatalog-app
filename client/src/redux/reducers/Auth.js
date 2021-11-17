import jwt from 'jsonwebtoken';

const Perm = jwt.decode(sessionStorage.getItem('token')) || {id: ''};

const initialState = {
    Perm
  }
  
  const Auth = (state = initialState, action = {}) => {
    switch(action.type) {
      case "UPDATE_STATE_PERM":
          return {
             ...state,
             Perm: action.payload
          }
      default:
        return state
    }
  };
  
  export default Auth;