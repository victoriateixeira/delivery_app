import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AdminContext from '../contexts/AdminContext';

function UserCard({ savedUser, index }) {
  const { removesUser } = useContext(AdminContext);
  return (
    <>
      <td
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
      >
        {savedUser.id}
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-name-${index}` }
      >
        {savedUser.name}
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-email-${index}` }
      >
        {savedUser.email}

      </td>
      <td
        data-testid={ `admin_manage__element-user-table-role-${index}` }
      >
        {savedUser.role}

      </td>
      <td>
        <button
          type="button"
          data-testid={ `admin_manage__element-user-table-remove-${index}` }
          onClick={ () => removesUser(savedUser) }
        >
          Excluir
        </button>
      </td>
    </>
  );
}
UserCard.propTypes = {
  savedUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default UserCard;
