import React from 'react';
import { useRecoilState } from 'recoil';
import { IWithClassName } from '../../interfaces/IWithClassName';
import { stateTitle } from '../../states';

export const InfoRaw = ({ className }: IWithClassName) => {
  const [title] = useRecoilState(stateTitle);
  return <h4 className={className}>{title}</h4>;
};
