import { rest } from 'msw';

import { mockedProducts } from '../mocks/products';

const API_URL = 'http://localhost:3000/api/products';

const handlers = [
  rest.get(API_URL, (_req: any, res: any, ctx: any) => {
    return res(ctx.json(mockedProducts));
  }),
];

export { handlers };