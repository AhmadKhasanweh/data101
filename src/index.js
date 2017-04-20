import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';

ReactDOM.render(
  <Router>
    <Route exact path='*' component={ Main }/>
  </Router>,
  document.getElementById('root')
);
