import { selectorFamily } from 'recoil';
import { IPost } from '../../../interfaces';
import { postByIdProxy } from './postByIdProxy';
/**
 * Abstract parameterized REST call
 * Each unique parameter value will return the same memoized selector instance.
 */

export const postByIdSelector = selectorFamily<IPost, number>({
  key: 'post-by-id',
  get: (id) => () => postByIdProxy(id),
});
