import React from 'react';
import { useHistory } from 'react-router';

function NavBar() {
  // useEffect() => {
  //   //Resgatar o NOME do usuário do localStorage
  // }

  const history = useHistory();
  const handlesClick = (page) => {
    history.push(`/${page}`);
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
          NOME DO USUÁRIO
        </li>
        <li>
          <button
            data-testid="customer_products__element-navbar-link-logout"
            type="button"
            // onClick={ () => handlesClick('login') }
          >
            Sair
          </button>
        </li>
      </ul>
    </nav>

  );
}

export default NavBar;
