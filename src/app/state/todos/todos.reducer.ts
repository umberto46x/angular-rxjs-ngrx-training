import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  loadTodos,
  loadTodosFailure,
  loadTodosSuccess,
  removeTodo,
  toggleTodo,
} from './todos.actions';
import { Todo } from '../../models/Todo';
import { selectTodos } from './todos.selectors';
import { AppState } from '../app.state';

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
  on(
    addTodo,
    (state, { content }): TodoState => ({
      ...state,
      todos: [
        ...state.todos,
        {
          id:
            state.todos.length === 0
              ? 0
              : state.todos[state.todos.length - 1].id + 1,
          content: content,
          completed: false,
        },
      ],
    })
  ),
  on(toggleTodo, (state, { id }): TodoState => {
    const selectedTodo = state.todos.find((todo) => todo.id === id);

    if (selectedTodo) {
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo) => todo.id !== id),
          {
            id: selectedTodo.id,
            completed: !selectedTodo.completed,
            content: selectedTodo.content,
          },
        ],
      };
    } else {
      return { ...state };
    }
  }),
  on(
    removeTodo,
    (state, { id }): TodoState => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    })
  ),
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
