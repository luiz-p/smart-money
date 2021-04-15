import React, {useCallback, useEffect, useState} from 'react';
import {Button, LogBox, View} from 'react-native';
import {v4 as uuid} from 'uuid';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import BalanceLabel from '../../components/BalanceLabel';
import NewEntryCategoryPicker from '../../components/NewEntryCategoryPicker';
import NewEntryDatePicker from '../../components/NewEntryDatePicker';
import NewEntryDeleteAction from '../../components/NewEntryDeleteAction';
import NewEntryInput from '../../components/NewEntryInput';
import ICategory from '../../interfaces/Category';
import IEntry from '../../interfaces/Entry';
import {deleteEntry, saveEntry} from '../../services/Entries';
import styles from './style';

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
    id: null,
    amount: 0,
    category: {id: uuid(), name: 'Selecione'},
    entryAt: String(new Date()),
  });

  const [debit, setDebit] = useState<number>(-1);
  const [amount, setAmount] = useState<number>(entry.amount);
  const [category, setCategory] = useState<ICategory>({
    id: uuid(),
    name: 'Selecione',
  });
  const [entryAt, setEntryAt] = useState(new Date());

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
      amount,
      category: category ? category : {id: uuid(), name: 'outros'},
      entryAt,
    };

    saveEntry(data, entry);

    goBack();
  }, [amount, category, entry, entryAt, goBack]);

  const handleDelete = useCallback(() => {
    deleteEntry(entry);
    goBack();
  }, [entry, goBack]);

  useEffect(() => {
    if (route?.params?.entry) {
      setEntry(route.params.entry);
      setAmount(route.params.entry.amount);
      setDebit(route.params.entry.amount <= 0 ? -1 : 1);
      setEntryAt(new Date(route.params.entry.entryAt));
      if (route.params.entry?.category) {
        setCategory(route.params.entry.category);
      }
    }
  }, [route]);

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View style={styles.formContainer}>
        <NewEntryInput
          value={amount}
          onChangeDebit={setDebit}
          onChangeText={setAmount}
        />
        <NewEntryCategoryPicker
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
        />

        <View style={styles.formActionContainer}>
          <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />
          <NewEntryDeleteAction onOkPress={handleDelete} entry={entry} />
        </View>
      </View>

      <View>
        <Button
          title="Adicionar"
          onPress={() => {
            isValid() && handleSave();
          }}
        />
        <Button title="Cancelar" onPress={goBack} />
      </View>
    </View>
  );
};

export default NewEntry;
