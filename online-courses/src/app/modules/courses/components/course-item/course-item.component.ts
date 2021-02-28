import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input()
  public course!: Course;
  @Output() deleteCourse = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  public onDelete(course: Course): void {
    this.deleteCourse.emit(course);
  }

}
