import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import BalancePanelChart from '../BalancePanelChart';
import BalancePanelLabel from '../BalancePanelLabel';

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
  container: {},
});

export default BalancePanel;
