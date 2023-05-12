import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import UserContext from '../contexts/UserContext';
import { remove } from '../services/localStorage';

function NavBar() {
  // useEffect() => {
  //   //Resgatar o NOME do usuário do localStorage
  // }
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const history = useHistory();
  const handlesClick = (page) => {
    history.push(`/${page}`);
  };

  const logout = () => {
    remove('user');
    setUser('');
    remove('user');
    history.push('/login');
  };
  return (

    <nav>
      <ul>
        <li>
          <button
            data-testid="customer_products__element-navbar-link-products"
            type="button"
            onClick={ () => handlesClick('customer/products') }
          >
            Produtos
          </button>
        </li>
        <li>
          <button
            data-testid="customer_products__element-navbar-link-orders"
            type="button"
            onClick={ () => handlesClick('customer/orders') }
          >
            Meus Pedidos
          </button>
        </li>
        <li
          data-testid="customer_products__element-navbar-user-full-name"
          // type="button"
          // onClick={ () => handlesClick('customer/products') }
        >
          {user.name}
        </li>
        <li>
          <button
            data-testid="customer_products__element-navbar-link-logout"
            type="button"
            onClick={ () => logout() }
          >
            Sair
          </button>
        </li>
      </ul>
    </nav>

  );
}

export default NavBar;
