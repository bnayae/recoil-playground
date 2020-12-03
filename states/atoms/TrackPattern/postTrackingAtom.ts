import { atomFamily } from 'recoil';
import { IPostNullable } from './../../../interfaces/tracking/IPostNullable';

export const postTrackingAtom = atomFamily<IPostNullable, number>({
  key: 'post-tracking',
  default: (id) => {
    return {
      id,
      // userId: 0,
      // body: '',
      // title: '',
    };
  },
});
