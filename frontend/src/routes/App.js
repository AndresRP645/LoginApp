import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../views/Login';
import Menu from '../views/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <div className="container p-4">
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={Menu} />
      </div>
    </Router>
  );

}