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
