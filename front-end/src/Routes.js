import { Route, Switch } from 'react-router-dom';
import CustomersOrders from './pages/CustomersOrders';

function Routes() {
  return (
    <Switch>
      <Route exact path="/customers/orders" component={ CustomersOrders } />
    </Switch>
  );
}

export default Routes;
