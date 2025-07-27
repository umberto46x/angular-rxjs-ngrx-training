import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/Todo';
import {
  addTodo,
  loadTodos,
  removeTodo,
  toggleTodo,
} from '../../state/todos/todos.actions';
import { selectAllTodos } from '../../state/todos/todos.selectors';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-ngrx-training',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './ngrx-training.html',
  styleUrl: './ngrx-training.scss',
})
export class NgrxTraining implements OnInit {
  store: Store<AppState> = inject(Store);
  todos$: Observable<Todo[]> = this.store.select(selectAllTodos);

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  addTodo(inputElement: HTMLInputElement) {
    if (inputElement.value) {
      this.store.dispatch(addTodo({ content: inputElement.value }));
      inputElement.value = '';
    }
  }
  toggleTodo(id: number) {
    this.store.dispatch(toggleTodo({ id: id }));
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo({ id: id }));
  }
}
