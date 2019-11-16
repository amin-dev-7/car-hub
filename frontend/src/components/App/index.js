import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from '../../pages/Index';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp'
import AddCar from '../../pages/AddCar';
import CarPage from '../../pages/CarPage';
import CarForSalePage from '../../pages/CarForSalePage'
import UpdateCarPage from '../../pages/UpdateCarPage';

const NoPage = () => {
  return (
    <h2>404 - Not found</h2>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        {/* routes */}

        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/login" exact component={Login} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/add-car" exact component={AddCar} />
          <Route path="/car-card" exact component={CarPage} />
          <Route path={"/car-card/:carId"} exact component={UpdateCarPage} />
          <Route path="/car-for-sale" exact component={CarForSalePage} />
          <Route component={NoPage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
