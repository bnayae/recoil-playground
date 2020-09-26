import { selector } from 'recoil';
import {
  ITodoItem,
  stateTodoList,
  stateTodoListFilter,
  TodoFilterState,
} from '.';

export const selectorTodoListFiltered = selector<ITodoItem[]>({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(stateTodoListFilter);
    const list = get(stateTodoList);

    switch (filter) {
      case TodoFilterState.completed:
        return list.filter((item) => item.isComplete);
      case TodoFilterState.uncompleted:
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
