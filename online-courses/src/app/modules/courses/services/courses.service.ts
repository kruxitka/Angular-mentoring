import { CoursesRequestParams } from './../interfaces/course.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3004';
  }

  public getCoursesList(coursesParams: CoursesRequestParams): Observable<Course[]> {
    let params = new HttpParams();

    if (coursesParams?.start) {
      params = params.set('start', coursesParams.start.toString());
    }
    if (coursesParams?.count) {
      params = params.set('count', coursesParams.count.toString());
    }
    if (coursesParams?.sort) {
      params = params.set('sort', coursesParams.sort);
    }
    if (coursesParams?.textFragment) {
      params = params.set('textFragment', coursesParams.textFragment);
    }

    return this.http.get<Course[]>(`${this.apiUrl}/courses`, { params });
  }

  public createCourse(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`${this.apiUrl}/courses`, course);
  }

  public getCourseInfoById(courseId: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/courses/${courseId}`);
  }

  public updateCourse(course: Course): Observable<Course[]> {
    return this.http.patch<Course[]>(`${this.apiUrl}/courses/${course.id}`, course);
  }

  public deleteCourse(courseId: string): Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.apiUrl}/courses/${courseId}`);
  }
}
