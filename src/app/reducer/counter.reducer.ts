import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from '../actions/counter.actions';

export interface counterState {
  count: number;
}
export const initialState: counterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 })),
  on(reset, (state) => ({ ...state, count: 0 }))
);
