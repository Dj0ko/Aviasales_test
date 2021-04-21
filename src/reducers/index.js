import { combineReducers } from 'redux';

import sortReducer from './sort-reducer';
import filterReducer from './filter-reducer';

export default combineReducers({
  sortReducer,
  filterReducer
})