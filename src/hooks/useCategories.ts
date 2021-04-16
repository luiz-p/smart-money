import {useEffect, useState} from 'react';
import ICategory from '../interfaces/Category';

import {
  getDebitCategories,
  getCreditCategories,
  getAllCategories,
  // getInitCategories,
} from '../services/Categories';

const useCategories = () => {
  const [debitCategories, setDebitCategories] = useState<
    Realm.Results<ICategory & Realm.Object>
  >();
  const [creditCategories, setCreditCategories] = useState<
    Realm.Results<ICategory & Realm.Object>
  >();
  const [allCategories, setAllCategories] = useState<
    Realm.Results<ICategory & Realm.Object>
  >();
  // const [initCategories, setInitCategories] = useState<
  //   Realm.Results<ICategory & Realm.Object>
  // >();

  useEffect(() => {
    const loadDebitCategories = async () => {
      const data = await getDebitCategories();
      setDebitCategories(data);
    };

    const loadCreditCategories = async () => {
      const data = await getCreditCategories();
      setCreditCategories(data);
    };

    const loadAllCategories = async () => {
      const data = await getAllCategories();
      setAllCategories(data);
    };

    // const loadInitCategory = async () => {
    //   const data = await getInitCategories();
    //   setInitCategories(data);
    // };

    loadDebitCategories();
    loadCreditCategories();
    loadAllCategories();
    // loadInitCategory();
  }, []);

  return [debitCategories, creditCategories, allCategories];
};

export default useCategories;
