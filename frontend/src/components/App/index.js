import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from '../../pages/Index';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp'

function App() {
  return (
    <Router>
      <div>
        {/* Routes */}

        <Route path="/" exact component={Index} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />

      </div>
    </Router>
  );
}

export default App;
