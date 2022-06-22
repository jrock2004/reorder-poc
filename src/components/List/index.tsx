import { ReactElement } from 'react';
import { AnimatePresence, Reorder } from 'framer-motion';

import { ListItem } from '../ListItem';
import { TItem } from '../../App';

export type TList = {
  duration: string;
  items: TItem[];
  setItems: (items: TItem[]) => void;
};

export const List = ({ duration, items, setItems }: TList): ReactElement => {
  const handleCheckIn = (itemId: string): void => {
    const newArray: TItem[] = [];

    newArray.push(items[1]);
    newArray.push(items[2]);
    newArray.push(items[3]);
    newArray.push(items[0]);

    // items.forEach((item): void => {
    //   console.log(item, itemId);
    //
    //   if (item.id === itemId) {
    //     item.status = 'arrived';
    //   }
    //
    //   newArray.push(item);
    // });

    setItems([...newArray]);
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
                dragListener={false}
                transition={{
                  duration: duration,
                }}
                value={item}
              >
                {item.status === 'not-here' ? (
                  <ListItem data-trackid="some-status" item={item} onClick={handleCheckIn} />
                ) : (
                  <ListItem item={item} />
                )}
              </Reorder.Item>
            );
          })}
        </AnimatePresence>
      </Reorder.Group>
    </>
  );
};
