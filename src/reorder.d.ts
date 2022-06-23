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
