import * as type from "../actions/actionTypes";

export default function migrationReducer(state = [], action) {
  switch (action.type) {
    case type.CREATE_MIGRATION:
      return [...state, { ...action.migration }];
    case type.LOAD_MIGRATIONS_SUCCESS:
      return action.migrations;
    default:
      return state;
  }
}
