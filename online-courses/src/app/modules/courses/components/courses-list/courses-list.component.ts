import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../interfaces/course.interface';
import { CoursesService } from '../../services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/modules/shared/modules/confirmation-modal/components';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  public coursesList$: Observable<Course[]>;

  constructor(private coursesService: CoursesService, private dialog: MatDialog) {
    this.coursesList$ = this.coursesService.getCoursesList();
  }

  ngOnInit(): void {}

  public onDeleteCourse(courseId: string): void {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '500px',
      data: {
        title: `Do you realy want to delete this course?`,
        confirm: 'Delete',
        cancel: 'Cancel'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.coursesList$ = this.coursesService.deleteCourse(courseId);
      }
    });
  }

}
