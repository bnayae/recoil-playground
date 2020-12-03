import { atomFamily } from 'recoil';
import { postByIdProxy } from '..';
import { IPost } from '../../../interfaces';

export const postAtom = atomFamily<IPost, number>({
  key: 'post-tracking',
  default: (id) => postByIdProxy(id),
});
