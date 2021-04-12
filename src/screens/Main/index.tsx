import React from 'react';
import {SafeAreaView} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';
import styles from './style';

const Main: React.FC = () => {
  const currentBalance = 2064.35;
  const entriesGrouped = [
    {key: '1', description: 'Padaria Asa Branca', amount: 10},
    {key: '2', description: 'Supermercado Isadora', amount: 190},
    {key: '3', description: 'Posto Ipiranga', amount: 290},
    {key: '4', description: 'Teste', amount: 10},
    {key: '5', description: 'Teste mais caro', amount: 1990},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />

      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList />
    </SafeAreaView>
  );
};

export default Main;
