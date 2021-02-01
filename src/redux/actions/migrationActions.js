import * as types from "./actionTypes";
import {
  createMigrationApi,
  deleteMigrationApi,
  getMigrationApi,
  getMigrationsApi,
  updateMigrationApi,
} from "../../api/migrationApi";

import {
  getStagesApi,
  updateStagesApi,
  resetStagesApi,
} from "../../api/stageApi";

import {
  createTaskApi,
  deleteTaskApi,
  getTaskApi,
  getTasksApi,
  updateTaskApi,
} from "../../api/taskApi";

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

// Where are the props values coming from?
// What are the details
export function getStagesAction(props) {
  return (dispatch) => {
    // createMigrationApi takes props and gets details, it sends details to the reducer with type
    return getStagesApi(props).then((details) => {
      // Dispatch takes an object with details and a type and updates the store with it
      dispatch({ details, type: types.GET_STAGES_SUCCESS });
    });
  };
}

export function resetStagesAction() {
  return (dispatch) => {
    dispatch({ type: types.RESET_STAGES_SUCCESS });
  };
}

export function updateStagesAction(props) {
  return (dispatch) => {
    return updateStagesApi(props).then((details) => {
      dispatch({ details, type: types.UPDATE_STAGES_SUCCESS });
    });
  };
}

// Where are the props values coming from?
// What are the details
export function createTaskAction(props) {
  return (dispatch) => {
    // createMigrationApi takes props and gets details, it sends details to the reducer with type
    return createTaskApi(props).then((details) => {
      // Dispatch takes an object with details and a type and updates the store with it
      dispatch({ details, type: types.CREATE_TASK_SUCCESS });
    });
  };
}

export function deleteTaskAction(details) {
  return (dispatch) => {
    return deleteTaskApi(details).then(() => {
      dispatch({ details, type: types.DELETE_TASK_SUCCESS });
    });
  };
}

// Gets a filtered or single migration
export function getTaskAction(props) {
  return (dispatch) => {
    return getTaskApi(props)
      .then((details) => {
        dispatch({ details, type: types.GET_TASK_SUCCESS });
      })
      .catch((error) => {
        throw error;
      });
  };
}

// Gets full list of migrations
export function getTasksAction(query = {}) {
  return (dispatch) => {
    return getTasksApi(query).then((results) => {
      dispatch({ results, type: types.GET_TASKS_SUCCESS });
    });
  };
}

export function resetTaskAction() {
  return (dispatch) => {
    dispatch({ type: types.RESET_TASK_SUCCESS });
  };
}

export function updateTaskAction(props) {
  return (dispatch) => {
    return updateTaskApi(props).then((details) => {
      dispatch({ details, type: types.UPDATE_TASK_SUCCESS });
    });
  };
}

/* App - Stage Actions */
/* App - Task Actions */
