import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import OrdersDetails from './pages/OrdersDetails';
import AdminPage from './pages/AdminPage';
import Orders from './pages/Orders';

function Routes() {
  return (
    <Switch>
      <Route path="/" render={ () => <Redirect to="/login" /> } exact />
      <Route path="/login" component={ Login } exact />
      <Route path="/register" component={ Register } exact />
      <Route path="/customer/products" exact />
      <Route path="/customer/orders" component={ Orders } exact />
      <Route path="/customer/orders/:id" component={ OrdersDetails } exact />
      <Route path="/seller/orders" component={ Orders } exact />
      <Route path="/seller/orders/:id" component={ OrdersDetails } exact />
      <Route path="/admin/manage" component={ AdminPage } exact />
    </Switch>
  );
}

export default Routes;
