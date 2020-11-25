import * as type from "../actions/actionTypes";

export default function memberReducer(state = [], action) {
  switch (action.type) {
    case type.LOAD_MEMBERS_SUCCESS:
      return action.members;
    default:
      return state;
  }
}
