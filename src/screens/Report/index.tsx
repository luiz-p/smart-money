import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {Picker} from '@react-native-community/picker';

import BalanceLabel from '../../components/BalanceLabel';
import EntryList from '../../components/EntryList';
import EntrySummary from '../../components/EntrySummary';

const Report: React.FC = () => {
  return (
    <View>
      <BalanceLabel />

      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" value={''} />
        </Picker>

        <Picker>
          <Picker.Item label="Últimos 7 dias" value={''} />
        </Picker>
      </View>

      <EntrySummary />
      <EntryList />

      <View>
        <Button title="Salvar" onPress={() => {}} />
        <Button title="Fechar" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Report;
