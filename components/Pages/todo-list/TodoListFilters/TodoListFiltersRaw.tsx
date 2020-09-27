import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { IWithClassName } from '../../../../interfaces';
import { stateTodoListFilter, TodoFilterState } from '../../../../states';

export const TodoListFiltersRaw = ({ className }: IWithClassName) => {
  const [filter, setFilter] = useRecoilState(stateTodoListFilter);

  const updateFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as TodoFilterState);
  };

  return (
    <div className={className}>
      Filter:
      <select value={filter} onChange={updateFilter} className="options">
        <option value={TodoFilterState.all} className="option">
          All
        </option>
        <option value={TodoFilterState.completed} className="option">
          Completed
        </option>
        <option value={TodoFilterState.uncompleted} className="option">
          Uncompleted
        </option>
      </select>
    </div>
  );
};
