import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import useSWR from 'swr';

import { TItem } from './reorder';
import { List } from './components/List';
import { Container } from './components/Container';

const App = (): ReactElement => {
  const { data } = useSWR('/items', fetcher);
  const [items, setItems] = useState<TItem[]>([]);
  const [duration, setDuration] = useState<string>('0.4');
  const [useDrag, setUseDrag] = useState(false);

  useEffect(() => {
    if (data) {
      setItems(data);
    }
  }, [data, setItems]);

  const handleDurationChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setDuration(event.target.value.trim());
  };

  const ToggleDrag = (): ReactElement => {
    return (
      <div className="pt-2">
        <label className="inline-flex relative items-center cursor-pointer" htmlFor="orange-toggle">
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
    );
  };

  const FramerMotionControls = (): ReactElement => {
    return (
      <div className="mt-8 px-6 flex justify-between items-center border py-4 rounded shadow bg-slate-700">
        <ToggleDrag />
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
    );
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="flex flex-col gap-10">
          <Container title="Reorder List POC">
            <List duration={duration} items={items} setItems={setItems} useDrag={useDrag} />
          </Container>
          <FramerMotionControls />
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
