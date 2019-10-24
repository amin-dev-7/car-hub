import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from '../../pages/Index';

function App() {
  return (
    <Router>
      <div>
        {/* ROUTES */}

        <Route path="/" exact component={Index} />
      </div>
    </Router>
  );
}

export default App;
