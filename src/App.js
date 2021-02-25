import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Auth from './components/Auth'
import Reg from './components/Reg'

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/user">
            <Auth/>
          </Route>
          <Route path="/">
            <Reg />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
