import { Route, Switch, Redirect } from 'react-router-dom';
import CustomersOrders from './pages/CustomersOrders';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import CustomersOrdersDetails from './pages/CustomersOrdersDetails';
import Admin from './pages/Admin';
import SellerOrders from './pages/SellerOrders';

function Routes() {
  return (
    <Switch>
      <Route path="/" render={ () => <Redirect to="/login" /> } exact />
      <Route path="/login" component={ Login } exact />
      <Route path="/register" component={ Register } exact />
      <Route path="/admin/manage" component={ Admin } exact />
      <Route path="/seller/orders" component={ SellerOrders } exact />
      <Route path="/customer/products" component={ Products } exact />
      <Route path="/customer/checkout" component={ Checkout } exact />
      <Route path="/customer/orders" component={ CustomersOrders } exact />
      <Route path="/customers/orders/:id" component={ CustomersOrdersDetails } exact />
    </Switch>
  );
}

export default Routes;
