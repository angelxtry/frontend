import { createReducer } from 'typesafe-actions';
import { TodosState, TodosAction } from './types';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

const initialState: TodosState = [
  { id: 1, text: 'redux test', done: false },
  { id: 2, text: '폴더 구조 설정', done: false },
  { id: 3, text: 'styled component test', done: false },
  { id: 4, text: 'redux-saga test', done: false },
];

const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, { payload: text }) => {
    return state.concat({
      id: Math.max(...state.map((todo) => todo.id)) + 1,
      text,
      done: false,
    });
  },
  [TOGGLE_TODO]: (state, { payload: id }) => {
    return state.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            done: !todo.done,
          }
        : todo,
    );
  },
  [REMOVE_TODO]: (state, { payload: id }) => {
    return state.filter((todo) => todo.id !== id);
  },
});

export default todos;
