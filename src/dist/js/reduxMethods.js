const reduxMethods = {
  addResource: (state, action, key) => {
    return [...state, action[key]];
  },
  removeMatchCase: (state, action, key) => {
    return state.filter(a => a.resource_name !== action[key].resource_name);
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
