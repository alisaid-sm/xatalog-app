const initialState = {
  isActiveNav: true
}

const Navbar = (state = initialState, action = {}) => {
  switch(action.type) {
    case "TOGGLE_NAV":
      return {
        ...state,
        isActiveNav: !state.isActiveNav
      }
    default:
      return state
  }
};

export default Navbar;