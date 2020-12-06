import { atom } from 'recoil';

export const ageAtom = atom<number>({
  key: 'age-callback',
  default: 30,
});
