import React from 'react';
import {StyleSheet, View} from 'react-native';

import BalancePanelChart from '../BalancePanelChart';
import BalancePanelLabel from '../BalancePanelLabel';

const BalancePanel: React.FC = () => {
  return (
    <View>
      <BalancePanelLabel />
      <BalancePanelChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default BalancePanel;
