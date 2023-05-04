import CustomersOrders from "./pages/CustomersOrders";
import { Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <Switch>
      <Route exact path="/customers/orders" component={ <CustomersOrders/> } />
    </Switch>
  );
}

export default Routes;