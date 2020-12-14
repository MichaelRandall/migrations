import { combineReducers } from "redux";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import reduxMethods from "../../dist/js/reduxMethods";

function migration(state = initialState.app.migration, action) {
  switch (action.type) {
    case types.CREATE_MIGRATION_SUCCESS:
      return action.details;
    case types.DELETE_MIGRATION_SUCCESS:
      return {};
    case types.GET_MIGRATION_SUCCESS:
      return action.details;
    case types.RESET_MIGRATION_SUCCESS:
      return {};
    case types.UPDATE_MIGRATION_SUCCESS:
      return { ...state, ...action.details };
    default:
      return state;
  }
}

function migrations(state = initialState.app.migrations, action) {
  debugger;
  switch (action.type) {
    case types.CREATE_MIGRATION_SUCCESS:
      return reduxMethods.addResource(state, action, "details");
    case types.DELETE_MIGRATION_SUCCESS:
      return reduxMethods.removeMatchCase(state, action, "details");
    case types.GET_MIGRATION_SUCCESS:
      return reduxMethods.updateMatchCase(state, action, "details");
    case types.GET_MIGRATIONS_SUCCESS:
      return action.results;
    case types.UPDATE_MIGRATION_SUCCESS:
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
