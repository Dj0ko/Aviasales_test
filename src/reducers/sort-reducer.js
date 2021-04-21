const sortReducer = (state = false, action) => {
  switch (action.type) {
    case 'CHEAPEST':
      return false;

    case 'FASTEST':
      return true;
    
    default:
      return state;
  }
};

export default sortReducer;