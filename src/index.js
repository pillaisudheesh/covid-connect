import createBrowserHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { loginUserSuccess } from './store/actions/authAction';
import App from './App';
import configureStore from './store/configureStore';
import WebFontLoader from 'webfontloader';
import * as serviceWorker from './serviceWorker';

import './index.css';

const history = createBrowserHistory();
const store = configureStore(history);

if (localStorage.getItem('jwt') !== 'undefined') {
  const token = localStorage.getItem('jwt');
  const user = JSON.parse(localStorage.getItem('user'));
  // If we have a token, consider the user to be signed in
  if (token) {
    // we need to update application state
    store.dispatch(loginUserSuccess(user));
  }
}

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons', 'Roboto Condensed:100'],
  },
});


const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

// In development, hot module replacement (HMR) updates the application
// when changes are made, without having to refresh.
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
