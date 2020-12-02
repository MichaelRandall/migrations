import { combineReducers } from "redux";

import migrations from "./migrationReducer";
import members from "./memberReducer";

const rootReducer = combineReducers({
  migrations: migrations,
  members: members,
});

export default rootReducer;
