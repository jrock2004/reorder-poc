import { ReactElement } from 'react';
import { AnimatePresence, Reorder } from 'framer-motion';

import { ListItem } from '../ListItem';
import { TItem } from '../../App';

export type TList = {
  duration: string;
  items: TItem[];
  setItems: (items: TItem[]) => void;
};

type TGroupList = {
  id: number;
  items: TItem[];
};

export const List = ({ duration, items, setItems }: TList): ReactElement => {
  const handleCheckIn = (itemId: string): void => {
    const newArray: TItem[] = reOrderList(items, itemId);

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
                {item.status.name === 'not-here' ? (
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

const reOrderList = (items: TItem[], itemId?: string): TItem[] => {
  const updateStatusList = [...items].map((item: TItem): TItem => {
    if (item.id === itemId) {
      item.status = {
        id: '2',
        name: 'Arrived',
        order: 2,
      };
    }

    return item;
  });

  const groupList = [...updateStatusList].reduce(
    (groups: TGroupList[], currentItem: TItem): TGroupList[] => {
      const currentStatus = currentItem.status.order;
      const groupIndex =
        groups.length > 0 ? groups.findIndex((a: TGroupList) => a.id === currentStatus) : -1;

      if (groupIndex === -1) {
        groups.push({
          id: +currentStatus,
          items: [currentItem],
        });
      } else {
        groups[groupIndex].items.push(currentItem);

        groups[groupIndex].items.sort((a: TItem, b: TItem): number =>
          a.title.localeCompare(b.title)
        );
      }

      return groups.sort((a: TGroupList, b: TGroupList): number => a.id - b.id);
    },
    []
  );

  const orderedList: TItem[] = [];

  groupList.forEach((item: TGroupList): void => {
    orderedList.push(...item.items);
  });

  return orderedList;
};
