import { TItem } from './reorder';

type TGroupList = {
  id: number;
  items: TItem[];
};

export const reOrderList = (items: TItem[], itemId?: string): TItem[] => {
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
