import { IProduct } from "../types";

export function paginate(list: IProduct[], pageSize: number, pageNumber: number) {
  return list.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}
