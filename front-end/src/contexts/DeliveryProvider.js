import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './DeliveryContext';
import usePersistState from '../hooks/usePersistState';

export default function DeliveryProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [user, setUser] = usePersistState('user', []);

  const value = useMemo(() => ({
    user,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
    isDisabled,
    setIsDisabled,
    invalidLogin,
    setInvalidLogin,
  }), [email, isDisabled, password, invalidLogin, user, setUser]);

  return (
    <DeliveryContext.Provider value={ value }>
      { children }
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
