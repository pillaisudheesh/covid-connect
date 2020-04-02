import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';


import authReducer from './reducers/authReducer';
import dashboardReducer from './reducers/dashboardReducer';

const root = (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  dashboard: dashboardReducer,

});

export default root;