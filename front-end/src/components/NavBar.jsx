import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { remove } from '../services/localStorage';
import ProductContext from '../contexts/ProductContext';
import '../styles/NavBarStyle.css';

function NavBar() {
  // useEffect() => {
  //   //Resgatar o NOME do usuário do localStorage
  // }
  const { user, setUser } = useContext(UserContext);
  const { setCart } = useContext(ProductContext);
  const history = useHistory();
  const handlesClick = (page) => {
    history.push(`/${page}`);
  };

  const logout = () => {
    remove('user');
    setUser('');
    remove('user');
    remove('cart');
    setCart([]);
    history.push('/login');
  };

  const activeButton = 'button-active';
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav>
      {
        user && (
          <ul className="nav-list">
            <div className="left-buttons">
              {
                user.role === 'customer'
            && (
              <li>
                <button
                  data-testid="customer_products__element-navbar-link-products"
                  type="button"
                  onClick={ () => handlesClick('customer/products') }
                  className={ `button-margin ${currentPath === '/customer/products'
                    ? activeButton : ''}` }
                >
                  Produtos
                </button>
              </li>
            )
              }
              {
                (user.role === 'customer' || user.role === 'seller')
            && (
              <li>
                <button
                  data-testid="customer_products__element-navbar-link-orders"
                  type="button"
                  onClick={ () => handlesClick(`${user.role}/orders`) }
                  className={ `button-margin ${currentPath === `/${user.role}/orders`
                    ? activeButton : ''}` }
                >
                  Meus Pedidos
                </button>
              </li>
            )
              }
              {
                user.role === 'administrator'
              && (
                <li>
                  <button
                    data-testid="customer_products__element-navbar-link-orders"
                    type="button"
                    onClick={ () => handlesClick('admin/manage') }
                    className={ `button-margin ${currentPath === '/admin/manage'
                      ? activeButton : ''}` }
                  >
                    Gerenciar usuários
                  </button>
                </li>
              )
              }
            </div>
            <div className="right-items">
              <li
                data-testid="customer_products__element-navbar-user-full-name"
                className="username"
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
                  className="button-margin-logout"
                >
                  Sair
                </button>
              </li>
            </div>
          </ul>
        )
      }
    </nav>
  );
}

export default NavBar;
