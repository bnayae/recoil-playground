import { selectorFamily, waitForAll } from 'recoil';
import { postByIdSelector } from '.';
import { IPostDetails } from './../../../interfaces';
import { userByIdSelector } from './userByIdSelector';

type IPostDetailByIdSelectorParams = { id: number; userId: number };

/**
 * Abstract parameterized REST call
 * Each unique parameter value will return the same memoized selector instance.
 */

export const postDetailByIdSelector = selectorFamily<
  IPostDetails,
  IPostDetailByIdSelectorParams
>({
  key: 'post-by-id',
  get: ({ id, userId: uId }) => async ({ get }) => {
    const { post, user } = get(
      waitForAll({
        post: postByIdSelector(id),
        user: userByIdSelector(uId),
      })
    );

    const { userId, ...postInfo } = post;
    return { ...postInfo, user };
  },
});
