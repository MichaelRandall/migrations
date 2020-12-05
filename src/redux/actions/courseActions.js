import * as types from "./actionTypes";
import {
  createCourseApi,
  deleteCourseApi,
  getCourseApi,
  getCoursesApi,
  updateCourseApi
} from "../../api/memberApi";

export function createCourseAction(props) {
  return dispatch => {
    return createCourseApi(props).then(details => {
      dispatch({ details, type: types.CREATE_MIGRATION_SUCCESS });
    });
  };
}

export function deleteCourseAction(details) {
  return dispatch => {
    return deleteCourseApi(details).then(() => {
      dispatch({ details, type: types.DELETE_COURSE_SUCCESS });
    });
  };
}

export function getCourseAction(props) {
  return dispatch => {
    return getCourseApi(props).then(details => {
      dispatch({ details, type: types.GET_COURSE_SUCCESS });
    });
  };
}

export function getCoursesAction(query = {}) {
  return dispatch => {
    return getCoursesApi(query).then(results => {
      dispatch({ results, type: types.GET_COURSES_SUCCESS });
    });
  };
}

export function resetCourseAction() {
  return dispatch => {
    dispatch({ type: types.RESET_COURSE_SUCCESS });
  };
}

export function updateCourseAction(props) {
  return dispatch => {
    return updateCourseApi(props).then(details => {
      dispatch({ details, type: types.UPDATE_COURSE_SUCCESS });
    });
  };
}
