import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Course } from '../../interfaces/course.interface';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit {
  @Input()
  public course!: Course;
  @Output()
  public deleteCourse: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public editCourse: EventEmitter<Course> = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  public delete(): void {
    this.deleteCourse.emit(this.course.id);
  }

  public edit(): void {
    this.editCourse.emit(this.course);
  }

}
