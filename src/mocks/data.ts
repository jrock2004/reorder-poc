import { TItem } from '../reorder';

export const getItems = (): TItem[] => {
  return [
    {
      id: '1',
      initial: 'AH',
      status: {
        id: '1',
        name: 'not-here',
        order: 1,
      },
      title: 'Amy Herr',
    },
    {
      id: '2',
      initial: 'LS',
      status: {
        id: '1',
        name: 'not-here',
        order: 1,
      },
      title: 'Lisa Smith',
    },
    {
      id: '3',
      initial: 'LZ',
      status: {
        id: '1',
        name: 'not-here',
        order: 1,
      },
      title: 'Lisa Zachery',
    },
    {
      id: '4',
      initial: 'JC',
      status: {
        id: '2',
        name: 'Arrived',
        order: 2,
      },
      title: 'John Crumpet',
    },
    {
      id: '5',
      initial: 'TC',
      status: {
        id: '3',
        name: 'No Show',
        order: 3,
      },
      title: 'Tiffany Chucker',
    },
  ];
};
