import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import * as components from './components';
import * as shared from '../shared/modules';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HighlightNewestDirective } from './directives/highlight-newest.directive';
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const SHARED = [shared.BreadcrumbsModule, shared.SearchModule, shared.ConfirmationModalModule];

@NgModule({
  declarations: [
    components.CoursesComponent,
    components.CoursesListComponent,
    components.AddCourseComponent,
    components.CourseItemComponent,
    HighlightNewestDirective,
    IfAuthenticatedDirective,
  ],
  imports: [
    ...SHARED,
    CommonModule,
    FormsModule,
    CoursesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
  ]
})
export class CoursesModule { }
