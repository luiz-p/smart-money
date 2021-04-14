import {Alert} from 'react-native';
import Realm from 'realm';
import {v4 as uuid} from 'uuid';
import ICategory from '../interfaces/Category';

import IEntry from '../interfaces/Entry';
import {getRealm} from './Realm';

interface IValue {
  amount: number;
  category: ICategory;
}

export const getEntries = async () => {
  const realm = await getRealm();

  const entries = realm.objects<IEntry>('Entry');

  return entries;
};

export const saveEntry = async (value: IValue, entry: IEntry) => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: entry.id || uuid(),
        amount: value.amount || entry.amount,
        entryAt: entry.entryAt || String(new Date()),
        category: value.category || entry.category,
        isInit: false,
      };

      realm.create('Entry', data, Realm.UpdateMode.All);
    });
  } catch (error) {
    console.error('saveEntry :: error on save object: ', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados de lançamento.');
  }

  return data;
};

export const deleteEntry = async (entry: IEntry) => {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.delete(entry);
    });
  } catch (error) {
    Alert.alert('Erro ao excluir o lançamento!');
  }
};
