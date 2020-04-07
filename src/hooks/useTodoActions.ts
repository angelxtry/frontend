import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../modules/todos/actions';

export default function useTodoActions() {
  const dispatch = useDispatch();
  const onToggle = useCallback(
    (id: number) => {
      dispatch(toggleTodo(id));
    },
    [dispatch],
  );
  const onRemove = useCallback(
    (id: number) => {
      dispatch(removeTodo(id));
    },
    [dispatch],
  );
  return { onToggle, onRemove };
}
