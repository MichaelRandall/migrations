import {
  GET_MIGRATIONS_REQUEST,
  GET_MIGRATIONS_FAILURE,
  GET_MIGRATIONS_SUCCESS,
} from "../actions/actionTypes";
import initialState from "./initialState";
// import reduxMethods from "../../dist/js/reduxMethods";

// function migration(state = initialState.app.migration, action) {
//   console.log("DASHBOARD REDUCER MIGRATION HIT " + action.type);
//   switch (action.type) {
//     case types.CREATE_MIGRATION_SUCCESS:
//       console.log("CREATE MIGRATION SUCCESS");
//       return action.details;
//     case types.DELETE_MIGRATION_SUCCESS:
//       console.log("DELETE MIGRATION SUCCESS");
//       return {};
//     case types.GET_MIGRATION_SUCCESS:
//       console.log("GET MIGRATION SUCCESS");
//       return action.details;
//     case types.RESET_MIGRATION_SUCCESS:
//       console.log("RESET MIGRATION SUCCESS");
//       return {};
//     case types.UPDATE_MIGRATION_SUCCESS:
//       console.log("UPDATE MIGRATION SUCCESS");
//       return { ...state, ...action.details };
//     default:
//       return state;
//   }
// }

function migrationsReducer(state = initialState.app.migrations, action) {
  switch (action.type) {
    case GET_MIGRATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MIGRATIONS_SUCCESS:
      return {
        loading: false,
        migrations: action.payload,
        error: "",
      };
    case GET_MIGRATIONS_FAILURE:
      return {
        loading: false,
        migrations: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export default migrationsReducer;
