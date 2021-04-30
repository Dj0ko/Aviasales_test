import { combineReducers } from 'redux';

import sortReducer from './sort-reducer';
import filterReducer from './filter-reducer';
import ticketsReducer from './tickets-reducer';
import loadingReducer from './loading-reducer';

export default combineReducers({
  sortReducer,
  filterReducer,
  ticketsReducer,
  loadingReducer
})