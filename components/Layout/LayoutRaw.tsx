import React from 'react';
import { Side, Top } from '..';
import { IWithClassName } from '../../interfaces/IWithClassName';

export const LayoutRaw = ({ className }: IWithClassName) => (
  <div className={className}>
    <div className="top">
      <Top />
    </div>
    <div className="side">
      <Side />
    </div>
    <div className="page"></div>
    <div className="right"></div>
    <div className="bottom"></div>
  </div>
);
