import * as types from "./actionTypes";
import {
  createAuthorApi,
  deleteAuthorApi,
  getAuthorApi,
  getAuthorsApi,
  updateAuthorApi
} from "../../api/memberApi";

export function createAuthorAction(props) {
  return dispatch => {
    return createAuthorApi(props).then(details => {
      dispatch({ details, type: types.CREATE_MIGRATION_SUCCESS });
    });
  };
}

export function deleteAuthorAction(details) {
  return dispatch => {
    return deleteAuthorApi(details).then(() => {
      dispatch({ details, type: types.DELETE_AUTHOR_SUCCESS });
    });
  };
}

export function getAuthorAction(props) {
  return dispatch => {
    return getAuthorApi(props).then(details => {
      dispatch({ details, type: types.GET_AUTHOR_SUCCESS });
    });
  };
}

export function getAuthorsAction(query = {}) {
  return dispatch => {
    return getAuthorsApi(query).then(results => {
      dispatch({ results, type: types.GET_AUTHORS_SUCCESS });
    });
  };
}

export function resetAuthorAction() {
  return dispatch => {
    dispatch({ type: types.RESET_AUTHOR_SUCCESS });
  };
}

export function updateAuthorAction(props) {
  return dispatch => {
    return updateAuthorApi(props).then(details => {
      dispatch({ details, type: types.UPDATE_AUTHOR_SUCCESS });
    });
  };
}
