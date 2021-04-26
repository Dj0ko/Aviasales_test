import { combineReducers } from 'redux';

import sortReducer from './sort-reducer';
import filterReducer from './filter-reducer';
import ticketsReducer from './tickets-reducer';

export default combineReducers({
  sortReducer,
  filterReducer,
  ticketsReducer
})