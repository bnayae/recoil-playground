import { selector } from 'recoil';
import { stateCurrentPage, stateTitle } from '..';

export const selectorPageTitle = selector({
  key: 'page-title-selector', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const page = get(stateCurrentPage);
    const title = get(stateTitle);

    return `${title} (${page})`;
  },
});
