import { ReactElement } from 'react';
import { RefreshIcon } from '@heroicons/react/solid';

import { TItem } from '../../reorder';

export type TListtItem = {
  isLoading?: boolean;
  item: TItem;
  onClick?: (itemId: string) => void;
};

export const ListItem = ({ isLoading = false, item, onClick }: TListtItem): ReactElement => {
  const { title, status } = item;

  return (
    <div className="border rounded-lg p-4 bg-white shadow-xl flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <span className="rounded-full border bg-green-50 p-2">{item.initial}</span>
        <span>{title}</span>
      </div>
      {status.name === 'not-here' && onClick ? (
        <button
          className="flex items-center gap-4 border px-4 py-2 rounded bg-orange-600 text-white text-sm hover:bg-orange-500 hover:shadow-xl"
          data-itemid={item.id}
          data-trackid="checkin-btn"
          onClick={(): void => onClick(item.id)}
        >
          {isLoading && <RefreshIcon className="w-4 h-4 animate-spin" />}
          <span>Check-in</span>
        </button>
      ) : (
        <span
          className={`text-sm font-semibold ${
            status.name === 'Arrived' ? 'text-green-700' : 'text-red-700'
          }`}
        >
          {status.name}
        </span>
      )}
    </div>
  );
};
