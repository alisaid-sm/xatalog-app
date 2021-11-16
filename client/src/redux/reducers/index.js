import { combineReducers } from "redux";
import Navbar from "./Navbar";
import Auth from "./Auth";

const reducers = combineReducers({
  Navbar,
  Auth
});

export default reducers;