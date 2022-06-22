import { rest } from 'msw';

export const handlers = [
  rest.get('/user', (req, res, ctx) => {
    return res(
      ctx.json({
        id: '1',
        name: 'John',
      })
    );
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
