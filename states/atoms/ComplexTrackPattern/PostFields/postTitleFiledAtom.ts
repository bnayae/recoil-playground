import { atomFamily } from 'recoil';

export const postTitleFiledAtom = atomFamily<string, number>({
  key: 'post-complex-origin/title',
  default: '',
});
