import React, {useCallback, useEffect, useState} from 'react';
import {Button, LogBox, TextInput, View} from 'react-native';
import {v4 as uuid} from 'uuid';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from '../../components/NewEntryInput';
import IEntry from '../../interfaces/Entry';
import {deleteEntry, saveEntry} from '../../services/Entries';
import styles from './style';
import NewEntryCategoryPicker from '../../components/NewEntryCategoryPicker';

// TODO: route.params.entry is Non-serializable value but RealmDB requires a date value
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

type ParamList = {
  Entry: ParamListItem;
};

interface ParamListItem {
  entry: IEntry;
}

const NewEntry: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'Entry'>>();

  const [entry, setEntry] = useState<IEntry>({
    id: uuid(),
    amount: 0,
    entryAt: String(new Date()),
  });
  const [amount, setAmount] = useState<number>(0);

  const isValid = useCallback(() => {
    if (amount !== 0) {
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
      amount: amount,
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
      setAmount(route.params.entry.amount);
    }
  }, [route]);

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <NewEntryInput value={amount} onChangeText={setAmount} />
        <NewEntryCategoryPicker />

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

export default NewEntry;
