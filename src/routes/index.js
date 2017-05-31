import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Home from '../containers/home';
import Layout from '../containers/layout';
import Login from '../containers/login';
import Regisitered from '../containers/regisitered';


const authCheck = (nextState, replace) => {
  const session = JSON.parse(localStorage.getItem('session'));
  if(!session || !session.auth) {
    replace('/login');
  }
};

export default(
  <Router>
    <Route path="/" component={Layout} onEnter={authCheck}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="login" component={Login} />
    <Route path="regisitered" component={Regisitered} />
  </Router>
);
