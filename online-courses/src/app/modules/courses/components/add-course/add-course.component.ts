import { CoursesService } from './../../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authors } from '../../interfaces/course.interface';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  public courseId!: string;
  public isAddMode!: boolean;
  public date!: string;
  public description!: string;
  public title!: string;
  public length!: number;
  public authors!: Authors;
  public topRated!: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
    ) { }

  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.params.id;
    this.isAddMode = !this.courseId;
  }

  public onSave(): void {
    this.coursesService.createCourse({name: this.title, date: this.date, length: this.length,
      description: this.description, authors: this.authors, topRated: this.topRated})
      .subscribe(course => {
        if (course) {
          this.router.navigate(['/']);
        }
      });
  }

  public onCancel(): void {}

  public getDate(date: string): void {
    this.date = date;
  }

  public getDuration(duration: number): void {
    this.length = duration;
  }

}
