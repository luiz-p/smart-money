import React from 'react';
import {StyleSheet, View} from 'react-native';

import BalancePanelChart from '../BalancePanelChart';
import BalancePanelLabel from '../BalancePanelLabel';

interface BalancePanelProps {
  currentBalance: number;
}

const BalancePanel: React.FC<BalancePanelProps> = ({currentBalance}) => {
  return (
    <View>
      <BalancePanelLabel currentBalance={currentBalance} />
      <BalancePanelChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default BalancePanel;
