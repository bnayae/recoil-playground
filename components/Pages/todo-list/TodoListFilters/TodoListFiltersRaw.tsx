import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { stateTodoListFilter, TodoFilterState } from '../../../../states';

export const TodoListFiltersRaw = () => {
  const [filter, setFilter] = useRecoilState(stateTodoListFilter);

  const updateFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as TodoFilterState);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value={TodoFilterState.all}>All</option>
        <option value={TodoFilterState.completed}>Completed</option>
        <option value={TodoFilterState.uncompleted}>Uncompleted</option>
      </select>
    </>
  );
};
