import { combineReducers } from "redux";

import courses from "./courseReducer";
import migrations from "./migrationReducer";
import members from "./memberReducer";

const rootReducer = combineReducers({
  courses: courses,
  migrations: migrations,
  members: members,
});

export default rootReducer;
