import React from 'react';
import { useRecoilState } from 'recoil';
import {
  EditTitle,
  Info,
  ObjectHierarchic,
  ObserveByTrans,
  OpenApiComplexLoad,
  OpenApiSimple,
  OpenApiSimpleIndirect,
  PingPongBoard,
  Side,
  TodoList,
  Top,
  TrackingPattern,
  UpdateStateWithCallback,
} from '..';
import { IWithClassName } from '../../interfaces';
import { stateCurrentPage } from '../../states';
import { Countries } from '../Pages/Countries/Countries';

export const LayoutRaw = ({ className }: IWithClassName) => {
  const [page] = useRecoilState(stateCurrentPage);

  return (
    <div className={className}>
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
        {page === 3 && <Countries />}
        {page === 4 && <OpenApiSimple />}
        {page === 5 && <OpenApiSimpleIndirect />}
        {page === 6 && <OpenApiComplexLoad />}
        {page === 7 && <TrackingPattern />}
        {page === 8 && <ObjectHierarchic />}
        {page === 9 && <UpdateStateWithCallback />}
        {page === 10 && <ObserveByTrans />}
      </div>
      <div className="bottom">
        <Info />
      </div>
    </div>
  );
};
