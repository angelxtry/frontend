import React, { CSSProperties } from 'react';
import { Todo } from '../../modules/todos/types';
import useTodoActions from '../../hooks/useTodoActions';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { id, text, done } = todo;
  const textStyle: CSSProperties = {
    textDecoration: done ? 'line-through' : 'none',
  };

  const { onToggle, onRemove } = useTodoActions();

  return (
    <div style={textStyle}>
      <input type="checkbox" onClick={() => onToggle(id)} />
      {id}-{text}
      <button type="button" onClick={() => onRemove(id)}>
        삭제
      </button>
    </div>
  );
}
