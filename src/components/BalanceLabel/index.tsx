import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../utils/Colors';
import styles from './style';
import useBalance from '../../hooks/useBalance';

const BalanceLabel: React.FC = () => {
  const [balance] = useBalance();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>

      <LinearGradient
        style={styles.panel}
        colors={[Colors.violet, Colors.blue]}>
        <Text style={styles.value}>R$ {balance}</Text>
      </LinearGradient>
    </View>
  );
};

export default BalanceLabel;
