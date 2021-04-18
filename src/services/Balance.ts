import IEntry from '../interfaces/Entry';
import moment from '../Vendors/moment';
import {getRealm} from './Realm';
import _ from 'lodash';

export const getBalance = async (untilDays = 0) => {
  try {
    const realm = await getRealm();

    let entries = realm.objects<IEntry>('Entry');

    if (untilDays > 0) {
      const date = moment().subtract(untilDays, 'days').toDate();

      entries = entries.filtered('entryAt < $0', date);
    }

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

export const getBalanceSumByDate = async (days: number) => {
  const realm = await getRealm();

  const startBalance = await getBalance(days);

  let entries: any = realm.objects<IEntry>('Entry');

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate();

    entries = entries.filtered('entryAt >= $0', date);
  }

  entries = entries.sorted('entryAt');

  entries = _(entries)
    .groupBy(({entryAt}) => moment(entryAt).format('YYYYMMDD'))
    .map(entry => _.sumBy(entry, 'amount'))
    .map((amount, index, collection) => {
      if (typeof startBalance !== 'undefined') {
        return (
          (index === 0 ? startBalance : 0) +
          _.sum(_.slice(collection, 0, index)) +
          amount
        );
      }
    });

  console.log(JSON.stringify(entries));

  return entries;
};
