import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { IWithClassName } from '../../interfaces';
import { stateFamilyPingPong } from '../../states';

interface IProps extends IWithClassName {
  title: string;
  producer: string;
  consumer: string;
}

export const PingPongRaw = ({
  title,
  producer,
  consumer,
  className,
}: IProps) => {
  const value = useRecoilValue(stateFamilyPingPong(consumer));
  const set = useSetRecoilState(stateFamilyPingPong(producer));

  return (
    <div className={className}>
      <h1>{title}</h1>
      <button onClick={() => set((i) => i + 1)}>Produce</button>
      <h2>{value}</h2>
    </div>
  );
};
