import { combineReducers } from "redux";

import migrations from "./migrationsReducer";
import members from "./membersReducer";
import toggle from "./toggleReducer";

const rootReducer = combineReducers({
  migrations,
  members,
  toggle,
});

export default rootReducer;
