import React from 'react';
import {
  useRecoilCallback,
  useRecoilStateLoadable,
  useRecoilValueLoadable,
} from 'recoil';
import { IWithClassName } from '../../../interfaces';
import { ageAtom, offersAtom } from '../../../states';

interface IProps extends IWithClassName {
  // id: number;
}

export const UpdateStateWithCallbackRaw = ({ className }: IProps) => {
  const [ageLoadable, setAge] = useRecoilStateLoadable(ageAtom);
  const offerLoadable = useRecoilValueLoadable(offersAtom);
  const updater = useRecoilCallback(
    ({ set /*reset, snapshot, gotoSnapshot */ }) => (newValue: number) => {
      let newOffer = 'infant';
      if (newValue > 30) {
        newOffer = 'grown-up';
      } else if (newValue > 20) {
        newOffer = 'adult';
      } else if (newValue > 10) {
        newOffer = 'child';
      }
      set(ageAtom, newValue);
      set(offersAtom, (prev) => (newValue == 0 ? [] : [...prev, newOffer]));
    },
    [ageAtom]
  );
  if (ageLoadable.state !== 'hasValue') return <div>loading...</div>;
  if (offerLoadable.state !== 'hasValue') return <div>loading...</div>;

  const ageValue = ageLoadable.getValue();
  return (
    <div className={className}>
      <div>{ageValue}</div>
      <button onClick={() => updater((ageValue + 10) % 50)}>Change</button>
      <button onClick={() => setAge((ageValue + 10) % 50)}>
        Change direct
      </button>
      <ul>
        {offerLoadable.contents.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
    </div>
  );
};
