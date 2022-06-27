import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import useSWR from 'swr';

import { TItem } from './reorder';
import { List } from './components/List';

const App = (): ReactElement => {
  const { data, error } = useSWR('/items', fetcher);
  const [items, setItems] = useState<TItem[]>([]);
  const [duration, setDuration] = useState<string>('0.4');
  const [useDrag, setUseDrag] = useState(false);

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
          <div className="flex justify-between">
            <h1 className="text-3xl mb-8 font-semibold tracking-wider text-white">
              Reorder List POC
            </h1>
            <div className="pt-2">
              <label
                className="inline-flex relative items-center cursor-pointer"
                htmlFor="orange-toggle"
              >
                <input
                  checked={useDrag}
                  className="sr-only peer"
                  data-trackid="toggle-drag"
                  id="orange-toggle"
                  type="checkbox"
                  value=""
                  onChange={(): void => setUseDrag(!useDrag)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-600 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
                <span className="ml-3 text-xs font-semibold text-white">Toggle Drag</span>
              </label>
            </div>
          </div>
          {!data && !error ? (
            <div className="bg-white p-4 mb-8">
              <h2>Is Loading</h2>
            </div>
          ) : (
            <div>
              <List duration={duration} items={items} setItems={setItems} useDrag={useDrag} />
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
