import { useRecoilValue } from 'recoil';
import { IWithClassName } from '../../../../interfaces';
import { selectorTodoListState } from '../../../../states';

export const TodoListStatsRaw = ({ className }: IWithClassName) => {
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
    <div className={className}>
      <div>
        <b>Total items: {totalNum}</b>, Completed: {totalCompletedNum} (
        {formattedPercentCompleted}%), Not Completed: {totalUncompletedNum}
      </div>
    </div>
  );
};
