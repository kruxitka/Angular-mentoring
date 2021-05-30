import { Course } from './../../interfaces/course.interface';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, take, tap } from 'rxjs/operators';

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
  private searchSub$ = new Subject<string>();

  constructor(private coursesService: CoursesService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCourses();
    this.selectedCourseId = this.activatedRoute.snapshot.params.id;
    this.searchCourses();
  }

  public onSearchCourse(searchText: string): void {
    this.searchSub$.next(searchText);
  }

  private searchCourses(): void {
    this.searchSub$.subscribe(res => console.log(res))
    this.searchSub$.pipe(
      filter(res => res.length > 2),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((searchText: string) => {
      this.coursesService.getCoursesList({ textFragment: searchText })
        .subscribe(courses => this.coursesList = courses);
    });
  }

  public getCourses(): void {
    this.coursesService.getCoursesList({ start: this.start, count: this.count })
      .subscribe(courses => this.coursesList = courses);
  }

  public loadMore(): void {
    this.start = this.start + 1;
    this.coursesService.getCoursesList({ start: this.start, count: this.count })
      .subscribe(courses => this.coursesList = [...this.coursesList, ...courses]);
  }

}
