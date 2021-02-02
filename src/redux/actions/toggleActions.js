import * as types from "./actionTypes";

export default function toggleAction({ resource, ...props }) {
  return (dispatch) => {
    let type = types.TOGGLE_MIGRATION_MODAL;
    if (resource === "member-modal") type = types.TOGGLE_MEMBER_MODAL;
    if (resource === "migration-modal") type = types.TOGGLE_MIGRATION_MODAL;
    // if (resource === "stage-modal") type = types.TOGGLE_STAGE_MODAL;
    // if (resource === "task-modal") type = types.TOGGLE_TASK_MODAL;

    dispatch({ type, ...props });
  };
}
