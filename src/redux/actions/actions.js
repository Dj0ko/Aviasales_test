export const changeSorting = (payload) => ({
  type: 'CHANGE_SORTING',
  payload
});

export const showAllTransfers = () => ({type: 'ALL_TRANSFERS'});

export const changeFilter = (payload) => ({
  type: 'CHANGE_FILTER',
  payload
});

export const hasSpinner = (payload) => ({
  type: 'HAS_SPINNER',
  payload
});

export const ticketsFetchDataSuccess = (tickets) => ({  
  type: 'TICKETS_FETCH_DATA_SUCCESS',
  tickets
});