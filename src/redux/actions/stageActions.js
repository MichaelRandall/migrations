import * as types from "./actionTypes";
import {
    getStagesApi,
    updateStagesApi
  } from "../../api/stageApi";



export function getStagesAction(props) {
    return dispatch => {
      // createMigrationApi takes props and gets details, it sends details to the reducer with type
      return getStagesApi(props).then(details => {
        // Dispatch takes an object with details and a type and updates the store with it
        dispatch({ details, type: types.GET_STAGES_SUCCESS });
      });
    };
  }

  export function resetStagesAction() {
    return dispatch => {
      dispatch({ type: types.RESET_STAGES_SUCCESS });
    };
  }
  
  export function updateStagesAction(props) {
    return dispatch => {
      return updateStagesApi(props).then(details => {
        dispatch({ details, type: types.UPDATE_STAGES_SUCCESS });
      });
    };
  }