import aviasalesDBService from '../services/services';

export const showCheapest = () => ({type: 'CHEAPEST'});

export const showFastest = () => ({type: 'FASTEST'});

export const showAllTransfers = () => ({type: 'ALL_TRANSFERS'});

export const showWithoutTransfers = () => ({type: 'WITHOUT_TRANSFERS'});

export const showOneTransfer = () => ({type: 'ONE_TRANSFER'});

export const showTwoTransfers = () => ({type: 'TWO_TRANSFERS'});

export const showThreeTransfers = () => ({type: 'THREE_TRANSFERS'});

export const ticketsFetchDataSuccess = (tickets) => ({
  type: 'TICKETS_FETCH_DATA_SUCCESS',
  tickets
})

export const ticketsFetchData = () => (dispatch) => {
  aviasalesDBService.getSearchId()
    .then(data => aviasalesDBService.getTickets(data.searchId))
    .then(data => dispatch({
      type: 'TICKETS_FETCH_DATA_SUCCESS',
      tickets: data.body.tickets
    }))
}