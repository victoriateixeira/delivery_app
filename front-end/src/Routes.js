import { Route, Switch, Redirect } from 'react-router-dom';
import CustomersOrders from './pages/CustomersOrders';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomersOrdersDetails from './pages/CustomersOrdersDetails';
import Checkout from './pages/Checkout';

function Routes() {
  return (
    <Switch>
      <Route path="/" render={ () => <Redirect to="/login" /> } exact />
      <Route path="/login" component={ Login } exact />
      <Route path="/register" component={ Register } exact />
      <Route path="/customer/products" exact />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route path="/customers/orders" component={ CustomersOrders } exact />
      <Route path="/customers/orders/:id" component={ CustomersOrdersDetails } exact />
    </Switch>
  );
}

export default Routes;
