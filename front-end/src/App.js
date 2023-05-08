import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Products from './pages/Products';

function App() {
  return (
    <Switch>
      <Route path="/register" component={ Register } exact />
      <Route path="/customer/products" component={ Products } exact />
    </Switch>
  );
}

export default App;
