import { ReactElement, useState } from 'react';
import { AnimatePresence, Reorder } from 'framer-motion';

import { reOrderList } from '../../utils';
import { ListItem } from '../ListItem';
import { TItem } from '../../reorder';

export type TList = {
  duration: string;
  items: TItem[];
  setItems: (items: TItem[]) => void;
  useDrag: boolean;
};

const updateListItem = async (items: TItem[]): Promise<void> => {
  fetch('/items', {
    method: 'POST',
    body: JSON.stringify(items),
  });
};

export const List = ({ duration, items, setItems, useDrag }: TList): ReactElement => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckIn = (itemId: string): void => {
    setIsLoading(true);

    const newArray: TItem[] = reOrderList(items, itemId);

    updateListItem(newArray).then((): void => {
      setItems([...newArray]);
      setIsLoading(false);
    });
  };

  return (
    <>
      <Reorder.Group
        axis="y"
        className="flex flex-col gap-6 pb-10"
        values={items}
        onReorder={setItems}
      >
        <AnimatePresence>
          {items.map((item): ReactElement => {
            return (
              <Reorder.Item
                key={item.id}
                dragListener={useDrag}
                transition={{
                  duration: duration,
                }}
                value={item}
              >
                {item.status.name === 'not-here' ? (
                  <ListItem
                    data-trackid="some-status"
                    isLoading={isLoading}
                    item={item}
                    useDrag={useDrag}
                    onClick={handleCheckIn}
                  />
                ) : (
                  <ListItem item={item} useDrag={useDrag} />
                )}
              </Reorder.Item>
            );
          })}
        </AnimatePresence>
      </Reorder.Group>
    </>
  );
};
