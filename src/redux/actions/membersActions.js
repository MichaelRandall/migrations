import {
  GET_MEMBERS_FAILURE,
  GET_MEMBERS_REQUEST,
  GET_MEMBERS_SUCCESS,
} from "./actionTypes";

import { getMembersApi } from "../../api/memberApi";

// Gets a filtered or single migration
// Thunks

// migrations action creators
// ----------------------------------------
export const getMembersRequest = () => {
  return {
    type: GET_MEMBERS_REQUEST,
  };
};

export const getMembersSuccess = (members) => {
  return {
    type: GET_MEMBERS_SUCCESS,
    payload: members,
  };
};

export const getMembersFailure = (error) => {
  return {
    type: GET_MEMBERS_FAILURE,
    payload: error,
  };
};

// async action creator
export const getMembers = () => {
  return (dispatch) => {
    dispatch(getMembersRequest);
    getMembersApi()
      .then((response) => {
        const members = response.data;
        dispatch(getMembersSuccess(members));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getMembersFailure(errorMsg));
      });
  };
};
