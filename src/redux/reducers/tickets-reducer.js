const ticketsReducer = ( state = [], action) => {
  switch (action.type) {
    case 'TICKETS_FETCH_DATA_SUCCESS': 
      return [...state, ...action.tickets];

    default:
      return state;
  }
}

export default ticketsReducer;