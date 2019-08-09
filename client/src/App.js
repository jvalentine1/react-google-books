/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from './components/nav';
import Home from './components/pages/home/container';
import Saved from './components/pages/saved/container';



function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;
