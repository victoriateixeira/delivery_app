import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { Switch, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Switch>
      <Route path="/customer/checkout" component={ Checkout } exact />
    </Switch>
  );
}

export default App;
