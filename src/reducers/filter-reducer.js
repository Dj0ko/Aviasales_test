const filterReducer = (state = [false, false, false, false, false], action) => {
  switch (action.type) {
    case 'ALL_TRANSFERS':
      if (state[0] || (!state[0] && state[1] && state[2] && state[3] && state[4])) {
        return [false, false, false, false, false];
      }
      return [true, true, true, true, true];

    case 'WITHOUT_TRANSFERS':
      if (state[1]) {
        return [false, false, ...state.slice(2)]
      }
      return [...state.slice(0, 1), true, ...state.slice(2)];

    case 'ONE_TRANSFER':
      if (state[2]) {
        return [false, ...state.slice(1, 2), false, ...state.slice(3)]
      }
      return [...state.slice(0, 2), true, ...state.slice(3)];

    case 'TWO_TRANSFERS':
      if (state[3]) {
        return [false, ...state.slice(1, 3), false, ...state.slice(4)]
      }
      return [...state.slice(0, 3), true, ...state.slice(4)];

    case 'THREE_TRANSFERS':
      if (state[4]) {
        return [false, ...state.slice(1, 4), false]
      }
      return [...state.slice(0, 4), true];
    
    default:
      return state;
  }
};

export default filterReducer;