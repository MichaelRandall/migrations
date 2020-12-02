import * as type from "./actionTypes";
import * as memberApi from "../../api/memberApi";

export function loadMembersSuccess(members) {
  return { type: type.LOAD_MEMBERS_SUCCESS, members: members };
}

// this is the thunk
export function loadMembers() {
  return function (dispatch) {
    return memberApi
      .getMembers()
      .then((members) => {
        dispatch(loadMembersSuccess(members));
      })
      .catch((error) => {
        throw error;
      });
  };
}
