import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Login from './Login';
import Landing from './Landing';
import SignUp from './SignUp';
import UISample from './common/UISample';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sample">
          <UISample />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
