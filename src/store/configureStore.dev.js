import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'

import root from './rootReducer';

export const history = createBrowserHistory()

export default function configureStore(history) {
  return createStore(root(history), applyMiddleware(thunk, routerMiddleware(history)));
}