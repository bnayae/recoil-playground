import { atom } from 'recoil';

export const stateTitle = atom({
  key: 'title', // unique ID (with respect to other atoms/selectors)
  default: 'Welcome', // default value (aka initial value)
});
