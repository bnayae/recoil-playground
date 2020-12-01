import { selectorFamily } from 'recoil';
import { IPost } from '../../../interfaces';

/**
 * Abstract parameterized REST call
 * Each unique parameter value will return the same memoized selector instance.
 */

export const postByIdSelector = selectorFamily<IPost, number>({
  key: 'post-by-id',
  get: (params) => async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params}`
    );
    const posts = await res.json();
    return posts;
  },
});
