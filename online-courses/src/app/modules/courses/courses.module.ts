import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import * as components from './components';
import * as shared from '../shared/modules';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HighlightNewestDirective } from './directives/highlight-newest.directive';

const SHARED = [shared.BreadcrumbsModule, shared.SearchModule, shared.ConfirmationModalModule];

@NgModule({
  declarations: [
    components.CoursesComponent,
    components.CoursesListComponent,
    components.AddCourseComponent,
    components.CourseItemComponent,
    HighlightNewestDirective,
  ],
  imports: [
    ...SHARED,
    CommonModule,
    CoursesRoutingModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class CoursesModule { }
