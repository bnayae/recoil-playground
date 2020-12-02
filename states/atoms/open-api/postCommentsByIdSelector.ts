import { selectorFamily } from 'recoil';
import { IPostComment } from '../../../interfaces/open-api/IPostComment';
/**
 * REST call
 * @param id
 */
export const postCommentsByIdProxy = async (
  id: number
): Promise<IPostComment[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const posts = await res.json();
  return posts;
};

/**
 * Abstract parameterized REST call
 * Each unique parameter value will return the same memoized selector instance.
 */

export const postCommentsByIdSelector = selectorFamily<IPostComment[], number>({
  key: 'post-by-id',
  get: (id) => async () => postCommentsByIdProxy(id),
});
