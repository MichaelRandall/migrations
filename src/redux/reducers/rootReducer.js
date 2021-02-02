import { combineReducers } from "redux";
import migrationsReducer from "./migrationsReducer";
import membersReducer from "./membersReducer";

const rootReducer = combineReducers({
  migrations: migrationsReducer,
  members: membersReducer,
});

export default rootReducer;
