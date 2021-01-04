import * as types from "./actionTypes";
import {
  createMember,
  deleteMember,
  getMember,
  getMembers,
  updateMember,
} from "../../api/memberApi";

export function createMemberAction(props) {
  return (dispatch) => {
    return createMember(props).then((details) => {
      dispatch({ details, type: types.CREATE_MEMBER_SUCCESS });
    });
  };
}

export function deleteMemberAction(details) {
  return (dispatch) => {
    return deleteMember(details).then(() => {
      dispatch({ details, type: types.DELETE_MEMBER_SUCCESS });
    });
  };
}

// Should return one member
export function getMemberAction(props) {
  return (dispatch) => {
    return getMember(props).then((details) => {
      dispatch({ details, type: types.GET_MEMBER_SUCCESS });
    });
  };
}

// Should return all
export function getMembersAction(query = {}) {
  return (dispatch) => {
    return getMembers(query).then((results) => {
      dispatch({ results, type: types.GET_MEMBERS_SUCCESS });
    });
  };
}

export function resetMemberAction() {
  return (dispatch) => {
    dispatch({ type: types.RESET_MEMBER_SUCCESS });
  };
}

export function updateMemberAction(props) {
  return (dispatch) => {
    return updateMember(props).then((details) => {
      dispatch({ details, type: types.UPDATE_MEMBER_SUCCESS });
    });
  };
}
