import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Course } from './../modules/courses/interfaces/course.interface';
import { State } from './state';

const getCourses = ({ courses }: State): Course[] => courses;

export const selectCoursesStore = createFeatureSelector<State>('state');

export const selectCourses: MemoizedSelector<object, Course[]> = createSelector(selectCoursesStore, getCourses);
