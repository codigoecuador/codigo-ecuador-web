import { combineReducers } from "redux";
// import reducers
import sizeReducer from "./sizeReducer";
import languageReducer from "./languageReducer";

const rootReducer = combineReducers({
  size: sizeReducer,
  language: languageReducer
});

export default rootReducer;
