const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'HAS_SPINNER':
      if (action.payload) {
        return true;
      }
      return false;
    
    default:
      return state;
  }
};

export default loadingReducer;