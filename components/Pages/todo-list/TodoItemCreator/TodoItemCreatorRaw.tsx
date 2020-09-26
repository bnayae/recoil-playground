import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IWithClassName } from '../../../../interfaces';
import { stateTodoList } from '../../../../states';

export const TodoItemCreatorRaw = ({ className }: IWithClassName) => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(stateTodoList);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }: { target: { value: string } }) => {
    setInputValue(value);
  };

  return (
    <div className={className}>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}
