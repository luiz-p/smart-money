import {Alert} from 'react-native';
import Realm from 'realm';
import {v4 as uuid} from 'uuid';

import ICategory from '../interfaces/Category';
import IEntry from '../interfaces/Entry';
import moment from '../Vendors/moment';
import {getRealm} from './Realm';

interface IValue {
  amount: number;
  category: ICategory;
  entryAt: Date;
}

export const getEntries = async (days: number, category: ICategory) => {
  let realm = await getRealm();

  let _realm = realm.objects<IEntry>('Entry');

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate();

    _realm = _realm.filtered('entryAt >= $0', date);
  }

  if (category && category.id) {
    _realm = _realm.filtered('category == $0', category);
  }

  const entries = _realm.sorted('entryAt', true);

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
        entryAt: value.entryAt || entry.entryAt,
        description: value.category.name,
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
