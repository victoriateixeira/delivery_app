import React from 'react';

function UserCard({ savedUser, index, removesUser }) {
  return (
    <tr key={ savedUser.id }>
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
          onClick={ () => removesUser }
        >
          Excluir
        </button>
      </td>
    </tr>
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
  removesUser: PropTypes.func.isRequired,
};

export default UserCard;
