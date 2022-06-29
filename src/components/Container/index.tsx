import { ReactElement, ReactNode } from 'react';

export type TContainer = {
  children: ReactNode | ReactElement;
  title: string;
  upperRightHeader?: ReactNode;
};

export const Container = ({ children, title, upperRightHeader }: TContainer): ReactElement => {
  return (
    <div className="border rounded px-6 py-3 shadow-slate-400 shadow-lg bg-slate-700 min-w-container">
      <div className="flex justify-between">
        <h1 className="text-3xl mb-8 font-semibold tracking-wider text-white">{title}</h1>
        {upperRightHeader}
      </div>
      <div>{children}</div>
    </div>
  );
};
