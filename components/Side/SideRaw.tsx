import React from 'react';
import { useRecoilState } from 'recoil';
import { pagesHeader } from '..';
import { IWithClassName } from '../../interfaces';
import { stateCurrentPage } from '../../states';

export const SideRaw = ({ className }: IWithClassName) => {
  const [page, setPage] = useRecoilState(stateCurrentPage);
  return (
    <div className={className}>
      {pagesHeader.map((title, i) => (
        <div
          onClick={() => setPage(i)}
          key={i}
          className={page === i ? 'selected btn' : 'btn'}
        >
          Page {i}: {title}
        </div>
      ))}
    </div>
  );
};
