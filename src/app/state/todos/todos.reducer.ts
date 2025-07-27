import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  removeTodo,
} from './todos.actions';
import { Todo } from '../../models/Todo';

export interface TodoState {
  todos: Todo[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TodoState = {
  todos: [],
  error: '',
  status: 'pending',
};

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { content }) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id:
          state.todos.length === 0
            ? 0
            : state.todos[state.todos.length - 1].id + 1,
        content: content,
      },
    ],
  })),
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  on(loadTodos, (state): TodoState => ({ ...state, status: 'loading' })),
  on(
    loadTodosSuccess,
    (state, { todos }): TodoState => ({
      ...state,
      todos: todos,
      error: '',
      status: 'success',
    })
  ),
  on(
    loadTodosFailure,
    (state, { error }): TodoState => ({
      ...state,
      status: 'error',
      error: error,
    })
  )
);
