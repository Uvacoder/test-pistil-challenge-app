import { ICategory } from './Category';

export interface IProductProps {
  strain: string;
  strainType: string;
  category: ICategory;
  placeholderImage: string;
}
