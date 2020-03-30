import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';


import authReducer from './reducers/authReducer';

const root = (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer,

});

export default root;