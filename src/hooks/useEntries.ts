import {useEffect, useState} from 'react';

import ICategory from '../interfaces/Category';
import IEntry from '../interfaces/Entry';
import {deleteEntry, getEntries, saveEntry} from '../services/Entries';

const useEntries = (days = 7, category: ICategory) => {
  const [entries, setEntries] = useState<
    Realm.Results<IEntry & Realm.Object> | []
  >([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries(days, category);
      setEntries(data);
    }

    loadEntries();
  }, [days, category]);

  return [entries, saveEntry, deleteEntry];
};

export default useEntries;
