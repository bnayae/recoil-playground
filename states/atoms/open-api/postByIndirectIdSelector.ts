import { selector } from 'recoil';
import { IPost } from '../../../interfaces';
import { postByIdProxy } from './postByIdProxy';
import { postIdAtom } from './postIdAtom';

/**
 * Abstract parameterized REST call
 * Each unique parameter value will return the same memoized selector instance.
 */

export const postByIndirectIdSelector = selector<IPost>({
  key: 'post-by-id',
  get: ({ get }) => {
    const id = get(postIdAtom);
    return postByIdProxy(id);
  },
});
