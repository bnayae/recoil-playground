import { selector } from 'recoil';
import { IPost } from '../../../interfaces';

export const postsSelector = selector<IPost[]>({
  key: 'posts',
  get: async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return posts;
  },
});
