import ICategory from './Category';

export default interface IEntry {
  id: string | null;
  description?: string;
  amount: number;
  entryAt: string;
  latitude?: number;
  longitude?: number;
  address?: string;
  photo?: string;
  isInit?: boolean;
  category?: ICategory;
}
