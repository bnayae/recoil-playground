import React from 'react';
import { useRecoilValue } from 'recoil';
import { TodoItem, TodoItemCreator, TodoListFilters, TodoListStats } from '..';
import { IWithClassName } from '../../../../interfaces';
import { stateTodoList } from '../../../../states';

export const TodoListRaw = ({ className }: IWithClassName) => {
  const todoList = useRecoilValue(stateTodoList);

  return (
    <div className={className}>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
};
