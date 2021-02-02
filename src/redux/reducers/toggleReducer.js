import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import reduxMethods from "../../dist/js/reduxMethods";

export default function toggleReducer(state = initialState.toggle, action) {
  switch (action.type) {
    case types.TOGGLE_MEMBER_MODAL:
      return reduxMethods.toggleState(state, action, "memberModal");
    case types.TOGGLE_MIGRATION_MODAL:
      return reduxMethods.toggleState(state, action, "migrationModal");
    // case types.TOGGLE_STAGE_MODAL:
    //   return reduxMethods.toggleState(state, action, "stageModal");
    // case types.TOGGLE_TASK_MODAL:
    //   return reduxMethods.toggleState(state, action, "taskModal");
    default:
      return state;
  }
}
