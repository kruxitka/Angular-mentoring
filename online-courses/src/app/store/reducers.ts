import { initialState, State } from './state';
import { createReducer, on } from '@ngrx/store';

import * as actions from './actions';

export const coursesReducer = createReducer(
  initialState,
  on(actions.getCoursesSuccess, (state: State, { courses }) => ({
    ...state,
    courses
  }))
);
