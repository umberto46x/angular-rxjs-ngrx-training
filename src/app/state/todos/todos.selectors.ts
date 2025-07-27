import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TodoState } from './todos.reducer';

export const selectTodoState = (state: AppState) => state.todos;

export const selectAllTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);
