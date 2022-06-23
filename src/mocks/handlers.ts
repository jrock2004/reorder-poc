import { rest } from 'msw';

import { TItem } from '../reorder';
import { getItems } from './data';

let listItems: TItem[] = getItems();

export const handlers = [
  rest.get('/items', (_req, res, ctx) => {
    return res(ctx.json(listItems));
  }),
  rest.post('/items', (req, res, ctx) => {
    const reqBody = JSON.parse(req.body as string);

    listItems = reqBody;

    return res(ctx.json(reqBody));
  }),
];
