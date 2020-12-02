import { selector, waitForAll } from 'recoil';
import { postDetailByIdSelector } from '.';
import { IPost } from '../../../interfaces';
import { IPostDetails } from './../../../interfaces/open-api/IPostDetails';

export const postsSelector = selector<IPost[]>({
  key: 'posts',
  get: async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return posts;
  },
});

/**
 *
 * @see https://recoiljs.org/docs/api-reference/utils/waitForAll
 */
export const postsDetailsSelector = selector<IPostDetails[]>({
  key: 'posts',
  get: async ({ get }) => {
    const posts = await get(postsSelector);
    const details: IPostDetails[] = get(
      waitForAll(posts.map((post) => postDetailByIdSelector(post)))
    );
    return details;
  },
});
