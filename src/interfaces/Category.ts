import IEntry from './Entry';

export default interface ICategory {
  id: string;
  color?: string;
  name?: string;
  isDefault?: boolean;
  isCredit?: boolean;
  isDebit?: boolean;
  order?: number;
  entries?: IEntry[];
}
