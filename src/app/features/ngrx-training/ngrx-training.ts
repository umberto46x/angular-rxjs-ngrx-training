import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../actions/counter.actions';

@Component({
  selector: 'app-ngrx-training',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './ngrx-training.html',
  styleUrl: './ngrx-training.scss',
})
export class NgrxTraining {
  counter$: Observable<number>;

  constructor(public store: Store<{ counter: number }>) {
    this.counter$ = store.select((state) => state.counter);
  }

  increment() {
    this.store.dispatch(increment());
    console.log(this.store.select((state) => state.counter));
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
