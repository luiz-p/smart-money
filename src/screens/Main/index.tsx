import React from 'react';
import {SafeAreaView, View} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import styles from './style';

const Main: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.balancePanel}>
        <BalancePanel />
      </View>

      <EntrySummary />

      <View style={styles.entryList}>
        <EntryList />
      </View>
    </SafeAreaView>
  );
};

export default Main;
