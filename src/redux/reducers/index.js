import { combineReducers } from "redux";

import app from "./appReducer";
import member from "./memberReducer";

const rootReducer = combineReducers({
  app,
  member
});

export default rootReducer;
