import * as type from "../actions/actionTypes";
import initialState from "./initialState";

export default function migrationReducer(
  state = initialState.migrations,
  action
) {
  switch (action.type) {
    case type.CREATE_MIGRATION_SUCCESS:
      return [...state, { ...action.migration }];
    case type.UPDATE_MIGRATION_SUCCESS:
      return state.map((migration) =>
        migration.id === action.migration.id ? action.migration : migration
      );
    case type.LOAD_MIGRATIONS_SUCCESS:
      return action.migrations;
    default:
      return state;
  }
}
