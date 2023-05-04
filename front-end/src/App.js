import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route path="/register" component={ Register } exact />
    </Switch>
  );
}

export default App;
