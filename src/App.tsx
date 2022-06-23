import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import useSWR from 'swr';

import { TItem } from './reorder';
import { List } from './components/List';

const App = (): ReactElement => {
  const { data, error } = useSWR('/items', fetcher);
  const [items, setItems] = useState<TItem[]>([]);
  const [duration, setDuration] = useState<string>('0.4');

  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data, setItems]);

  const resetList = (): void => {
    // eslint-disable-next-line
    location.reload();
  };

  const handleDurationChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setDuration(event.target.value.trim());
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-10">
        <div className="border rounded px-6 py-3 shadow-slate-400 shadow-lg bg-slate-700 min-w-container">
          <h1 className="text-3xl mb-8 font-semibold tracking-wider text-white">
            Reorder List POC
          </h1>
          {!data && !error ? (
            <div className="bg-white p-4 mb-8">
              <h2>Is Loading</h2>
            </div>
          ) : (
            <div>
              <List duration={duration} items={items} setItems={setItems} />
            </div>
          )}
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

const fetcher = async (input: RequestInfo, init?: RequestInit): Promise<TItem[]> => {
  const res = await fetch(input, init);

  return res.json();
};

export default App;
