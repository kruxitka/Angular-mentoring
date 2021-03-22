import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../interfaces/course.interface';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  public coursesList$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {
    this.coursesList$ = this.coursesService.getCoursesList();
  }

  ngOnInit(): void {}

  public onDeleteCourse(courseId: string): void {
    this.coursesList$ = this.coursesService.deleteCourse(courseId);
  }

}
