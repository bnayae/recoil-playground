import { atom } from 'recoil';
import { ITodoItem } from '.';

export const stateTodoList = atom<ITodoItem[]>({
  key: 'todo-list',
  default: [],
});
