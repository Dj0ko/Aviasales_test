const filterReducer = (state = [true, true, true, true, true], action) => {
  switch (action.type) {
    case 'ALL_TRANSFERS':
      if (state[0] || (!state[0] && state[1] && state[2] && state[3] && state[4])) {
        return [false, false, false, false, false];
      }
      return [true, true, true, true, true];

    case 'CHANGE_FILTER':
      if (state[action.payload]) {
        return [false, ...state.slice(1, action.payload), !state[action.payload], ...state.slice(action.payload + 1)];
      }
      return [...state.slice(0, action.payload), !state[action.payload], ...state.slice(action.payload + 1)];
      
    
    default:
      return state;
  }
};

export default filterReducer;