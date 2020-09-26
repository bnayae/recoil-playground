import React from 'react';
import { useRecoilState } from 'recoil';
import { IWithClassName } from '../../interfaces';
import { stateCurrentPage } from '../../states';

export const SideRaw = ({ className }: IWithClassName) => {
  const [page, setPage] = useRecoilState(stateCurrentPage);
  return (
    <div className={className}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          onClick={() => setPage(i)}
          key={i}
          className={page === i ? 'selected btn' : 'btn'}
        >
          Page {i}
        </div>
      ))}
    </div>
  );
};
