import {
  GET_MEMBERS_FAILURE,
  GET_MEMBERS_REQUEST,
  GET_MEMBERS_SUCCESS,
} from "../actions/actionTypes";

import initialState from "./initialState";

function membersReducer(state = initialState.app.members, action) {
  switch (action.type) {
    case GET_MEMBERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MEMBERS_SUCCESS:
      return {
        loading: false,
        members: action.payload,
        error: "",
      };
    case GET_MEMBERS_FAILURE:
      return {
        loading: false,
        members: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export default membersReducer;
