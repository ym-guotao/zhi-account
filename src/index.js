import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes';
import configureStore from './store';
import {restoreSessionFromLocalStorage } from './actions/api';


// start app
const store = configureStore();

// get session back
store.dispatch(restoreSessionFromLocalStorage());

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>, document.getElementById('root')
);
