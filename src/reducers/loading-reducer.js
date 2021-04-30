const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'HAS_SPINNER':
      return true;

    case 'NO_SPINNER':
      return false;
    
    default:
      return state;
  }
};

export default loadingReducer;