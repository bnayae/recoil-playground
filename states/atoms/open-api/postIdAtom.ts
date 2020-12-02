import { atom } from 'recoil';

export const postIdAtom = atom<number>({
  key: 'post-id',
  default: 1,
});
