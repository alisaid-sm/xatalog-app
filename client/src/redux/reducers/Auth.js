import jwt from 'jsonwebtoken';

const Perm = jwt.decode(localStorage.getItem('token')) || {role_name: ''};

const initialState = {
    Perm,
    haveSholawat: false
  }
  
  const Auth = (state = initialState, action = {}) => {
    switch(action.type) {
      case "UPDATE_STATE_PERM":
          return {
             ...state,
             Perm: action.payload
          }
      case "TOGGLE_HAVE_SHOLAWAT":
        return {
            ...state,
            haveSholawat: !state.haveSholawat
        }
      default:
        return state
    }
  };
  
  export default Auth;