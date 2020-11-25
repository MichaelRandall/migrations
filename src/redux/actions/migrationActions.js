import * as type from "./actionTypes";
import * as migrationApi from "../../api/migrationApi";

//example using thunk - base function return signature
//thunk middleware passes dispatch as an argument to the thunk
//inner function gets the dispatch as an argument
// export function loadMigrations() {
//     return function(dispatch){

//     }
// }

export function createMigration(migration) {
  return { type: type.CREATE_MIGRATION, migration: migration };
}

//loadMigrationsSuccess action
export function loadMigrationSuccess(migrations) {
  return { type: type.LOAD_MIGRATIONS_SUCCESS, migrations: migrations };
}

// this is the thunk inside thunk return migrationApi, calls to getMigrations
export function loadMigrations() {
  return function (dispatch) {
    return migrationApi
      .getMigrations()
      .then((migrations) => {
        dispatch(loadMigrationSuccess(migrations));
      })
      .catch((error) => {
        throw error;
      });
  };
}
