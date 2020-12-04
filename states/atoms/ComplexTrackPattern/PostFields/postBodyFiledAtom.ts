import { atomFamily } from 'recoil';

export const postBodyFiledAtom = atomFamily<string, number>({
  key: 'post-complex-origin/body',
  default: '',
});
