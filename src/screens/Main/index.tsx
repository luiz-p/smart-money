import React, {useCallback} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import BalancePanel from '../../components/BalancePanel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';

import {saveEntry} from '../../services/Entries';

const Main: React.FC = () => {
  const navigation = useNavigation();

  const currentBalance = 2064.35;
  const entriesGrouped = [
    {key: '1', description: 'Padaria Asa Branca', amount: 10},
    {key: '2', description: 'Supermercado Isadora', amount: 190},
    {key: '3', description: 'Posto Ipiranga', amount: 290},
    {key: '4', description: 'Teste', amount: 10},
    {key: '5', description: 'Teste mais caro', amount: 1990},
  ];
  const entries = [
    {key: '1', description: 'Padaria Asa Branca', amount: 10},
    {key: '2', description: 'Supermercado Isadora', amount: 190},
    {key: '3', description: 'Posto Ipiranga', amount: 290},
  ];

  const handleSave = useCallback(() => {
    saveEntry();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />

      <Button
        title="Adicionar"
        // onPress={() => navigation.navigate('NewEntry')}
        onPress={handleSave}
      />

      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
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
