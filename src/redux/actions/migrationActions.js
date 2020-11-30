import * as type from "./actionTypes";
import * as migrationApi from "../../api/migrationApi";

//example using thunk - base function return signature
//thunk middleware passes dispatch as an argument to the thunk
//inner function gets the dispatch as an argument
// export function loadMigrations() {
//     return function(dispatch){

//     }
// }

//loadMigrationsSuccess action
export function loadMigrationSuccess(migrations) {
  return { type: type.LOAD_MIGRATIONS_SUCCESS, migrations: migrations };
}

export function createMigrationSuccess(migration) {
  return { type: type.CREATE_MIGRATION_SUCCESS, migration: migration };
}

export function updateMigrationSuccess(migration) {
  return { type: type.UPDATE_MIGRATION_SUCCESS, migration: migration };
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

export function saveMigration(migration) {
  return function (dispatch, getState) {
    return migrationApi
      .saveMigration(migration)
      .then((savedMigration) => {
        migration.migration_id
          ? dispatch(updateMigrationSuccess(savedMigration))
          : dispatch(createMigrationSuccess(savedMigration));
      })
      .catch((error) => {
        throw error;
      });
  };
}
