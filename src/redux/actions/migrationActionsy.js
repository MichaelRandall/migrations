import * as types from "./actionTypes";
import {
  createMigrationApi,
  deleteMigrationApi,
  getMigrationApi,
  getMigrationsApi,
  updateMigrationApi,
} from "../../api/migrationApi";

import {
  createStageApi,
  deleteStageApi,
  getStageApi,
  getStagesApi,
  updateStageApi,
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
// Thunks
export function getMigrationAction(props) {
  console.log("ACTION HERE " + JSON.stringify(props));
  return (dispatch) => {
    return getMigrationApi(props)
      .then((details) => {
        console.log("DOES THIS FIRE???");
        console.log("SOME PROPS " + JSON.stringify(props));
        dispatch({ details, type: types.GET_MIGRATION_SUCCESS });
      })
      .catch((error) => {
        throw error;
      });
  };
}

// Gets full list of migrations
// thunks
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
export function createStageAction(props) {
  return (dispatch) => {
    // createMigrationApi takes props and gets details, it sends details to the reducer with type
    return createStageApi(props).then((details) => {
      // Dispatch takes an object with details and a type and updates the store with it
      dispatch({ details, type: types.CREATE_STAGE_SUCCESS });
    });
  };
}

export function deleteStageAction(details) {
  return (dispatch) => {
    return deleteStageApi(details).then(() => {
      dispatch({ details, type: types.DELETE_STAGE_SUCCESS });
    });
  };
}

// Gets a filtered or single migration
export function getStageAction(props) {
  return (dispatch) => {
    return getStageApi(props)
      .then((details) => {
        dispatch({ details, type: types.GET_STAGE_SUCCESS });
      })
      .catch((error) => {
        throw error;
      });
  };
}

// Gets full list of migrations
export function getStagesAction(query = {}) {
  return (dispatch) => {
    return getStagesApi(query).then((results) => {
      dispatch({ results, type: types.GET_STAGES_SUCCESS });
    });
  };
}

export function resetStageAction() {
  return (dispatch) => {
    dispatch({ type: types.RESET_STAGE_SUCCESS });
  };
}

export function updateStageAction(props) {
  return (dispatch) => {
    return updateStageApi(props).then((details) => {
      dispatch({ details, type: types.UPDATE_STAGE_SUCCESS });
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
