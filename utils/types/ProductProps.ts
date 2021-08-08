import { ICategory } from './Category';

export interface IProductProps {
  id: number;
  strain: string;
  strainType: string;
  brand: string;
  category: ICategory;
  weightGrams: number;
  placeholderImage: string;
}
