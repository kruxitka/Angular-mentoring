import { Course } from './../../interfaces/course.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  @Input()
  public coursesList!: Course[];

  constructor() { }

  ngOnInit(): void {
  }

  public onDeleteCourse(courseId: string): void {
    console.log(courseId);
    console.log(Date.now());
  }

  public coursesTrackBy(index: number, course: Course): Course {
    return course;
  }

}
