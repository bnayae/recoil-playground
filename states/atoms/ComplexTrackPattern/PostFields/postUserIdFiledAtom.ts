import { atomFamily } from 'recoil';

export const postUserIdFiledAtom = atomFamily<number, number>({
  key: 'post-complex-origin/user-id',
  default: 0,
});
