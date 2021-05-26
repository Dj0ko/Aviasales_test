const sortReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_SORTING':
      if (action.payload) {
        return true
      }
      return false;
    
    default:
      return state;
  }
};

export default sortReducer;