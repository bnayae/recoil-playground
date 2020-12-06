import { selectorFamily } from 'recoil';
import { postByIdProxy } from '..';
import { IPost } from '../../../interfaces';

export const postObjectHierarchicInitSelector = selectorFamily<IPost, number>({
  key: 'object-hierarchic-post-init',
  get: (id) => async (/*{ get }*/) => {
    return await postByIdProxy(id);
  },
});

// export const postObjectHierarchicInitAtom = atomFamily<IPost, number>({
//   key: 'object-hierarchic-post-init',
//   default: postObjectHierarchicInitSelector,
// });
