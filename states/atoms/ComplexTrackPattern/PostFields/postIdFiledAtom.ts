import { atomFamily } from 'recoil';

export const postIdFiledAtom = atomFamily<number, number>({
  key: 'post-complex-origin/id',
  default: 0,
});
