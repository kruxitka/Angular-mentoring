import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  public coursesList: Course[] = [
    {
      id: '1',
      title: 'Course title 1',
      duration: 90,
      creationDate: '2020-08-19T20:15:30.000Z',
      topRated: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '2',
      title: 'Course title 2',
      duration: 75,
      creationDate: '2019-07-01T20:15:30.000Z',
      topRated: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '3',
      title: 'Course title 3',
      duration: 120,
      creationDate: '2021-05-01T20:15:30.000Z',
      topRated: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '4',
      title: 'Course title 4',
      duration: 60,
      creationDate: '2021-04-10T20:15:30.000Z',
      topRated: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '5',
      title: 'Course filter test',
      duration: 90,
      creationDate: '2020-08-19T20:15:30.000Z',
      topRated: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  constructor() { }

  public getCoursesList(): Observable<Course[]> {
    return of(this.coursesList);
  }

  public createCourse(course: Course): void {
    this.coursesList.push(course);
  }

  public getCourseInfoById(courseId: string): Observable<Course> {
    return of(...this.coursesList.filter(el => el.id === courseId));
  }

  public updateCourse(course: Course): Observable<Course[]> {
    return of(this.coursesList = this.coursesList.map((el: Course) => el.id === course.id ? el = course : el));
  }

  public deleteCourse(courseId: string): Observable<Course[]> {
    return of(this.coursesList = this.coursesList.filter(el => el.id !== courseId));
  }
}
