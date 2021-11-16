const initialState = {
  isActiveBottomNav: true,
  isActiveNav: true
}

const Navbar = (state = initialState, action = {}) => {
  switch(action.type) {
    case "TOGGLE_BOTTOM_NAV":
    	return {
    		...state,
    		isActiveBottomNav: !state.isActiveBottomNav
    	}
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