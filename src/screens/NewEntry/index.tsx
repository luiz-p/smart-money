import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

const NewEntry: React.FC = () => {
  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="GPS" onPress={() => {}} />
        <Button title="Câmera" onPress={() => {}} />
      </View>

      <View>
        <Button title="Adicionar" onPress={() => {}} />
        <Button title="Cancelar" onPress={() => {}} />
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
