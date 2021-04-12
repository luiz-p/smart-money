import React, {useCallback, useEffect, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {v4 as uuid} from 'uuid';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';
import IEntry from '../../interfaces/Entry';
import {deleteEntry, saveEntry} from '../../services/Entries';

type ParamList = {
  Entry: ParamListItem;
};

interface ParamListItem {
  entry: IEntry;
}

const NewEntry: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'Entry'>>();

  const currentBalance = 2064.35;

  const [entry, setEntry] = useState<IEntry>({
    id: uuid(),
    amount: 0,
    entryAt: String(new Date()),
  });
  const [amount, setAmount] = useState<string>('0');

  const isValid = useCallback(() => {
    if (parseFloat(amount) !== 0) {
      return true;
    } else {
      return false;
    }
  }, [amount]);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSave = useCallback(() => {
    const data = {
      amount: parseFloat(amount),
    };

    saveEntry(data, entry);

    goBack();
  }, [amount, entry, goBack]);

  const handleDelete = useCallback(() => {
    deleteEntry(entry);
    goBack();
  }, [entry, goBack]);

  useEffect(() => {
    if (route?.params?.entry) {
      setEntry(route.params.entry);
      setAmount(`${route.params.entry.amount}`);
    }
  }, [route]);

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
        <Button
          title="Adicionar"
          onPress={() => {
            isValid() && handleSave();
          }}
        />
        <Button title="Excluir" onPress={handleDelete} />
        <Button title="Cancelar" onPress={goBack} />
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
