import * as types from "./actionTypes";
import {
  createMigrationApi,
  deleteMigrationApi,
  getMigrationApi,
  getMigrationsApi,
  updateMigrationApi,
} from "../../api/migrationApi";

// Where are the props values coming from?
// What are the details
export function createMigrationAction(props) {
  return (dispatch) => {
    // createMigrationApi takes props and gets details, it sends details to the reducer with type
    return createMigrationApi(props).then((details) => {
      // Dispatch takes an object with details and a type and updates the store with it
      dispatch({ details, type: types.CREATE_MIGRATION_SUCCESS });
    });
  };
}

export function deleteMigrationAction(details) {
  return (dispatch) => {
    return deleteMigrationApi(details).then(() => {
      dispatch({ details, type: types.DELETE_MIGRATION_SUCCESS });
    });
  };
}

// Gets a filtered or single migration
export function getMigrationAction(props) {
  return (dispatch) => {
    return getMigrationApi(props)
      .then((details) => {
        dispatch({ details, type: types.GET_MIGRATION_SUCCESS });
      })
      .catch((error) => {
        throw error;
      });
  };
}

// Gets full list of migrations
export function getMigrationsAction(query = {}) {
  return (dispatch) => {
    return getMigrationsApi(query).then((results) => {
      dispatch({ results, type: types.GET_MIGRATIONS_SUCCESS });
    });
  };
}

export function resetMigrationAction() {
  return (dispatch) => {
    dispatch({ type: types.RESET_MIGRATION_SUCCESS });
  };
}

export function updateMigrationAction(props) {
  return (dispatch) => {
    return updateMigrationApi(props).then((details) => {
      dispatch({ details, type: types.UPDATE_MIGRATION_SUCCESS });
    });
  };
}
