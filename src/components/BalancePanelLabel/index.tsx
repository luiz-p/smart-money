import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

interface BalancePanelLabelProps {
  currentBalance: number;
}

const BalancePanelLabel: React.FC<BalancePanelLabelProps> = ({
  currentBalance,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>R$ {currentBalance}</Text>
    </View>
  );
};

export default BalancePanelLabel;
