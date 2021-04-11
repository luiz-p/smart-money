import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface BalanceLabelProps {
  currentBalance: number;
}

const BalanceLabel: React.FC<BalanceLabelProps> = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>R$ {currentBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 22,
  },
});

export default BalanceLabel;
