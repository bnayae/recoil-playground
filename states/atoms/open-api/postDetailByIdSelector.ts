import { selectorFamily, waitForAll } from 'recoil';
import { postByIdSelector } from '.';
import { IPostDetails } from './../../../interfaces';
import { postCommentsByIdSelector } from './postCommentsByIdSelector';
import { userByIdSelector } from './userByIdSelector';

/**
 * Abstract parameterized REST call
 * Each unique parameter value will return the same memoized selector instance.
 */

export const postDetailByIdSelector = selectorFamily<IPostDetails, number>({
  key: 'post-by-id',
  get: (id) => ({ get }) => {
    const post = get(postByIdSelector(id));
    const { comments, user } = get(
      waitForAll({
        comments: postCommentsByIdSelector(id),
        user: userByIdSelector(post.userId),
      })
    );

    const { userId, ...postInfo } = post;
    const result: IPostDetails = { ...postInfo, user, comments };
    return result;
  },
});
