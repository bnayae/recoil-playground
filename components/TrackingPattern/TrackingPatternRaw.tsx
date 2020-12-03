import React from 'react';
import { IWithClassName } from '../../interfaces';

interface IProps extends IWithClassName {}

export const TrackingPatternRaw = ({ className }: IProps) => {
  return <div className={className}>Tracking pattern</div>;
};
