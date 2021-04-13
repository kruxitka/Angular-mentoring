import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3004';
  }

  public getCoursesList(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/courses`);
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
