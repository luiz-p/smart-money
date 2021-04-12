import React from 'react';
import {SafeAreaView} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import styles from './style';

const Main: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BalancePanel />

      <EntrySummary />
      <EntryList />
    </SafeAreaView>
  );
};

export default Main;
