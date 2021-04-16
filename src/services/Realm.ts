import Realm from 'realm';

import {getDefaultCategories} from './Categories';

import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';
import ICategory from '../interfaces/Category';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 10,
  });

  // dropDB(realm);
  initDB(realm);

  return realm;
};

export const initDB = (realm: Realm) => {
  const categoriesLength = realm.objects<ICategory>('Category').length;
  console.log(`initDB :: categories length: ${categoriesLength}`);

  if (categoriesLength === 0) {
    const categories = getDefaultCategories();

    console.log('initDB :: initing db...');

    try {
      realm.write(() => {
        categories.forEach(category => {
          console.log(
            `initDB :: creating category: ${JSON.stringify(category)}`,
          );

          realm.create('Category', category, Realm.UpdateMode.All);
        });
      });
    } catch (error) {}
  } else {
    console.log('initDB :: categories already existing... Skypping.');
  }
};

export const dropDB = (realm: Realm) => {
  console.log('dropDB :: dropping db...');
  realm.write(() => {
    realm.deleteAll();
  });
};
