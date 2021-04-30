import aviasalesDBService from '../services/services';

export const showCheapest = () => ({type: 'CHEAPEST'});

export const showFastest = () => ({type: 'FASTEST'});

export const showAllTransfers = () => ({type: 'ALL_TRANSFERS'});

export const showWithoutTransfers = () => ({type: 'WITHOUT_TRANSFERS'});

export const showOneTransfer = () => ({type: 'ONE_TRANSFER'});

export const showTwoTransfers = () => ({type: 'TWO_TRANSFERS'});

export const showThreeTransfers = () => ({type: 'THREE_TRANSFERS'});

export const hasSpinner = () => ({type: 'HAS_SPINNER'});

export const noSpinner = () => ({type: 'NO_SPINNER'});

export const ticketsFetchDataSuccess = (tickets) => ({  
  type: 'TICKETS_FETCH_DATA_SUCCESS',
  tickets
})

function getAllTickets(id, dispatch) {
  return aviasalesDBService.getTickets(id)
    .then(data => {
      if (!data.body.stop) {
        dispatch(ticketsFetchDataSuccess(data.body.tickets))
        dispatch(hasSpinner())
        return getAllTickets(data.searchId, dispatch);
      } 
      if (data.body.stop) {
        dispatch(noSpinner())
        dispatch(ticketsFetchDataSuccess(data.body.tickets));
      }
        return data.body.tickets
      }
    )
    .catch((err)=> {
      if (err instanceof SyntaxError) {
        getAllTickets(id, dispatch)
      }
    })
}

export const ticketsFetchData = () => (dispatch) => {
  aviasalesDBService.getSearchId()
    .then(({ searchId }) => {
      getAllTickets(searchId, dispatch)
    })
}