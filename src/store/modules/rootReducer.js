import { combineReducers } from 'redux';

import actionsReducer from './reducer';

export default combineReducers({
  example: actionsReducer,
});