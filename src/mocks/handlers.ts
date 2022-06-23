import { rest } from 'msw';

import { getItems } from './data';

export const handlers = [
  rest.get('/items', (_req, res, ctx) => {
    return res(ctx.json(getItems()));
  }),
  rest.post('/login', (req, res, ctx) => {
    return res(
      ctx.json({
        id: '1',
        name: 'John',
      })
    );
  }),
];
