import { combineReducers } from "redux";

import app from "./dashboardReducer";
import member from "./memberReducer";
import toggle from "./toggleReducer";

const rootReducer = combineReducers({
  app,
  member,
  toggle,
});

export default rootReducer;
