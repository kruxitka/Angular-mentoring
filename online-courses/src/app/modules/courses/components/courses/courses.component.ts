import { Course } from './../../interfaces/course.interface';
import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'src/app/modules/shared/modules/search/pipes/filter.pipe';
import { Observable } from 'rxjs';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public coursesList!: Course[];

  constructor(private filterPipe: FilterPipe, private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.getCoursesList().subscribe(courses => this.coursesList = courses);
  }

  public onSearchCourse(searchText: string): any {
    this.coursesList = this.filterPipe.transform(this.coursesList, searchText);
  }

}
