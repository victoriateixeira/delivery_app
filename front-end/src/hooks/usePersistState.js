import { useState, useEffect } from 'react';
import { read, save } from '../services/localStorage';

export default (storageKey, initialState) => {
  const [state, setInternalState] = useState(initialState);
  useEffect(() => {
    const storageInBrowser = read(storageKey);

    if (storageInBrowser) {
      setInternalState(storageInBrowser);
    }
  }, []);
  const setState = (newState) => {
    save(storageKey, newState);
    setInternalState(newState);
  };

  return [state, setState];
};
