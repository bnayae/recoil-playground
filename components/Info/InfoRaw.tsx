import React from 'react';
import { useRecoilValue } from 'recoil';
import { IWithClassName } from '../../interfaces';
import { IPageTitle, selectorPageTitle } from '../../states';

export const InfoRaw = ({ className }: IWithClassName) => {
  const [title] = useRecoilValue<IPageTitle>(selectorPageTitle);
  return <h4 className={className}>{title}</h4>;
};
