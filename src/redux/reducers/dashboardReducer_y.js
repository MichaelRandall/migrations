import { combineReducers } from "redux";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import reduxMethods from "../../dist/js/reduxMethods";

function migration(state = initialState.app.migration, action) {
  console.log("DASHBOARD REDUCER MIGRATION HIT " + action.type);
  switch (action.type) {
    case types.CREATE_MIGRATION_SUCCESS:
      console.log("CREATE MIGRATION SUCCESS");
      return action.details;
    case types.DELETE_MIGRATION_SUCCESS:
      console.log("DELETE MIGRATION SUCCESS");
      return {};
    case types.GET_MIGRATION_SUCCESS:
      console.log("GET MIGRATION SUCCESS");
      return action.details;
    case types.RESET_MIGRATION_SUCCESS:
      console.log("RESET MIGRATION SUCCESS");
      return {};
    case types.UPDATE_MIGRATION_SUCCESS:
      console.log("UPDATE MIGRATION SUCCESS");
      return { ...state, ...action.details };
    default:
      return state;
  }
}

function migrations(state = initialState.app.migrations, action) {
  console.log("DASHBOARD REDUCER MIGRATIONs HIT " + action.type);
  switch (action.type) {
    case types.CREATE_MIGRATION_SUCCESS:
      console.log("R CREATE MIGRATION SUCCESS");
      return reduxMethods.addResource(state, action, "details");
    case types.DELETE_MIGRATION_SUCCESS:
      console.log("R DELETE MIGRATION SUCCESS");
      return reduxMethods.removeMatchCase(state, action, "details");
    case types.GET_MIGRATION_SUCCESS:
      console.log("R GET MIGRATION SUCCESS");
      return reduxMethods.updateMatchCase(state, action, "details");
    case types.GET_MIGRATIONS_SUCCESS:
      console.log("R GET MIGRATIONSSS SUCCESS");
      return action.results;
    case types.UPDATE_MIGRATION_SUCCESS:
      console.log("R UPDATE MIGRATIONSSS SUCCESS");
      return reduxMethods.updateMatchCase(state, action, "details");
    default:
      return state;
  }
}

const app = combineReducers({
  migration,
  migrations,
});

export default app;
