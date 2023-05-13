import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DeliveryContext from '../contexts/DeliveryContext';
import validationInputs from '../utils/validationInputs';
import { postAPI } from '../services/deliveryAPI';
import UserContext from '../contexts/UserContext';
// import { save } from '../services/localStorage';
import '../styles/LoginStyle.css';

function Login() {
  const { setUser } = useContext(UserContext);
  const {
    isDisabled,
    setIsDisabled,
    email,
    setEmail,
    password,
    setPassword,
    invalidLogin,
    setInvalidLogin,
    user,
  } = useContext(DeliveryContext);

  const history = useHistory();

  const defineRoute = (role) => {
    switch (role) {
    case 'customer':
      history.push('/customer/orders');
      break;
    case 'seller':
      history.push('/seller/orders');
      break;
    case 'administrator':
      history.push('/admin/manage');
      break;
    default:
      history.push('/customer/products');
    }
  };

  const UserLogin = async () => {
    const u = {
      email,
      password,
    };
    try {
      const setLogin = await postAPI('/user/login', u);
      const { message } = setLogin;
      setUser(message);
      defineRoute(message.role);
    } catch (err) {
      console.log('user:', user, err);
      setInvalidLogin(true);
    }
  };

  useEffect(() => {
    const validationGeneral = validationInputs(email, password);

    if (validationGeneral) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password, isDisabled, setIsDisabled]);

  // const handleSubmit = () => localStorage.setItem('user', JSON.stringify({ email }));

  return (
    <main className="login-container">
      <div className="logo-container">
        {/* <img alt="app-logo" /> */}
      </div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">
          <p>Email</p>
          <input
            type="text"
            name="email"
            placeholder="email@trybeer.com.br"
            data-testid="common_login__input-email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          <p>Senha</p>
          <input
            type="password"
            name="password"
            placeholder="******"
            data-testid="common_login__input-password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <Link to="/">
          <button
            type="button"
            data-testid="common_login__button-login"
            className="button-primary"
            disabled={ isDisabled }
            onClick={ UserLogin }
          >
            Login
          </button>
        </Link>
        <Link to="/register">
          <button
            type="button"
            data-testid="common_login__button-register"
            className="button-tertiary"
          >
            Ainda não tenho conta
          </button>
        </Link>
      </form>

      {invalidLogin && (
        <div data-testid="common_login__element-invalid-email">
          Login Inválido
        </div>
      )}
    </main>
  );
}

export default Login;
