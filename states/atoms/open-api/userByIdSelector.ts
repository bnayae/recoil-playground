import { selectorFamily } from 'recoil';
import { IUser } from '../../../interfaces';

/**
 * REST call
 * @param id
 */
export const userByIdProxy = async (id: number): Promise<IUser> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const posts = await res.json();
  return posts;
};

/**
 * Abstract parameterized REST call
 * Each unique parameter value will return the same memoized selector instance.
 */

export const userByIdSelector = selectorFamily<IUser, number>({
  key: 'post-by-id',
  get: (id) => () => userByIdProxy(id),
});
