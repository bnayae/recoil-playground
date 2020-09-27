import { useRecoilState } from 'recoil';
import { IWithClassName } from '../../../../interfaces';
import { ITodoItem, stateTodoList } from '../../../../states';

export const TodoItemRaw = ({
  item,
  className,
}: { item: ITodoItem } & IWithClassName) => {
  const [todoList, setTodoList] = useRecoilState(stateTodoList);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div className={className}>
      <input
        type="text"
        value={item.text}
        onChange={editItemText}
        className="text"
      />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
        className="complete"
      />
      <button onClick={deleteItem} className="delete">
        X
      </button>
    </div>
  );
};

const replaceItemAtIndex = (
  arr: ITodoItem[],
  index: number,
  newValue: ITodoItem
) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: ITodoItem[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
