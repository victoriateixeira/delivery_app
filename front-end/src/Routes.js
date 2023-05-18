import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import SellerOrders from './pages/SellerOrders';
import OrdersDetails from './pages/OrdersDetails';
import Orders from './pages/Orders';

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
      <Route path="/customer/orders" component={ Orders } exact />
      <Route path="/customer/orders/:id" component={ OrdersDetails } exact />
      <Route path="/seller/orders" component={ Orders } exact />
      <Route path="/seller/orders/:id" component={ OrdersDetails } exact />
    </Switch>
  );
}

export default Routes;
