const reduxMethods = {
  addResource: (state, action, key) => {
    return [...state, action[key]];
  },
  removeMatchCase: (state, action, key) => {
    return state.filter(a => a.resource_name !== action[key].resource_name);
  },
  //Toggle modals, sidebars, etc.
  toggleState: (state, action, key) => {
    return { ...state, [key]: action.show === false ? false : !state[key] };
  },
  updateMatchCase: (state, action, key) => {
    return state.filter(a =>
      a.resource_name === action[key].resource_name
        ? { ...a, ...action[key] }
        : a
    );
  }
};

export default reduxMethods;
