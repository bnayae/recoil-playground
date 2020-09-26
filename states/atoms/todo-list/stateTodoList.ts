import { atom } from 'recoil';
import { ITodoItem } from './ITodoItem';

export const stateTodoList = atom<ITodoItem[]>({
  key: 'todo-list',
  default: [],
});
