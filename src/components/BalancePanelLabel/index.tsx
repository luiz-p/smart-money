import React from 'react';
import {Text, View} from 'react-native';

import useBalance from '../../hooks/useBalance';
import styles from './style';

const BalancePanelLabel: React.FC = () => {
  const [balance] = useBalance();

  console.log('BALANCE :: ', balance);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>R$ {balance}</Text>
    </View>
  );
};

export default BalancePanelLabel;
