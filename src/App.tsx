import { ChangeEvent, ReactElement, useState } from 'react';

import { List } from './components/List';

export type TItem = {
  id: string;
  initial: string;
  status: {
    id: string;
    name: 'Arrived' | 'No Show' | 'not-here';
    order: number;
  };
  title: string;
};

const App = (): ReactElement => {
  const [items, setItems] = useState<TItem[]>([...mockItems]);
  const [duration, setDuration] = useState<string>('1.5');

  const resetList = (): void => {
    setItems([...mockItems]);
  };

  const handleDurationChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value.trim());

    setDuration(event.target.value.trim());
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-10">
        <div className="border rounded px-6 py-3 shadow-slate-400 shadow-lg bg-slate-700 min-w-container">
          <h1 className="text-3xl mb-8 font-semibold tracking-wider text-white">
            Reorder List POC
          </h1>
          <div>
            <List duration={duration} items={items} setItems={setItems} />
          </div>
        </div>
        <div className="mt-8 px-6 flex justify-between items-center border py-4 rounded shadow bg-slate-700">
          <div>
            <button
              className="bg-orange-600 rounded shadow px-4 py-2 text-sm text-white hover:bg-orange-500 hover:shadow-xl"
              data-trackid="reset-list"
              onClick={resetList}
            >
              Reset List
            </button>
          </div>
          <div>
            <span className="text-sm mr-3 text-white">Duration:</span>
            <input
              className="border border-gray-400 px-3 py-2 shadow rounded text-xs text-gray-800 w-20 text-right focus:ring-blue-500 focus:border-blue-500"
              data-trackid="duration-change"
              placeholder="1.5"
              value={duration}
              onChange={handleDurationChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mockItems: TItem[] = [
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

export default App;
