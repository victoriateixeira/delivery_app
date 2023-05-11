import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DeliveryContext from '../contexts/DeliveryContext';
import validationInputs from '../utils/validationInputs';
import { postAPI } from '../services/deliveryAPI';
import UserContext from '../contexts/UserContext';
// import { save } from '../services/localStorage';

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

  const UserLogin = async () => {
    const u = {
      email,
      password,
    };
    try {
      const setLogin = await postAPI('/user/login', u);
      setUser(setLogin.message);
      history.push('/customers/orders');
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
        <h1>NOME DO APP</h1>
      </div>
      <form>
        <h1>Login</h1>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            placeholder="email@trybeer.com.br"
            data-testid="common_login__input-email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <h1>Senha</h1>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="******"
            data-testid="common_login__input-password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
      </form>
      <Link to="/">
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ isDisabled }
          onClick={ UserLogin }
        >
          LOGIN
        </button>
      </Link>
      <Link to="/register">
        <button type="button" data-testid="common_login__button-register">
          Ainda não tenho conta
        </button>
      </Link>

      {invalidLogin && (
        <div data-testid="common_login__element-invalid-email">
          Login Inválido
        </div>
      )}
    </main>
  );
}

export default Login;
