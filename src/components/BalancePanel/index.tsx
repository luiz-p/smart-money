import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import BalancePanelChart from '../BalancePanelChart';
import BalancePanelLabel from '../BalancePanelLabel';

interface BalancePanelProps {
  currentBalance: number;
}

const BalancePanel: React.FC<BalancePanelProps> = ({currentBalance}) => {
  const navigation = useNavigation();

  return (
    <View>
      <BalancePanelLabel currentBalance={currentBalance} />
      <BalancePanelChart />

      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default BalancePanel;
