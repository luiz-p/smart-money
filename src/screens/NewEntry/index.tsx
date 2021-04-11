import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';

const NewEntry: React.FC = () => {
  const navigation = useNavigation();

  const currentBalance = 2064.35;

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="GPS" onPress={() => {}} />
        <Button title="Câmera" onPress={() => {}} />
      </View>

      <View>
        <Button title="Adicionar" onPress={() => {}} />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;
