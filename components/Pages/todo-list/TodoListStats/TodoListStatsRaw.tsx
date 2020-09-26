import { useRecoilValue } from 'recoil';
import { selectorTodoListState } from '../../../../states';

export const TodoListStatsRaw = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue<{
    totalNum: number;
    totalCompletedNum: number;
    totalUncompletedNum: number;
    percentCompleted: number;
  }>(selectorTodoListState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
};
