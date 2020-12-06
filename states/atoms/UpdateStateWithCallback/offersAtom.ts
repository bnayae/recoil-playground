import { atom } from 'recoil';

export const offersAtom = atom<string[]>({
  key: 'offers-callback',
  default: ['basic staff'],
});
