import IEntry from '../interfaces/Entry';
import {getRealm} from './Realm';

export const getBalance = async () => {
  try {
    const realm = await getRealm();

    let entries = realm.objects<IEntry>('Entry');

    let balance = 0;
    entries.forEach(entry => {
      balance += entry.amount;
    });

    // TODO: sum doesn't work
    return balance;
    // return entries.sum('amount');
  } catch (error) {
    console.log('Error:: ', error);
  }
};
