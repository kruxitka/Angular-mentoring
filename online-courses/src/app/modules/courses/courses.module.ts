import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as components from './components';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CourseItemComponent } from './components/course-item/course-item.component';

@NgModule({
  declarations: [components.CoursesComponent, components.CoursesListComponent, AddCourseComponent, CourseItemComponent],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
