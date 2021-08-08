import api from './api';
import { convertToQueryParams } from '../utils/helpers';
import { IFilterParams } from '../utils/types';

export const productsService = {
  listByFilter: async (params: IFilterParams) => {
    const queryParams = convertToQueryParams(params);
    const response = await api.get(`products?${queryParams}`);

    return response;
  },
};
