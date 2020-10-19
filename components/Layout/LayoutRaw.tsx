import React from 'react';
import { useRecoilState } from 'recoil';
import { EditTitle, Info, Side, TodoList, Top } from '..';
import { IWithClassName } from '../../interfaces';
import { stateCurrentPage } from '../../states';
import { PingPongBoard } from '../PingPong';

export const LayoutRaw = ({ className }: IWithClassName) => {
  const [page] = useRecoilState(stateCurrentPage);

  return (
    <div className={className}>
      <div className="info">
        <Info />
      </div>
      <div className="top">
        <Top />
      </div>
      <div className="side">
        <Side />
      </div>
      <div className="page">
        {page === 1 && <EditTitle />}
        {page === 2 && <TodoList />}
        {page === 3 && <PingPongBoard />}
      </div>
      <div className="right"></div>
      <div className="bottom"></div>
    </div>
  );
};
