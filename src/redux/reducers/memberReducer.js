import { combineReducers } from "redux";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import reduxMethods from "../../dist/js/reduxMethods";

function data(state = initialState.member.data, action) {
  switch (action.type) {
    case types.CREATE_MEMBER_SUCCESS:
      return reduxMethods.addResource(state, action, "details");
    case types.DELETE_MEMBER_SUCCESS:
      return reduxMethods.removeMatchCase(state, action, "details");
    case types.GET_MEMBER_SUCCESS:
      return reduxMethods.updateMatchCase(state, action, "details");
    case types.GET_MEMBERS_SUCCESS:
      return action.results;
    case types.UPDATE_MEMBER_SUCCESS:
      return reduxMethods.updateMatchCase(state, action, "details");
    default:
      return state;
  }
}

function details(state = initialState.member.details, action) {
  switch (action.type) {
    case types.CREATE_MEMBER_SUCCESS:
      return action.details;
    case types.DELETE_MEMBER_SUCCESS:
      return {};
    case types.GET_MEMBER_SUCCESS:
      return action.details;
    case types.RESET_MEMBER_SUCCESS:
      return {};
    case types.UPDATE_MEMBER_SUCCESS:
      return { ...state, ...action.details };
    default:
      return state;
  }
}

const member = combineReducers({
  data,
  details,
});

export default member;
