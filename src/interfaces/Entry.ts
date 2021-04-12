export default interface IEntry {
  id: string;
  description?: string;
  amount: string | number;
  entryAt: string;
  latitude?: number;
  longitude?: number;
  address?: string;
  photo?: string;
  isInit?: boolean;
  category?: string;
}
