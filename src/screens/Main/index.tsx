import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';

const Main: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BalancePanel />
      <EntrySummary />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  label: {
    fontSize: 20,
  },
});

export default Main;
