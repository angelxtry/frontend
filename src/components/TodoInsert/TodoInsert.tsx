import React, { useState } from 'react';
import useAddTodo from '../../hooks/useAddTodo';

export default function TodoInsert() {
  const [value, setValue] = useState('');
  const addTodo = useAddTodo();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClick = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <div>
      <form>
        <input value={value} onChange={onChange} />
        <button type="submit" onClick={onClick}>
          추가
        </button>
      </form>
    </div>
  );
}
