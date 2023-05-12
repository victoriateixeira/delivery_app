import { Route, Switch, Redirect } from 'react-router-dom';
import CustomersOrders from './pages/CustomersOrders';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomersOrdersDetails from './pages/CustomersOrdersDetails';
import SellerOrders from './pages/SellerOrders';
import AdminPage from './pages/AdminPage';

function Routes() {
  return (
    <Switch>
      <Route path="/" render={ () => <Redirect to="/login" /> } exact />
      <Route path="/login" component={ Login } exact />
      <Route path="/register" component={ Register } exact />
      <Route path="/customers/products" exact />
      <Route path="/customers/orders" component={ CustomersOrders } exact />
      <Route path="/customers/orders/:id" component={ CustomersOrdersDetails } exact />
      <Route path="/seller/orders" component={ SellerOrders } exact />
      <Route path="/admin/manage" component={ AdminPage } exact />
    </Switch>
  );
}

export default Routes;
