import { atomFamily } from 'recoil';
import { IPost } from '../../../interfaces';

export const postTrackingAtom = atomFamily<IPost | undefined, number>({
  key: 'post-tracking',
  default: undefined,
});
