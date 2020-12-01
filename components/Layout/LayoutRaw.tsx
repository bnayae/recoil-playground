import React from 'react';
import { useRecoilState } from 'recoil';
import { EditTitle, Info, Side, TodoList, Top } from '..';
import { IWithClassName } from '../../interfaces';
import { stateCurrentPage } from '../../states';
import { Countries } from '../Countries/Countries';
import { OpenApiSimple } from '../open-api';
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
        {page === 0 && <EditTitle />}
        {page === 1 && <TodoList />}
        {page === 2 && <PingPongBoard />}
        {page === 3 && <OpenApiSimple />}
        {page === 4 && <Countries />}
      </div>
      <div className="right"></div>
      <div className="bottom"></div>
    </div>
  );
};
