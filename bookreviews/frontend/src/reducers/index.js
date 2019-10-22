import { combineReducers } from "redux";
import reviews from "./reviews";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  reviews,
  errors,
  messages
});
