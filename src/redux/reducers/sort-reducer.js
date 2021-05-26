const sortReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_SORTING':
      return !!action.payload
    
    default:
      return state;
  }
};

export default sortReducer;