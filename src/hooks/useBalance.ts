import {useEffect, useState} from 'react';

import {getBalance} from '../services/Balance';

const useBalance = () => {
  const [balance, setBalance] = useState<number | undefined>(0);

  useEffect(() => {
    async function loadBalance() {
      const value = await getBalance();
      setBalance(value);
    }

    loadBalance();
  }, []);

  return [balance];
};

export default useBalance;
