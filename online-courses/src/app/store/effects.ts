import { Course } from './../modules/courses/interfaces/course.interface';
import { CoursesService } from './../modules/courses/services/courses.service';
import { AuthService } from './../modules/core/services/auth-service.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as CoursesActions from './actions';
import { of } from 'rxjs';

@Injectable()
export class StoreEffects {
  getCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.getCourses),
      switchMap(() =>
        this.coursesService.getCoursesList()
        .pipe(
          map((courses: Course[]) => CoursesActions.getCoursesSuccess({ courses })),
          catchError((error) => of(CoursesActions.getCoursesError(error)))
        )
      )
    )
  );

constructor(
  private actions$: Actions,
  private authService: AuthService,
  private coursesService: CoursesService
) {}

}
