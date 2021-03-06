import {v4 as uuid} from 'uuid';
import ICategory from '../interfaces/Category';

import {getRealm} from './Realm';

export const getDefaultCategories = () => {
  return [
    {
      id: uuid(),
      name: 'Alimentação',
      color: '#1abc9c',
      isDebit: true,
      order: 0,
    },
    {
      id: uuid(),
      name: 'Restaurantes e Bares',
      color: '#2ecc71',
      isDebit: true,
      order: 1,
    },
    {
      id: uuid(),
      name: 'Casa',
      color: '#3498db',
      isDebit: true,
      order: 2,
    },
    {
      id: uuid(),
      name: 'Compras',
      color: '#9b59b6',
      isDebit: true,
      order: 3,
    },
    {
      id: uuid(),
      name: 'Cuidados Pessoais',
      color: '#f1c40f',
      isDebit: true,
      order: 4,
    },
    {
      id: uuid(),
      name: 'Dívidas e Empréstimos',
      color: '#f39c12',
      isDebit: true,
      order: 5,
    },
    {
      id: uuid(),
      name: 'Educação',
      color: '#e67e22',
      isDebit: true,
      order: 6,
    },
    {
      id: uuid(),
      name: 'Família e Filhos',
      color: '#d35400',
      isDebit: true,
      order: 7,
    },
    {
      id: uuid(),
      name: 'Impostos e Taxas',
      color: '#e74c3c',
      isDebit: true,
      order: 8,
    },
    {
      id: uuid(),
      name: 'Investimentos',
      color: '#c0392b',
      isDebit: true,
      order: 9,
    },
    {
      id: uuid(),
      name: 'Lazer',
      color: '#ecf0f1',
      isDebit: true,
      order: 10,
    },
    {
      id: uuid(),
      name: 'Mercado',
      color: '#bdc3c7',
      isDebit: true,
      order: 11,
    },
    {
      id: uuid(),
      name: 'Outras Despesas',
      color: '#95a5a6',
      isDebit: true,
      order: 12,
    },

    {
      id: uuid(),
      name: 'Empréstimos',
      color: '#273c75',
      isCredit: true,
      order: 1,
    },
    {
      id: uuid(),
      name: 'Investimentos',
      color: '#4cd137',
      isCredit: true,
      order: 2,
    },
    {
      id: uuid(),
      name: 'Salário',
      color: '#487eb0',
      isCredit: true,
      order: 3,
    },
    {
      id: uuid(),
      name: 'Outras Receitas',
      color: '#8c7ae6',
      isCredit: true,
      order: 4,
    },
    {
      id: uuid(),
      name: 'Saldo Inicial',
      color: '#27ae60',
      isInit: true,
      order: 5,
    },
  ];
};

export const getAllCategories = async () => {
  const realm = await getRealm();
  return realm.objects<ICategory>('Category').sorted('order');
};

export const getDebitCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects<ICategory>('Category')
    .filtered('isDebit = true')
    .sorted('order');
};

export const getCreditCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects<ICategory>('Category')
    .filtered('isCredit = true')
    .sorted('order');
};

export const getInitCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects<ICategory>('Category')
    .filtered('isInit = true')
    .sorted('order');
};
