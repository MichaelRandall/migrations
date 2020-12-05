import * as types from "./actionTypes";
import {
  createMemberApi,
  deleteMemberApi,
  getMemberApi,
  getMembersApi,
  updateMemberApi
} from "../../api/memberApi";

export function createMemberAction(props) {
  return dispatch => {
    return createMemberApi(props).then(details => {
      dispatch({ details, type: types.CREATE_MEMBER_SUCCESS });
    });
  };
}

export function deleteMemberAction(details) {
  return dispatch => {
    return deleteMemberApi(details).then(() => {
      dispatch({ details, type: types.DELETE_MEMBER_SUCCESS });
    });
  };
}

export function getMemberAction(props) {
  return dispatch => {
    return getMemberApi(props).then(details => {
      dispatch({ details, type: types.GET_MEMBER_SUCCESS });
    });
  };
}

export function getMembersAction(query = {}) {
  return dispatch => {
    return getMembersApi(query).then(results => {
      dispatch({ results, type: types.GET_MEMBERS_SUCCESS });
    });
  };
}

export function resetMemberAction() {
  return dispatch => {
    dispatch({ type: types.RESET_MEMBER_SUCCESS });
  };
}

export function updateMemberAction(props) {
  return dispatch => {
    return updateMemberApi(props).then(details => {
      dispatch({ details, type: types.UPDATE_MEMBER_SUCCESS });
    });
  };
}
