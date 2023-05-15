import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';
import usePersistState from '../hooks/usePersistState';

export default function UserProvider({ children }) {
  // const [user, setUser] = useState({});
  const [user, setUser] = usePersistState('user', []);
  const value = useMemo(() => ({
    user,
    setUser,
  }), [user, setUser]);

  return (
    <UserContext.Provider value={ value }>
      { children }
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
