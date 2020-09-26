import React from 'react';
import { useRecoilState } from 'recoil';
import { IWithClassName } from '../../../interfaces';
import { stateTitle } from '../../../states';

export const EditTitleRaw = ({ className }: IWithClassName) => {
  const [title, setTitle] = useRecoilState(stateTitle);
  return (
    <input
      className={className}
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
};
