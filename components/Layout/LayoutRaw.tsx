import React from 'react';
import { useRecoilState } from 'recoil';
import { EditTitle, Info, Side, Top } from '..';
import { IWithClassName } from '../../interfaces/IWithClassName';
import { stateCurrentPage } from '../../states';

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
      <div className="page">{page === 1 && <EditTitle />}</div>
      <div className="right"></div>
      <div className="bottom"></div>
    </div>
  );
};
