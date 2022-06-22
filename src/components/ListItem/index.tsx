import { ReactElement } from 'react';

import { TItem } from '../../App';

export type TListtItem = {
  item: TItem;
  onClick?: (itemId: string) => void;
};

export const ListItem = ({ item, onClick }: TListtItem): ReactElement => {
  const { title, status } = item;

  return (
    <div className="border rounded-lg p-4 bg-white shadow-xl flex justify-between items-center">
      <span>{title}</span>
      {status === 'not-here' && onClick ? (
        <button
          className="border px-4 py-1 rounded bg-blue-600 text-white text-sm"
          data-itemid={item.id}
          data-trackid="checkin-btn"
          onClick={(): void => onClick(item.id)}
        >
          Check-in
        </button>
      ) : (
        <span className={`text-sm ${status === 'arrived' ? 'text-green-700' : 'text-red-700'}`}>
          {status}
        </span>
      )}
    </div>
  );
};
