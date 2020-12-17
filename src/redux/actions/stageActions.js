import * as types from "./actionTypes";
import {
  createStageApi,
  deleteStageApi,
  getStageApi,
  getStagesApi,
  updateStageApi,
} from "../../api/stageApi";

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
