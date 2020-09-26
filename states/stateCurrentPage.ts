import { atom } from 'recoil';

export const stateCurrentPage = atom({
  key: 'current-page', // unique ID (with respect to other atoms/selectors)
  default: 1, // default value (aka initial value)
});
