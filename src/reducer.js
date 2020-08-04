import { combineReducers } from 'redux';
import message from './reducers/message';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  message,
  router: routerReducer
});
