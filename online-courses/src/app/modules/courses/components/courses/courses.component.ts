import { Course } from './../../interfaces/course.interface';
import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'src/app/modules/shared/modules/search/pipes/filter.pipe';
import { Observable } from 'rxjs';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public coursesList!: Course[];
  public selectedCourseId!: string;
  public start = 0;
  public count = 5;

  constructor(private filterPipe: FilterPipe, private coursesService: CoursesService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.coursesService.getCoursesList(this.start, this.count).subscribe(courses => this.coursesList = courses);
    this.getCourses();
    this.selectedCourseId = this.activatedRoute.snapshot.params.id;
  }

  public onSearchCourse(searchText: string): any {
    this.coursesList = this.filterPipe.transform(this.coursesList, searchText);
  }

  public getCourses() {
    this.coursesService.getCoursesList(this.start, this.count).subscribe(courses => this.coursesList = courses);
  }

  public loadMore() {
    this.start = this.start + 1;
    this.getCourses();
  }

}
