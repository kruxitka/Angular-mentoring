import { User } from './../modules/core/interfaces/user';
import { Course } from './../modules/courses/interfaces/course.interface';

export interface State {
  user: User;
  courses: Course[];
}

export const initialState: State = {
  user: null,
  courses: [],
};
