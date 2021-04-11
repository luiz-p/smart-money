import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: '#000',
  },
  value: {
    fontSize: 22,
    color: '#000',
  },
});

export default BalancePanelLabel;
