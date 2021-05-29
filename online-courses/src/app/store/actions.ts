import { Course } from './../modules/courses/interfaces/course.interface';
import { User } from './../modules/core/interfaces/user';
import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const login = createAction('[User] Login');
export const loginSuccess = createAction('[User] Login Success', props<{ user: User }>());
export const loginError = createAction('[User] Login Error', props<{error: HttpErrorResponse}>());

export const logout = createAction('[User] Logout');

export const getCourses = createAction('[Courses] Get Courses');
export const getCoursesSuccess = createAction('[Courses] Get Courses Success', props<{ courses: Course[] }>());
export const getCoursesError = createAction('[Courses] Get Courses Error', props<{error: HttpErrorResponse}>());
