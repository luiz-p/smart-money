import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../utils/Colors';
import styles from './style';

const BalanceLabel: React.FC = () => {
  const currentBalance = 2064.35;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>

      <LinearGradient
        style={styles.panel}
        colors={[Colors.violet, Colors.blue]}>
        <Text style={styles.value}>R$ {currentBalance}</Text>
      </LinearGradient>
    </View>
  );
};

export default BalanceLabel;
