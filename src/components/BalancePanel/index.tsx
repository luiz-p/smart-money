import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import BalancePanelChart from '../BalancePanelChart';
import BalancePanelLabel from '../BalancePanelLabel';

const BalancePanel: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <BalancePanelLabel />
      <BalancePanelChart />
      <Button
        onPress={() => navigation.navigate('NewEntry')}
        title="Adicionar"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default BalancePanel;
