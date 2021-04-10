import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import BalancePanelLabel from '../BalancePanelLabel';
import BalancePanelChart from '../BalancePanelChart';

const BalancePanel: React.FC = () => {
  return (
    <View>
      <BalancePanelLabel />
      <BalancePanelChart />
      <Button onPress={() => {}} title="Adicionar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BalancePanel;
