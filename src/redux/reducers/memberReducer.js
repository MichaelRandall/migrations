import * as type from "../actions/actionTypes";
import initialState from "./initialState";

export default function memberReducer(state = initialState.members, action) {
  switch (action.type) {
    case type.LOAD_MEMBERS_SUCCESS:
      return action.members;
    default:
      return state;
  }
}
