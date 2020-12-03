import { atomFamily } from 'recoil';
import { IPost } from '../../../interfaces';

export const postTrackingAtom = atomFamily<Partial<IPost>, number>({
  key: 'post-tracking',
  default: {},
});
