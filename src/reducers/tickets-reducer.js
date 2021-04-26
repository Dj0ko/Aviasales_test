const ticketsReducer = ( state = [], action) => {
  switch (action.type) {
    case 'TICKETS_FETCH_DATA_SUCCESS': 
      return action.tickets;

    default:
      return state;
  }
}

export default ticketsReducer;