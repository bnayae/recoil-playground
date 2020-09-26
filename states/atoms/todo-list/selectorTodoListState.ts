import { selector } from 'recoil';
import { ITodoItem } from './ITodoItem';
import { stateTodoList } from './stateTodoList';

export const selectorTodoListState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(stateTodoList);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(
      (item: ITodoItem) => item.isComplete
    ).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
