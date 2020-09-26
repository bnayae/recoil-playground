import React from 'react';
import { useRecoilValue } from 'recoil';
import { IWithClassName } from '../../interfaces';
import { selectorPageTitle } from '../../states';

export const InfoRaw = ({ className }: IWithClassName) => {
  const [title] = useRecoilValue(selectorPageTitle);
  return <h4 className={className}>{title}</h4>;
};
