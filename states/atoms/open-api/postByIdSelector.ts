import { selectorFamily } from 'recoil';
import { IPost } from '../../../interfaces';
/**
 * REST call
 * @param id
 */
export const postByIdProxy = async (id: number): Promise<IPost> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await res.json();
  return posts;
};

/**
 * Abstract parameterized REST call
 * Each unique parameter value will return the same memoized selector instance.
 */

export const postByIdSelector = selectorFamily<IPost, number>({
  key: 'post-by-id',
  get: (id) => async () => postByIdProxy(id),
});
