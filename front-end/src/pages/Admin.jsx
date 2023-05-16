import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import AdminContext from '../contexts/AdminContext';
import UserCard from '../components/UserCard';

export default function Admin() {
  const { userList, setUserList } = useContext(AdminContext);
  const [newUser, setNewUser] = useState();

  onInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  onRegisterButtonClick = (event) => {
    event.preventDefault();
    setUserList([...userList, newUser]);
    setNewUser('');
    // adicionar lógica para fazer a requisição POST
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
        <h1>Cadastrar novo usuário</h1>
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
      <div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Tipo</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {savedUsers.length > 0
            && savedUsers.map((user, index) => (
              <tr key={ user.id }>
                <UserCard user={ user } index={ index } removesUser={ removesUser } />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
