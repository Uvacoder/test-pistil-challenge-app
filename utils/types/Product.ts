import { ICategory } from './Category';

export interface IProduct {
  id: number;
  strain: string;
  strain_type: string;
  brand: string;
  category: ICategory;
  weight_grams: number;
  placeholder_img: string;
}
