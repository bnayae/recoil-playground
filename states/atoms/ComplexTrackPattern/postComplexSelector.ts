import { selectorFamily, waitForAll } from 'recoil';
import { postByIdProxy } from '..';
import { guardRecoilDefaultValue } from '../../../guards';
import { IPost } from '../../../interfaces';
import {
  postBodyFiledAtom,
  postIdFiledAtom,
  postTitleFiledAtom,
  postUserIdFiledAtom,
} from './PostFields';

export const postComplexSelector = selectorFamily<IPost, number>({
  key: 'complex-post-origin',
  get: (id) => ({ get }) => {
    const post: IPost = get(
      waitForAll({
        id: postIdFiledAtom(id),
        userId: postUserIdFiledAtom(id),
        title: postTitleFiledAtom(id),
        body: postBodyFiledAtom(id),
      })
    );

    return post;
  },
  set: (id) => async ({ set /*get , reset */ }, post) => {
    let value: IPost;
    if (guardRecoilDefaultValue(post)) {
      value = await postByIdProxy(id);
    } else {
      value = post;
    }

    set(postIdFiledAtom(id), value.id);
    set(postUserIdFiledAtom(id), value.userId);
    set(postTitleFiledAtom(id), value.title);
    set(postBodyFiledAtom(id), value.body);
  },
});
