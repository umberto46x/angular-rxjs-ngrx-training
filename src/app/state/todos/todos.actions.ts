import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/Todo';

export const addTodo = createAction(
  '[Todo Component] Add Todo',
  props<{ content: string }>()
);

export const removeTodo = createAction(
  '[Todo Component] Remove Todo',
  props<{ id: number }>()
);

export const loadTodos = createAction('[Todo Component] Load Todos');
export const loadTodosSuccess = createAction(
  '[Todo API] Toad Load Success',
  props<{ todos: Todo[] }>()
);
export const loadTodosFailure = createAction(
  '[Todo API] Toad Load Failure',
  props<{ error: string }>()
);
