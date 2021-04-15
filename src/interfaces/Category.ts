import IEntry from './Entry';

export default interface ICategory {
  id: string | null;
  color?: string;
  name?: string;
  isDefault?: boolean;
  isCredit?: boolean;
  isDebit?: boolean;
  order?: number;
  entries?: IEntry[];
}
