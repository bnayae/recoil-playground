import { selectorFamily, waitForAll } from 'recoil';
import { IPost, ITracking } from '../../../interfaces';
import { postAtom } from './postAtom';
import { postTrackingAtom } from './postTrackingAtom';

export const postTrackingSelector = selectorFamily<ITracking<IPost>, number>({
  key: 'post-by-id',
  get: (id) => ({ get }) => {
    const { origin, tracking } = get(
      waitForAll({
        origin: postAtom(id),
        tracking: postTrackingAtom(id),
      })
    );

    const result: ITracking<IPost> = {
      origin,
      tracking,
      isDirty: tracking === undefined,
      state: { ...origin, ...tracking },
    };
    return result;
  },
  //   set: (id) => ({ set /*, get, reset */ }, newValue) => {
  //     if (newValue instanceof DefaultValue) return;
  //     const { tracking } = newValue;
  //     set(postAtom(id), (prev) => {
  //       return { ...prev, ...tracking };
  //     });
  //   },
});
