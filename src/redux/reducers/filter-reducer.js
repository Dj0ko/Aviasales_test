const filterReducer = (state = Array(5).fill(true), action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ALL_TRANSFERS':
      return (state[0] || (!state[0] && state.slice(1).every(element => element))) ? Array(5).fill(false) : Array(5).fill(true);

    case 'CHANGE_FILTER':
      return (state[payload]) ? [false, ...state.slice(1, payload), !state[payload], ...state.slice(payload + 1)] : 
      [...state.slice(0, payload), !state[payload], ...state.slice(payload + 1)]
      
    
    default:
      return state;
  }
};

export default filterReducer;