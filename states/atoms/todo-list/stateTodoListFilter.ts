import { atom } from 'recoil';

export const stateTodoListFilter = atom<string>({
  key: 'todoListFilterState',
  default: 'Show All',
});
