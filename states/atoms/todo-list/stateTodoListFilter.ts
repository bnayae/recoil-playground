import { atom } from 'recoil';
import { TodoFilterState } from '.';

export const stateTodoListFilter = atom<TodoFilterState>({
  key: 'todoListFilterState',
  default: TodoFilterState.all,
});
