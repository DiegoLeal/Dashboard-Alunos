import { combineReducers } from 'redux';

import actionsReducer from './reducer';

export default combineReducers({
   actions: actionsReducer,
});