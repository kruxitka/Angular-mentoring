import { Course } from './../../../../courses/interfaces/course.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: Course[], searchText: string): Course[] {
    if (!searchText) {
      return courses;
    } else {
      return courses.filter(course => course.title.toLowerCase().includes(searchText.toLowerCase()));
    }
  }

}
