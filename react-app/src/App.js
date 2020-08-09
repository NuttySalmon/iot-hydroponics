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
      <ul>
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to="/sample/">SASS Sample</Link>
        </li>
      </ul>
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
