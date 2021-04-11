import {Alert} from 'react-native';
import Realm from 'realm';

import {getRealm} from './Realm';

interface IValue {
  amount: number;
}

export const saveEntry = async (value: IValue) => {
  const realm = await getRealm();
  let data = {};
  const {amount} = value;

  try {
    realm.write(() => {
      data = {
        id: 'ABCDE',
        amount: amount,
        entryAt: new Date(),
        isInit: false,
      };

      realm.create('Entry', data, Realm.UpdateMode.All);
    });

    console.log('saveEntry :: data: ', JSON.stringify(data));
  } catch (error) {
    console.error('saveEntry :: error on save object: ', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados de lançamento.');
  }

  return data;
};