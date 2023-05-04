import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
// import Routes from './Routes';
import { Route, Switch } from 'react-router-dom';
import CustomersOrders from './pages/CustomersOrders';

function App() {
  return (
    <Switch>
      <Route path="/customers/orders" component={ CustomersOrders } exact />
    </Switch>
  );
}

export default App;
