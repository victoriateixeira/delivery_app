import React, { useState } from 'react';
import NavBar from '../components/NavBar';

function Admin() {
  const [userList, setUserList] = useState([]);
  const [newUser, setNewUser] = useState();

  onInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  onRegisterButtonClick = (event) => {
    event.preventDefault();
    setUserList([...userList, newUser]);
    setNewUser('');
  };
  isRegisterButtonDisabled = () => {
    const { sellerName, email, password, role } = newUser;
    const isSellerName = sellerName.length > 11;
    const isEmail = email.includes('@' && '.com');
    const isPassword = password.length > 5;
    const isRole = role === 'P. Vendedora' || role === 'Cliente';

    return isSellerName && isEmail && isPassword && isRole;
  };
  return (
    <>
      <NavBar />

      <div>
        <form>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="sellerName"
              id="name"
              value={ sellerName }
              onChange={ onInputChange }
              data-testid="admin_manage__input-name"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={ email }
              onChange={ onInputChange }
              data-testid="admin_manage__input-email"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              id="password"
              value={ password }
              onChange={ onInputChange }
              data-testid="admin_manage__input-password"
            />
          </label>
          <label htmlFor="role">
            Tipo
            <select
              name="role"
              id="role"
              value={ role }
              onChange={ onInputChange }
              data-testid="admin_manage__select-role"
            >
              <option value="seller" selected>P. Vendedora</option>
              <option value="customer">Cliente</option>
            </select>
          </label>
          <button
            type="submit"
            id="register"
            data-testid="admin_manage__button-register"
            disabled={ !isRegisterButtonDisabled() }
            onClick={ onSaveButtonClick }
          >
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
}
