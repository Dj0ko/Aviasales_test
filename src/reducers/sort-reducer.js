const sortReducer = (state = null, action) => {
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