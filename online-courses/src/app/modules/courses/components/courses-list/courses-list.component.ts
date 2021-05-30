import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Course } from '../../interfaces/course.interface';
import { CoursesService } from '../../services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/modules/shared/modules/confirmation-modal/components';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit, OnDestroy {
  @Input()
  public coursesList!: Course[];
  private sub: Subscription;

  constructor(private coursesService: CoursesService, private dialog: MatDialog) {
    this.sub = new Subscription();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public onDeleteCourse(courseId: string): void {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '500px',
      data: {
        title: 'Delete course?',
        text: `Do you realy want to delete this course?`,
        confirm: 'Yes, delete',
        cancel: 'Cancel'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.sub.add(this.coursesService.deleteCourse(courseId).subscribe(courses => this.coursesList = courses));
      }
    });
  }

  public coursesTrackBy(index: number, course: Course): Course {
    return course;
  }

}
