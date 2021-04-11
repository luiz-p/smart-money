import React, {useCallback, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';
import {saveEntry} from '../../services/Entries';

const NewEntry: React.FC = () => {
  const navigation = useNavigation();

  const currentBalance = 2064.35;

  const [amount, setAmount] = useState('0.00');

  const handleSave = useCallback(() => {
    const value = {
      amount: parseFloat(amount),
    };

    console.log('NewEntry :: save: ', value);
    saveEntry(value);
  }, [amount]);

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={text => setAmount(text)}
        />
        <TextInput style={styles.input} />
        <Button title="GPS" onPress={() => {}} />
        <Button title="Câmera" onPress={() => {}} />
      </View>

      <View>
        <Button title="Adicionar" onPress={handleSave} />
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
