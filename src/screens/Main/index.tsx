import React from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import BalancePanel from '../../components/BalancePanel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';

const Main: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <BalancePanel />

      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />

      <EntrySummary />
      <EntryList />
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
