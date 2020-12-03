import React from 'react';
import { PingPong } from '.';
import { IWithClassName } from '../../../interfaces';
export const PingPongBoardRaw = ({ className }: IWithClassName) => {
  return (
    <div className={className}>
      <PingPong title="A→" className="left" producer="left" consumer="right" />
      <PingPong title="←B" className="right" producer="right" consumer="left" />
    </div>
  );
};
